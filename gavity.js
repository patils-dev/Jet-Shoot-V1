let canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext('2d');

// c.fillRect(150,100,20,20);
// // c.clearRect(canvas.width,canvas.height)

// //line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.stroke();

// //circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false);
// c.stroke();

// //smiley face
//     c.beginPath();
//     c.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
//     c.moveTo(110, 75);
//     c.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
//     c.moveTo(65, 65);
//     c.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
//     c.moveTo(95, 65);
//     c.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
//     c.stroke();

let x,y;
//more circle
function init()
{
    window.requestAnimationFrame(draw);
}
x=Math.random()*canvas.width+60;
// y=Math.random()*canvas.height+60;
y=window.innerHeight;
function draw() {


        // for(let i=0;i<5;i++)
        // {
            c.clearRect(0,0,innerWidth,innerHeight);
            y-=3;
            c.beginPath();
            c.arc(x,y,30,0,Math.PI*2,false);
            c.fillStyle="blue";
            c.fill();
        // }

    window.requestAnimationFrame(draw);

}
// function update()
// {
//     x+=1;
//     draw();
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.stroke();
//     // window.requestAnimationFrame(update);
// }
init();

// class Player{
//     constructor(x,y)
//     {
//       this.x=x;
//       this.y=y;
//     }
//     putPlayer(canvasCtx,a,b){
//        let p=new Image();
//        p.src=(this.type==='player-1')?'images/player-1.png':'images/player-2.png';
//        p.onload=()=>{
//          canvasCtx.drawImage(p,a,b);
//        }
//      }
//   }
// class Game
// {
//     constructor(canvas,width, height){
//         this.canvas = canvas;
//         this.width = width;
//         this.height = height;
//         canvas.width = width;
//         canvas.height = height;
//         this.players=[];
//         this.goblin=[];
//         this.ctx = canvas.getContext('2d');
//         document.addEventListener('keydown',this.keyPress.bind(this));
//         // document.addEventListener('keyup',this.keyPress.bind(this));
//     }
// }

// let bubbleShoot=document.getElementById('game-area');
// let game=new Game(550,550);