function animate(){
    
    ctx3.clearRect(0,0,canvas.width,canvas.height);
    ctx1.clearRect(0,0,canvas.width,canvas.height);
    ctx2.drawImage(background_lvl1,0,0,canvas.width,canvas.height);
    frogger.update();
    frogger.draw();
    handleObstacles();
    handleScoreBoard();
    ctx3.drawImage(grass,0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}
animate();

// event listeners
window.addEventListener('keydown',function(e){
    keys=[];
    keys[e.keyCode]= true;
    if(keys[37] || keys[38] || keys[39] || keys[40]){
     frogger.jump();
    }
});
 
window.addEventListener('keyup',function(e){
    delete keys[e.keyCode];
    frogger.moving= false;
});

function scored(){
    score++;
    gameSpeed+= 0.05;
    frogger.x=canvas.width/2 - frogger.width/2;
    frogger.y=canvas.height -frogger.height - 30;
}

function handleScoreBoard(){
    ctx3.fillStyle='black';
    ctx3.strokeStyle='black';
    ctx3.font='15px verdana';
    ctx3.strokeText('score',190,15)
    ctx3.font='45px verdana';
    ctx3.fillText(score,195,55)
    ctx3.font='15px verdana';
    ctx3.strokeText('Collisions:' + collisionCount,15,15)
    ctx3.strokeText('Gamespeed:' + gameSpeed.toFixed(1),15,40)
    
}

//collision detection between two rectangles
function collision(first,second){
    return!(first.x> second.x+second.width ||
        second.x> first.x+first.width ||
        first.y> second.y+second.height ||
        second.y> first.y+ first.height);
}

function resetGame(){
    frogger.x=canvas.width/2 - frogger.width/2;
  frogger.y=canvas.height -frogger.height - 30;
    collisionCount++;
    score=0;
    gameSpeed=1;
}

