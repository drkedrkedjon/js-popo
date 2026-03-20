## ¿Qué son los bucles en JavaScript?

**Más información:** [Bucles e iteración en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)

Los bucles (loops) en JavaScript son estructuras de control que permiten ejecutar un bloque de código varias veces de manera automática. Son fundamentales para automatizar tareas repetitivas, procesar listas de datos, recorrer arreglos y realizar operaciones que requieren repetición sin tener que escribir el mismo código muchas veces.

**¿Qué problema solucionan?**

Imagina que tienes una lista de nombres y quieres mostrar cada uno en pantalla. Sin bucles, tendrías que escribir una línea de código para cada nombre. Con bucles, puedes recorrer toda la lista con unas pocas líneas, haciendo tu código más eficiente, limpio y fácil de mantener.

**¿Cómo funcionan internamente los bucles?**

Un bucle evalúa una condición antes (o después, según el tipo) de ejecutar su bloque de código. Si la condición es verdadera, ejecuta el bloque y repite el proceso. Si es falsa, el bucle termina y el programa continúa con la siguiente instrucción.

**Ventajas de usar bucles:**

- Permiten automatizar tareas repetitivas.
- Reducen la cantidad de código necesario.
- Facilitan el trabajo con grandes volúmenes de datos (por ejemplo, recorrer listas o arreglos).
- Mejoran la legibilidad y el mantenimiento del código.

**Desventajas o advertencias:**

- Si la condición nunca se vuelve falsa, el bucle puede ser infinito y bloquear el programa.
- Un mal uso puede dificultar la comprensión del código, especialmente con bucles anidados (bucles dentro de bucles).

**Casos de uso comunes:**

- Recorrer listas de elementos (arrays).
- Repetir una acción un número específico de veces.
- Buscar un elemento dentro de una colección.
- Realizar cálculos acumulativos (sumas, promedios, etc.).

**Consejo para principiantes:**
Siempre asegúrate de que la condición del bucle pueda llegar a ser falsa en algún momento, para evitar bucles infinitos.

---

## ¿Qué tipo de bucles hay en JS?

En JavaScript existen varios tipos de bucles, cada uno con características y usos específicos. Los principales son:

| Tipo de bucle | ¿Cuándo usarlo?                                  | ¿Evalúa condición antes? | ¿Acceso a índice? | ¿Recorre objetos? | ¿Recorre arrays? | ¿Mínima ejecución? |
| ------------- | ------------------------------------------------ | ------------------------ | ----------------- | ----------------- | ---------------- | ------------------ |
| for           | Cuando sabes cuántas veces repetir               | Sí                       | Sí                | No                | Sí               | 0 veces            |
| while         | Cuando repites hasta que se cumpla una condición | Sí                       | Manual            | No                | Sí               | 0 veces            |
| do...while    | Cuando necesitas ejecutar al menos una vez       | No (evalúa después)      | Manual            | No                | Sí               | 1 vez              |
| for...of      | Para recorrer elementos de arrays/iterables      | Sí (interno)             | No                | No                | Sí               | 0 veces            |
| for...in      | Para recorrer propiedades de objetos             | Sí (interno)             | No                | Sí                | No\*             | 0 veces            |

\*No recomendado para arrays, puede incluir propiedades heredadas o agregadas manualmente.

---

### 1. Bucle **for**

El bucle `for` es el más utilizado cuando se conoce de antemano cuántas veces se debe repetir una acción. Se compone de tres partes: inicialización, condición y actualización.

**¿Cómo funciona?**

1. Inicializa una variable (por ejemplo, `let i = 0`).
2. Evalúa la condición (`i < 5`). Si es verdadera, ejecuta el bloque de código.
3. Al final de cada iteración, actualiza la variable (`i++`).
4. Repite el proceso hasta que la condición sea falsa.

**Ventajas:**

- Muy útil para recorrer arreglos por índice.
- Todo el control del bucle está en una sola línea.

**Desventajas:**

- Puede ser menos legible si la lógica es compleja.

**Advertencia:**
Si olvidas actualizar la variable o la condición nunca se vuelve falsa, el bucle será infinito.

**Sintaxis:**

```js
for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}
```

**Ejemplo:**

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteración número", i);
}
// Imprime: Iteración número 0 ... hasta 4
```

---

### 2. Bucle **while**

El bucle `while` repite un bloque de código mientras una condición sea verdadera. Es útil cuando no se sabe exactamente cuántas veces se repetirá la acción.

**¿Cómo funciona?**

1. Evalúa la condición antes de cada iteración.
2. Si es verdadera, ejecuta el bloque de código.
3. Repite el proceso hasta que la condición sea falsa.

**Ventajas:**

- Ideal cuando el número de repeticiones depende de una condición externa.
- Más flexible que el `for` en algunos casos.

**Desventajas:**

- Si olvidas modificar la condición dentro del bucle, puede ser infinito.

**Advertencia:**
Siempre asegúrate de que la condición cambie dentro del bucle.

**Sintaxis:**

```js
while (condición) {
  // Código a ejecutar mientras la condición sea verdadera
}
```

**Ejemplo:**

```js
let contador = 0;
while (contador < 3) {
  console.log("Contador:", contador);
  contador++;
}
// Imprime: Contador: 0 ... hasta 2
```

---

### 3. Bucle **do...while**

El bucle `do...while` es similar al `while`, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la primera ejecución.

**¿Cómo funciona?**

1. Ejecuta el bloque de código una vez, sin evaluar la condición.
2. Luego evalúa la condición.
3. Si es verdadera, repite el bloque; si es falsa, termina.

**Ventajas:**

- Útil cuando necesitas que el código se ejecute al menos una vez (por ejemplo, mostrar un menú hasta que el usuario elija salir).

**Desventajas:**

- Puede ejecutar el bloque una vez incluso si la condición es falsa desde el principio.

**Sintaxis:**

```js
do {
  // Código a ejecutar
} while (condición);
```

**Ejemplo:**

```js
let numero = 0;
do {
  console.log("Número:", numero);
  numero++;
} while (numero < 2);
// Imprime: Número: 0 y Número: 1
```

---

### 4. Bucle **for...of**

El bucle `for...of` permite recorrer los elementos de objetos iterables como arreglos, cadenas, mapas, etc. Es muy útil para trabajar con listas.

**¿Cómo funciona?**

1. Toma cada elemento del iterable (por ejemplo, un array) y lo asigna a una variable temporal.
2. Ejecuta el bloque de código con ese elemento.
3. Repite el proceso para todos los elementos.

**Ventajas:**

- Sintaxis simple y clara para recorrer arreglos y listas.
- Evita errores de índice.

**Desventajas:**

- No te da acceso al índice del elemento (usa `for` si necesitas el índice).

**Sintaxis:**

```js
for (let elemento of iterable) {
  // Código a ejecutar con cada elemento
}
```

**Ejemplo:**

```js
const frutas = ["manzana", "banana", "pera"];
for (let fruta of frutas) {
  console.log(fruta);
}
// Imprime: manzana, banana, pera
```

---

### 5. Bucle **for...in**

El bucle `for...in` se utiliza para recorrer las propiedades enumerables de un objeto.

**¿Cómo funciona?**

1. Toma cada clave (nombre de propiedad) del objeto.
2. Ejecuta el bloque de código con esa clave.
3. Repite para todas las propiedades enumerables.

**Ventajas:**

- Útil para inspeccionar objetos y sus propiedades.

**Desventajas:**

- No se recomienda para recorrer arreglos, ya que puede incluir propiedades heredadas o agregadas manualmente.

**Advertencia:**
Para arreglos, usa mejor `for` o `for...of`.

**Sintaxis:**

```js
for (let clave in objeto) {
  // Código a ejecutar con cada clave
}
```

**Ejemplo:**

```js
const persona = { nombre: "Ana", edad: 25 };
for (let clave in persona) {
  console.log(clave, persona[clave]);
}
// Imprime: nombre Ana, edad 25
```

---

**Resumen:**

- Usa `for` cuando sabes cuántas veces quieres repetir algo.
- Usa `while` o `do...while` cuando la cantidad de repeticiones depende de una condición.
- Usa `for...of` para recorrer listas o arreglos.
- Usa `for...in` para recorrer propiedades de objetos.

---

**Errores comunes de principiantes con bucles:**

- Olvidar actualizar la variable de control (por ejemplo, no hacer `i++` en un `for`).
- Usar el bucle incorrecto para el tipo de dato (por ejemplo, `for...in` en arreglos).
- Crear bucles infinitos por condiciones mal planteadas.

**Recomendación:**
Practica con ejemplos sencillos y usa `console.log` para ver cómo cambian las variables en cada iteración.

## ¿Cuáles son las diferencias entre const, let y var?

**Más información:** [var, let y const en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)

En JavaScript, `const`, `let` y `var` son palabras clave para declarar variables, pero tienen diferencias importantes en su comportamiento, alcance y uso recomendado.

---

### ¿Qué es una variable?

Una variable es como una caja con un nombre, donde puedes guardar información para usarla más adelante en tu programa. Imagina que tienes una caja llamada `edad` y dentro pones el número 25. Más tarde, puedes abrir la caja y ver qué valor tiene, o cambiarlo por otro.

**¿Para qué sirven las variables?**

- Guardar datos que necesitas durante la ejecución del programa (por ejemplo, el nombre de un usuario, la puntuación de un juego, una lista de productos, etc.).
- Permiten reutilizar y manipular información de manera flexible.

**Tipos de valores que puede guardar una variable:**

- Números: `let edad = 30;`
- Texto (cadenas): `let nombre = "Ana";`
- Booleanos (verdadero/falso): `let esMayor = true;`
- Arreglos (listas): `let frutas = ["manzana", "pera"];`
- Objetos: `let persona = { nombre: "Ana", edad: 25 }`

**¿Cómo se declara una variable?**
En JavaScript, usas las palabras clave `var`, `let` o `const` seguidas de un nombre y, opcionalmente, un valor inicial:

```js
let mensaje; // Declaración sin valor inicial
mensaje = "Hola"; // Asignación de valor

const PI = 3.1416; // Declaración y asignación de una constante
```

**Reglas para nombrar variables:**

- Deben empezar con una letra, guion bajo `_` o signo `$`.
- No pueden contener espacios ni empezar con números.
- Usa nombres descriptivos para que el código sea fácil de entender.

**Ejemplo sencillo:**

```js
let nombre = "Juan";
let edad = 28;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
```

**Analogía:**
Piensa en variables como etiquetas en cajas: puedes poner lo que quieras dentro, y luego buscar la caja por su etiqueta para ver o cambiar su contenido.

---

### 1. `var`

Fue la forma original de declarar variables en JavaScript. Tiene un alcance (scope) de función o global, dependiendo de dónde se declare.

**Características:**

- Puede ser redeclarada y reasignada.
- Su alcance es la función donde se declara, o global si está fuera de una función.
- Se "eleva" (hoisting): la declaración se mueve al principio del contexto, pero no su valor.

**Ejemplo:**

```js
function ejemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Imprime 10
}
ejemploVar();
```

**Ventajas:**

- Compatible con versiones antiguas de JS.

**Desventajas:**

- Puede causar errores difíciles de detectar por su alcance amplio y hoisting.
- No se recomienda para código moderno.

**Advertencia:**
Evita usar `var` en proyectos nuevos. Prefiere `let` o `const`.

---

### 2. `let`

Introducida en ES6 (2015), permite declarar variables con alcance de bloque (block scope), es decir, solo existen dentro de las llaves `{}` donde se declaran.

**Características:**

- Puede ser reasignada, pero no redeclarada en el mismo bloque.
- Su alcance es el bloque, statement o expresión donde se declara.
- No se eleva como `var` (no hay hoisting de valor ni acceso antes de la declaración).

**Ejemplo:**

```js
function ejemploLet() {
  if (true) {
    let y = 20;
    console.log(y); // Imprime 20
  }
  // console.log(y); // Error: y no está definida
}
ejemploLet();
```

**Ventajas:**

- Más seguro y predecible que `var`.
- Ideal para variables que cambian de valor.

**Desventajas:**

- Puede ser reasignada accidentalmente si no se tiene cuidado.

**Advertencia:**
No puedes acceder a la variable antes de declararla (Temporal Dead Zone).

---

### 3. `const`

También introducida en ES6, se usa para declarar variables cuyo valor no debe cambiar (constante).

**Características:**

- Debe ser inicializada al declararse.
- No puede ser reasignada.
- Su alcance es de bloque, igual que `let`.
- No se puede redeclarar en el mismo bloque.

**Ejemplo:**

```js
const PI = 3.1416;
// PI = 3; // Error: no se puede reasignar
```

**Ventajas:**

- Garantiza que el valor no cambiará, lo que ayuda a evitar errores.
- Hace el código más fácil de entender y mantener.

**Desventajas:**

- No se puede cambiar la referencia, pero si es un objeto o arreglo, sus propiedades o elementos sí pueden cambiar.

**Ejemplo avanzado:**

```js
const numeros = [1, 2, 3];
numeros.push(4); // Esto es válido
// numeros = [5, 6]; // Error: no se puede reasignar
```

**Advertencia:**
`const` solo impide la reasignación de la variable, no la mutación de objetos o arreglos.

---

### Resumen y tabla comparativa

| Característica             | var                  | let    | const  |
| -------------------------- | -------------------- | ------ | ------ |
| Alcance                    | Función/Global       | Bloque | Bloque |
| Redeclarable               | Sí                   | No     | No     |
| Reasignable                | Sí                   | Sí     | No     |
| Hoisting                   | Sí (valor undefined) | No     | No     |
| Inicialización obligatoria | No                   | No     | Sí     |

**¿Cuál usar?**

- Usa `const` por defecto para variables que no cambian.
- Usa `let` si necesitas reasignar el valor.
- Evita `var` salvo por compatibilidad con código antiguo.

---

**Errores comunes de principiantes:**

- Usar `var` y sorprenderse por su alcance global o de función.
- Intentar reasignar una variable declarada con `const`.
- Olvidar inicializar una variable `const`.

**Recomendación:**
Siempre que puedas, usa `const` para mayor seguridad y claridad. Usa `let` solo cuando realmente necesites cambiar el valor de la variable.

## ¿Qué es una función de flecha?

**Más información:** [Funciones flecha en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Una función de flecha (arrow function) es una forma más corta y moderna de escribir funciones en JavaScript, introducida en ES6 (2015). Se llama así porque utiliza el símbolo `=>`, que se parece a una flecha.

---

### ¿Qué es una función?

Una función es un bloque de código que realiza una tarea específica y puede ser reutilizado. Por ejemplo, puedes tener una función que sume dos números o que muestre un mensaje en pantalla.

**Ejemplo de función tradicional:**

```js
function saludar(nombre) {
  return "Hola, " + nombre;
}
console.log(saludar("Ana")); // Imprime: Hola, Ana
```

---

### ¿Cómo se escribe una función de flecha?

La sintaxis básica es:

```js
const nombreFuncion = (parametros) => {
  // Código a ejecutar
};
```

**Ejemplo equivalente al anterior:**

```js
const saludar = (nombre) => {
  return "Hola, " + nombre;
};
console.log(saludar("Ana")); // Imprime: Hola, Ana
```

**Si la función tiene solo una línea que retorna un valor, puedes omitir las llaves y el return:**

```js
const cuadrado = (x) => x * x;
console.log(cuadrado(4)); // Imprime: 16
```

---

### Diferencias con funciones tradicionales

- **Sintaxis más corta:** Menos código para hacer lo mismo.
- **No tiene su propio `this`:** El valor de `this` dentro de una función de flecha es el mismo que fuera de ella. Esto es útil en algunos casos, pero puede ser confuso para principiantes.
- **No se puede usar como constructor:** No puedes usar `new` con una función de flecha.
- **No tiene `arguments`:** No puedes acceder al objeto especial `arguments` dentro de una función de flecha.

---

### Ventajas

- Código más limpio y fácil de leer.
- Ideal para funciones cortas y callbacks (funciones que se pasan como argumento a otras funciones).
- Evita problemas con el valor de `this` en métodos de objetos o en funciones dentro de clases.

### Desventajas y advertencias

- No usar para métodos de objetos que necesiten su propio `this`.
- No apta para funciones que deban ser usadas como constructores.
- Puede ser menos clara para quienes recién empiezan si se abusa de la sintaxis corta.

---

### Casos de uso comunes

- Funciones anónimas o de una sola línea.
- Callbacks en métodos como `map`, `filter`, `forEach`.

**Ejemplo con un array:**

```js
const numeros = [1, 2, 3];
const dobles = numeros.map((n) => n * 2);
console.log(dobles); // Imprime: [2, 4, 6]
```

---

### Resumen

- Usa funciones de flecha para escribir funciones cortas y simples.
- Recuerda que no tienen su propio `this` ni `arguments`.
- Son muy útiles en programación moderna y para trabajar con arrays.

## ¿Qué es la deconstrucción de variables?

**Más información:** [Desestructuración en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

La deconstrucción de variables (destructuring) es una característica de JavaScript que permite extraer valores de arreglos (arrays) u objetos y asignarlos fácilmente a variables, usando una sintaxis muy concisa y clara. Fue introducida en ES6 (2015).

---

### ¿Para qué sirve la deconstrucción?

Sirve para obtener rápidamente varios valores de un arreglo u objeto sin tener que acceder a cada uno por separado. Hace el código más limpio y fácil de leer.

---

### Deconstrucción de arreglos (arrays)

**Sintaxis básica:**

```js
const numeros = [10, 20, 30];
const [a, b, c] = numeros;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

> **Nota:** En la deconstrucción de **arreglos**, **el orden importa** y no el nombre de las variables. El primer valor del array se asigna a la primera variable, el segundo al segundo, y así sucesivamente.

**Puedes omitir valores:**

```js
const colores = ["rojo", "verde", "azul"];
const [primero, , tercero] = colores;
console.log(primero); // "rojo"
console.log(tercero); // "azul"
```

---

### Deconstrucción de objetos

**Sintaxis básica:**

```js
const persona = { nombre: "Ana", edad: 25 };
const { nombre, edad } = persona;
console.log(nombre); // "Ana"
console.log(edad); // 25
```

> **Nota:** En la deconstrucción de **objetos**, **el nombre de la propiedad importa** y no el orden. Puedes extraer las propiedades en cualquier orden, siempre que el nombre coincida con el del objeto.

**Puedes cambiar el nombre de la variable:**

```js
const usuario = { usuario: "juan", correo: "juan@mail.com" };
const { usuario: nombreUsuario, correo } = usuario;
console.log(nombreUsuario); // "juan"
console.log(correo); // "juan@mail.com"
```

---

### Ventajas

- Código más corto y legible.
- Fácil acceso a varios valores a la vez.
- Útil para trabajar con funciones que devuelven objetos o arreglos.

### Advertencias

- El nombre de la variable debe coincidir con la propiedad del objeto (a menos que uses alias).
- Si el valor no existe, la variable será `undefined`.

---

### Casos de uso comunes

- Extraer datos de respuestas de APIs.
- Obtener valores de configuración.
- Trabajar con props en React u otros frameworks modernos.

**Ejemplo con función:**

```js
function getPunto() {
  return { x: 5, y: 10 };
}
const { x, y } = getPunto();
console.log(x, y); // 5 10
```

---

### Resumen

- Usa la deconstrucción para escribir código más limpio y directo.
- Es muy útil cuando trabajas con objetos o arreglos grandes.

## ¿Qué hace el operador de extensión en JS?

**Más información:** [Operador de propagación/rest en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

El operador de extensión (`...`) en JavaScript es una herramienta fundamental y moderna que permite manipular colecciones de datos (arreglos y objetos) de manera flexible y elegante. Aunque su sintaxis es la misma, su significado y comportamiento cambian según el contexto, y se divide en dos conceptos clave: **spread** (propagación) y **rest** (resto).

---

### Fundamento teórico

#### ¿Por qué existe el operador ...?

Antes de ES6, manipular arreglos y objetos requería métodos más largos y menos intuitivos, como usar `concat`, `slice`, o bucles para copiar o combinar datos. El operador `...` simplifica estas tareas, haciendo el código más legible y menos propenso a errores.

#### ¿Qué significa "propagar" y "agrupar"?

- **Propagar (spread):** Significa tomar todos los elementos de una colección y "desempaquetarlos" para que se comporten como si estuvieran escritos uno por uno. Es útil cuando quieres copiar, combinar o pasar elementos de forma individual.
- **Agrupar (rest):** Significa tomar varios elementos y "empaquetarlos" en una sola variable (normalmente un arreglo u objeto). Es útil cuando no sabes cuántos elementos vas a recibir o quieres capturar lo que sobra tras extraer algunos valores.

#### ¿Cómo funciona internamente?

- Cuando usas `...` como **spread**, JavaScript recorre la colección y coloca cada elemento en el nuevo contexto (arreglo, objeto, o lista de argumentos). Es como vaciar una caja y poner cada cosa en la mesa.
- Cuando usas `...` como **rest**, JavaScript toma todos los elementos que no han sido asignados explícitamente y los agrupa en una nueva colección. Es como tomar todo lo que queda en la mesa y meterlo en una nueva caja.

#### Analogía para principiantes

Imagina que tienes una caja de lápices de colores:

- Usar **spread** es como sacar todos los lápices y ponerlos uno por uno en una fila.
- Usar **rest** es como tomar los lápices que quedan después de elegir algunos y guardarlos en otra caja.

#### Diferencias conceptuales

- **Spread** se usa para copiar, combinar o pasar elementos de manera individual.
- **Rest** se usa para capturar múltiples elementos en una sola variable, especialmente útil en funciones con argumentos variables o al desestructurar datos.

#### Ventajas teóricas

- Permite escribir código más declarativo y menos imperativo (menos bucles manuales).
- Facilita la inmutabilidad: puedes crear copias de arreglos/objetos sin modificar los originales.
- Hace que las funciones sean más flexibles y reutilizables.

#### Limitaciones y advertencias

- El operador `...` no realiza copias profundas (deep copy), solo superficiales (shallow copy).
- No se puede usar en todos los contextos: por ejemplo, no puedes usar `...` directamente en un objeto fuera de una declaración o asignación.

#### Resumen teórico

El operador de extensión es una abstracción que permite manipular colecciones de datos de forma sencilla, clara y segura, facilitando tareas comunes en la programación moderna de JavaScript. Entender la diferencia entre **spread** y **rest** es clave para escribir código eficiente y fácil de mantener.

---

### ¿Qué es el operador **spread**?

El operador **spread** se usa para **expandir** ("desempaquetar") los elementos de un arreglo u objeto en otro lugar. Es como "abrir" una caja y sacar todos sus elementos para usarlos individualmente.

**¿Para qué sirve?**

- Copiar arreglos u objetos sin modificar el original.
- Combinar varios arreglos u objetos en uno solo.
- Pasar los elementos de un arreglo como argumentos individuales a una función.

**Ejemplo con arreglos:**

```js
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5];
console.log(masNumeros); // [1, 2, 3, 4, 5]
```

**Ejemplo con objetos:**

```js
const persona = { nombre: "Ana", edad: 25 };
const personaCompleta = { ...persona, ciudad: "Madrid" };
console.log(personaCompleta); // { nombre: "Ana", edad: 25, ciudad: "Madrid" }
```

**Ejemplo para pasar argumentos:**

```js
const datos = [4, 7, 1];
console.log(Math.max(...datos)); // 7
```

**Advertencia:**

- El operador spread crea una **copia superficial** (shallow copy). Si el arreglo u objeto tiene otros objetos dentro, esos objetos internos no se copian, solo se referencia su dirección.

---

### ¿Qué es el operador **rest**?

El operador **rest** se usa para **agrupar** el resto de los elementos en un arreglo u objeto. Es como decir: "pon todo lo que sobra aquí". Se utiliza principalmente en la definición de funciones o al desestructurar arreglos y objetos.

**¿Para qué sirve?**

- Permitir que una función reciba cualquier cantidad de argumentos.
- Guardar el resto de los elementos de un arreglo u objeto en una variable.

**Ejemplo en funciones:**

```js
function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(sumar(1, 2, 3)); // 6
console.log(sumar(5, 10)); // 15
```

**Ejemplo con arreglos:**

```js
const [primero, ...resto] = [10, 20, 30, 40];
console.log(primero); // 10
console.log(resto); // [20, 30, 40]
```

**Ejemplo con objetos:**

```js
const persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
const { nombre, ...otrosDatos } = persona;
console.log(nombre); // "Ana"
console.log(otrosDatos); // { edad: 25, ciudad: "Madrid" }
```

**Advertencia:**

- El operador rest debe ser el **último** en la lista de variables al desestructurar.

---

### ¿Cómo saber cuándo es spread y cuándo es rest?

- Si `...` está en el **lado derecho** de una asignación, llamada o declaración (por ejemplo, `[...arr]`, `{...obj}`, `func(...args)`), es **spread**.
- Si `...` está en el **lado izquierdo** de una declaración/desestructuración (por ejemplo, `function f(...args)`, `const [a, ...rest] = arr`), es **rest**.

---

### Resumen visual

| Uso    | ¿Qué hace?      | Ejemplo principal                     |
| ------ | --------------- | ------------------------------------- |
| Spread | Expande/propaga | `[...arr]`, `{...obj}`                |
| Rest   | Agrupa el resto | `function f(...args)`, `[a, ...rest]` |

---

### ¿Por qué es útil para principiantes?

- Hace el código más corto y fácil de leer.
- Permite trabajar con datos de manera flexible.
- Es fundamental para trabajar con funciones modernas, React, y muchas otras herramientas actuales de JavaScript.

**Consejo:**
¡Practica con ejemplos sencillos! Cambia el orden, agrega o quita elementos, y observa cómo se comportan `...spread` y `...rest` para entenderlos mejor.

## ¿Qué es la programación orientada a objetos?

**Más información:** [POO en JavaScript en MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS)

La **programación orientada a objetos** (POO, u OOP por sus siglas en inglés) es un paradigma de programación, es decir, una forma de organizar y estructurar el código para resolver problemas. En vez de pensar solo en funciones y datos sueltos, la POO se basa en el concepto de **objetos**: entidades que agrupan datos y comportamientos relacionados.

---

### ¿Qué es un objeto?

Un **objeto** es una estructura que representa algo del mundo real o del programa, y que tiene:

- **Propiedades** (también llamadas atributos o campos): describen las características del objeto (por ejemplo, color, tamaño, nombre).
- **Métodos**: son funciones asociadas al objeto, que definen lo que puede hacer (por ejemplo, caminar, sumar, mostrar información).

**Ejemplo sencillo:**

```js
const persona = {
  nombre: "Ana",
  edad: 25,
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};
persona.saludar(); // Imprime: Hola, soy Ana
```

---

### ¿Por qué usar POO?

- Permite organizar el código de forma más natural y parecida a cómo pensamos en la vida real.
- Facilita la reutilización y el mantenimiento del código.
- Hace más fácil trabajar en proyectos grandes y en equipo.

---

### Conceptos clave de la POO

1. **Clase**: Es como un plano o molde para crear objetos. Define qué propiedades y métodos tendrán los objetos creados a partir de ella.
2. **Objeto**: Es una instancia (ejemplo concreto) de una clase.
3. **Herencia**: Permite crear nuevas clases basadas en otras, heredando sus propiedades y métodos.
4. **Encapsulamiento**: Consiste en ocultar los detalles internos de un objeto y exponer solo lo necesario.
5. **Polimorfismo**: Permite que diferentes objetos respondan de manera distinta al mismo método o mensaje.

---

### Ejemplo de clase en JavaScript (ES6)

```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + " hace un ruido.");
  }
}

const perro = new Animal("Firulais");
perro.hablar(); // Imprime: Firulais hace un ruido.
```

---

### Herencia en JavaScript

```js
class Perro extends Animal {
  hablar() {
    console.log(this.nombre + " dice: ¡Guau!");
  }
}

const miPerro = new Perro("Rocky");
miPerro.hablar(); // Imprime: Rocky dice: ¡Guau!
```

---

### Encapsulamiento y métodos privados (básico)

En JavaScript moderno, puedes usar el símbolo `#` para crear propiedades privadas:

```js
class Cuenta {
  #saldo = 0;
  constructor(nombre) {
    this.nombre = nombre;
  }
  depositar(monto) {
    this.#saldo += monto;
  }
  verSaldo() {
    return this.#saldo;
  }
}
const c = new Cuenta("Ana");
c.depositar(100);
console.log(c.verSaldo()); // 100
// console.log(c.#saldo); // Error: propiedad privada
```

---

### Ventajas de la POO

- Código más organizado y fácil de entender.
- Reutilización de código mediante clases y herencia.
- Facilita el mantenimiento y la ampliación de programas grandes.

### Desventajas o advertencias

- Puede ser más compleja para programas muy pequeños o simples.
- Abusar de la herencia puede complicar el código.

---

### Resumen para principiantes

- Piensa en objetos como "cosas" con características y acciones.
- Usa clases para crear muchos objetos similares.
- Aprovecha la herencia para no repetir código.
- Encapsula los detalles internos y muestra solo lo necesario.

**Consejo:**
Practica creando tus propios objetos y clases para entender mejor cómo funciona la POO en JavaScript.

## ¿Qué es una promesa en JS?

**Más información:** [Promesas en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)

Una **promesa** en JavaScript es un objeto especial que representa el resultado futuro de una operación asíncrona, es decir, una tarea que puede tardar un tiempo en completarse (como leer un archivo, pedir datos a un servidor, esperar una respuesta de una API, etc.).

---

### ¿Por qué son necesarias las promesas?

JavaScript, por naturaleza, es un lenguaje **síncrono**: ejecuta las instrucciones una tras otra, esperando a que cada una termine antes de pasar a la siguiente. Esto funciona bien para tareas rápidas, pero es un problema cuando una tarea puede tardar mucho, como:

- Consultar una API en internet (que puede demorar segundos).
- Leer archivos grandes.
- Esperar la respuesta de una base de datos.

Si JavaScript esperara a que estas tareas lentas terminaran antes de seguir, **todo el programa se "congelaría"** y el usuario tendría que esperar sin poder hacer nada más.

Las **promesas** permiten que JavaScript inicie una tarea lenta (como pedir datos a una API) y, mientras espera la respuesta, **el resto del programa puede seguir ejecutándose**. Cuando la tarea termina, la promesa "avisa" y ejecuta el código correspondiente (éxito o error).

---

---

### ¿Por qué existen las promesas?

Antes de las promesas, el manejo de operaciones asíncronas se hacía con funciones de "callback" (funciones que se ejecutan cuando termina la tarea). Esto podía llevar a un código difícil de leer y mantener, conocido como "callback hell" (infierno de callbacks).

Las promesas hacen el código más limpio, fácil de entender y de manejar errores.

---

### ¿Cómo funciona una promesa?

Una promesa puede estar en uno de estos **tres estados**:

- **Pendiente (pending):** La operación aún no ha terminado.
- **Cumplida (fulfilled/resolved):** La operación terminó con éxito.
- **Rechazada (rejected):** La operación falló o hubo un error.

Cuando creas una promesa, le pasas una función que recibe dos argumentos: `resolve` (para indicar éxito) y `reject` (para indicar error).

**Ejemplo básico:**

```js
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve("¡Todo salió bien!");
  } else {
    reject("Ocurrió un error");
  }
});

miPromesa
  .then((resultado) => {
    console.log(resultado); // "¡Todo salió bien!"
  })
  .catch((error) => {
    console.log(error);
  });
```

---

### ¿Cómo se usan las promesas?

- **then()**: Se ejecuta cuando la promesa se cumple (éxito).
- **catch()**: Se ejecuta si la promesa es rechazada (error).
- **finally()**: Se ejecuta siempre, haya éxito o error (opcional).

**Ejemplo con retraso simulado:**

```js
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Listo después de " + ms + " ms");
    }, ms);
  });
}

esperar(1000)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));
```

---

### Analogía para principiantes

Imagina que pides una pizza por teléfono:

- Al hacer el pedido, te dan una "promesa" de que la pizza llegará.
- Mientras esperas, puedes hacer otras cosas (el programa sigue corriendo).
- Cuando la pizza llega (éxito), te la entregan (se ejecuta `then`).
- Si hay un problema y no llega (error), te avisan (se ejecuta `catch`).

---

### ¿Por qué son útiles las promesas?

- Permiten escribir código asíncrono de forma más ordenada y legible.
- Facilitan el manejo de errores.
- Se pueden encadenar varias promesas para realizar tareas en secuencia.

---

### Encadenar promesas

Puedes hacer que varias tareas asíncronas se ejecuten una tras otra:

```js
esperar(1000)
  .then((mensaje) => {
    console.log(mensaje);
    return esperar(500);
  })
  .then((mensaje) => {
    console.log(mensaje);
  });
```

---

### Resumen para principiantes

- Una promesa es como una promesa en la vida real: puede cumplirse o no.
- Es una forma moderna y clara de manejar tareas que tardan en completarse.
- Usa `then` para manejar el éxito y `catch` para manejar errores.

**Consejo:**
Practica creando promesas simples y usando `then` y `catch` para entender cómo fluyen los resultados y los errores.

## ¿Qué hacen async y await por nosotros?

**Más información:** [async y await en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

`async` y `await` son dos palabras clave modernas en JavaScript que hacen que trabajar con promesas y código asíncrono sea mucho más fácil, legible y parecido al código "normal" (síncrono). Fueron introducidas en ES2017 y son ampliamente usadas hoy en día.

---

### ¿Por qué existen async y await?

Aunque las promesas ya mejoraron mucho el manejo de tareas asíncronas, el uso de `.then()` y `.catch()` puede hacer que el código se vea "enredado" cuando tienes muchas operaciones encadenadas. `async` y `await` permiten escribir código asíncrono que **parece** síncrono, facilitando la lectura y el mantenimiento.

---

### ¿Qué es una función async?

Una función declarada con la palabra clave `async` **siempre devuelve una promesa**. Dentro de esa función puedes usar `await` para "pausar" la ejecución hasta que una promesa se resuelva.

**Ejemplo básico:**

```js
async function saludar() {
  return "Hola";
}
saludar().then((mensaje) => console.log(mensaje)); // "Hola"
```

---

### ¿Qué hace await?

La palabra clave `await` **solo se puede usar dentro de funciones async**. Hace que JavaScript espere a que una promesa se resuelva (o falle) antes de continuar con la siguiente línea de código. Mientras tanto, el resto del programa sigue funcionando (no bloquea la ejecución global).

**Ejemplo con espera simulada:**

```js
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function proceso() {
  console.log("Inicio");
  await esperar(1000); // Espera 1 segundo
  console.log("Fin después de 1 segundo");
}
proceso();
```

---

### Ventajas de async/await

- El código es más fácil de leer y escribir, parece "paso a paso".
- Facilita el manejo de errores usando `try...catch` como en código síncrono.
- Permite combinar varias operaciones asíncronas de forma clara.

---

### Manejo de errores con async/await

Puedes usar `try...catch` para atrapar errores de promesas dentro de funciones async:

```js
async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://api.ejemplo.com/datos");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log("Ocurrió un error:", error);
  }
}
obtenerDatos();
```

---

### Analogía para principiantes

Imagina que tienes una lista de tareas (promesas) y quieres hacerlas en orden, esperando a que cada una termine antes de pasar a la siguiente, pero sin bloquear el resto de la casa (el programa). `await` es como decir "espera a que termine esta tarea antes de seguir", pero mientras tanto, otras cosas pueden seguir pasando.

---

### Resumen para principiantes

- Usa `async` para declarar funciones que trabajarán con promesas.
- Usa `await` dentro de esas funciones para esperar resultados de tareas asíncronas de forma clara y ordenada.
- El código se ve más limpio y fácil de entender que con muchos `.then()` y `.catch()`.

**Consejo:**
Practica transformando funciones con `.then()` a `async/await` para ver cómo mejora la claridad de tu código.
