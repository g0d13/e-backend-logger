# Logs API

## Getting started
Create a new .env file based on the .env.example file.

Modify it adding your own MONGO_DB url, and your own secret key

Install dependencies
```
npm install
```

## RESTful api documentation

### POST /api/apps
Create a new app
- Method: `POST`
- URL: `/api/apps`
- Body
```json
{
  "name": "Any text"
}
```
- Response 201
```json
{
  "name": "App",
  "_id": "619055dcaa984e30a8f6d425",
  "created_at": "2021-11-14T00:18:36.686Z",
  "updated_at": "2021-11-14T00:18:36.686Z",
  "__v": 0
}
```

### POST /api/apps/:id/auth
Authenticate with an app, generate a new JWT token and save within Authorization collections
- Method: `GET`
- URL: `/api/apps/:id/auth`
- Params: `id` ObjectId
- Response 200
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": "7d"
}
```

### GET /api/apps
Returns all applications within the database
- Method: `GET`
- URL: `/api/apps`
- Headers: `Authorization` with the token
- Response 200
```json
[
  {
    "_id": "619055dcaa984e30a8f6d425",
    "name": "App",
    "created_at": "2021-11-14T00:18:36.686Z",
    "updated_at": "2021-11-14T00:18:36.686Z",
    "__v": 0
  }
]
```

### GET /api/logs
Get all logs
- Method: `GET`
- URL: `/api/logs`
- Headers: `Authorization`
- Response
```json
[
  {
    "_id": "619034889ba29e1e8fc76a48",
    "application_id": "6190274b5d54745d5b2cc1bf",
    "type": "error",
    "priority": "highest",
    "path": "path",
    "message": "message",
    "created_at": "2021-11-13T21:56:24.149Z",
    "updated_at": "2021-11-13T21:56:24.149Z",
    "__v": 0
  }
]
```

### POST /api/logs
Create a new log
- Method: `POST`
- URL: `/api/logs`
- Headers: `Authorization`
- Body
```json
{
  "applicationId": "6190274b5d54745d5b2cc1bf",
  "type": "info",
  "priority": "low",
  "path": "path",
  "message": "message",
  "request": {},
  "response": {}
}
```
- Response 201
```json
{
  "application_id": "6190274b5d54745d5b2cc1bf",
  "type": "info",
  "priority": "low",
  "path": "path",
  "message": "message",
  "_id": "61905700e6aa006400a17d78",
  "created_at": "2021-11-14T00:23:28.860Z",
  "updated_at": "2021-11-14T00:23:28.860Z",
  "__v": 0
}
```

### GET /api/logs/:id/app
Get all logs for a specific app
- Method: `GET`
- URL: `/api/logs/:id/app`
- Headers: `Authorization`
- Params: `id` ObjectId for existing app
- Response 200
```json
[
  {
    "_id": "61905700e6aa006400a17d78",
    "application_id": "6190274b5d54745d5b2cc1bf",
    "type": "info",
    "priority": "low",
    "path": "path",
    "message": "message",
    "created_at": "2021-11-14T00:23:28.860Z",
    "updated_at": "2021-11-14T00:23:28.860Z",
    "__v": 0
  }
]
```

### GET /api/logs/:id
Get single log using id
- Method: `GET`
- URL: `/api/logs/:id`
- Headers: `Authorization`
- Params: `id` ObjectId for existing log
- Response 200
```json
{
  "_id": "61905700e6aa006400a17d78",
  "application_id": "6190274b5d54745d5b2cc1bf",
  "type": "info",
  "priority": "low",
  "path": "path",
  "message": "message",
  "created_at": "2021-11-14T00:23:28.860Z",
  "updated_at": "2021-11-14T00:23:28.860Z",
  "__v": 0
}
```

### PUT /api/logs/:id
Update log
Get single log using id
- Method: `PUT`
- URL: `/api/logs/:id`
- Headers: `Authorization`
- Params: `id` ObjectId for existing log
- Body
```json
{
	"applicationId": "6190274b5d54745d5b2cc1bf",
	"type": "error",
	"priority": "high",
	"path": "path",
	"message": "message",
	"request": {},
	"response": {}
}
```
- Response 200
```json
{
  "_id": "61905700e6aa006400a17d78",
  "application_id": "6190274b5d54745d5b2cc1bf",
  "type": "error",
  "priority": "high",
  "path": "path",
  "message": "message",
  "created_at": "2021-11-14T00:23:28.860Z",
  "updated_at": "2021-11-14T00:25:50.071Z",
  "__v": 0
}
```
### DELETE /api/logs/:id
Delete log response
Get single log using id
- Method: `PUT`
- URL: `/api/logs/:id`
- Headers: `Authorization`
- Params: `id` ObjectId for existing log
- Response 204 No content