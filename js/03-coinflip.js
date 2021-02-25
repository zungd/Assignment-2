let coinFlip = Math.round(Math.random()) +1;

let choice = prompt("Heads or Tails");

    
if (coinFlip ===1) {
    var flipResult = "Heads";
} else {
    var flipResult = "Tails";
}
if (flipResult == choice) {
    if (flipResult == "Heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
} else {
    if (flipResult == "Heads") {
        alert("The flip was heads and you chose tails...you lose!");
    } else {
        alert("The flip was tails and you chose heads...you lose!");
    }
}



