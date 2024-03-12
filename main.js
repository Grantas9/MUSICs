leftwristX = 0
leftwristY = 0
rightwristX = 0
rightwristY = 0
score = 0
song = "";


function preload()
{
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function setup(){
    createCapture(VIDEO);
    
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000")

    stroke("FF0000");

    if(scoreLeftWrist> 0.2)
{
    circle(leftWristX, leftWristY,20);
    InNumberleftWristY = Number(leftWristY);

    remove_decimals = floor(InNumberleftWristY)
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume
    song.setVolume(volume);
}
}

function modelLoaded(){
    console.log("posenet is initialised")
}


function gotPoses() {
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWrist Y = "+ leftWristY);
}
