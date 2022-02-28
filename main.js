function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7GLpNtetI/model.json', {
        probabilityThreshold: 0.7
    }, modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        
        red = Math.floor(Math.random()*255) + 1;
        green = Math.floor(Math.random()*255) + 1;
        blue = Math.floor(Math.random()*255) + 1;
        document.getElementById("result_lable").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("result_confidence").style.color = "rgb("+red+","+green+","+blue+")";
        
        document.getElementById("result_lable").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2)+"%";
        
        image1 = document.getElementById("animal_image")
        
        if(results[0].label == "Background Noise"){
            image1.src = '80567-sound-voice-waves (1).gif';
            
        }
        else if (results[0].label == "Cat"){
            image1.src = '80567-sound-voice-waves (1).gif';
        }
        else if (results[0].label == "Dog"){
            image1.src = '80567-sound-voice-waves (1).gif';
        }  
        else {
            image1.src = '80567-sound-voice-waves (1).gif';
        }  
    }
}
