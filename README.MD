Para ejecutar requiere instalar:
npm install express mongoose 

Modo de uso:

GET: Recupera todas las tareas
http://localhost:5200/queryAll
Body: no aplica

Response: 
[
    {
        "_id": "636d6fd271497f1f78ff2468",
        "title": "titulo tarea",
        "description": "es una tarea medio complicada",
        "completed": true,
        "createdAt": "2022-11-10T21:40:34.143Z",
        "updatedAt": "2022-11-10T21:40:34.143Z",
        "__v": 0
    }
]

GET: Recupera una tarea por ID
http://localhost:5200/queryBiId
body JSON:
{
    "_id": "636d6fd271497f1f78ff2468"
}

Respesta:
[
    {
        "_id": "636d6fd271497f1f78ff2468",
        "title": "titulo tarea",
        "description": "es una tarea medio complicada",
        "completed": true,
        "createdAt": "2022-11-10T21:40:34.143Z",
        "updatedAt": "2022-11-10T21:40:34.143Z",
        "__v": 0
    }
]


POST: Crea una tarea
http://localhost:5200/new

Body JSON:
{
    "title": "titulo tarea",
    "description": "es una tarea medio complicada",
    "completed": "true"
}

Response:
{
    "title": "titulo tarea",
    "description": "es una tarea medio complicada",
    "completed": true,
    "_id": "636d6fd271497f1f78ff2468",
    "createdAt": "2022-11-10T21:40:34.143Z",
    "updatedAt": "2022-11-10T21:40:34.143Z",
    "__v": 0
}

PUT: Actualiza una tarea por ID
http://localhost:5200/update
Body JSON:
{
    "_id": "636d6fd271497f1f78ff2468",
    "title": "titulo tarea",
    "description": "es una tarea basica"
}


Respuesta:
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}


DELETE: Elimina una tarea por ID
http://localhost:5200/delete
Body JSON:
{
    "_id": "636d6fd271497f1f78ff2468"
}


Respuesta:
{
    "acknowledged": true,
    "deletedCount": 1
}

