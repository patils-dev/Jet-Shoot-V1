let c=document.getElementById("game-space");
c.height=window.innerHeight;
c.width=window.innerWidth;
let ctx=c.getContext("2d");
            
function Circle(x,y,r,dy){
        this.r=r;
        this.x=x;
        this.y=y;
        this.dy=dy;

    
    this.draw=function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle="#DAE0E2";
        ctx.fill();
    }
    this.update=function(){
        this.y-=this.dy; 
        this.draw();
        console.log("draaw")
    }
}

;
setInterval( function play(){
    let circleArray=[];
    let r=Math.floor(Math.random()*30);
    let x=Math.floor(Math.random()*400);
    let y=Math.floor(Math.random()*700);
    for(let i=0;i<4;i++)
        {
            circleArray.push(new Circle(x,y,r,1));  
            console.log(i);
        }
        console.log(circleArray);

    ctx.clearRect(0,0,innerWidth,innerHeight); // just clear the whole game area
    circleArray.forEach(c=>{ c.update();});
    console.log("after foreach")
 
 },1000)
play();