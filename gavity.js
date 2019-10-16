// let canvas=document.querySelector('canvas');
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
// let c=canvas.getContext('2d');

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
    // c.beginPath();
    // c.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // c.moveTo(110, 75);
    // c.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // c.moveTo(65, 65);
    // c.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // c.moveTo(95, 65);
    // c.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // c.stroke();

// let x,y;
// //more circle
// function init()
// {
//     window.requestAnimationFrame(draw);
// }
// x=Math.random()*canvas.width+60;
// // y=Math.random()*canvas.height+60;
// y=window.innerHeight;
// function draw() {


//         // for(let i=0;i<5;i++)
//         // {
//             c.clearRect(0,0,innerWidth,innerHeight);
//             y-=3;
//             c.beginPath();
//             c.arc(x,y,30,0,Math.PI*2,false);
//             c.fillStyle="blue";
//             c.fill();
//         // }

//     window.requestAnimationFrame(draw);

// }
// // function update()
// // {
// //     x+=1;
// //     draw();
// //     c.beginPath();
// //     c.arc(x,y,30,0,Math.PI*2,false);
// //     c.stroke();
// //     // window.requestAnimationFrame(update);
// // }
// init();

//try1

// class Bubble{
//     constructor(x,y,r)
//     {
//       this.x=x;
//       this.y=y;
//       this.r=r
//     }
//     putPlayer(canvasCtx,a,b){
//        let p=new Image();
//        p.src=(this.type==='player-1')?'images/player-1.png':'images/player-2.png';
//        p.onload=()=>{
//          canvasCtx.drawImage(p,a,b);
//        }
//      }
//      draw(canvasCtx)
//     {
//             // console.log("hagsdh");
//             // canvasCtx.clearRect(0,0,canvasCtx.width,canvasCtx.height);
//             this.y=this.y-3;
//             canvasCtx.beginPath();
//             canvasCtx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
//             canvasCtx.fillStyle="blue";
//             canvasCtx.fill();
//             // console.log("hagsdh");
//     }
//   }
// class Game
// {
//     constructor(canvas,width, height){
//         this.canvas = canvas;
//         this.width = width;
//         this.height = height;
//         canvas.width = width;
//         canvas.height = height;
//         this.bubbles=[];
//         // this.goblin=[];
//         this.ctx = canvas.getContext('2d');
//         // document.addEventListener('keydown',this.keyPress.bind(this));
//         // document.addEventListener('keyup',this.keyPress.bind(this));
//     }
//     createBubble(){
//         let x=Math.random()*this.canvas.width+60;
//         let r=30;
//         let y=window.innerHeight;
//         let b=new Bubble(x,y,r);
//         b.draw(this.ctx);
//         // this.bubbles.push(b);
//         // window.requestAnimationFrame(this.createBubble())
//       }
// }
// let bubbleShoot=document.getElementById('game-area');
// let game=new Game(bubbleShoot,550,550);
// game.createBubble()

//try2

class Bubble
{
  constructor()
  {
        this.canvas = null;
        this.ctx=null;
        this.width = null;
        this.height = null;
        this.scale = 1;
        this.offset = {top: 0, left: 0};
        this.bubbles=[];
        this.x=null;
        this.y=null;
        this.r=null;
  }
  init()
  {
    this.canvas = document.getElementById('game-area');
    this.canvas.height=window.innerHeight;
    this.canvas.width=window.innerWidth;
    this.width=this.canvas.width;
    this.height=this.canvas.height;
    this.ctx = this.canvas.getContext('2d');

    this.offset.top = this.canvas.offsetTop;
    this.offset.left = this.canvas.offsetLeft;
    console.log(this.offset.top);
    console.log(this.offset.left)

  }
  render(){

    // for(let i=0;i<10;i++)
    // {
      
      this.r=Math.floor(Math.random()*30);
      this.x=Math.floor(Math.random()*400);
      this.y=100;
      let Inp=new Input(bub);
      Inp.circle(this.x,this.y,this.r)
      this.update();
    // }


  }
  update(){

    let Inp=new Input(bub);
    this.x+=1;
    Inp.circle(this.x,this.y,this.r)
    this.render();
    console.log("draaw");
  }

}

class Input{

    constructor(){
      this.x= 0;
      this.y=0;
      this.tapped=false;
    }

    set(data) {
        this.x = (data.pageX - bub.offset.left) / bub.scale;
        this.y = (data.pageY - bub.offset.top) / bub.scale;
        this.tapped = true;
        console.log(this.x);
        console.log(this.y);
    }

    clear(){
    bub.ctx.clearRect(0, 0, bub.width, bub.height);
    }

    circle(x, y, r) {
      // bub.ctx.clearRect(0,0,bub.canvas.width,bub.canvas.height); 
        bub.ctx.fillStyle = "blue";
        bub.ctx.beginPath();
        bub.ctx.arc(x + 5, y + 5, r, 0,  Math.PI * 2, true);
        bub.ctx.closePath();
        bub.ctx.fill();
    }

}

window.onload=function(){
  bub=new Bubble();
  bub.init();
  bub.render();
  // bub.update();
  window.addEventListener('click', function(e) {
    e.preventDefault();
    let Inp=new Input(bub);
    Inp.set(e);
    // Inp.circle()
    // this.Input.set(e);
  }, false);

}
