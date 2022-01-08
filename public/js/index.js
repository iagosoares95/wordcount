var display = document.getElementById('num_words');
var error_msg = "Some text input is required."

function WordCount(str) {
    if (str.length > 0) {
        return str.split(" ").length;
    } else {
        return error_msg
    }
}

window.onload = function() {
    var countButton = document.getElementById("countwords");
    countButton.addEventListener("click", function() {
        display.innerText = WordCount(txttocount.value.trim())
    }, false);

    var input = document.querySelector('input'); // get the input element
    input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
    resizeInput.call(input); // immediately call the function

    function resizeInput() {
        this.style.width = this.value.length + "ch";
    }
}