import readline from 'readline-sync';
class Player
{ 
    constructor(name)
    {
        this.name = readline.question("Plese enter your name: ")
        this.getCurrentTime = function ()
        {
            const now = new Date();
            const hours = now.getHours();
            const minuts = now.getMinutes();
            const seconds = now.getSeconds();
            return `${hours}:${minuts}:${seconds}`
        }
        this.times = function(star, end)
        {
            this.star = star;
            this.end = end;
        }
        
    }
}

const motiPlayer = new Player()
console.log(motiPlayer.getCurrentTime());
