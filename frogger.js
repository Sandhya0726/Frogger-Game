class Frogger{
    constructor(){
        this.spriteHeight=200;
        this.spriteWidth=200;
        this.height=this.spriteHeight/5;
        this.width=this.spriteWidth/5;
        this.x=canvas.width/2 - this.width/2;
        this.y= canvas.height -this.height - 30;
        this.moving= false;
        this.frameX= 0;
        this.frameY= 0;
    }
    update(){
        if(keys[38]){    //up
            if(this.moving === false){
                this.y -= 50;
                this.moving= true;
            }
        }

        if (keys[40]){
             if(this.moving === false && this.y< canvas.height-this.height*2){
                this.y += grid;
                this.moving= true;
        }
    }

    if (keys[37]){
        if(this.moving === false && this.x> this.width){
           this.x -= grid;
           this.moving= true;
   }
}

if (keys[39]){
    if(this.moving === false && this.x< canvas.width-this.width*2){
       this.x += grid;
       this.moving= true;
}
}

if(this.y<0) scored();
}
    draw(){
        ctx3.fillStyle= 'green';
        ctx3.fillRect (this.x, this.y, this.width, this.height);
        ctx3.drawImage(frog,0,0,this.spriteWidth,this.spriteHeight,this.x-30,this.y-30,80,80);    }
         

    jump(){
        console.log('jump');
    }
}
const frogger= new Frogger();