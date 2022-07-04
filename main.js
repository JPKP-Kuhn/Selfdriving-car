const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2,canvas.width*0.9);
const car=new Car(road.getLaneCenter(1),100,30,50,"KEYS");
const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2)
];

animate();
function generateRandomColor(){
    var randomColor='#' +Math.floor(Math.random()* 16777215).toString(16);
    return randomColor;
}
var fixcolor=generateRandomColor();
var fixcolor2=generateRandomColor();

function animate(){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }
    car.update(road.borders,traffic);
    
    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(ctx,fixcolor);
    }
    car.draw(ctx,generateRandomColor());

    ctx.restore();
    requestAnimationFrame(animate);

} 