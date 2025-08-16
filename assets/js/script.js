class TicTacToe {

    constructor() {
        // Representa el tablero con 9 casillas vacías
        this.board = Array(9).fill('');

        // Jugador inicial
        this.currentPlayer = 'X';

        // Estado del juego (activo o terminado)
        this.gameActive = true;

        // Marcador de victorias
        this.scores = { X: 0, O: 0 };

        // Condiciones de victoria: filas, columnas y diagonales
        this.winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        // Inicializa el juego al cargar
        this.initializeGame();
    }

    initializeGame() {
        // Obtiene todas las celdas del tablero
        this.cells = document.querySelectorAll('.cell');

        // Referencias a elementos del DOM donde se muestran datos
        this.currentPlayerDisplay = document.getElementById('current-player');
        this.gameStatus = document.getElementById('game-status');
        this.resetBtn = document.getElementById('reset-btn');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.scoreX = document.getElementById('score-x');
        this.scoreO = document.getElementById('score-o');

        // Agrega los eventos necesarios (clicks en celdas y botones)
        this.addEventListeners();

        // Actualiza en pantalla quién empieza jugando
        this.updateDisplay();
    }

    addEventListeners() {
        // Para cada celda, se agrega un evento de click - Click en celdas del tablero
        this.cells.forEach(cell => {
            cell.addEventListener('click', this.handleCellClick.bind(this));
        });

        // Botón de reiniciar partida - Click en botón de reinicio de partida
        this.resetBtn.addEventListener('click', this.resetGame.bind(this));

        // Botón de reiniciar marcador y tablero - Click en botón de nueva partida (reinicia marcador)
        this.newGameBtn.addEventListener('click', this.newGame.bind(this));
    }

    handleCellClick(event) {
        // Celda que fue clickeada
        const cell = event.target;

        // Obtiene el índice de la celda desde el atributo data-index
        const index = parseInt(cell.getAttribute('data-index'));

        // Si la celda ya tiene valor o el juego no está activo, se ignora
        if (this.board[index] !== '' || !this.gameActive) {
            return;
        }

        // Realiza el movimiento del jugador actual
        this.makeMove(index, cell);
    }

    // Realiza el movimiento de un jugador en el tablero
    makeMove(index, cell) {
        console.log("Realiza el movimiento de un jugador en el tablero", "index:", index, "cell:", cell);
    }

    // Verifica si hay un ganador revisando las combinaciones posibles
    checkWinner() {
        console.log("Verifica si hay un ganador revisando las combinaciones posibles");
    }

    // Verifica si el juego terminó en empate
    checkDraw() {
        console.log("Verifica si el juego terminó en empate");
    }
    // Resalta las celdas ganadoras en el tablero
    highlightWinningCells(winningCondition) {
        console.log("Resalta las celdas ganadoras en el tablero", winningCondition);
    }

    // Maneja el final del juego mostrando mensajes y actualizando marcador
    handleGameEnd(result) {
        console.log("Maneja el final del juego mostrando mensajes y actualizando marcador", result);
    }

    // Cambia el turno al siguiente jugador
    switchPlayer() {
        console.log("Cambia el turno al siguiente jugador");
    }

    // Actualiza la pantalla para mostrar el jugador actual
    updateDisplay() {
        console.log("Actualiza la pantalla para mostrar el jugador actual");
    }

    // Actualiza el marcador de los jugadores en pantalla
    updateScoreDisplay() {
        console.log("Actualiza el marcador de los jugadores en pantalla");
    }

    // Reinicia la partida sin afectar los puntajes acumulados
    resetGame() {
        console.log("Reinicia la partida sin afectar los puntajes acumulados");
    }

    // Reinicia completamente el juego y los puntajes
    newGame() {
        console.log("Reinicia completamente el juego y los puntajes");
    }
}

// Inicia el juego cuando la página termina de cargar
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});
