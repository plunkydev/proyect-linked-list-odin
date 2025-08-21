# Proyecto: Linked Lists (Listas Enlazadas) – Práctica de Conocimiento

## ¿Qué voy a hacer?

Este proyecto es una práctica de conocimiento, no simplemente una tarea mecánica. La idea es que **construyas desde cero una estructura de datos fundamental**—una Linked List—para afianzar tus bases. Aunque JavaScript maneja bien arrays, este ejercicio te obliga a pensar en cómo funcionan realmente las estructuras dinámicas, lo cual te prepara para retos más complejos (como árboles, grafos, algoritmos avanzado) :contentReference[oaicite:1]{index=1}.

No te dejes engañar por la aparente simplicidad: **entender bien esto te pondrá por delante del juego**.

---

## ¿Qué aprenderás?

- **¿Qué es una Linked List y por qué existe?**  
  Una lista enlazada es una colección lineal de nodos donde cada uno apunta al siguiente mediante una referencia. Aunque en JS no la necesitemos por la flexibilidad de los arrays, es una base crítica para estructuras más avanzadas :contentReference[oaicite:2]{index=2}.

- **Componentes clave:**
  - Un nodo con `value` y `nextNode` (inicializados en `null`).
  - Una clase o fábrica `LinkedList` que encapsula la lista completa :contentReference[oaicite:3]{index=3}.

- **Métodos esenciales a implementar:**
  1. `append(value)`: agrega un nodo al final.
  2. `prepend(value)`: lo agrega al inicio.
  3. `size`: devuelve la cantidad de nodos.
  4. `head`: obtiene el primer nodo.
  5. `tail`: el último nodo.
  6. `at(index)`: el nodo ubicado en el índice dado.
  7. `pop()`: elimina el último nodo.
  8. `contains(value)`: booleano si existe el valor.
  9. `find(value)`: retorna el índice del nodo con el valor o `null`.
  10. `toString()`: representa la lista como `( value ) -> ( value ) -> null` :contentReference[oaicite:4]{index=4}.

- **Para subir la dificultad (extra crédito):**
  - `insertAt(value, index)`: inserta un nodo en una posición específica.
  - `removeAt(index)`: elimina el nodo en esa posición.  
    Ten en cuenta cómo cambian los `nextNode` en la operación :contentReference[oaicite:5]{index=5}.

---

## ¿Cómo lo voy a probar?

1. Crea `main.js` e importa tu `LinkedList`.
2. Instancia la lista y agrega datos, por ejemplo:
   ```js
   const list = new LinkedList();
   list.append('dog');
   list.append('cat');
   list.append('parrot');
   list.append('hamster');
   list.append('snake');
   list.append('turtle');
   console.log(list.toString());
   // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
   ```
3. Usa los métodos para ver el comportamiento de la lista.
