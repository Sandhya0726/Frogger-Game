class Obstacle{
    constructor(x,y,width,height,speed,type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.carType =(Math.floor(Math.random()* numberOfCars));
    }
     
    draw(){
        if(this.type === "turtle")
        {
            ctx1.drawImage(turtle,0,210,70,70,this.x,this.y,70,40);
        //  ctx1.fillStyle='blue';
        // ctx1.fillRect(this.x,this.y,this.width,this.height);
        }

        else if(this.type==="log"){
            ctx3.drawImage(log,this.x,this.y,this.width,this.height);
        }
        
       else{
        ctx3.drawImage(car,this.frameX*this.width*2,this.carType*80,grid*2,grid/1.2,this.x,this.y,this.width,this.height);
       }

        

      
        // ctx1.fillStyle='blue';
        // ctx1.fillRect(this.x,this.y,this.width,this.height);

    }
    update(){
        this.x += this.speed*gameSpeed;
        this.frameX=0;
        if(this.speed>0){
            if(this.x > canvas.width+this.width){
                this.x = 0- this.width;
                this.carType =(Math.floor(Math.random()* numberOfCars));
            }
         }
        else{
            this.frameX=1;
            
                if(this.x<0-this.width){
                    this.x = canvas.width+this.width;
                    this.carType =(Math.floor(Math.random()* numberOfCars));
                }

            }
        }
    }


 function initObstacles(){
    //lane1
    for(let i = 0; i < 2; i++){
        let x= i*290;
        carsArray.push(new Obstacle(x,canvas.height-grid-40,grid,grid/2,0.8,'car'));
    }
    //lane2
    for(let i = 0; i < 3; i++){
        let x= i*210;
        carsArray.push(new Obstacle(x,canvas.height-grid*2-10,grid,grid/2,-1,'car'));
    }
     //lane3
     for(let i = 0; i < 2; i++){
        let x= i*230;
        carsArray.push(new Obstacle(x,canvas.height-grid*2-60,grid,grid/2,1.5,'car'));
    }
     //lane4
     for(let i = 0; i < 2; i++){
        let x= i*200;
        logsArray.push(new Obstacle(x,canvas.height-grid*3-30,grid,grid/2,-1.5,'log'));
    }
    for(let i = 0; i < 3; i++){
        let x= i*150;
        logsArray.push(new Obstacle(x,canvas.height-grid*4,grid/2,grid/2,0.8,'turtle'));
    }
}
initObstacles();

function handleObstacles(){
    for(let i=0 ; i < carsArray.length;i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for(let i=0 ; i<logsArray.length;i++){
        logsArray[i].update();
        logsArray[i].draw();

    }
    for( let i=0;i<carsArray.length;i++){
        if(collision(frogger,carsArray[i])){
            resetGame();
        }
    }


    // frogger on logs and trurtless
if( frogger.y<150&& frogger.y>50){
    safe=false;


    for(let i=0; i <logsArray.length;i++){
        if(collision(frogger,logsArray[i])){
            frogger.x +=logsArray[i].speed;
            safe=true;
        }
    }
    for(let i=0; i <logsArray.length;i++){
        if(collision(frogger,logsArray[i])){
            frogger.x +=logsArray[i].speed;
            safe=true;
        }
    }
     
    if(!safe){
        resetGame();
    }
}
}
