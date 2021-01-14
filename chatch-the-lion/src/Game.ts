import { Board, Cell, Deadzone } from './board';
import { PlayerType, Player } from "./Player"
import "./Piece"

export class Game {
    private selectedCell: Cell;
    private turn = 0;
    private currentPlayer = Player;
    private gameInfoEl = document.querySelector('.alert');
    private state: 'STARTED' | 'END' = 'STARTED';

    readonly upperPlayer = new Player(PlayerType.UPPER);
    readonly lowerPlayer = new Player(PlayerType.UPPER);

    readonly board = new Board(this.upperPlayer, this.lowerPlayer);
    readonly upperDeadZone = new Deadzone('upper');
    readonly lowerDeadZone = new Deadzone('lower');

    constructor() {
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el)
        
        this.board.render()
        this.renderInfo()
    }

    renderInfo() {
        this.gameInfoEl.innerHTML = `#${this.turn}턴, ${this.currentPlayer.type}차례`
    }
    changeTurn() {
        this.selectedCell.decative();
    }
}