Los sistemas de CI son servidores en la nube que se encargan de este proceso, siempre con la misma configuración y con una instalación limpia.

Ubuntu (Linux) es el OS que se suele utilizar para este tipo de herramientas

Usar node 16

npm config get audit - para ver si está activado. Recomendación: desactivarlo
npm config set audit false
npm config get fund - para ver si está activado. Recomendación: desactivarlo
npm config set fund false

En lugar de poner una dependencia tan grande como cypress en las dev deps, podemos usar npx para que solo lo ejecute al vuelo cuando lo necesite.

Al hacer npx, se le puede pasar opciones para que no te pida la configuración de cypress

Importante! Si el proyecto está usando jest, no usar .test o .spec para los test de cypress

cypress/integration es el directorio por defecto que utiliza cypress. Creo que en las últimas versiones es cypress/e2e
Primero tenemos que ejecutar npm run start-test para levantar el navegador que cypress utilizará para las pruebas. Y luego en otra pestaña, npm run test:e2e

No tiene sentido hacer todos los test end to end en lugar de los unitarios en Jest. Porque los test e2e son más lentos.

Para que grabe videos, poner video:true
No sé por qué, si pongo video a true me falla el test.
