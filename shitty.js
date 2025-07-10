let Message 
let Name
let output 
let lastSTP
function clean(){
    lastSTP = localStorage.getItem("savedMessages");
    output.value = "";
    localStorage.removeItem("savedMessages");
    //output.value = null;
    //localStorage.setItem("savedMessages", output.value);
 }
 function stepBack(){
    output.value = lastSTP;
 }
window.onload = function(){
    Message = document.getElementById("message");
    Name = document.getElementById("name");
    output = document.getElementById("message-box");


    window.show = function() {
        let text = Message.value.trim();
        let N = Name.value.trim()
        output.value += N + ": " + text + "\n";
        Message.value = ""; 

        localStorage.setItem("savedMessages", output.value);
        }

    
        let saved = localStorage.getItem("savedMessages");
        if (saved) {
            output.value = saved;
        }
}