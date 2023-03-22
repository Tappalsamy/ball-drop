var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(1520, 695);
  engine = Engine.create();
  world = engine.world;
 
 for(var k=20; k<=width ; k=k+70){
  divisions.push(new Divisions(k,height-100,10,200))
 }

 for(var k=0; k<=width ; k=k+100){
  divisions.push(new Divisions(k,450,60,10))
 }

 for(var i=75; i<=width ; i=i+50){
  plinkos.push(new Plinko(i,150))
 }

 for(var i=50; i<=width ; i=i+50){
  plinkos.push(new Plinko(i,215))
 }

 for(var i=75; i<=width ; i=i+50){
  plinkos.push(new Plinko(i,280))
 }

 for(var i=50; i<=width ; i=i+50){
  plinkos.push(new Plinko(i,345))
 }

}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(30)
  text("100",30,550)
  text("100",100,550)
  text("100",170,550)
  text("100",240,550)
  text("100",310,550)
  text("100",380,550)
  text("100",450,550)
  text("100",520,550)
  text("500",590,550)
  text("500",660,550)
  text("500",730,550)
  text("500",800,550)
  text("500",870,550)
  text("100",940,550)
  text("100",1010,550)
  text("100",1080,550)
  text("100",1150,550)
  text("100",1220,550)
  text("100",1290,550)
  text("100",1360,550)
  text("100",1430,550)


  Engine.update(engine);

  for(var k = 0; k<divisions.length ; k++){
    divisions[k].display()
  }

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display()
  }

  if(ball){
    ball.display()
    if(ball.body.position.y>750){
      if(ball.body.position.x<580){
        score=score+100
        ball = null

        if(count>=5){
          gameState ="end"
        }
      }
      else if(ball.body.position.x>580&&ball.body.position.x<940){
        score=score+500
        ball = null

        if(count>=5){
          gameState ="end"
        }
      }
      else if(ball.body.position.x>940){
        score=score+100
        ball = null

        if(count>=5){
          gameState ="end"
        }
      }
    }
  }

  if(gameState == "end"){
    push()
    background("black")
    textAlign(CENTER)
    textSize(100)
    text("GAME OVER",width/2,height/2)
    pop()
  }


  
}

function mousePressed(){
  if(gameState!="end"){
    count++
    ball = new Ball(mouseX,10,10,10)
  }
}
