# 💻✨ Clases Nativas y Manipulación de Datos Esenciales

## 📅 1. Manejo de Fechas y Tiempos (`Date` Clase)

La clase **`Date`** es fundamental para todas las operaciones de tiempo.

### Creación y Acceso
| Tarea Clave | Herramienta Clave | Concepto Esencial |
| :--- | :--- | :--- |
| **Obtener Fecha Actual** | `new Date()` | Crea un objeto con el día y la hora exactos. |
| **Acceder a Partes** | `getFullYear()`, `getHours()`, etc. | Métodos para extraer componentes específicos (año, hora, minuto). |

> **Nota Esencial:** Los meses van de **0 (Enero) a 11 (Diciembre)**, y los días de la semana van de **0 (Domingo) a 6 (Sábado)**.

### Cálculos
* **Cálculo de Intervalos:** Restar dos objetos `Date` devuelve la diferencia en **milisegundos**. Luego divides para convertir a segundos, minutos, o días.
* **Medir Rendimiento:** Resta `new Date()` al inicio y al final de una acción para cronometrar su duración.

---

## 🧮 2. Operaciones Matemáticas (`Math` Objeto)

El objeto **`Math`** proporciona funciones predefinidas para cálculos complejos, evitando que programes las fórmulas.

| Función Clave | Propósito (General) | Ejemplo |
| :--- | :--- | :--- |
| **`Math.pow(a, b)`** | Potencia: $a^b$. | Operaciones exponenciales. |
| **`Math.sqrt(a)`** | Raíz cuadrada. | Cálculos geométricos o estadísticos. |
| **`Math.round()`, `Math.ceil()`, `Math.floor()`** | Redondeo (al más cercano, arriba y abajo, respectivamente). | Controlar la precisión de los resultados. |
| **`Math.max(...array)`** | Encontrar el valor **más grande** en un conjunto de datos. |

---

## 🔡 3. Manipulación de Cadenas de Texto (`String` Métodos)

Estos métodos son cruciales para formatear, limpiar y analizar el texto.

| Método / Propiedad | Propósito (80% de las tareas con texto) |
| :--- | :--- |
| **`.length`** | Obtener el **tamaño** (número de caracteres) de la cadena. |
| **`.toLowerCase()` / `.toUpperCase()`** | **Normalizar** el texto para comparaciones o dar formato. |
| **`.replaceAll(old, new)`** | Reemplazar **todas** las ocurrencias de una subcadena. Clave para **limpiar** texto (ej. quitar todos los espacios). |
| **`.split(" ")`** | Dividir una cadena en un **array de palabras** (o subcadenas), usando un separador (ej. el espacio). |
| **`.charAt(i)`** | Acceder a un **carácter específico** en la posición $i$ de la cadena. |

### Algoritmos de Iteración
* El 80% de los algoritmos de texto se basan en **recorrer la cadena** carácter por carácter usando un bucle `for` y `charAt(i)`.
    * **Inversión:** Recorres el *string* con un bucle `for` **desde el final hacia el inicio** (`i = length; i >= 0; i--`) y concatenas los caracteres.
    * **Búsqueda/Conteo:** Usas un bucle para inspeccionar cada carácter y contar si coincide con una vocal o letra específica.

---

## ⚙️ 4. Control de Flujo y Asincronía

### Estructura `switch`
El `switch` es una alternativa al uso de muchos `if/else if` anidados. Es ideal para manejar **múltiples opciones** basadas en un único valor (ej. una selección de menú).

### Control Asíncrono del Tiempo
Estas funciones permiten que el código se ejecute de forma **asíncrona** (sin bloquear la página).

| Función Clave | Propósito | Flujo de Uso |
| :--- | :--- | :--- |
| **`setInterval(func, ms)`** | **Repetir** una función continuamente, cada $ms$ milisegundos. (Relojes, contadores). |
| **`clearInterval(id)`** | **Detener** la ejecución de un `setInterval` previamente iniciado (el ID que retorna `setInterval`). |

> **Flujo Clave:** **Iniciar** el intervalo con `setInterval` (guardando su ID), y usar ese ID para **detenerlo** con `clearInterval` cuando se cumpla la condición.

---

## 🌐 5. Interacción Directa con el Navegador (`window` y DOM)

| Objeto/Propiedad | Propósito (80% del uso) | Ejemplo Clave |
| :--- | :--- | :--- |
| **`new Date()`** | **Datos en Vivo:** Capturar el instante actual *dentro* de un bucle (como un `setInterval`) para relojes. |
| **`.textContent = valor`** | **Actualización de la Interfaz:** La forma **más limpia** de actualizar el texto visible dentro de un elemento HTML (ej. mostrar el conteo regresivo). |
| **`window.location.href`** | Gestionar la URL de la ventana actual. | **Redirigir** al usuario a otra página (ej. al terminar un contador). |
| **`alert("mensaje")`** | Función básica para mostrar un mensaje emergente. |

    <!-- //         window.open()
                // window.close()
                // window.moveTo
                // Objeto screen, location, navigator -->

Perfecto 👌. Te los he organizado y mejorado para que sean más claros, con mejor formato y resaltando lo esencial. Te lo dejo en estilo **apuntes/chuleta en Markdown** (ya que lo mencionaste antes) para que lo uses tal cual en tu documentación:

---

# 🌐 Apuntes Esenciales del **BOM (Browser Object Model)**

El **BOM** es la jerarquía de objetos que el navegador expone a JavaScript.
Su objeto central es **`window`**, que actúa como **objeto global**.
👉 Tanto el **BOM** (ventanas, pantalla, navegación) como el **DOM** (documento HTML) dependen de `window`.

---

## 1. 🔑 El Objeto `window` (El Fundamento)

El **objeto `window`** es el núcleo del BOM y representa la pestaña o ventana actual del navegador.
Todos los demás objetos y funciones (DOM, alert, prompt…) cuelgan de él.

| Concepto         | Descripción                                          | Ejemplo                                            |
| ---------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `window`         | Objeto global. Representa la pestaña/ventana actual. | `let v = window.open(...);`                        |
| `prompt()`       | Solicita texto al usuario.                           | `let titulo = prompt("Escribe tu nombre");`        |
| `window.close()` | Cierra la ventana actual.                            | `<button onclick="window.close()">Cerrar</button>` |

---

## 2. 🪟 Gestión de Ventanas (`open`, `close`, `moveTo`)

Permite abrir, cerrar y mover ventanas emergentes o pestañas secundarias.

| Método/Propiedad                     | Función                                                  | Ejemplo                                                         |
| ------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------- |
| `window.open(url, nombre, opciones)` | Abre una nueva ventana y devuelve su referencia.         | `let v = window.open("", "miVentana", "width=500,height=400");` |
| `ventana.close()`                    | Cierra la ventana previamente abierta.                   | `v.close();`                                                    |
| `ventana.moveTo(x, y)`               | Mueve la ventana a coordenadas absolutas en la pantalla. | `v.moveTo(screen.width, 0);`                                    |
| `screen.width / screen.height`       | Dimensiones de la pantalla del usuario.                  | `if (screen.width > 1000) {...}`                                |

---

## 3. 📑 Control de Contenido e Interacción (BOM + DOM)

Con la referencia a la ventana (`ventana`), puedes manipular su contenido HTML usando el **DOM**.

| Método/Propiedad           | Función                                                              | Ejemplo                                          |
| -------------------------- | -------------------------------------------------------------------- | ------------------------------------------------ |
| `ventana.document`         | Accede al `document` (DOM) de la ventana secundaria.                 | `ventana.document.write("Hola");`                |
| `ventana.document.write()` | Escribe contenido HTML directamente. ⚠️ Reemplaza todo lo que había. | `ventana.document.write("<h1>"+titulo+"</h1>");` |

---

## 4. ⏱️ Control de Tiempos y Navegación

El BOM permite programar tareas repetitivas y redirigir el navegador.

| Método/Propiedad           | Función                                                 | Ejemplo                                        |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------- |
| `setInterval(función, ms)` | Ejecuta una función cada cierto tiempo (loop temporal). | `let id = setInterval(reloj, 1000);`           |
| `clearInterval(id)`        | Detiene un `setInterval`.                               | `clearInterval(id);`                           |
| `window.location.href`     | Obtiene o cambia la URL actual.                         | `window.location.href = "https://openai.com";` |

---

## 5. 🔄 Comunicación entre Ventanas (Nivel Avanzado)

Ventanas abiertas pueden comunicarse entre sí.

| Escenario        | Descripción                                                        | Ejemplo                                              |
| ---------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| **Padre → Hija** | La ventana principal llama funciones definidas en la ventana hija. | `ventana.recibeMensaje("Hola desde el padre");`      |
| **Hija → Padre** | La ventana hija accede al padre mediante `window.opener`.          | `window.opener.mostrarAlerta("Hola desde la hija");` |

---

## 📌 Resumen 80/20

* `window.open()` → abre ventana y devuelve referencia.
* Con esa referencia puedes:

  * **Escribir contenido** → `ventana.document.write()`
  * **Cerrar ventana** → `ventana.close()`
  * **Mover ventana** → `ventana.moveTo(x,y)`
  * **Comunicar funciones** entre padre ↔ hija.
* `setInterval` / `clearInterval` para tiempos.
* `window.location.href` para cambiar de página.

⚡ Con solo dominar `open`, `close`, `document.write` y `location`, controlas la mayoría de escenarios prácticos.

---

¿Quieres que también te lo convierta en un **esquema visual (tipo mapa mental en Markdown con diagramas)** para que sea aún más fácil de memorizar?
