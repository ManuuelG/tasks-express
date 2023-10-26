## RETO EXPRESS

# Iteración 0

Como calentamiento, utiliza el ejemplo de clase para servir el mismo site del ejercicio de ayer usando `express` en lugar de el modulo `http`

Crea un proyecto de node un repo especifico para esta iteración

# Iteración 1

1. FORKEA Y CLONA EL REPOSITORIO DEL RETO DEL DÍA

El Repositorio tiene un package.json con dependencias incluidas. Es buena práctica configurar `.gitignore` para que los archivos fuentes de las dependencias no se suban a github.

.gitignore

```
node_modules
```

Cuando clonamos un repositorio con un package.json podemos instalar en local las dependencias incluidas en él con el comando `npm install`. Esto descargará en nuestra carpeta todos los fuentes de las dependencias. (`node_modules`)

```bash
npm install
```

2. Se han incluido en un archivo json `tasks-thunder-api-client.json` los test para probar con thunder todos los endpoint. Investiga como importar la colección en thunder

Prueba la ruta definida para el health check (/ping) desde la colección importada de thunder

GET /ping

Si todo ha ido bien devolverá el siguiente json `{message: pong} con un status code 200`

## Iteración 2

La base de código contiene un las definiciones de ruta para los siguientes endpoint

GET /tasks
GET /tasks/:taskId
POST /tasks
PUT /tasks/:taskId
DELETE /tasks/:taskId

1.  Implementa los callbacks que disparan cada ruta para que cumpla con la funcionalidad esperada:

GET /tasks -> Listar tasks
GET /tasks/:taskId -> Listar task por id
POST /tasks -> Registrar task
PUT /tasks/:taskId -> Actualizar body de un task
DELETE /tasks/:taskId -> Eliminar task

**NOTA1** : Los cambios persistirán en la RAM durante la ejecución del servidor. La base de datos será la constante db inicializada al principio del fichero.

Cuando el servidor se apague y vuelva a levantarse los datos se reiniciarán.

```javascript
const db = { tasks: [] }
```

**NOTA2**:
NO CONFUNDIR LOS CAMBIOS EN LA DB CON LA RESPUESTA DEL REQUEST
Por ejemplo: El delete debe borrar un recurso y devolver al cliente el objeto con toda la data que tenía el objeto borrado.\*\*

**RESPUESTAS:** Además de manipular la 'database' el servidor debe enviar una respuesta a cada request:

1. LISTAR TASKS:
   **REQUEST**: GET /tasks
   **RESPONSE**: JSON CON ARRAY DE TASKS (statusCode: 200)

```javascript
;[
  {
    id: 151323,
    body: 'Comprar platanos',
  },
  {
    id: 2341151,
    body: 'Comprar Fresas',
  },
]
```

2.  **REQUEST**: GET /tasks/151323  
    **RESPONSE**: statuscode: 200
    OBJETO CON EL TASK SOLICITADO POR req.params

```javascript
{
	id: 151323,
	body: "Comprar platanos"
}
```

3.  **REQUEST**: POST /tasks
    **RESPONSE**: statuscode: 201
    OBJETO CON EL NUEVO TASK CREADO (EL ID SE DEBE GENERAR EN EL SERVIDOR CON LA FECHA ACTUAL)

```javascript
{
	id: 2341151,
	body: "Comprar Fresas"
}
```

4.  **REQUEST:** PUT /tasks/:taskId
    **RESPONSE**: statuscode: 200
    OBJETO CON EL NUEVO TASK ACTUALIZADO

```javascript
{
	id: 2341151,
	body: "Comprar Fresas updated"
}
```

5.  **REQUEST:** DELETE /tasks/:taskId
    **RESPONSE**:statuscode: 200
    OBJETO CON EL TASK ELIMINADO

```javascript
{
	id: 2341151,
	body: "Comprar Fresas"
}
```
