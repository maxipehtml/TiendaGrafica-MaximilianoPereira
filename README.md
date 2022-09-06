
# E-Commerce with React Js
Utilizando React Js, Javascript, Html y css. <br>
Este proyecto se basa en crear una tienda digital para distintas categorias de productos. <br>
Para clonar el proyecto: <br>
0- Tener instalado GIT (https://git-scm.com/) y VS code (opcional)  <br>
1- Abrir VS code y seleccionar carpeta donde queremos ubicar el proyecto <br>
2- En la Terminal escribir: git clone https://github.com/maxipehtml/TiendaGrafica-MaximilianoPereira.git <br>
3- Ubicarse en la carpeta recien creada, escribiendo: cd TiendaGrafica-MaximilianoPereira <br>
4- Instalar dependencias escribiendo: npm install <br>
5- Una vez instalado, estamos listos para comenzar el entorno escribiendo: npm run start <br>
 <br>
El proyecto se encuentra linkeado al servicio de base de datos que provee google llamado firebase<br>
Donde gracias al Cloud Firestore podemos hace CRUD (Create, Read, Update, Delete) permitiendonos operar sobre la informacion que vayamos almacenando<br>
Podemos agregar mas categorias en el componente DataNavbar.js y mas productos en el asyncMock<br>
En caso de que el producto no este en stock desaparecerá del listado<br>
Para borrar los productos y resetear la lista, tenemos que ir a la cloud firestore y borrarlos manualmente. Luego al actualizar la tienda se nos habilitara el boton de "Añadir Productos", se actualizará y se cargarán los productos que hayamos definido en el asyncMock<br>
El componente Cart se encargará de mostrar los productos que hayamos añadido al carrito de compras, ahi podremos eliminar los productos que no queramos o confirmar nuestra compra, que nos lleva al componente Checkout<br>
El Checkout nos pide Nombre y Email para validar nuestra compra, con lo que se reservan los productos y se elimina del stock la cantidad que se hayan adquirido en el pedido.<br>
La libreria Emailjs nos ayuda a enviar al email la compra con los datos finales de la confirmacion que queramos.<br>
Aclaración en un archivo .env estan los datos de nuestra base de datos de firebase, necesitamos introducir esos datos para que funcione y traiga los productos. Se crea un archivo .env a la altura de .gitignore y package.json con los siguientes datos:<br>
REACT_APP_apiKey=""<br>
REACT_APP_authDomain=""<br>
REACT_APP_projectId=""<br>
REACT_APP_storageBucket=""<br>
REACT_APP_messagingSenderId=""<br>
REACT_APP_appId=""<br>
REACT_APP_measurementId=""<br>
<img src="https://raw.githubusercontent.com/maxipehtml/TiendaGrafica-MaximilianoPereira/master/public/img/giftienda2.gif"/>
Gracias !




