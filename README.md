# Mi lista de recomendaciones (actualizado) Proyecto AluraGeek

Para ejecutar la base de datos (JSON Server) ejecuta

```bash
  npm start
```

Para visualizar el proyecto, utiliza LiveServer en Visual Studio Code
```Visual Studio Code
  Clic derecho "Open with LiveServer"
```

Al interactuar con la pagina web, se puede ver que la base de datos (db.json) se actualiza en tiempo real

Es decir, estamos editando y modificando este archivo JSON que se encuentra en la raiz del proyecto, y la pagina web se actualiza dinamicamente

## ¿Porque es util usar JSON Server?

* Porque crear las funcionalidades de la base de datos (CRUD) es muy sencillo y rapido, y no necesitamos preocuparnos de tener un servidor de base de datos real como MySQL o MongoDB

## ¿Porque usar JSON Server en lugar de localhost?

* Porque al asegurarnos de trabajar con JSON Server primero, podemos asegurarnos de que nuestra aplicacion funciona correctamente antes de pasar a un servidor real esto debido a que la forma en la que funciona es similar, lo unico es que estamos usando un archivo JSON en lugar de una base de datos real

En cambio si utilizamos localhost primero, debemos convertir todas las funcionalidades del localhost para que funcionen con la base de datos real, lo que puede ser un proceso largo y complicado y no recomendado

## "Error al cargar las tarjetas de anime. Por favor, intenta más tarde."

Esto se debe a que debes descargar los archivos del proyecto y mediante la consola del Visual Studio en la raiz del proyecto (donde suele ir index.html), ejecutar el comando npm run

## Las imagenes no son visibles

Asegurate de abrir index.html usando LiveServer, y que el link de la extension de imagen, termine en .jpg o .png, si se busca cargar a un personaje esta debe ser obligatoriamente .png