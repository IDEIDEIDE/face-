var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function start(){
    document.getElementById("input").innerHTML = ""

    recognition.start()
}

recognition.onresult = function (event){
    var content = event.results[0][0].transcript
    console.log(event)

    document.getElementById("input").innerHTML = content;
    console.log(content)

    if(content=="take my selfie"){
        speak()
    }


}
function speak(){
    var synth = window.speechSynthesis;
    speech_data = "taking your selfie in 5 seconds";
    var Utterthis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(Utterthis)
    Webcam.attach(camera)

    setTimeout(function(){
        takeSnap();
        save();
    },5000)
}

function takeSnap(){
    Webcam.snap(function(anyname){
        document.getElementById("results").innerHTML = "<img id = 'coolimage' src = " + anyname + ">"
    })}
Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")

function save(){
    link = document.getElementById("link")
    image = document.getElementById("coolimage").src
    link.href = image
    link.click()
}
