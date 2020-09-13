
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,binL,binM,binR,bin, binImage;

function preload()
{
	binImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 700);

	bin = createSprite(1050,575,20,20);
	bin.addImage("image1", binImage)
	bin.scale = 0.41;

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,10);
	console.log(paper1);

	ground = new Ground(620,650,1200,20);
	binL = new Bin(1002,575,10,130);
	binR = new Bin(1098,575,10,130);
	binM = new Bin(1050,635,86,10);

	

	Engine.run(engine);
}


function draw() {
  background(255);

  binL.display();
  binR.display();
  binM.display();

  drawSprites();

  paper1.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-20});
	}
}


