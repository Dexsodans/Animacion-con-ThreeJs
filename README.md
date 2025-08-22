# Animacion-con-ThreeJs
Laboratorio de clases
Primeramente inicio el HTML.5 en el index.html, le pongo el titulo de Animacion 3D con three js y en el body abro dos scripts, uno para el cdn del three.js
el otro lo utilizo para abrir el main.js donde esta todo el codigo javascript del three (a este archivo lo nombre main.js por hacerla a la rapida)

En el archivo main.js me guie del video que esta en el moodle y donde crean un cubo, use esto como base

Primeramente creamos el objeto scene de la clase Scene, lo mismo para camera con la clase PerspectiveCamera
estos dos nos sirven para crear el "lienzo" en el navegador, ya que le estoy poniendo los atributos window.innerWidth y el inner.Height y estos valores con 0.01 y 1000 para limitar
los espacios de las figuras.
Posteriormente se crea el objeto de renderer que netamente sirve para usar en el entorno Web y darle el tamanio necesario de la ventana y luego cargar todo eso en el domElement.

Eh creado dos figuras, una es el cubo usando el atributo de BoxGeometry y dandole un material como una malla con el MashBasicMaterial el cual se le asigna un color, se hace lo 
mismo para la dona, para que tanto como el cubo y la dona sean aniadidos a la escena despues de ser moldeadas.

Cuando creamos la escena, se determino que la camara tendria una perspectiva de toda la ventana y sus limites serian 0.1 y 1000, ahora hay q darle una posicion, al eje Z que nos permitira tener una mejor vision de las figuras creadas, yo le puse el 5 porque se ve bonito de ahi

Ahora procedo a crear una funcion recursiva justamente para la animacion, donde la rotacion en los ejes x/y del cubo seran el mismo valor mas 0.01 lo que hara que se mueva en ese
mismo punto del espacio y para la dona solamente lo iniciamos en el centro con la posicion x = 0 y la rotacion de este eje. Todo esto tiene que ser renderizado con la camara y la escena

Finalmente solo llamamos a la funcion de animacion para que se ejecute infinitamente
