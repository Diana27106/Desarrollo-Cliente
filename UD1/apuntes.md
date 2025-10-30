# 💻✨ Apuntes de JavaScript Esenciales: Guía Completa

## 🧠 Fundamentos y Propósito

JavaScript es el **comportamiento** de la web, transformando la estructura (HTML) y el diseño (CSS) en una **aplicación interactiva y dinámica**. Sirve para responder a las acciones del usuario, modificar el contenido en tiempo real y realizar operaciones sin recargar la página.

| Concepto | Uso Común | Dónde se ve |
| :--- | :--- | :--- |
| **`console.log()`** | **Debug (Depuración)**: La herramienta principal para ver qué pasa en el código. | **Consola del Navegador** (F12) |
| **`alert()`** | Avisos urgentes o mensajes simples al usuario. | **Ventana emergente** (Pop-up) en el navegador |
| **Manipulación del DOM** | Mostrar resultados, actualizar textos, cambiar estilos. | **Directamente en la página web** |

> **Tip de Oro:** Usa `console.log()` para ti (el desarrollador) y la **Manipulación del DOM** para el usuario.

-----

## 💾 Variables y Entrada de Datos

### Variables (Almacenamiento)

Aunque no se menciona en los apuntes, la declaración de variables se hace principalmente con `let` (para valores que cambiarán) y `const` (para valores que no cambiarán, como constantes o $\pi$).

### Entrada de Datos

La función **`prompt()`** es la herramienta más rápida para **pedir un dato** al usuario, mostrando una caja de texto flotante.

```javascript
let nombre = prompt("Tu nombre:");
```

-----

## 🎀 Condicionales y Comparaciones

El código necesita tomar decisiones basadas en datos.

### Comparaciones: La Regla de Oro

  * **Igualdad Estricta (`===`):** La regla 80/20. Úsala casi siempre, ya que compara tanto el **valor** *como* el **tipo** de dato.
      * Ejemplo: `"123" === 123` es `false`.
  * **Igualdad Débil (`==`):** **Evítala.** Permite la conversión automática de tipos y puede llevar a errores inesperados.

### Estructura Condicional

  * **`if / else if / else`:** La estructura principal para manejar **múltiples caminos** basados en diferentes condiciones.
  * **Operador Ternario (`? :`):** Para asignaciones de valor **rápidas y compactas** cuando solo hay dos opciones (verdadero o falso).

<!-- end list -->

```javascript
let estado = (edad >= 18) ? "Mayor de edad" : "Menor de edad"; 
```

### Rangos y Múltiples Condiciones

  * **Operador Lógico (`&&`):** Significa "Y" (AND). Solo se cumple si **TODAS** las condiciones son verdaderas. Es la clave para definir **rangos**.

<!-- end list -->

```javascript
// Comprobar si 'valor' está entre el rango inferior y el superior (incluidos)
function estaEnRango(valor, inf, sup){
    return valor >= inf && valor <= sup; 
}
```

-----

## 🔁 Bucles (Automatización y Repetición)

Los bucles son esenciales para repetir tareas sin escribir código redundante (**Iteración**).

### Bucle `for` (Repetición Controlada)

  * **Uso Principal (80%):** Cuando sabes **cuántas veces** quieres que se repita la acción. Ideal para recorrer listas (Arrays).

<!-- end list -->

```javascript
// Ejemplo 'for': Recorre una lista de 5 elementos
for (let i = 0; i < 5; i++) {
    // Código que se repite 5 veces
}
```

### Bucle `while` (Repetición Condicional)

  * **Uso Principal (20%):** Cuando la repetición depende de que una **condición siga siendo cierta** y no sabes de antemano cuántas veces lo hará. Ideal para **validación de datos** o juegos.

<!-- end list -->

```javascript
// Ejemplo 'while': Repite hasta que el usuario acierta la respuesta
while (respuesta !== "correcto") {
    // Sigue pidiendo la respuesta
}
```

### Bucles Anidados

  * Se usa un `for` dentro de otro `for` para recorrer estructuras bidimensionales, como crear **tablas** (filas `i` x columnas `j`).

-----

## 🔢 Math y Lógica Avanzada (Módulo)

### El Módulo (`%`)

El operador **Módulo (`%`)** devuelve el *resto* de una división.

| Concepto | Código Clave | Uso Principal (80% de los casos) |
| :--- | :--- | :--- |
| **Par/Impar** | `i % 2 == 0` | Comprobar si un número es **par** (si el resto es 0). |
| **Patrones** | `(i + j) % 2` | Generar **patrones alternos** (blanco/negro, color 1/color 2) en listas o tableros (ajedrez). |
| **Divisibilidad** | `num1 % num2 === 0` | Comprobar si `num1` es perfectamente divisible por `num2`. |

-----

## 🛠️ Funciones (Reutilización Inteligente)

Una **función** es el bloque fundamental para **agrupar un conjunto de instrucciones** con un objetivo específico, cuyo valor principal es la **reutilización de código**.

| Componente | Definición | El 80% de su Uso |
| :--- | :--- | :--- |
| **Definición** (`function`) | Crea el "programa" o la "caja de tareas". | Define una acción que se llama por su nombre. |
| **Parámetros** (`(datos)`) | La "entrada" de datos a la caja. | Permite que la función sea flexible y trabaje con diferentes valores cada vez. |
| **Retorno** (`return`) | La "salida" o el resultado final. | Devuelve un valor (un número, texto, etc.) que se puede usar en el resto del programa. |

### Sintaxis

El 80% del tiempo, tus funciones recibirán **parámetros** y devolverán un **valor** (`return`).

```javascript
function sumar(dato1, dato2) {
    let resultado = dato1 + dato2;
    return resultado; // Siempre devuelve el resultado final
}

let total = sumar(5, 3); // Llamada con uso: total vale 8
```

### Funciones Flexibles: Operador Rest (`...`)

El **Operador Rest (`...`)** permite que una función acepte un número **indefinido de argumentos**, empaquetándolos en un único **array** (`...valores`).

  * **Uso:** Ideal para funciones de suma, conteo o filtrado donde el número de entradas varía.

<!-- end list -->

```javascript
function sumarTodos(...valores) {
    // 'valores' es un Array, puedes usar 'valores.length' o iterar sobre él
}
```

-----

## 📚 String (Métodos de Limpieza)

Estos métodos son cruciales para **limpiar y preparar los datos** (especialmente la entrada de usuario) antes de procesarlos.

| Método | ¿Para qué sirve? (General) | Ejemplo de Uso |
| :--- | :--- | :--- |
| **`.trim()`** | Quita los **espacios en blanco** inútiles al principio y al final de un texto. | `" Juan ".trim()` → `"Juan"` |
| **`.toLowerCase()`** | Convierte todo el texto a **minúsculas**. Vital para que las comparaciones no fallen por culpa de mayúsculas. | `"Hola".toLowerCase()` → `"hola"` |

> **Tip de Oro:** Si vas a comparar un texto del usuario, **siempre** aplícale **`.trim().toLowerCase()`** antes para evitar el 80% de los bugs de comparación.

### Template Strings (Generación Dinámica)

  * **Sintaxis:** Se usa con **comillas invertidas** (backticks) `` ` ``.
  * **Ventaja:** Permite insertar variables fácilmente dentro del texto usando la sintaxis **`${variable}`**. Esto hace que generar HTML dinámico sea mucho más limpio.

<!-- end list -->

```javascript
let ancho = 100;
// Forma moderna (Template String)
document.write(`<tr width="${ancho}">`);
```

-----

## 📦 Arrays (Manipulación de Colecciones)

El manejo de colecciones de datos se basa en tres patrones fundamentales:

### Unir y Añadir Elementos

  * **`.push()`:** El método principal para **añadir** un elemento al **final** de un array existente.
      * La forma común de combinar dos arrays es iterar sobre uno y usar `.push()` para mover sus elementos al otro.

### Mapeo (Mapping)

  * **Definición:** **Transformar** un array original en uno nuevo aplicando una función a **cada elemento**.
      * *Ejemplo:* Elevar todos los números de una lista al cuadrado.

### Reducción (Reducing)

  * **Definición:** **Combinar** todos los elementos de un array en un **único valor** (un número, un string, etc.).
      * *Ejemplo:* Sumar todos los elementos de un array.

### Filtrado y Unicidad (Algoritmo Base)

El principio de obtener valores **únicos** es: **recorrer** cada nuevo elemento y, antes de añadirlo a tu colección final, **comprobar** si ya existe (usando un bucle anidado o un método de búsqueda).

-----

## ⚙️ Métodos Auxiliares

| Función | Tipo de Dato | ¿Para qué sirve? |
| :--- | :--- | :--- |
| **`parseInt()`** | `String` a `Number` | Convierte una cadena de texto (String) que parece un número, en un **número entero** (Number). |
| **`.length`** | `String` o `Array` | Te da el **número de caracteres** de un String o el **número de elementos** de un Array. |
| **`!isNaN(valor)`** | Validación | Comprueba si un valor **NO es un número** (`NaN`). Útil para filtrar texto en funciones matemáticas flexibles. |

-----

## 📁 Organización del Código

Para una buena práctica (80% del tiempo), debes separar tu JavaScript del HTML:

1.  **Archivos:** Guarda todo el JS en un archivo externo (ej. `script.js`).
2.  **Importación:** Incluye el archivo en tu HTML con la etiqueta `<script src="script.js">`.
3.  **Ubicación:** **RECOMENDADO** poner la etiqueta `<script>` al **final del `<body>`**. Esto asegura que la página (HTML/CSS) cargue rápidamente primero, y luego se cargue el JS, evitando bloqueos.