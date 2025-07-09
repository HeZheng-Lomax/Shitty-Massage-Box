window.onload = function(){
    let Message = document.getElementById("message");
    let Name = document.getElementById("name");
    let output = document.getElementById("message-box");


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