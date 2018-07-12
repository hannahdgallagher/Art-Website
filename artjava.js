var Switch = "off";

function aboutme(){
  if (Switch == "off"){
    document.getElementById('aboutmebutton').innerText = "My name is Hannah and I'm a rising junior. I am a self taught artist and enjoy experimenting with different mediums :) ";
    Switch = "on";
  } else {
    document.getElementById('aboutmebutton').innerText = "About Me";
    Switch = "off";
  }


}
