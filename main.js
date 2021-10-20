camera = document.getElementById("camera");
Webcam.attach(camera);
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        //write code to store the speech API in variable, store the label of result which we want the system to speak ,use the SpeechSynthesisUtterance() function to convert text to speech and then use speak() to read out the text provided




        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}