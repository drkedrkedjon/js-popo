# Documentacion sobre JavaScript

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

JavaScript es un lenguaje de programación fundamental para el desarrollo web, y tiene características únicas que lo distinguen de otros lenguajes.

### 1. JavaScript vive en el navegador

La principal diferencia de JavaScript es que fue creado para ejecutarse directamente en los navegadores web (como Chrome, Firefox, Edge o Safari). Esto significa que, cuando visitas una página web, el navegador puede leer y ejecutar código JavaScript para hacer la página más interactiva y dinámica.

**Ejemplo:**

```html
<button onclick="alert('¡Hola!')">Haz clic aquí</button>
```

Cuando haces clic en el botón, aparece un mensaje. ¡Eso es JavaScript funcionando en tu navegador!

### 2. No necesitas instalar nada especial

Para usar JavaScript, solo necesitas un navegador web. No tienes que instalar programas adicionales ni configuraciones complicadas. Puedes escribir código JavaScript en un archivo `.html` o directamente en la consola del navegador.

### 3. Hace las páginas web interactivas

Antes de JavaScript, las páginas web solo mostraban información estática (como un libro digital). Con JavaScript, puedes crear menús desplegables, animaciones, juegos, formularios que validan datos, y mucho más.

Permite que una página web pueda:

- Responder a acciones del usuario
- Modificar contenido sin recargar la página
- Crear animaciones
- Validar formularios
- Comunicarse con servidores

**Ejemplo:** Cambiar el texto de una página con JavaScript:

```html
<p id="demo">Texto original</p>
<button
  onclick="document.getElementById('demo').innerText = '¡Texto cambiado!'"
>
  Cambiar texto
</button>
```

### 4. Es un lenguaje interpretado

JavaScript no necesita ser "compilado" (convertido a otro formato antes de ejecutarse). El navegador lo lee y lo ejecuta línea por línea, lo que facilita probar y modificar el código rápidamente.

### 5. Sintaxis sencilla y amigable para principiantes

La forma de escribir JavaScript es fácil de aprender. Por ejemplo, para mostrar un mensaje en la consola solo necesitas:

```javascript
console.log("¡Bienvenido a JavaScript!");
```

### 6. Se integra con HTML y CSS

JavaScript puede modificar el contenido (HTML) y el estilo (CSS) de una página web en tiempo real. Esto permite crear experiencias de usuario modernas y atractivas.

JavaScript usa un modelo basado en eventos. Un evento es algo que ocurre en la página.

Ejemplos de eventos:

- Hacer clic
- Mover el ratón
- Escribir en un input
- Cargar la página

**Ejemplo:** Cambiar el color de un texto:

```html
<p id="color">Este texto cambiará de color</p>
<button onclick="document.getElementById('color').style.color = 'red'">
  Rojo
</button>
```

### 7. JS es sincrona con capacidad de asincrono

JavaScript, por defecto, ejecuta su código de manera **síncrona**. Esto significa que las instrucciones se ejecutan una tras otra, en orden, y cada línea debe terminar antes de que la siguiente comience. Sin embargo, JavaScript también tiene la capacidad de trabajar de forma **asíncrona**, lo que permite que ciertas tareas (como esperar una respuesta de internet o un temporizador) no bloqueen el resto del código.

#### ¿Qué significa que sea síncrono?

Cuando el código es síncrono, cada instrucción espera a que la anterior termine para ejecutarse.

**Ejemplo de código síncrono:**

```javascript
console.log("Primero");
console.log("Segundo");
console.log("Tercero");
// Salida en consola:
// Primero
// Segundo
// Tercero
```

#### ¿Qué es la asincronía en JavaScript?

La asincronía permite que ciertas operaciones tarden un tiempo en completarse (como leer un archivo, esperar una respuesta de un servidor, o usar un temporizador), pero el resto del código puede seguir ejecutándose mientras tanto.

Esto es muy útil para que las páginas web no se "congelen" mientras esperan una tarea lenta.

**Ejemplo usando setTimeout (asincronía):**

```javascript
console.log("Inicio");
setTimeout(function () {
  console.log("Esto aparece después de 2 segundos");
}, 2000);
console.log("Fin");
// Salida en consola:
// Inicio
// Fin
// (después de 2 segundos)
// Esto aparece después de 2 segundos
```

#### ¿Cómo se logra la asincronía?

JavaScript usa varias herramientas para trabajar de forma asíncrona:

- **setTimeout y setInterval:** Ejecutan código después de un tiempo.
- **Callbacks:** Funciones que se ejecutan cuando una tarea termina.
- **Promises:** Objetos que representan un valor que estará disponible en el futuro.
- **async/await:** Sintaxis moderna para escribir código asíncrono de forma más sencilla y legible.

**Ejemplo con Promises y async/await:**

```javascript
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Empieza");
  await esperar(1000); // Espera 1 segundo
  console.log("1 segundo después");
}

demo();
```

**En resumen:**
JavaScript es un lenguaje que ejecuta el código de forma síncrona, pero tiene potentes herramientas para manejar tareas asíncronas, lo que permite crear aplicaciones web rápidas, interactivas y que no se bloquean mientras esperan tareas lentas.

### 8. Es multiparadigma y muy flexible

Puedes programar en JavaScript usando diferentes estilos: orientado a objetos, funcional, o imperativo. Esto significa que puedes elegir la forma que más te guste o que mejor se adapte a tu proyecto.

### 9. Evolución y uso fuera del navegador

Aunque nació para el navegador, hoy en día JavaScript también se usa en servidores (con Node.js), en aplicaciones móviles, videojuegos, y hasta en inteligencia artificial. Sin embargo, su mayor fortaleza sigue siendo el desarrollo web.

### 10. Comunidad y recursos de aprendizaje

JavaScript tiene una comunidad enorme y muchos recursos gratuitos para aprender. Hay miles de tutoriales, videos, foros y ejemplos para ayudarte a resolver cualquier duda.

---

**En resumen:**
JavaScript es diferente porque te permite crear páginas web vivas, interactivas y modernas, directamente desde el navegador, sin instalaciones complicadas. Es fácil de aprender, muy versátil y está en todas partes en el mundo digital. ¡Por eso es uno de los lenguajes más populares y recomendados para empezar a programar!

**Enlace a la documentación oficial:**
[Documentación oficial de JavaScript (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript)

## ¿Cuáles son algunos tipos de datos JS?

En JavaScript, los **tipos de datos** son las diferentes formas en que puedes almacenar y manipular información. Conocerlos es fundamental para programar correctamente. Vamos a explicar los principales tipos de datos, con ejemplos sencillos:

### 1. Number (Números)

Se usan para representar cualquier número, ya sea entero o decimal.

**Ejemplo:**

```javascript
let edad = 25;
let precio = 19.99;
```

### 2. String (Cadenas de texto)

Sirven para guardar texto, como palabras, frases o cualquier combinación de caracteres. Se escriben entre comillas simples (' '), dobles (" ") o invertidas (`` ` ``).

**Ejemplo:**

```javascript
let nombre = "Maria";
let saludo = "¡Hola, mundo!";
let frase = `Mi edad es ${edad}`;
```

### 3. Boolean (Booleanos)

Solo pueden tener dos valores: `true` (verdadero) o `false` (falso). Se usan para tomar decisiones en el código.

**Ejemplo:**

```javascript
let esMayorDeEdad = true;
let tienePermiso = false;
```

### 4. Undefined (Indefinido)

Es el valor que tiene una variable cuando no se le ha asignado ningún valor.

**Ejemplo:**

```javascript
let resultado;
console.log(resultado); // undefined
```

### 5. Null (Nulo)

Representa la ausencia intencional de valor, escrita por el programador. Es decir, la variable existe, pero no tiene ningún valor asignado.

**Ejemplo:**

```javascript
let usuario = null;
```

### 6. Object (Objetos)

Permiten agrupar varios valores bajo un mismo nombre. Los objetos pueden contener diferentes tipos de datos y se escriben entre llaves `{ }`.

**Ejemplo:**

```javascript
let persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: false,
};
```

### 7. Array (Arreglos)

Son listas ordenadas de valores. Cada valor tiene una posición (índice) y pueden contener cualquier tipo de dato.

**Ejemplo:**

```javascript
let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "banana", "pera"];
```

### 8. Symbol (Símbolos)

Son valores únicos e inmutables, útiles para identificar propiedades de objetos de forma segura. Se usan menos en programación básica.

**Ejemplo:**

```javascript
let id = Symbol("identificador unico");
```

---

**Resumen visual:**

| Tipo de dato | Ejemplo           |
| ------------ | ----------------- |
| Number       | 42, 3.14          |
| String       | "Hola", 'Mundo'   |
| Boolean      | true, false       |
| Undefined    | undefined         |
| Null         | null              |
| Object       | { nombre: "Ana" } |
| Array        | [1, 2, 3]         |
| Symbol       | Symbol("id")      |

**Enlace útil:**
[Tipos de datos en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

## ¿Cuáles son las tres funciones de String en JS?

Las **cadenas de texto** (String) en JavaScript tienen muchas funciones (métodos) que permiten manipular y trabajar con texto de manera sencilla. Aquí te explico tres de las funciones más usadas y útiles para principiantes:

### 1. `.toUpperCase()`

Convierte todos los caracteres de una cadena a mayúsculas.

**Ejemplo:**

```javascript
let saludo = "hola mundo";
let mayusculas = saludo.toUpperCase();
console.log(mayusculas); // "HOLA MUNDO"
```

**¿Para qué se usa?**
Cuando quieres mostrar texto en mayúsculas, comparar cadenas sin importar mayúsculas/minúsculas, o estandarizar datos.

---

### 2. `.toLowerCase()`

Convierte todos los caracteres de una cadena a minúsculas.

**Ejemplo:**

```javascript
let frase = "JavaScript ES Genial";
let minusculas = frase.toLowerCase();
console.log(minusculas); // "javascript es genial"
```

**¿Para qué se usa?**
Ideal para comparar textos sin importar si están en mayúsculas o minúsculas, o para mostrar datos de forma uniforme.

---

### 3. `.includes()`

Verifica si una cadena contiene un texto específico. Devuelve `true` si lo encuentra, o `false` si no.

**Ejemplo:**

```javascript
let mensaje = "Bienvenido a JavaScript";
let contiene = mensaje.includes("JavaScript");
console.log(contiene); // true
```

**¿Para qué se usa?**
Para buscar palabras o fragmentos dentro de un texto, por ejemplo, para validar si un email contiene "@" o si una frase tiene cierta palabra.

---

**Otras funciones útiles de String:**

- `.length` — Devuelve la cantidad de caracteres de la cadena.
- `.replace()` — Permite reemplazar parte del texto por otro.
- `.split()` — Divide la cadena en partes usando un separador.

**Enlace útil:**
[Métodos de String en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)

# ¿Qué es un condicional?

Un **condicional** en JavaScript es una estructura que permite que el programa tome decisiones y ejecute diferentes bloques de código según si una condición es verdadera o falsa. Es como preguntarle a la computadora: "¿Se cumple esto? Si sí, haz esto; si no, haz otra cosa".

### ¿Para qué se usa?

Se usa para controlar el flujo del programa, por ejemplo:

- Mostrar mensajes diferentes según la edad de una persona.
- Validar si un usuario tiene permiso para entrar a una página.
- Ejecutar acciones solo si se cumple cierta condición.

### Sintaxis básica: if, else if, else

```javascript
if (condición) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

#### Ejemplo sencillo:

```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
// Salida: "Eres mayor de edad"
```

#### Ejemplo con else if:

```javascript
let nota = 7;
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
// Salida: "Aprobado"
```

### ¿Cómo funciona?

La condición es una expresión que se evalúa como `true` (verdadero) o `false` (falso). Si es verdadera, se ejecuta el primer bloque de código; si no, se ejecuta el bloque del `else` (si existe).

### Otros condicionales en JavaScript

- **switch:** Permite comparar una variable con varios valores posibles y ejecutar diferentes bloques de código según el caso que coincida. Es útil cuando tienes muchas condiciones para una misma variable.

#### Ejemplo de switch:

```javascript
let dia = "martes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miércoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("No es lunes, martes ni miércoles");
}
// Salida: "Hoy es martes"
```

**¿Cómo funciona?**
El valor de la variable (`dia`) se compara con cada `case`. Si encuentra uno igual, ejecuta ese bloque de código. El `break` evita que se sigan ejecutando los siguientes casos. El `default` se ejecuta si ninguno coincide.

---

- **Operador ternario:** Es una forma corta y elegante de escribir un condicional simple. Se usa mucho para asignar valores rápidamente según una condición.

#### Sintaxis del operador ternario:

```javascript
condición ? valorSiVerdadero : valorSiFalso;
```

#### Ejemplo de operador ternario:

```javascript
let edad = 16;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres menor de edad"
```

**¿Cómo funciona?**
Si la condición es verdadera, se toma el primer valor; si es falsa, el segundo. Es ideal para condicionales simples en una sola línea.

---

**Enlace útil:**
[Condicionales en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#condicionales)

---

## Operadores comunes en condiciones

Para crear condiciones en JavaScript, se usan operadores que comparan valores o combinan varias condiciones. Aquí tienes los más importantes:

### Operadores de comparación

| Operador | Significado                   | Ejemplo     | Resultado |
| -------- | ----------------------------- | ----------- | --------- |
| `==`     | Igualdad (sin tipo)           | `5 == "5"`  | `true`    |
| `===`    | Igualdad estricta (con tipo)  | `5 === "5"` | `false`   |
| `!=`     | Diferente (sin tipo)          | `5 != "5"`  | `false`   |
| `!==`    | Diferente estricto (con tipo) | `5 !== "5"` | `true`    |
| `>`      | Mayor que                     | `7 > 3`     | `true`    |
| `<`      | Menor que                     | `2 < 5`     | `true`    |
| `>=`     | Mayor o igual que             | `5 >= 5`    | `true`    |
| `<=`     | Menor o igual que             | `3 <= 2`    | `false`   |

### Operadores lógicos

| Operador | Significado    | Ejemplo         | Resultado |
| -------- | -------------- | --------------- | --------- |
| `&&`     | Y lógico (AND) | `true && false` | `false`   |
| `!`      | Negación (NOT) | `!true`         | `false`   |
| `\|\|`   | O lógico (OR)  | `true && false` | `true`    |

#### Ejemplo combinando operadores:

```javascript
let edad = 20;
let tienePermiso = true;
if (edad >= 18 && tienePermiso) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}
// Salida: "Puedes entrar"
```

**Enlace útil:**
[Operadores en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## ¿Qué es un operador ternario?

El **operador ternario** en JavaScript es una forma corta y elegante de escribir una condición simple. Se llama "ternario" porque utiliza tres partes: una condición, un resultado si la condición es verdadera y otro resultado si es falsa.

### ¿Para qué se usa?

Se usa para tomar decisiones rápidas y asignar valores o ejecutar acciones en una sola línea, en vez de usar una estructura `if...else` más larga.

**Importante:** El operador ternario es una **expresión** (produce un valor), no una declaración. Por eso, se utiliza mucho en frameworks como React, donde solo se pueden usar expresiones dentro del JSX (el código que parece HTML dentro de JavaScript). Esto permite mostrar o no mostrar elementos de forma sencilla:

```jsx
// Ejemplo en React
<div>
  {usuarioLogueado ? <p>Bienvenido</p> : <p>Por favor, inicia sesión</p>}
</div>
```

En este ejemplo, el operador ternario decide qué mensaje mostrar según si el usuario está logueado o no.

### Sintaxis

```javascript
condición ? valorSiVerdadero : valorSiFalso;
```

- **condición:** Es la expresión que se evalúa (debe ser verdadera o falsa).
- **valorSiVerdadero:** Es el resultado si la condición es verdadera.
- **valorSiFalso:** Es el resultado si la condición es falsa.

### Ejemplo básico

```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"
```

### Ejemplo equivalente con if...else

```javascript
let edad = 20;
let mensaje;
if (edad >= 18) {
  mensaje = "Eres mayor de edad";
} else {
  mensaje = "Eres menor de edad";
}
console.log(mensaje); // "Eres mayor de edad"
```

### Usos comunes

- Asignar valores a variables según una condición.
- Mostrar mensajes diferentes en una sola línea.
- Retornar valores en funciones de forma compacta.

### Ejemplo en una función

```javascript
function esPar(numero) {
  return numero % 2 === 0 ? "Es par" : "Es impar";
}
console.log(esPar(4)); // "Es par"
console.log(esPar(7)); // "Es impar"
```

### Anidación de operadores ternarios

Puedes usar varios operadores ternarios juntos, pero para principiantes no se recomienda porque puede dificultar la lectura del código.

```javascript
let nota = 8;
let resultado = nota >= 9 ? "Excelente" : nota >= 6 ? "Aprobado" : "Reprobado";
console.log(resultado); // "Aprobado"
```

### Ventajas y desventajas

- **Ventaja:** Permite escribir código más corto y directo.
- **Desventaja:** Si se abusa o se anidan muchos ternarios, el código puede volverse difícil de entender.

---

**Enlace útil:**
[Operador condicional (ternario) en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

En JavaScript, existen dos formas principales de crear funciones: **declaración de función** y **expresión de función**. Aunque ambas permiten definir funciones, tienen diferencias importantes en su sintaxis, comportamiento y uso.

---

### 1. Declaración de función (Function Declaration)

Es la forma clásica de definir una función. Se escribe usando la palabra clave `function` seguida del nombre de la función.

**Sintaxis:**

```javascript
function saludar() {
  console.log("¡Hola!");
}
saludar(); // "¡Hola!"
```

**Características:**

- Se "eleva" (hoisting): puedes llamar a la función antes de su definición en el código.
- Tiene un nombre obligatorio.

**Ejemplo de hoisting:**

```javascript
saludar(); // "¡Hola!"
function saludar() {
  console.log("¡Hola!");
}
```

---

### 2. Expresión de función (Function Expression)

Aquí la función se asigna a una variable. Puede ser anónima (sin nombre) o nombrada.

**Sintaxis:**

```javascript
const despedir = function () {
  console.log("¡Adiós!");
};
despedir(); // "¡Adiós!"
```

**Características:**

- No se eleva (no hay hoisting): solo puedes llamar a la función después de haberla definido.
- Puede ser anónima o tener nombre.
- Se usa mucho para funciones como callbacks, en eventos, o en funciones flecha (arrow functions).

**Ejemplo de error por hoisting:**

```javascript
despedir(); // Error: despedir is not a function
const despedir = function () {
  console.log("¡Adiós!");
};
```

---

### 3. Diferencias clave

| Característica       | Declaración de función | Expresión de función         |
| -------------------- | ---------------------- | ---------------------------- |
| Hoisting             | Sí                     | No                           |
| Nombre               | Obligatorio            | Opcional (puede ser anónima) |
| Cuándo se puede usar | Antes o después        | Solo después de definirla    |
| Uso común            | Funciones generales    | Callbacks, eventos, React    |

---

### 4. Ejemplo comparativo

```javascript
// Declaración
function suma(a, b) {
  return a + b;
}

// Expresión
const resta = function (a, b) {
  return a - b;
};

console.log(suma(3, 2)); // 5
console.log(resta(3, 2)); // 1
```

---

### 5. Funciones flecha (Arrow Functions)

Las funciones flecha son una forma moderna de escribir expresiones de función:

```javascript
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 4)); // 8
```

---

### 6. ¿Cuál usar?

- Usa **declaraciones** para funciones generales y reutilizables.
- Usa **expresiones** para callbacks, funciones anónimas, o cuando necesitas asignar funciones a variables.

---

**Enlace útil:**
[Funciones en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)

## ¿Qué es la palabra clave "this" en JS?

La palabra clave **"this"** en JavaScript es un concepto fundamental pero puede ser confuso para quienes recién empiezan. "this" es una referencia especial que apunta a un objeto, y su valor depende de cómo y dónde se usa la función.

---

### ¿Qué significa "this"?

"this" representa el **contexto de ejecución** actual, es decir, el objeto al que pertenece el código que se está ejecutando.

---

### 1. "this" en un objeto

Cuando usas "this" dentro de un método de un objeto, hace referencia a ese objeto.

**Ejemplo:**

```javascript
const persona = {
  nombre: "Ana",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};
persona.saludar(); // "Hola, soy Ana"
```

---

### "this" en una clase

En las **clases** de JavaScript, "this" funciona de manera similar: dentro de los métodos de una clase, "this" hace referencia a la instancia creada por la clase.

**Ejemplo:**

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
}

const perro = new Animal("Max");
perro.saludar(); // "Hola, soy Max"
```

**¿Qué debes recordar?**

- En métodos de clase, "this" siempre apunta a la instancia creada con `new`.
- Si usas funciones flecha como métodos de clase, el comportamiento de "this" puede ser diferente y suele evitarse para métodos de instancia.

---

### 2. "this" en una función normal (no método)

En una función normal (no dentro de un objeto), el valor de "this" depende de cómo se llama la función:

- **En modo estricto:** "this" es `undefined`.
- **En modo no estricto:** "this" es el objeto global (`window` en navegadores).

**Ejemplo:**

```javascript
function mostrar() {
  console.log(this);
}
mostrar(); // En navegador: Window {...} (o undefined en modo estricto)
```

---

### 3. "this" en eventos del DOM

Cuando usas "this" en un manejador de eventos, hace referencia al elemento HTML que disparó el evento.

**Ejemplo:**

```html
<button onclick="mostrarElemento(this)">Haz clic</button>
<script>
  function mostrarElemento(elemento) {
    console.log(elemento); // El botón que fue clickeado
  }
</script>
```

---

### 4. "this" en funciones flecha (arrow functions)

Las funciones flecha **no** tienen su propio "this". En vez de eso, heredan el "this" del contexto donde fueron creadas.

**Ejemplo:**

```javascript
const persona = {
  nombre: "Juan",
  saludar: function () {
    setTimeout(() => {
      console.log("Hola, soy " + this.nombre);
    }, 1000);
  },
};
persona.saludar(); // "Hola, soy Juan"
```

Si usáramos una función normal en `setTimeout`, "this" sería diferente y no funcionaría igual.

---

### 5. Advertencia para principiantes

- El valor de "this" puede cambiar dependiendo de cómo se llama la función.
- En funciones flecha, "this" es más predecible porque no cambia su contexto.
- En clases y objetos, es común usar funciones flecha para evitar errores con "this".

---

### Resumen visual

| Contexto                   | ¿A qué apunta "this"?                  |
| -------------------------- | -------------------------------------- |
| Método de un objeto        | Al objeto dueño del método             |
| Función normal (no método) | Al objeto global o undefined           |
| Evento del DOM             | Al elemento HTML que disparó el evento |
| Función flecha             | Al contexto donde fue creada           |

---

**Enlace útil:**
[this en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this)
