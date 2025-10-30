## 📝 Apuntes Esenciales de JavaScript con Ejemplos

### 🔗 Métodos de Cadenas (Strings)

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.length` | Obtener la **longitud**. | `let s = "Hola"; s.length;` // 4 |
| `.toUpperCase()` | Convierte a **mayúsculas**. | `"hola".toUpperCase();` // "HOLA" |
| `.toLowerCase()` | Convierte a **minúsculas**. | `"HOLA".toLowerCase();` // "hola" |
| `.trim()` | **Elimina espacios** al inicio y final. | `"  texto  ".trim();` // "texto" |
| `.includes("contenido")` | Comprueba si **contiene** (devuelve `true`/`false`). | `"mundo".includes("un");` // true |
| `.indexOf("contenido")` | **Índice** de la **primera** **incidencia**. | `"banana".indexOf("an");` // 1 |
| `.slice(pI, pF)` o `.slice(-5)` | **Extrae** una porción o los **últimos** $x$ caracteres. | `"ejemplo".slice(2, 5);` // "emp" |
| `.replace("esto", "otro")` | Reemplaza la **primera** ocurrencia. | `"a a a".replace("a", "b");` // "b a a" |
| `.replaceAll("esto", "otro")` | Reemplaza **todas** las ocurrencias. | `"a a a".replaceAll("a", "b");` // "b b b" |
| `.split("delimitador")` | **Divide** la cadena y devuelve un **Array**. | `"1-2-3".split("-");` // ["1", "2", "3"] |
| `.join("delimitador")` | **Une** un array para formar una **String**. | `["a", "b"].join("*");` // "a*b" |
| `.startsWith("texto")` | Comprueba si **empieza** por "texto". | `"casa".startsWith("ca");` // true |
| `.endsWith("texto")` | Comprueba si **termina** por "texto". | `"casa".endsWith("sa");` // true |

---

### 📚 Métodos de Arrays

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.length` | Obtener la **cantidad** de elementos. | `let a = [1, 2]; a.length;` // 2 |
| `.push()` / `.pop()` | Añade (`push`) o quita (`pop`) **al final**. | `a.push(3); a.pop();` // [1, 2, 3] / 3 |
| `.unshift()` / `.shift()` | Añade (`unshift`) o quita (`shift`) **al inicio**. | `a.unshift(0); a.shift();` // [0, 1, 2] / 0 |
| `.forEach(el => ...)` | **Recorre** el array. | `[1, 2].forEach(e => console.log(e));` // 1, 2 |
| `.map(x => ...)` | Crea un **nuevo** array con valores **transformados**. | `[1, 2].map(x => x * 2);` // [2, 4] |
| `.filter(x => ...)` | Devuelve elementos que **cumplen** una condición. | `[1, 2, 3].filter(x => x % 2 === 0);` // [2] |
| `.find(x => ...)` | Encuentra el **primer** **elemento** que cumpla. | `[1, 15, 5].find(x => x > 10);` // 15 |
| `.findIndex(x => ...)` | Encuentra el **índice** del **primer** elemento. | `[1, 15, 5].findIndex(x => x > 10);` // 1 |
| `.some(x => ...)` / `.every(x => ...)` | Comprueba si **al menos uno** (`some`) o **todos** (`every`) cumplen. | `[1, 2].some(x => x > 1);` // true |
| `.includes(valor)` | Comprueba si el array **contiene** el `valor`. | `[1, 2].includes(2);` // true |
| `.indexOf(valor)` / `.lastIndexOf(valor)` | **Índice** de la **primera** / **última** incidencia. | `[1, 2, 1].indexOf(1);` // 0 |
| `.reduce(función)` | **Reduce** el array a un **único valor** (acumulador). | `[1, 2, 3].reduce((c, e) => c + e, 0);` // 6 |
| `.sort()` | Ordena **alfabéticamente**. | `["b", "a"].sort();` // ["a", "b"] |
| `.sort((a,b) => a - b)` | Ordena **numéricamente**. | `[3, 10, 1].sort((a, b) => a - b);` // [1, 3, 10] |
| `.slice(pI, pF)` | **Copia** parte de un array. | `[1, 2, 3].slice(1, 3);` // [2, 3] |
| `.splice(pI, delete, el1, el2...)` | **Modifica** el array (añade, quita, modifica). | `a.splice(1, 1, 5);` // Quita 1 en pos 1, añade 5. |

---

### 🔢 Métodos de Math (Matemáticas)

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `Math.round()` | **Redondea** al entero **más cercano**. | `Math.round(4.6);` // 5 |
| `Math.floor()` | **Redondea** al entero **menor** (hacia abajo). | `Math.floor(4.9);` // 4 |
| `Math.ceil()` | **Redondea** al entero **mayor** (hacia arriba). | `Math.ceil(4.1);` // 5 |
| `Math.max()` | Devuelve el **valor más alto**. | `Math.max(1, 5, 2);` // 5 |
| `Math.min()` | Devuelve el **valor más bajo**. | `Math.min(1, 5, 2);` // 1 |
| `(Math.random() * lMax) + lMin` | Número **aleatorio** en un **rango**. | `Math.random() * 10;` // Entre 0 (inc) y 10 (exc) |
| `Math.pow(b, e)` | Calcula la **potencia** $b^e$. | `Math.pow(2, 3);` // 8 |
| `Math.sqrt()` | Calcula la **raíz cuadrada**. | `Math.sqrt(9);` // 3 |
| `Math.abs()` | Devuelve el **valor absoluto** (quita el signo). | `Math.abs(-5);` // 5 |

---

### 🗓️ Métodos de Date (Fechas)

| Propiedad / Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `let ahora = new Date()` | Objeto **Date** con fecha/hora **actual**. | `new Date();` // Mon Oct 06 2025... |
| `new Date(A, M, D)` | Crea una fecha específica. **¡Mes 0-11!** | `new Date(2006, 9, 27);` // Octubre 27, 2006 |
| `.getFullYear()` / `.getMonth()` | Obtiene **año** / **mes** (0-11). | `ahora.getFullYear();` // 2025 |
| `.getDate()` / `.getDay()` | Obtiene **día del mes** / **día de la semana** (0=Dom). | `ahora.getDate();` // 6 |
| `.getHours()` / `.getMinutes()` / `.getSeconds()` | Obtiene **hora**, **minutos** o **segundos**. | `ahora.getHours();` // 17 (ejemplo) |
| `.setFullYear()` / `.setMonth()` / `.setDate()` | **Establece** el año, mes o día. | `ahora.setFullYear(2026);` |
| `.getTime()` | Tiempo en **milisegundos** desde 1/1/1970. | `ahora.getTime();` // 1759755173000 (ej.) |
| `dias = diff / (1000 * 60 * 60 * 24)` | Conversión de milisegundos a **días**. | `let diff = t2 - t1; dias = diff / ...` |
| `.toLocaleDateString("es-ES")` | Formatea la **fecha** a *locale*. | `ahora.toLocaleDateString("es-ES");` // "6/10/2025" |
| `.toLocaleTimeString("es-ES")` | Formatea la **hora** a *locale*. | `ahora.toLocaleTimeString("es-ES");` // "17:12:53" |

---

### ⏱️ Métodos de Tiempo (Temporizadores)

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `setTimeout(funcion, tMsg)` | Ejecuta **una vez** después de $tMsg$ ms. | `setTimeout(() => alert('Hola'), 1000);` |
| `clearTimeout(alarma)` | **Cancela** la ejecución de `setTimeout`. | `clearTimeout(alarma);` |
| `setInterval(funcion, tMsg)` | Ejecuta **repetidamente** cada $tMsg$ ms. | `let int = setInterval(() => console.log('.'), 500);` |
| `clearInterval(intervalo)` | **Cancela** la ejecución de `setInterval`. | `clearInterval(int);` |

---

### 🖥️ Métodos y Propiedades BOM (Browser Object Model)

| Objeto / Propiedad / Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `alert()` | Muestra una ventana de **alerta**. | `alert("Mensaje.");` |
| `prompt("Introduce...")` | Pide **introducir** datos. | `let n = prompt("Tu nombre:");` |
| `confirm("¿Seguro?)` | Muestra un cuadro **Sí/No**. | `confirm("¿Quieres seguir?");` // true/false |
| `window.innerWidth`/`window.innerHeight` | **Ancho** / **Alto** de la ventana. | `console.log(window.innerWidth);` |
| `window.location.href = ""` | **Redirige** a una URL. | `window.location.href = "https://google.com";` |
| `window.history.back()` / `window.history.forward()` | **Atrás** / **Adelante** en el historial. | `window.history.back();` |
| `window.open("url", "_blank", ...)` | **Abre** una **nueva** ventana. | `window.open("url", "", "width=500");` |
| `window.close()` | **Cierra** la ventana actual. | `window.close();` |
| `navigator.userAgent` | Datos del **navegador**. | `console.log(navigator.userAgent);` |
| `navigator.language` | **Idioma** preferido. | `console.log(navigator.language);` |

---

### ⚙️ Funciones

| Tipo / Característica | Sintaxis y Clave | Ejemplo |
| :--- | :--- | :--- |
| **Declarada** | `function nombre(par) { return valor; }` | `function suma(a, b) { return a + b; } suma(1, 2);` // 3 |
| **Expresada** | `const nombre = function(par) { return valor; }` | `const mult = function(a, b) { return a * b; }; mult(2, 3);` // 6 |
| **Flecha** | `const nombre = (x, y) => a + b;` | `const resta = (a, b) => a - b; resta(5, 2);` // 3 |
| **Parámetros por defecto** | `const potencia = (base, exp = 2) => ...` | `potencia(3);` // 9 (`3^2`) |
| **Sin retorno** | `function mostrarMensaje(msg) { console.log(msg); }` | `mostrarMensaje("Hola");` // Muestra "Hola" |
| **Función que recibe otra (Callback)** | `function procesar(valor, callback) { callback(valor * 2); }` | `procesar(5, r => console.log(r));` // 10 |
| **Función que retorna otra (Clausura)** | `function multiplicador(factor) { return function(numero) { ... }; }` | `const doble = multiplicador(2); doble(5);` // 10 |
| **IIFE** (Se Ejecuta Inmediatamente) | `(function() { console.log("Hola"); })();` | **Muestra** "Hola desde la IIFE!" **al cargar** el script. |

## 📄 Apuntes Esenciales del DOM

---

### 1. Seleccionar Elementos

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `document.getElementById("id")` | Selecciona **un** elemento por su **ID**. | `document.getElementById("titulo");` // Obtiene `<h1 id="titulo">` |
| `document.querySelector("selector")` | Selecciona el **primer** elemento que coincida con el selector **CSS**. | `document.querySelector(".btn");` // El primer elemento con clase `btn` |
| `document.querySelectorAll("selector")` | Selecciona **todos** los elementos que coincidan (devuelve un **NodeList iterable**). | `document.querySelectorAll("p");` // Todos los elementos `<p>` |

---

### 2. Cambiar Contenido

| Propiedad | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.textContent` | Cambia solo el **texto plano** (ignora etiquetas HTML). | `titulo.textContent = "Nuevo título";` |
| `.innerHTML` | Cambia el **contenido HTML interno** (incluye etiquetas). | `titulo.innerHTML = "<span style='color:red'>Rojo</span>";` |

---

### 3. Modificar Atributos

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.getAttribute("attr")` | **Obtiene** el valor del atributo. | `link.getAttribute("href");` // Devuelve la URL actual |
| `.setAttribute("attr", "valor")` | **Establece** o **cambia** el valor del atributo. | `link.setAttribute("href", "https://openai.com");` |

---

### 4. Cambiar Estilos

| Propiedad / Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.style.propiedad` | Accede y modifica **estilos CSS en línea**. | `caja.style.backgroundColor = "blue";` |
| `.classList.add("clase")` | **Añade** una clase CSS. | `caja.classList.add("activa");` |
| `.classList.remove("clase")` | **Quita** una clase CSS. | `caja.classList.remove("inactiva");` |
| `.classList.toggle("clase")` | **Alterna** la clase: si está, la quita; si no, la pone. | `caja.classList.toggle("oculta");` |

---

### 5. Crear y Eliminar Elementos

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `document.createElement("tag")` | **Crea** un nuevo elemento HTML con la etiqueta especificada. | `let nuevo = document.createElement("p");` |
| `.appendChild(el)` | **Inserta** un elemento al **final** del padre. | `document.body.appendChild(nuevo);` |
| `.append(el)` | **Inserta** al **final** (puede insertar varios elementos o texto). | `caja.append(el1, el2);` |
| `.prepend(el)` | **Inserta** al **inicio** del padre. | `caja.prepend(nuevo);` |
| `.remove()` | **Elimina** el elemento de su padre. | `nuevo.remove();` |

---

### 6. Eventos (El Alma del DOM)

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.addEventListener("evento", callback)` | Asigna una función (`callback`) que se ejecuta cuando ocurre el `"evento"`. | `boton.addEventListener("click", () => { alert("Clic!"); });` |
| **Eventos Comunes** | Los más usados para interactuar. | `"click"`, `"input"`, `"submit"`, `"keydown"`, `"mouseover"` |

---

### 7. Formularios y Valores

| Propiedad | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.value` | **Obtiene** o **establece** el contenido de elementos de formulario (`<input>`, `<textarea>`, `<select>`). | `let valor = input.value;` // Obtiene el texto escrito |
| Evento `input` | Se dispara **cada vez** que el valor de un campo de formulario cambia. | `input.addEventListener("input", () => { console.log("Escribiendo:", input.value); });` |

---

### 8. Recorrer Varios Elementos

| Método | Clave / Descripción Breve | Ejemplo |
| :--- | :--- | :--- |
| `.forEach(el => ...)` | Permite **iterar** sobre el **NodeList** devuelto por `querySelector*All*`. | `items.forEach(item => console.log(item.textContent));` |