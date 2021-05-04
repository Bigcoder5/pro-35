var dog,happyDog,sadDog
var foodObj
var foodS,foodStock
var fedTime,lastFed,feed,addFood
var database
function preload()
{
	//load images here
 sadDog=loadImage("images/sad dog image.jpg")
 happydog=loadImage("dogImg1.png")


}

function setup() {
	database=firebase.database();
  createCanvas(1000,400);
  
  foodObj=newFood();

  foodstock = database.ref("food");
  foodstock.on("value",redStock);

  dog = createSprite(800,200,150,150)
  dog.addImage(sadDog)
  dog.scale=0.15
  
  feed = createButton("Feed the dog")
  feed.position(700,95)
  feed.mousepressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods);

}


function draw(){
  background(46,139,87)

  foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data)
  
  
  )































  drawSprites();
  //add styles here

}



