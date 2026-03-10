// FUnciones y metodos que manipulan los strings

let str = "Sasa, el pendejo rapido salto sobre un pero gandul que salto";
console.log(str.length); // 60
console.log(str.charAt(10)); // e
console.log(str.includes("salto")); // true
console.log(str.concat(" furioso.")); // Añade furioso al final
console.log(str.startsWith("Sasa, el pende")); // true
console.log(str.repeat(2));
console.log(str.match(/rapido/i)); // retorna array con data, accepta regeex
console.log(str.search("salto")); // retorna solo el index, accepta regex
console.log(str.indexOf("salto")); // 24
console.log(str.lastIndexOf("salto")); // 55
console.log(str.replace("Sasa", "Caty"));
console.log(str.slice(20)); // de indice pa final ->
console.log(str.slice(-10)); // de final pa indice <-
console.log(str.slice(10, 20)); // entre indices -> <-
console.log(str.split(" ")); // retorna array con palabras divididas
console.log(str.trim()); // trimStart() y trimEnd()
console.log(str.toUpperCase()); // upercase

// Hay un monton mas...
