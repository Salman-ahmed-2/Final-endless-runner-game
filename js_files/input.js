export class InputHandler {
    constructor(game){
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => {
            // console.log(e.key);
            if ((   e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowDown' ||
                    e.key === 'ArrowRight' ||
                    e.key === ' '
                ) && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            } else if (e.key === '0') {
                this.game.debug = !this.game.debug;
            }; 
        });
        window.addEventListener('keyup', e => {
            if (    e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowDown' || 
                    e.key === 'ArrowRight' ||
                    e.key === ' ' ){
                this.keys.splice(this.keys.indexOf(e.key), 1); 
            }
        });
    }
}