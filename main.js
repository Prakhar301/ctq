var difference="";
function setup(){
    canvas=createCanvas(400,400);
    canvas.position(500,100);
    video=createCapture(VIDEO);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background('#15d448');
    textSize(difference);
    fill('#15d488');
    text("Prakhar",50,400);
}
function modelLoaded(){
    console.log("PoseNet Intialized");
}