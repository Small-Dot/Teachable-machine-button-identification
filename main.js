Webcam.set({
width:290,
height:200,
image_format:'png',
png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'

});
}
console.log('ml5.js:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/f1J_60Dvh/model.json', modelLoaded );
function modelLoaded()
{
    console.log('model loaded');
}
function check()
    {
        var img = document.getElementById("captured_image");
        classifier.classify(img, gotResult);
    }
    function gotResult(error, results)
    {
       if (error){
           console.error(error);
       }
       else {
           console.log(results);
       }
       document.getElementById("result_object_name").innerHTML = results[0].label;
       var percentage = results[0].confidence*100;
      document.getElementById("result_object_accuracy").innerHTML = percentage.toFixed(1)+"%";
      
    }