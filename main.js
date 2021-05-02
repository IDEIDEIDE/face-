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
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speech_data = document.getElementById("input").value;
    var Utterthis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(Utterthis)
    Webcam.attach(camera)
}

Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")

