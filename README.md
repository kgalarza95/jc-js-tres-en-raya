# 🎮 Tic-Tac-Toe: Guía para Enseñar JavaScript

## 📋 Información General del Curso

**Proyecto:** Juego de Tic-Tac-Toe interactivo  
**Duración:** 2 clases  
**Nivel:** Intermedio  
**Objetivo:** Aplicar conocimientos de JavaScript en un proyecto práctico completo  

---

## 🚀 Descripción del Proyecto

Este proyecto es un juego completo de Tic-Tac-Toe desarrollado con HTML, CSS y JavaScript vanilla.

---

## 🎯 CLASE 1: Fundamentos de JavaScript y Estructura del Proyecto (16 de agosto de 2025)

### **Duración:** 120 minutos

### **Objetivos de Aprendizaje:**
- Comprender la estructura básica de JavaScript
- Aprender sobre clases y métodos
- Entender la manipulación del DOM
- Implementar lógica básica del juego

### **Preparación Previa:**

#### **Conocimientos Previos Requeridos:**
- HTML y CSS básico
- JavaScript fundamentals (variables, funciones, arrays, objetos)
- Estructuras de control (if/else, loops)
- Estructuras de datos básicas

### **Estructura de la Clase 1:**

#### **1. Introducción (15 min)**
- Presentación del proyecto final
- Demostración del juego funcionando
- Explicación de la estructura de archivos

#### **2. Conceptos Fundamentales (30 min)**

**Temas a cubrir:**
```javascript
// 1. Clases en JavaScript
class TicTacToe {
    constructor() {
        // Explicar el constructor
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
    }
}

// 2. Métodos y this
// 3. Arrays y manipulación
// 4. Selección de elementos DOM
```

**Actividades:**
- Crear la clase básica
- Inicializar propiedades
- Explicar `this` y su contexto

#### **3. Configuración Inicial (25 min)**

**Implementar juntos:**
```javascript
initializeGame() {
    this.cells = document.querySelectorAll('.cell');
    this.currentPlayerDisplay = document.getElementById('current-player');
    this.gameStatus = document.getElementById('game-status');
    this.resetBtn = document.getElementById('reset-btn');
    this.newGameBtn = document.getElementById('new-game-btn');
    this.scoreX = document.getElementById('score-x');
    this.scoreO = document.getElementById('score-o');
    
    this.addEventListeners();
    this.updateDisplay();
}
```

**Conceptos clave:**
- `document.querySelectorAll()`
- `document.getElementById()`
- Diferencias entre NodeList y elementos individuales

#### **4. Event Listeners (30 min)**

**Implementar:**
```javascript
addEventListeners() {
    this.cells.forEach(cell => {
        cell.addEventListener('click', this.handleCellClick.bind(this));
    });
    
    this.resetBtn.addEventListener('click', this.resetGame.bind(this));
    this.newGameBtn.addEventListener('click', this.newGame.bind(this));
}

handleCellClick(event) {
    const cell = event.target;
    const index = parseInt(cell.getAttribute('data-index'));
    
    if (this.board[index] !== '' || !this.gameActive) {
        return;
    }
    
    this.makeMove(index, cell);
}
```

**Conceptos clave:**
- `addEventListener()`
- `bind()` y contexto de `this`
- `event.target`
- `getAttribute()`
- `parseInt()`

#### **5. Práctica en Vivo y Dinámica de Refuerzo (25 min)**

- Dinámica "Code Challenge" (15 min)
  - Dividir la clase en equipos pequeños (mínimo 2, máximo 3)
  - Cada equipo recibe un pequeño desafío de código relacionado con los conceptos vistos:
    - Modificar el estilo de las X/O
    - Añadir un contador de tiempo por turno
    - Implementar un mensaje personalizado de victoria
    - Añadir un botón de reinicio
    - Añadir un botón de nuevo juego
    - Añadir un contador de puntuación
    - Añadir un contador de turnos
  - Los equipos tienen 10 minutos para implementar su desafío
  - Presentación rápida de soluciones y discusión grupal

---

## 🎯 CLASE 2: Lógica del Juego y Funcionalidades Avanzadas (23 de agosto de 2025)

### **Duración:** 90-120 minutos

### **Objetivos de Aprendizaje:**
- Implementar lógica de victoria
- Manejar estados del juego
- Trabajar con arrays multidimensionales
- Implementar funciones de reset y puntuación

### **Preparación Previa:**

#### **Continuación Directa (5 min):**
- Verificar que el código de la clase anterior funciona
- Breve repaso de los conceptos implementados

### **Estructura de la Clase 2:**

#### **1. Lógica de Movimientos (25 min)**

**Implementar:**
```javascript
makeMove(index, cell) {
    this.board[index] = this.currentPlayer;
    cell.textContent = this.currentPlayer;
    cell.classList.add(this.currentPlayer.toLowerCase());
    
    if (this.checkWinner()) {
        this.handleGameEnd('win');
    } else if (this.checkDraw()) {
        this.handleGameEnd('draw');
    } else {
        this.switchPlayer();
    }
}

switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateDisplay();
}
```

**Conceptos clave:**
- Modificación de arrays
- `textContent` vs `innerHTML`
- `classList.add()`
- Flujo condicional
- Operador ternario

#### **2. Detección de Victoria (35 min)**

**Implementar paso a paso:**
```javascript
checkWinner() {
    // Definir condiciones de victoria
    this.winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];
    
    for (let condition of this.winningConditions) {
        const [a, b, c] = condition;
        if (this.board[a] && 
            this.board[a] === this.board[b] && 
            this.board[a] === this.board[c]) {
            this.highlightWinningCells(condition);
            return true;
        }
    }
    return false;
}

checkDraw() {
    return this.board.every(cell => cell !== '');
}

highlightWinningCells(winningCondition) {
    winningCondition.forEach(index => {
        this.cells[index].classList.add('winning');
    });
}
```

**Conceptos clave:**
- Arrays bidimensionales
- Destructuring assignment `[a, b, c]`
- `for...of` loops
- Operadores lógicos
- Comparaciones múltiples
- Método `every()`

#### **3. Gestión de Estados (20 min)**

**Implementar:**
```javascript
handleGameEnd(result) {
    this.gameActive = false;
    
    if (result === 'win') {
        this.scores[this.currentPlayer]++;
        this.gameStatus.textContent = `Player ${this.currentPlayer} Wins! 🎉`;
        this.gameStatus.className = 'game-status winner';
    } else {
        this.gameStatus.textContent = "It's a Draw! 🤝";
        this.gameStatus.className = 'game-status draw';
    }
    
    this.updateScoreDisplay();
}

updateDisplay() {
    this.currentPlayerDisplay.textContent = this.currentPlayer;
    this.currentPlayerDisplay.style.color = this.currentPlayer === 'X' ? '#e53e3e' : '#3182ce';
}

updateScoreDisplay() {
    this.scoreX.textContent = this.scores.X;
    this.scoreO.textContent = this.scores.O;
}
```

**Conceptos clave:**
- Objetos para almacenar datos
- Template literals
- Manejo de estados booleanos
- Modificación de estilos CSS desde JS

#### **4. Funciones de Reset (15 min)**

**Implementar:**
```javascript
resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
    
    this.cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
    });
    
    this.gameStatus.textContent = '';
    this.gameStatus.className = 'game-status';
    this.updateDisplay();
}

newGame() {
    this.resetGame();
    this.scores = { X: 0, O: 0 };
    this.updateScoreDisplay();
}
```

#### **5. Inicialización del Juego (10 min)**

**Implementar:**
```javascript
// Al final del archivo
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});
```

---

## 🛠️ Metodología de Enseñanza

### **Enfoque Práctico:**
- **Coding en vivo:** Todo el código se desarrolla en tiempo real durante la clase
- **Aprendizaje colaborativo:** Los estudiantes participan activamente en la construcción
- **Sin tareas:** Todo el aprendizaje ocurre durante las sesiones
- **Aplicación inmediata:** Los conceptos se aplican directamente al proyecto

---

## 📊 Evaluación y Seguimiento

### **Criterios de Evaluación:**
- ✅ Comprensión de clases y métodos
- ✅ Manipulación correcta del DOM
- ✅ Implementación de lógica de juego
- ✅ Manejo de eventos
- ✅ Gestión de estados

### **Proyecto Final:**
Los estudiantes deben tener un juego de Tic-Tac-Toe completamente funcional con:
- Detección de victoria
- Manejo de empates
- Sistema de puntuación
- Funciones de reset
- Interfaz responsive

---

## 📚 Recursos Adicionales

### **Recursos de Consulta (Opcionales):**
- [Documentación de MDN sobre DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- [Referencia de métodos de arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Clases en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)

### **Extensiones Opcionales:**
- Guardar puntuaciones en localStorage
- Agregar sonidos al juego

---

## 💡 Consejos para el Instructor

2. **Coding en vivo:** Escribir todo el código durante la clase
3. **Participación activa:** Los estudiantes sugieren soluciones y mejoras
4. **Debugging colaborativo:** Resolver errores en conjunto
5. **Enfoque práctico:** Mínima teoría, máxima implementación
6. **Proyecto completo:** Terminar con un juego 100% funcional en las 2 clases

---

## 🚨 Posibles Dificultades y Soluciones

| Dificultad | Solución |
|------------|----------|
| Concepto de `this` | Usar ejemplos simples y diagramas |
| Event listeners | Demostrar con console.log |
| Arrays bidimensionales | Dibujar en excalidraw |
| Debugging | Enseñar console.log y breakpoints |
| Binding de funciones | Explicar contexto paso a paso |
| Manipulación del DOM | Práctica con elementos simples |

---

### **Controles del Juego:**
- **Clic en celda:** Realizar movimiento
- **Reset Game:** Reiniciar partida (mantiene puntuación)
- **New Game:** Nuevo juego completo (resetea puntuación)

---

## 🏆 Objetivos de Aprendizaje Alcanzados

Al completar este proyecto, los estudiantes habrán aprendido:

### **Conceptos de JavaScript:**
- ✅ Clases y constructores
- ✅ Métodos y propiedades
- ✅ Manipulación del DOM
- ✅ Event listeners
- ✅ Arrays y métodos de arrays
- ✅ Objetos y propiedades
- ✅ Condicionales y bucles
- ✅ Template literals
- ✅ Destructuring

### **Conceptos de Programación:**
- ✅ Lógica de juegos
- ✅ Gestión de estados
- ✅ Validación de datos
- ✅ Manejo de eventos
- ✅ Debugging básico

### **Buenas Prácticas:**
- ✅ Código limpio y organizado
- ✅ Separación de responsabilidades
- ✅ Nomenclatura descriptiva
- ✅ Comentarios útiles

---

## 📝 Notas Finales

Este proyecto proporciona una base sólida para enseñar JavaScript de manera práctica y divertida. Los estudiantes no solo aprenden conceptos técnicos, sino que también desarrollan un proyecto completo que pueden mostrar y seguir mejorando.

**¡Buena suerte con tus clases! 🚀**

---

*Desarrollado como material educativo para enseñanza de JavaScript*