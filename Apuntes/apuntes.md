### Apuntes Esenciales de JavaScript (Nivel Junior)

Estos apuntes cubren las características fundamentales del lenguaje y las herramientas básicas (variables, control de flujo, estructuras de datos, OOP y manipulación del DOM) necesarias para considerarse un *Junior JavaScript Developer*.

### I. Fundamentos y Características Clave del Lenguaje

Conocer la identidad de JavaScript es crucial, ya que define cómo debe estructurarse el código:

1.  **Paradigma y Estructura:**
    *   JavaScript es un lenguaje **interpretado** (no compilado). El código se traduce y ejecuta en tiempo real por el intérprete del navegador, línea por línea.
    *   Es **Orientado a Objetos (POO)**, abarcando conceptos como clases, herencia y polimorfismo.
    *   Es un lenguaje **basado en prototipos**; los objetos se crean a partir de otros objetos predefinidos, en lugar de instanciar clases (aunque las clases se usan como plantillas o "recetas").
2.  **Tipado y Dinamismo:**
    *   Es de **tipado débil**, lo que permite que el valor (tipo de dato) de una variable cambie a lo largo del tiempo (ejemplo: puede ser primero un número y luego un texto).
    *   Es **dinámico**, ya que la variable se adapta al tipo de dato que se le asigna, sin necesidad de declarar el tipo previamente (como en Java).
3.  **Sintaxis Esencial:**
    *   Se recomienda utilizar la convención **Camel Case** para nombrar variables y funciones (la primera palabra en minúscula, y cada palabra subsiguiente comienza con mayúscula, ej: `palabraUno`).
    *   Se debe usar la sintaxis moderna de **ECMAScript 6 (ES6)** en adelante, ya que el código de versiones anteriores queda obsoleto y consume más recursos.

### II. Variables, Tipos de Datos y Alcance (Scope)

El manejo de variables es la base para guardar información en la memoria del programa.

1.  **Declaración Moderna (ES6+):** Las variables se declaran con `let` o `const` (se debe **olvidar `var`**).
    *   **`let`:** Permite declarar, inicializar y modificar la variable. Su alcance (scope) es regional/de bloque.
    *   **`const` (Constante):** Se utiliza para variables cuyo valor **no debe cambiar** (ej: PI). Debe declararse e inicializarse en la misma línea, y **no se puede modificar** ni re-inicializar.
    *   **Scope (Alcance):** El alcance de `let` y `const` está limitado al bloque de código donde se ejecutan. Una variable declarada dentro de un bloque (`if`, `for`, función) no existe fuera de él.
2.  **Tipos de Datos Primitivos Esenciales:**
    *   `String` (Cadenas de texto): Se pueden escribir con comillas simples, dobles o *backticks* (acentos graves ``).
    *   `Number` (Números).
    *   `Boolean` (Valores lógicos: `true` o `false`).
3.  **Casos Especiales:**
    *   **`undefined`:** Indica que una variable fue declarada, pero aún no tiene un valor asignado (o cuando se accede a un índice de array que no existe).
    *   **`null`:** Indica que la variable está vacía, pero **intencionalmente** (se le asignó `null` como valor).
    *   **`NaN` (Not a Number):** Se obtiene cuando se intenta realizar una operación aritmética con datos que no son números y la operación falla (ej: multiplicar un número por un texto).

### III. Control de Flujo, Operadores y Funciones

1.  **Operadores de Comparación (Críticos):**
    *   **Doble Igual (`==`):** Compara si los valores son iguales, **sin importar el tipo de dato** (Loose equality).
    *   **Triple Igual (`===`):** Compara si los valores son **estrictamente iguales** (mismo valor Y mismo tipo de dato).
    *   **Importante:** Siempre usar la **comparación estricta (`===`)** para evitar conversiones de tipo inesperadas.
2.  **Operadores Lógicos:**
    *   **AND Lógico (`&&`):** Devuelve `true` solo si **todas** las condiciones son verdaderas.
    *   **OR Lógico (`||`):** Devuelve `true` si **al menos una** condición es verdadera.
    *   **NOT Lógico (`!`):** Regresa lo contrario del valor booleano (si es `true`, lo convierte en `false`).
3.  **Condicionales (`if`, `else if`, `else`):** Permiten ejecutar un bloque de código **solo si una condición se cumple**.
    *   El bloque `if` es el primero.
    *   Pueden seguir múltiples bloques `else if`.
    *   El bloque `else` se ejecuta si **ninguna** de las condiciones anteriores se cumple.
4.  **Funciones (Reutilización de Código):**
    *   Las funciones son porciones de código que se asocian a un nombre, lo que permite **reutilizarlas** al simplemente llamar ese nombre, ahorrando líneas y optimizando el programa.
    *   **Parámetros:** Son variables locales que se definen en la función, cuyos valores se reciben al momento de la llamada.
    *   **`return`:** Define el valor que la función devolverá. Es crucial, ya que al ejecutarse, **la función finaliza inmediatamente**, e indica qué valor debe tomar la variable que la llamó.
    *   **Concatenación con *Backticks*:** Se recomienda el uso de *backticks* (Template Strings) para concatenar variables dentro de cadenas de texto (ej: `` `Hola ${nombre}` ``), ya que simplifica la sintaxis y evita errores.

### IV. Estructuras de Datos (Arrays y Métodos Esenciales)

1.  **Arrays (Arreglos):** Son contenedores que permiten guardar muchos datos, incluso de distintos tipos.
    *   **Indexación:** Los elementos se acceden por su **posición o índice**, la cual **siempre comienza en 0**.
    *   **Arrays Asociativos/Objetos:** Permiten acceder a los datos usando un identificador de texto (clave/valor) en lugar de un índice numérico (ej: `pc.ram`).
2.  **Bucles (Loops):** Permiten repetir un bloque de código mientras se cumpla una condición.
    *   **`while`:** Pregunta la condición y luego ejecuta. Se repite hasta que la condición es falsa.
    *   **`do/while`:** Ejecuta el código **al menos una vez** y luego pregunta la condición.
    *   **`for`:** Bucle determinado que permite definir la variable, la condición y el incremento/decremento en una sola línea, limitando el alcance de la variable al bucle.
    *   **`break`:** Finaliza la ejecución de un bucle inmediatamente.
    *   **`continue`:** Salta la iteración actual y pasa a la siguiente.
3.  **Métodos Transformadores de Array (Modifican el original):**
    *   **`pop()`:** Elimina el **último** elemento y lo devuelve.
    *   **`shift()`:** Elimina el **primer** elemento y lo devuelve.
    *   **`push(elemento)`:** Agrega uno o más elementos al **final** del array.
    *   **`unshift(elemento)`:** Agrega uno o más elementos al **inicio** del array.
4.  **Métodos de Repetición (Iteración con funciones):**
    *   **`filter()`:** Itera sobre el array y devuelve un **nuevo array** que contiene solo los elementos que cumplen con una condición definida en la función interna.
    *   **`forEach()`:** Itera sobre todos los elementos para ejecutar una acción.

### V. Programación Orientada a Objetos (OOP)

La POO permite crear soluciones de forma más organizada y optimizada.

1.  **Clases y Objetos:**
    *   **Clase:** Plantilla o "receta" (ej: `Class Animal`). Se recomienda definirlas con `const`.
    *   **Constructor:** El método que se ejecuta al crear una nueva instancia (objeto). Aquí se definen las propiedades iniciales.
    *   **Propiedades (Atributos):** Características del objeto (ej: `color`, `edad`). Dentro de la clase, se refieren al objeto actual con la palabra reservada **`this`** (ej: `this.color = color`).
    *   **Métodos:** Funcionalidades que el objeto puede realizar (ej: `ladrar()`). Un método es una función que existe dentro de una clase.
    *   **Instanciación:** Crear un objeto a partir de la clase usando la palabra clave **`new`** (ej: `const perro = new Animal(...)`).
2.  **Herencia (Extends):** Permite que una clase hija herede todas las propiedades y métodos de una clase padre, permitiendo además agregar características específicas.
    *   Se utiliza la palabra clave `extends` (ej: `Class Perro extends Animal`).
    *   Dentro del constructor de la clase hija, se debe llamar a **`super()`** para heredar los atributos del constructor padre.

### VI. Interacción con el Document Object Model (DOM)

El DOM es la interfaz que representa la estructura del documento HTML, permitiendo que JavaScript lo manipule.

1.  **Selección de Elementos (Document Methods):** Se utilizan para obtener referencias a los nodos (etiquetas) HTML.
    *   `document.getElementById(id)`: Devuelve **un solo elemento** que coincida con el ID.
    *   `document.getElementsByTagName(tag)`: Devuelve una **colección HTML** (lista) de elementos que coinciden con la etiqueta.
    *   `document.querySelector(selector)`: Devuelve **el primer elemento** que coincida con el selector de CSS (usa `#` para ID y `.` para clases).
    *   `document.querySelectorAll(selector)`: Devuelve una lista de nodos (`NodeList`) de **todos los elementos** que coincidan con el selector de CSS.
2.  **Manipulación de Contenido y Atributos:**
    *   **`elemento.textContent`:** Permite obtener o modificar el contenido de texto de un elemento, **sin incluir el código HTML** interno, independientemente de si el elemento es visible o no.
    *   **`elemento.innerHTML`:** Permite obtener o modificar el contenido de un elemento, **incluyendo el código HTML**.
    *   **`elemento.outerHTML`:** Devuelve el código HTML completo, **incluyendo la propia etiqueta del elemento**.
    *   **`elemento.setAttribute(atributo, valor)`:** Permite modificar o crear el valor de un atributo HTML.
3.  **Creación de Elementos:**
    *   `document.createElement(etiqueta)`: Crea un nuevo nodo de tipo Element.
    *   `document.createTextNode(texto)`: Crea un nuevo nodo de tipo Text.
    *   **`elementoPadre.appendChild(elementoHijo)`:** Inserta un nodo hijo al final del elemento padre.
    *   **`document.createDocumentFragment()`:** Crea un contenedor temporal. Se utiliza para agregar múltiples elementos a este fragmento *antes* de insertarlos al DOM. Esto **reduce el consumo de recursos** porque el DOM solo se pinta una vez, en lugar de repintarse con cada elemento agregado.
  


Estos apuntes están diseñados bajo el **principio 80/20**, cubriendo el **20% de los conceptos del Nivel Intermedio (Mid Level)** que son esenciales para dominar el **80% de la programación moderna** con JavaScript, enfocándose en la jerarquía del entorno, la asincronía y la interacción avanzada con el navegador y servidores.

---

### I. Jerarquía del Entorno Global y `Window`

El objeto `window` (ventana) es fundamental, ya que se encuentra en la **más alta jerarquía** de JavaScript y todos los demás elementos dependen de él.

1.  **Jerarquía y Dependencia:**
    *   `window` **contiene todo** para manipular la ventana del navegador.
    *   El objeto `document` (que hace referencia al DOM) **depende** de `window`.
2.  **Funciones y Métodos Esenciales:**
    *   **Control de Ventanas:** `window.open()` (abrir una nueva ventana/pestaña), `window.close()` (cerrar la ventana abierta/referenciada), y la propiedad `closed` (verifica si la ventana está cerrada, devuelve `true`/`false`).
    *   **Comunicaciones y UX:**
        *   `alert()` / `window.alert()`: Muestra un cuadro de mensaje.
        *   `prompt()`: Solicita un dato del usuario (siempre devuelve un `String`).
        *   **`confirm()`:** Muestra un diálogo que devuelve **`true`** (si el usuario acepta) o **`false`** (si cancela), útil para validar acciones.
    *   **Propiedades Críticas (`location`):** El objeto `location` proporciona datos sobre la URL actual.
        *   **`href`:** Devuelve la URL completa de la página actual.
        *   **`protocol`:** Devuelve el protocolo usado (ej: `https`).
        *   **`hostname`:** Devuelve el dominio (ej: `youtube.com`).
        *   **`pathname`:** Devuelve lo que viene después del dominio (la ruta).
        *   `assign()`: Carga un nuevo documento (similar a modificar el `href`).
    *   **Propiedades de Pantalla/Vista (`screen` y `scroll`):** Permiten obtener información sobre la resolución y el desplazamiento.
        *   `screen.availHeight` / `availWidth`: Altura/ancho disponible de la pantalla.
        *   `window.scrollX` / `window.scrollY`: Devuelven el número de píxeles que el documento se desplaza horizontal o verticalmente.
        *   **`window.scroll()` / `window.scrollto()`:** Permiten desplazar el *viewport* de forma absoluta a una posición específica.

### II. Eventos y Flujo de Eventos

Los eventos son cualquier cambio o acción que ocurre en la página. Para que sean útiles, deben estar asociados a un código.

1.  **Event Listeners (Manejo Moderno):**
    *   La forma recomendada es **`addEventListener`**. **No se recomienda** usar *event handlers* como `onclick` definidos como atributos HTML o como propiedades de objetos en versiones antiguas de JS, debido a problemas y dificultades para encontrar errores.
    *   **Sintaxis:** `elemento.addEventListener('evento', funcion)`.
    *   **`removeEventListener`:** Para eliminar una escucha, se requiere la referencia de la función (debe ser una función con nombre, no una función anónima).
2.  **El Objeto Evento (`e`):**
    *   El objeto `Event` se pasa como el único parámetro a la función de escucha.
    *   **`e.target`:** Propiedad crucial que devuelve el elemento **específico** que desencadenó el evento.
    *   **`e.preventDefault()`:** Evita el comportamiento por defecto de un elemento (ej: previene que un formulario se envíe y recargue la página).
3.  **Flujo de Eventos (Event Flow):**
    *   **Bubbling (Burbuja):** Es el comportamiento por defecto. El evento se ejecuta desde el elemento **más específico** (el hijo) hacia el **menos específico** (el padre, el `document`, el `window`).
    *   **Capturing (Captura):** Ejecuta el evento desde el elemento **menos específico** hacia el **más específico**. Se activa pasando `true` como tercer parámetro en `addEventListener`.
    *   **`e.stopPropagation()`:** Detiene la propagación del evento, evitando que se ejecute en los elementos superiores (bubbling) o inferiores (capturing).
4.  **Tipos de Eventos Clave:**
    *   **Mouse:** `click`, `dblclick` (doble clic rápido, menos de 500ms por defecto en Windows), `mouseover`, `mouseout`, `mousedown` (solo presionar), `mouseup` (solo soltar).
    *   **Teclado:** `keydown` (tecla presionada), `keyup` (tecla soltada). El orden de ejecución es: `keydown`, `keypress` (si aplica), `keyup`.
    *   **Interfaz:** `load` (cuando un objeto o sitio se ha cargado), `scroll` (desplazamiento), `resize` (cambio de tamaño de ventana), `select` (cuando se selecciona texto en un `<input>` o `<textarea>`, útil para obtener `selectionStart` y `selectionEnd`).

### III. Asincronía: Callbacks, Promesas y Async/Await

La asincronía es fundamental para manejar operaciones que no se ejecutan instantáneamente (como peticiones a servidores).

1.  **Callbacks (Contexto Histórico):**
    *   Un *callback* es una **función pasada como argumento a otra función**.
    *   **Desventaja (Callback Hell):** Su uso excesivo para manejar errores o encadenar operaciones puede resultar en código anidado, difícil de leer y mantener.
2.  **Promesas (`Promise`):**
    *   Un objeto que representa el resultado eventual de una operación asíncrona.
    *   **Estructura:** Se crea con `new Promise((resolve, reject) => { ... })`.
    *   **`resolve`:** Callback para indicar que la operación fue exitosa.
    *   **`reject`:** Callback para indicar que la operación falló (lanza un error).
    *   **Consumo:** Se utiliza **`.then(resultado)`** para manejar el éxito (lo que devuelve `resolve`) y **`.catch(error)`** para manejar el fallo (lo que devuelve `reject`), logrando un código más limpio.
3.  **Async/Await (Manejo Moderno):**
    *   Apareció en ECMAScript 7 para simplificar aún más el trabajo con promesas.
    *   **`async`:** Se coloca antes de una función para indicar que es asíncrona.
    *   **`await`:** Solo se puede usar dentro de una función `async`. **Detiene la ejecución** de esa función hasta que una promesa se resuelva, y luego **extrae directamente el valor** de la promesa, evitando el uso de `.then()`.

### IV. Peticiones HTTP y Manejo de Datos

La comunicación con servidores se realiza mediante peticiones, y el formato estándar para el intercambio de datos es JSON.

1.  **JSON (JavaScript Object Notation):**
    *   Es el formato estándar para el intercambio de datos. A diferencia de un objeto JS normal, en JSON, **las propiedades deben ir entre comillas**.
    *   **Serialización:** Convertir un objeto (JSON) en una cadena de texto (`String`): **`JSON.stringify(objeto)`**. (Necesario para enviar datos a través de la red).
    *   **Deserialización:** Convertir una cadena de texto con formato JSON en un objeto: **`JSON.parse(cadena)`**. (Necesario para usar los datos recibidos del servidor).
2.  **AJAX (Método Obsoleto/Alternativo):**
    *   Permite enviar peticiones sin recargar la página.
    *   **Objeto:** `new XMLHttpRequest()`.
    *   **Petición:** `peticion.open(method, url)` y `peticion.send(data)`.
    *   **Validación de Respuesta:** Requiere validar el estado (`readyState == 4`) y el código HTTP (`status == 200` o `201`) para confirmar que la petición fue exitosa y la data está lista.
3.  **Fetch (API Nativa y Moderna):**
    *   Reemplazo moderno de `XMLHttpRequest`, basado en **Promesas**.
    *   **Sintaxis GET:** `fetch(url)` (GET es el método por defecto).
    *   **Sintaxis POST/Configuración:** `fetch(url, { method: 'POST', body: data, headers: { 'Content-Type': 'application/json' } })`.
    *   **Obtención de Datos:** La respuesta inicial es una Promesa encapsulada. Para obtener el contenido, se requiere un segundo `.then()` y el uso de métodos de cuerpo de respuesta: **`.json()`** (deserializa automáticamente a objeto JS) o **`.text()`** (devuelve una cadena de texto).
    *   **Blob:** El método `.blob()` permite leer datos binarios (imágenes, videos, archivos). `URL.createObjectURL(blob)` crea una URL temporal para visualizar el blob.
4.  **Axios (Librería Recomendada):**
    *   Librería externa (requiere incluir un CDN) basada en **Promesas** y altamente optimizada.
    *   **Ventaja:** **Deserializa JSON automáticamente** (no requiere `.json()`).
    *   **Sintaxis GET:** `axios(url)` o `axios.get(url)`.
    *   **Sintaxis POST:** `axios.post(url, data)`.
    *   **Acceso a Data:** La respuesta se encuentra en la propiedad `.data`.

### V. Control de Flujo Avanzado y Manejo de Errores

El manejo de excepciones asegura que el programa no se detenga por errores inesperados.

1.  **Sentencias Condicionales:**
    *   **`switch`:** Se utiliza para evaluar una expresión contra múltiples casos específicos (`case`). Se utiliza **`break`** para evitar que el flujo continúe ejecutando los casos siguientes. **`default`** se ejecuta si ningún caso coincide.
2.  **Manejo de Excepciones:**
    *   **`try`:** Contiene el código que potencialmente podría fallar.
    *   **`catch (e)`:** Bloque que se ejecuta **solo si ocurre un error** (excepción) en el bloque `try`. Recibe el objeto error (`e`) como parámetro, permitiendo manejarlo.
    *   **`finally`:** Bloque que se ejecuta **siempre**, independientemente de si el bloque `try` fue exitoso o si el bloque `catch` se ejecutó. El bloque `try` debe ir acompañado obligatoriamente de `catch` o `finally`.
    *   **`throw`:** Sentencia utilizada para **lanzar explícitamente** una excepción o error, que luego puede ser capturado por un bloque `catch`.
3.  **Importancia de `try...catch` con Asincronía:**
    *   Al usar `await` dentro de una función `async`, los errores lanzados por promesas (como un `reject`) ya no pueden ser capturados por `.catch()`, sino que deben ser manejados mediante un bloque **`try...catch`**.

### VI. Herramientas de Desarrollo Esenciales (Chrome DevTools)

Las herramientas de desarrollador son fundamentales para la depuración y optimización.

1.  **Pestaña Elements:** Permite ver y editar la estructura HTML/CSS en tiempo real.
    *   **Inspección:** Permite seleccionar un elemento para verlo directamente en el código.
    *   **Edición y Copia:** Se pueden modificar o eliminar elementos (Ctrl+Z para deshacer). Métodos de copiado esenciales: *Copy Outer HTML*, *Copy Selector*, *Copy JS Path*.
    *   **Forzar Estados:** Permite simular estados CSS como `:hover`, `:active`, o `:focus` sin interactuar con el mouse.
2.  **Pestaña Sources (Fuentes):**
    *   Muestra los archivos cargados (HTML, CSS, JS) y permite **modificarlos directamente** (Control+S para guardar el cambio en el servidor local).
    *   **Snippets (Fragmentos):** Permite guardar y ejecutar bloques largos de código JavaScript en el navegador con Control+Enter, evitando tener que reescribirlos en la consola repetidamente.
3.  **Pestaña Network (Red):**
    *   Muestra todas las peticiones HTTP realizadas durante la carga de la página.
    *   **Análisis:** Muestra el nombre del archivo, **`status`** (código de respuesta HTTP), `type` (tipo de recurso: Script, Document, etc.), **`size`** (tamaño), e **`Waterfall`** (tiempo de carga, útil para optimización).
    *   **Debugging:** Permite bloquear solicitudes a URL/dominios específicos.
    *   **Mantenimiento:** Permite borrar **Cookies y Caché** específicos del navegador.
4.  **Pestaña Performance (Rendimiento/Timeline):**
    *   Permite grabar y analizar el consumo de recursos (CPU, memoria) de la página durante un periodo de tiempo o durante la carga inicial.
    *   Se utiliza para identificar qué procesos (scripting, rendering, painting) consumen más tiempo y para **optimizar código asíncrono**.

  Estos apuntes se centran en el **20% de la información crítica** del video que le permitirá dominar el **80% de los conceptos** de JavaScript de nivel avanzado, cubriendo la estructura interna del lenguaje, las mejores prácticas modernas y las APIs fundamentales para proyectos reales.

---

### I. Bases del Lenguaje: Prototipos y Herencia

JavaScript es un lenguaje de programación **basado en prototipos**. En lugar de crear objetos mediante la instanciación de clases (crear objetos desde cero), los objetos se crean a partir de otros objetos que sirven como modelos o prototipos.

1.  **Modelo de Herencia:**
    *   Todo en JavaScript, incluso los `String`, `Array` y `Number`, son objetos.
    *   **Todos los objetos heredan el prototipo `Object`**. El prototipo `Object` es el prototipo padre de todos, y es nulo (`null`) al final de la cadena.
    *   **Cadena de Prototipos (`Prototype Chain`):** Un prototipo hereda propiedades (valores y métodos) de su prototipo padre, creando una cadena de herencia. Por ejemplo, un `Array` hereda del prototipo `Array`, y este, a su vez, hereda del prototipo `Object`.
    *   Los métodos comunes de los tipos de datos (como `reverse()` para arrays o métodos de cadenas) **están alojados en su prototipo** y son heredados por las instancias.

2.  **Acceso a Prototipos:**
    *   **`__proto__` (o `dúnder proto`):** Se utiliza para acceder al **prototipo que se ha heredado**.
    *   **`.prototype`:** Se utiliza para acceder al **prototipo que creamos nosotros**, típicamente cuando se define una función constructora o una clase.

### II. Estructura de Código y Ámbito

1.  **Modo Estricto (`use strict`):**
    *   Es una **buena práctica** usar el modo estricto en todas las nuevas aplicaciones.
    *   Su función principal es **eliminar errores silenciosos de JavaScript** y convertirlos en excepciones (errores que detienen la ejecución).
    *   **Reglas fundamentales del Strict Mode:**
        *   Obliga a declarar variables (usando `const`, `let`, o `var`), evitando que se asigne un valor a una variable no declarada, lo que por defecto sería `var` en modo normal.
        *   Evita sintaxis consideradas "malas prácticas" usadas en versiones anteriores a ECMAScript 6.
        *   Impide la duplicación de nombres de parámetros en funciones.
        *   **Restringe el uso de `this`** para que no haga referencia al objeto global (`window`) si no está definido en un contexto.

2.  **Funciones Flecha (`Arrow Functions`) y `this`:**
    *   Las funciones flecha son **compactas** y retornan una expresión directamente si solo tienen una línea (sin necesidad de `return` explícito).
    *   Si solo hay un parámetro, los paréntesis son opcionales.
    *   **Contexto `this` (Regla crítica):** A diferencia de las funciones tradicionales, **las funciones flecha no tienen su propio contexto `this`**. El `this` dentro de una función flecha se refiere al objeto que está llamando a esa función, que a menudo es el objeto global (`window`) si no se ejecuta dentro de un contexto específico.
    *   Por esta razón, **no son adecuadas para ser usadas como métodos de objetos** ni pueden ser usadas como constructores.

### III. Herramientas Funcionales Esenciales

1.  **Parámetro Rest (`...arg`):**
    *   Es la forma moderna de trabajar con un número **indefinido o ilimitado de argumentos** dentro de una función.
    *   Funciona de manera similar al antiguo objeto `arguments`, pero el parámetro Rest **siempre es un `Array`**.
    *   El parámetro Rest **debe ser el último parámetro** en la definición de la función.

2.  **Operador Spread (`...`):**
    *   Una expresión que convierte un elemento iterable (como un array) en valores individuales separados.
    *   **Usos comunes:** Concatenar arrays de manera eficiente, evitando que un array se anide dentro de otro. Se utiliza poniendo tres puntos (`...`) antes del array.
    *   También se puede utilizar para pasar arrays como **argumentos individuales** a funciones (Argumento Rest).

3.  **Cláusulas o Cierres (`Closures`):**
    *   Son funciones que **retornan otras funciones**.
    *   Permiten encapsular lógica y almacenar el estado de variables en el contexto superior (ámbito léxico) incluso después de que la función exterior ha terminado de ejecutarse.

### IV. APIs Web Críticas para Proyectos Reales

Las APIs son interfaces de programación de aplicaciones que reciben datos, los procesan y dan un resultado, siendo las más comunes las APIs internas del lenguaje (como `document` o `prompt`).

1.  **Almacenamiento Local (Local Storage vs. Session Storage):**
    *   Ambos son APIs que permiten almacenar información en el navegador del usuario.
    *   **Local Storage:** Almacena datos en el almacenamiento local de forma persistente. La información **permanece** si se cierra y se vuelve a abrir la pestaña o el navegador.
    *   **Session Storage:** Almacena datos solo durante la sesión actual. La información **se pierde** si se cierra la pestaña o el navegador.
    *   **Límites:** El Local y Session Storage tienen un límite de **5 MB**, mientras que las Cookies tienen un límite mucho menor, de 4 KB.
    *   **Métodos esenciales:** `setItem` (definir), `getItem` (obtener), `removeItem` (eliminar un ítem), `clear` (limpiar todo el almacenamiento).

2.  **Base de Datos IndexDB:**
    *   Es una **base de datos asíncrona no relacional (NoSQL)** orientada a objetos que almacena información en el navegador del usuario.
    *   Trabaja con la estructura clave-valor (`key-value`), similar a un array asociativo.
    *   **CRUD (Create, Read, Update, Delete):** Requiere la apertura de una **transacción**. El modo de transacción debe ser `readwrite` (leer y escribir) para modificar/eliminar/agregar datos, o `readonly` (solo lectura) para leerlos.
    *   Se utilizan "almacenes de objetos" (`object stores`) en lugar de tablas.

3.  **Optimización y Rendimiento (Web Workers y Cache):**
    *   **Web Workers:** Permiten ejecutar **procesos que consumen mucho tiempo paralelamente** al hilo principal de la página (el Event Loop).
    *   **Dedicated Worker:** El tipo más simple, es un archivo JavaScript que se ejecuta en segundo plano.
    *   **Comunicación:** Utilizan **`postMessage`** para enviar y recibir datos entre el script principal y el worker, ya que el worker no tiene acceso directo al objeto global `window`. Una vez finalizado el proceso, se usa **`worker.terminate()`** para cerrarlo.
    *   **Cache API:** Funciona como una **memoria a corto plazo** para almacenar recursos (HTML, CSS, JS, imágenes) ya solicitados, evitando solicitar los mismos archivos estáticos repetidamente al servidor. Esto mejora la velocidad de carga.

4.  **Experiencia de Usuario (Intersection Observer):**
    *   API utilizada para **observar si un elemento es visible o no dentro del *viewport*** (área visible del navegador).
    *   Es fundamental para implementar el **Lazy Load** (carga diferida), donde el contenido (como publicaciones, imágenes o videos) se carga solo a medida que el usuario se desplaza hacia abajo y el elemento entra en la vista.
    *   Se utiliza creando una instancia de `IntersectionObserver` y se pasa un *callback* para definir la acción a ejecutar cuando el elemento es interceptado (es decir, visible).