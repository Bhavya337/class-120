

function setup(){
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
 video.hide();
clasifier=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
  console.log("modle has been loaded ");
}
function draw(){
  image(video,0,0,300,300);
  clasifier.classify(video,gotResult);

}
function gotResult(error,results){
  if (error){
    console.error(error);
  }
  else 
  {
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
  
  }

} 