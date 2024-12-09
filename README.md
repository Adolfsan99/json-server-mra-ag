Mi lista de recomendaciones (actualizado) Proyecto AluraGeek

Para ejecutar la base de datos (JSON Server) ejecuta

npm start

Al interactuar con la pagina web, se puede ver que la base de datos (db.json) se actualiza en tiempo real

Es decir, estamos editando y modificando este archivo JSON que se encuentra en la raiz del proyecto, y la pagina web se actualiza dinamicamente

¿Porque es util usar JSON Server?

Porque crear las funcionalidades de la base de datos (CRUD) es muy sencillo y rapido, y no necesitamos preocuparnos de tener un servidor de base de datos real como MySQL o MongoDB

¿Porque usar JSON Server en lugar de localhost?

Porque al asegurarnos de trabajar con JSON Server primero, podemos asegurarnos de que nuestra aplicacion funciona correctamente antes de pasar a un servidor real esto debido a que la forma en la que funciona es similar, lo unico es que estamos usando un archivo JSON en lugar de una base de datos real

En cambio si utilizamos localhost primero, debemos convertir todas las funcionalidades del localhost para que funcionen con la base de datos real, lo que puede ser un proceso largo y complicado y no recomendado

