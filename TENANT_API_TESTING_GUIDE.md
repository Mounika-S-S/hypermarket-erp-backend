# Tenant API Testing Guide

## Summary of Fixes Applied

### 1. **Middleware Export Issues Fixed**
   - **auth.middleware.js**: Changed from `exports.authMiddleware` to proper module export
   - **role.middleware.js**: Fixed middleware chain to properly pass `next()` parameter
   - Added user validation check in role middleware

### 2. **Tenant Controller Enhanced**
   - Added CRUD operations (Create, Read, Update, Delete)
   - Improved response format with error flag and message

### 3. **Tenant Routes Updated**
   - Added GET `/api/v1/tenants` - Get all tenants
   - Added GET `/api/v1/tenants/:id` - Get tenant by ID
   - Added PUT `/api/v1/tenants/:id` - Update tenant
   - Added DELETE `/api/v1/tenants/:id` - Delete tenant

---

## Tenant API Endpoints

### Base URL
```
http://10.230.209.155:5000/api/v1/tenants
```

### Authentication
All endpoints require Bearer token in Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## API Routes

### 1. **POST Create Tenant** ✅
- **Endpoint**: `POST /api/v1/tenants`
- **Auth Required**: Yes (Admin role)
- **File**: `post_create_tenant_v2.bru`

**Request Body**:
```json
{
  "name": "Tech Mart Inc",
  "plan": "premium",
  "status": "active"
}
```

**Sample Response (201 Created)**:
```json
{
  "error": false,
  "message": "Tenant created successfully",
  "data": {
    "_id": "67c8c6a9ee6e2f001f010001",
    "name": "Tech Mart Inc",
    "plan": "premium",
    "status": "active",
    "createdAt": "2025-02-16T10:30:00.000Z",
    "updatedAt": "2025-02-16T10:30:00.000Z",
    "__v": 0
  }
}
```

---

### 2. **GET All Tenants** ✅
- **Endpoint**: `GET /api/v1/tenants`
- **Auth Required**: Yes
- **File**: `get_all_tenants.bru`

**Sample Response (200 OK)**:
```json
{
  "error": false,
  "message": "Tenants retrieved successfully",
  "data": [
    {
      "_id": "67c8c6a9ee6e2f001f010001",
      "name": "Tech Mart Inc",
      "plan": "premium",
      "status": "active",
      "createdAt": "2025-02-16T10:30:00.000Z",
      "updatedAt": "2025-02-16T10:30:00.000Z",
      "__v": 0
    },
    {
      "_id": "67c8c6a9ee6e2f001f010002",
      "name": "Retail Plus",
      "plan": "free",
      "status": "active",
      "createdAt": "2025-02-16T10:35:00.000Z",
      "updatedAt": "2025-02-16T10:35:00.000Z",
      "__v": 0
    }
  ]
}
```

---

### 3. **GET Tenant by ID** ✅
- **Endpoint**: `GET /api/v1/tenants/:id`
- **Auth Required**: Yes
- **File**: `get_tenant_by_id.bru`
- **Path Parameter**: 
  - `id` (ObjectId) - Tenant ID to retrieve

**Sample Response (200 OK)**:
```json
{
  "error": false,
  "message": "Tenant retrieved successfully",
  "data": {
    "_id": "67c8c6a9ee6e2f001f010001",
    "name": "Tech Mart Inc",
    "plan": "premium",
    "status": "active",
    "createdAt": "2025-02-16T10:30:00.000Z",
    "updatedAt": "2025-02-16T10:30:00.000Z",
    "__v": 0
  }
}
```

---

### 4. **PUT Update Tenant** ✅
- **Endpoint**: `PUT /api/v1/tenants/:id`
- **Auth Required**: Yes (Admin role)
- **File**: `put_update_tenant.bru`
- **Path Parameter**: 
  - `id` (ObjectId) - Tenant ID to update

**Request Body**:
```json
{
  "name": "Tech Mart Updated",
  "plan": "enterprise",
  "status": "inactive"
}
```

**Sample Response (200 OK)**:
```json
{
  "error": false,
  "message": "Tenant updated successfully",
  "data": {
    "_id": "67c8c6a9ee6e2f001f010001",
    "name": "Tech Mart Updated",
    "plan": "enterprise",
    "status": "inactive",
    "createdAt": "2025-02-16T10:30:00.000Z",
    "updatedAt": "2025-02-16T10:40:00.000Z",
    "__v": 0
  }
}
```

---

### 5. **DELETE Tenant** ✅
- **Endpoint**: `DELETE /api/v1/tenants/:id`
- **Auth Required**: Yes (Admin role)
- **File**: `delete_tenant.bru`
- **Path Parameter**: 
  - `id` (ObjectId) - Tenant ID to delete

**Sample Response (200 OK)**:
```json
{
  "error": false,
  "message": "Tenant deleted successfully"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": true,
  "message": "Validation error or invalid data"
}
```

### 401 Unauthorized
```json
{
  "error": true,
  "message": "Unauthorized - Missing or invalid token"
}
```

### 403 Forbidden
```json
{
  "error": true,
  "message": "Access denied - Admin role required"
}
```

### 404 Not Found
```json
{
  "error": true,
  "message": "Tenant not found"
}
```

### 500 Internal Server Error
```json
{
  "error": true,
  "message": "Internal server error"
}
```

---

## How to Use in Bruno

1. Open Bruno and load your collection
2. Import the `.bru` files created:
   - `get_all_tenants.bru`
   - `get_tenant_by_id.bru`
   - `post_create_tenant_v2.bru`
   - `put_update_tenant.bru`
   - `delete_tenant.bru`

3. Replace the Bearer token with your actual JWT token
4. For operations with `:id`, replace `tenantId` variable with actual MongoDB ObjectId
5. Click "Send" to test each endpoint

---

## Postman Import

You can also import these requests into Postman by converting the `.bru` format to Postman's format.

---

## Testing Workflow

1. **First**: Create an admin user using the auth endpoint
2. **Login**: Get the JWT token
3. **Add Token**: Copy the token to Authorization header
4. **Create Tenant**: POST request with tenant data
5. **Get Tenants**: Retrieve all tenants
6. **Get by ID**: Retrieve specific tenant
7. **Update**: Modify tenant details
8. **Delete**: Remove tenant

---

## Tenant Model Schema

```javascript
{
  name: String (required),
  plan: String (default: "free"), // Options: free, premium, enterprise
  status: String (default: "active"), // Options: active, inactive, suspended
  createdAt: Date,
  updatedAt: Date
}
```

---

## Notes

- All endpoints are authenticated via JWT Bearer token
- Admin role is required for POST, PUT, DELETE operations
- Any authenticated user can GET (retrieve) tenant data
- MongoDB ObjectId format required for `:id` parameter
- Timestamps are automatically managed by MongoDB
