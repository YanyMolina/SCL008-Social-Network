
![e](https://i.postimg.cc/Vk4rRJ4z/Whats-App-Image-2019-04-12-at-15-00-41.jpg)   
## ⭐️ Readme Social Network ⭐️
Para el proyecto de Red Social se creó una red  pensada en los amantes y cuidadores de los animales a la que podrán acceder directamente en sus teléfonos móviles, llamada [Pet Community](https://faog.github.io/SCL008-Social-Network/). 

## ¿Qué es Pet Community? 😺🐶🐰🐹
[Pet Community](https://faog.github.io/SCL008-Social-Network/) nace como una aplicación pensanda en la necesidad de unificar las necesidades de las personas que de alguna manera tienen preocupaciones sobre las mascotas. 

Hoy encontramos algunos sitios principalmente en Facebook donde promueven la adopción de mascotas, otros que buscan mascotas pérdidas y muchos otros sobre personas interesadas en vender sus productos para mascotas; pero aún no existe un sitio que muestre toda esta información en un sólo lugar y que sea de fácil acceso a los usuarios. Por esto se creó [Pet Community](https://faog.github.io/SCL008-Social-Network/) esperando lograr una gran comunidad de amantes de los animales, donde puedan encontrar toda la información que necesiten al alcance de un click.

Esto facilitará las adopciones, contribuyendo con el bienestar animal y evitar más animales sufriendo en las calles, la necesidad inmediata de encontrar a un veterinario cerca de el lugar donde estemos, un hotel canino, incluso accesorios para ellas. 

Los usuarios además pueden encontrar información de las veterinarias municipales en donde generalmente se hacen programas de Zoonosis comunales y los vecinos pueden acceder a los servicios a menor costo o gratuito en beneficio de la comunidad.

## Planificación 🚀

La planificacion fue realizada en trello, la cual puedes revisar [aquí](https://trello.com/b/zX6iPOCP/pet-community)

## Usuarios 👪

Lo primero y esencial es conocer al usuario. Para ello se realizó una [encuesta](https://docs.google.com/forms/d/1OpTLBJWgQkFGSWZOun8EQUjy1WaPa1qyCMfaPmHA3ro/edit) en la que se pudo identificar las siguientes respuestas:

|  ![enter image description here](https://i.postimg.cc/rm2Y1N7v/a.png)| ![enter image description here](https://i.postimg.cc/2SJt6DGj/b.png)|
|--|--|
|![enter image description here](https://i.postimg.cc/Ls1bgbQt/c.png)  |  ![enter image description here](https://i.postimg.cc/sxV68Djm/d.png)|
|![enter image description here](https://i.postimg.cc/NM8CprcL/e.png)  |

Con esto, se logró identificar 3 tipos de usuarios:

- El primero es un usuario que tiene mascotas, que quiere buscar accesorios, veterinarias y datos directamente para ellos.

- El segundo usuario son las personas que estan interesados en las adopciones ya sean para dar en adopcion a sus mascotas o encontrar una, acá tambien se encuentran los grupos animalistas que promueven adopciones.

- El tercer usuario son los medicos veterinarios, dueños de petshop, hoteles de mascotas y paseadores de animales que estan interesados en promover sus productos y servicios.

### Fase de Prototipado 📋

Una vez reconocido el usuario, comienza el proceso creativo compuesto por diferentes pasos que buscan dar con un resultado esperado por nosotras, pero principalmente pensado para el usuario. 

* Diagrama de flujo: esquema que grafica el flujo que debería tener la aplicación, considerando cambios de interfaces y filtración de información. 

![Diagrama-de-flujo](https://i.postimg.cc/J7TnyfT2/Whats-App-Image-2019-04-12-at-14-33-49.jpg)

**¿Cuál es la necesidad de nuestros usuarios?**

A partir de la encuesta realizada nacen distintas historias de usuario (**HU**)  que describen las necesidades de los usuarios, buscando cubrirlas a partir de los criterios de aceptación (**CA**) que se desarrollan en cada una de ellas.

**1) COMO** amante de las mascotas **QUIERO** crear una cuenta en la página **PARA** poder ingresar a la comunidad de manera segura.

**Criterio de aceptación**: Para realizar la historia de usuario N°1 voy a :

	- Permitir al usuario ingresar una contraseña.
	- Generar un mensaje de error, si la contraseña es menor a 6 caracteres.
	- Generar un mensaje de error, si el correo electrónico no es válido.
	- Cuando el usuario crea una cuenta, adicionalmente se le solicita su nombre y apellido.
	- Genera mensaje de error si el usuario no ingresa nombre o apellido.
	- Cuando el usuario crea la cuenta, debe recibir un correo de verificación.

**2) COMO** usuario de la página,**QUIERO** ingresar nuevamente de manera segura **PARA** ver las novedades de la comunidad.

**Criterio de aceptación**: Para realizar la historia de usuario N°2 voy a :

	- El usuario pueda ingresar con su usuario y contraseña (input secreto).
	- El usuario pueda recuperar su contraseña en caso de olvido.
	- Cuando el usuario ingrese una contraseña incorrecta, se genere un error informando la situación (Firebase)
	- El usuario puede ingresar a la aplicación con tener un correo de google.
	- Si el usuario logra conectarse satisfactoriamente, enviarlo al timeline de la aplicación.


**3) COMO** veterinario **QUIERO** que mi perfil no sea el mismo de un dueño de mascotas, **PARA**  poder diferenciar mis servicios.

**Criterio de aceptación**: Para realizar la historia de usuario N°3 voy a :

	- Luego de crear el perfil básico, los distintos tipos de usuario podrán elegir el tipo de perfil, 
	los cuales serán: Perfil de Veterinario, Perfil Dueño de Mascotas, Perfil Vendedor, Perfil Otro.	
	- Podrán responder una encuesta de acuerdo a su perfil
	- Los perfiles de veterinario y vendedor tendrán la opción de agregar información que consideren relevante.

**4) COMO** usuario de la aplicación, **QUIERO** publicar una mascota encontrada para ubicar a su dueño.

**Criterio de aceptación**: Para realizar la historia de usuario N°4 voy a :

	- El usuario puede crear un post visible para la comunidad.
	- El usuario puede agregar una etiqueta para que se pueda filtrar por mascota encontrada.
	- La publicación debe tener contenido para poder publicarla antes de enviar.
	- Luego que el usuario crea el post, este quede en las primeras publicaciones de la comunidad..


**5) COMO** vendedor **QUIERO** editar la publicación de un articulo, **PARA**  actualizar una oferta.

**Criterio de aceptación**: Para realizar la historia de usuario N°5 voy a :

	- Se debe permitir que el veterinario pueda editar un post.
	- Para permitir editar, el post debe tener contenido antes de publicarlo.
	- Que al editar el post, este quede en las primeras publicaciones..

**6) COMO** usuario que encontró una mascota perdida **QUIERO** eliminar el post **PARA**  que no sigan preguntándome por ella ya que encontré a sus dueños.

**Criterio de aceptación**: Para realizar la historia de usuario N°6 voy a :

	- Permitir al usuario eliminar un post.
	- Error de acción, preguntar si esta seguro que quiere eliminar el post
	- Que el post quede eliminado del muro del usuario y del muro de la comunidad.

**7) COMO** un usuario **QUIERO** adoptar una mascota y poder ver solo los post relacionados con adopciones **PARA**  encontrar la mascota que quiero.

**Criterio de aceptación**: Para realizar la historia de usuario N°7 voy a :

	- Elegir un filtro que permita seleccionar solo las publicaciones con el tag adopcion
	- Ordenar por fecha de publicación

**8) COMO** dueño de mascotas **QUIERO** que mis amigos sepan que me gusta un producto, **PARA**  que ellos conozcan al producto y su vendedor.

**Criterio de aceptación**: Para realizar la historia de usuario N°8 voy a :

	- El usuario puede agregar un Like a la publicación y visualizar el conteo de esta.
	- El usuario puede quitar el like a una publicación (Unlike).

## Prototipo de Baja Fidelidad

Una vez reconocido el usuario, comienza el proceso creativo de prototipado creando un boceto con las diferentes interfaces y usos que se proponen para la aplicación.

* Acá podemos revisar la página de inicio de nuestra aplicación, donde el usuario puede iniciar sesión o crear su cuenta. En la pantalla de la izquierda se ve una alerta, la cuál aparecerá si el usuario ingresará algún dato erroneo.
| ![enter image description here](https://i.postimg.cc/4xVJsBv0/login.jpg)

* En estas pantallas vemos el proceso de creación de cuenta del usuario, en el cuál se comiezan a desplegar diferentes pantallas para que el usuario ingrese sus datos personales para crear la cuenta.
![enter image description here](https://i.postimg.cc/WzdvKnbX/crea-cuenta.jpg)![enter image description here](https://i.postimg.cc/C1LYCYyy/crea-cuenta2.jpg) ![enter image description here](https://i.postimg.cc/fL2sBFZV/crear-cuenta3.jpg)
 
* Después que el usuario ingreso sus datos, puede comenzar a definir los datos de su perfil y el tipo de usuario. Además podemos ver la pantalla de su perfil, en el cuál verá sus publicaciones.
![enter image description here](https://i.postimg.cc/rp9MtsPC/crear-cuenta4.jpg)| ![enter image description here](https://i.postimg.cc/7hjky25D/perfil.jpg) 

* Acá vemos la pantalla del muro principal, donde se ven todas las publicaciones que han hecho los usuarios de PetComunnity.
![enter image description here](https://i.postimg.cc/wxrHNS0P/Post.jpg)![enter image description here](https://i.postimg.cc/7L4q60mZ/post-2.jpg)

## Prototipo de Alta Fidelidad

|  ![enter image description here](https://i.postimg.cc/43vV7vGL/1.png)| ![enter image description here](https://i.postimg.cc/1t96pg59/Selecci-n-007.png) |

Al reconocer al usuario se definió los colores, el tipo de información y su distribución a desplegarse en la app web. A partir del prototipo de baja fidelidad se realizaron algunos ajustes en cuanto a la presentación de la pantalla de inicio de sesión y el muro principal.

El prototipo fue probado con dueños de mascotas, orientando por medio de feedback respecto a las próximas mejoras a aplicar en la aplicación.

Las tareas realizadas fueron:

* Iniciar sesión en la aplicación.
* Crear una publicación con el texto "Encontré una mascota pérdida"
* Colocar me gusta a la publicación de un veterinario.
* Cerrar la sesión.

[Video 1 prototipo alta fidelidad](https://www.loom.com/share/da8a634cb76d42f9a6daf35dd8356a2b)  

[Video 2 prototipo alta fidelidad](https://www.loom.com/share/1af513c3fe77443a97cea067c8d0efd8) 

El prototipo de Alta Fidelidad fue realizado en [Figma](https://www.figma.com/proto/Y8LPqP0VJDA85Vsl8ZPXTnPj/Pet-Community?node-id=1%3A3&scaling=fit-width).

### Consideraciones en el desarrollo 🛠️

**Ejecución del interfaz de usuario HTML, CSS, JS**

* La lógica del proyecto fue implementada usando JS, HTML y CSS, usando para el diseño [Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS) 

**Implementación de la interfaz**

* Se usó [firebase](https://firebase.google.com/?gclid=Cj0KCQjw7sDlBRC9ARIsAD-pDFo4o3bi6laUeK0Hppr0Y6-QeRkx5bdtpUH2uak61pvLXOcA5KeLDSQaAkV2EALw_wcB)
como plataforma de desarrollo.
* Creación de distintas vistas, gestionadas por un archivo (router.js) que permite su visualización, dependiendo de las elecciones del usuario y sus permisos.
* Desarrollo de funciones para autentificar usuarios, al momento de ingresar por una cuenta creada o correo gmail.
* Desarrollo de funciones para que el usuario pueda realizar publicaciones, leerlas, editarlas o eliminarlas (CRUD), utilizando la base de datos [cloud firestore](https://firebase.google.com/docs/firestore/?hl=es-419).
* Implementación de validaciones; como es el caso de campos vacíos, ingreso de cantidad de caracteres mínimos, formateo de correo. Todo esto testeado en el archivo auth.spec.js.
* Manejo de estilos CSS pensado en mobile first; usando flexbox y media queries para celulares y tablets,  tanto para la orientación portrait y landscape.
* Testeos de usabilidad y code review por cada historia de usuario finalizada.
* Trabajo colaborativo mediante el uso de Git y GitHub :octocat:, realizando realeses por cada historia de usuario terminada. 
* Deploy con gh-pages de la aplicación [Pet Community](https://faog.github.io/SCL008-Social-Network/) 

**Implementación de vistas**

* *templateCreate:* vista que permite al usuario crear una cuenta en la aplicación.

* *templateEditPost*: vista que permite al usuario editar una publicación realizada por él. Esta no puede ser vacía e inferior a 10 carácteres.

* *templatePost*: vista que permite al usuario crear una publicación. Esta no puede ser vacía e inferior a 10 carácteres.

* *templateProfile*: vista que permite al usuario visualizar su perfil.

* *templateSignIn*: vista inicial, que permite al usuario iniciar sesión, con cuenta creada o correo de google.

* *templateTimeLine*: vista del muro, que permite al usuario ver todas las publicaciones realizadas en [Pet Community](https://faog.github.io/SCL008-Social-Network/). Aquí puede crear una nueva publicación, editar o eliminar una realizada.

**Implementación de funciones**💻

Se puede diferenciar dos archivos para la implementación de las principales funciones de la aplicación, siendo *auth.js* y *datamodel.js*

***auth.js***

* *createAccount(firstNameNewUser,lastNameNewUser,emailNewUser,passwordNewUser)*, para lograr crear una nueva cuenta de usuario. Los parámetros solicitados son obligatorios.

* *loginGoogle()*, para iniciar sesion en [Pet Community](https://faog.github.io/SCL008-Social-Network/) usando un correo de Google.

* *signIn(emailSignIn,passwordSignIn)*, para iniciar sesión usando la cuenta creada. Los parámetros solicitados son obligatorios.

***datamodel.js***

* *postCreate(userPost)*, necesaria para crear una nueva publicación.

* *postRead()*, necesaria para mostrar la publicación creada en el muro de la red social.

* *postDelete(id)*, para eliminar una publicación del muro. El usuario solo podrá eliminar sus publicaciones y se le solicitará confirmación antes de realizarlo.

* *postEdit(id)*, para editar una publicación del muro. El usuario solo podrá editar sus publicaciones.

**Aspectos técnicos**

* Se realizó test para comprobar el funcionamiento de la aplicación, logrando los siguientes resultados: 

    - % Statements: 100; % Branch: 100; % Functions: 100; % Lines: 100
    ![coverage](https://i.postimg.cc/j2kdGfwb/Whats-App-Image-2019-04-12-at-14-35-47.jpg)   

### Futuras mejoras ⌨️

* Implementar la funcionalidad del botón like en la aplicación.
* Implementar las historias de usuario HU3 y HU7.

**Implementar la Hacker Edition**

* Crear posts con imágenes.
* Buscar usuarios, agregar y eliminar "amigos".
* Definir la privacidad de los posts (público o solamente para amigos).
* Que el usuario pueda ver el muro de cualquier usuario "no-amigo" (solamente los posts públicos).
* Comentar o responder una publicación.
* El usuario pueda editar perfil.

### Autoras 📌

* María José Marquez
* Yaniza Molina
* Fabiola Orellana 

8° Generación de Laboratoria.

Abril, 2019.


