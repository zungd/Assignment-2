

let game = prompt('Are you ready to play the game?');

if (game=='yes') {
    var choice = prompt('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.\n \nWhich direction would you like to head? (Please enter "forward", "left", or "right").');


switch(choice){
    
    case "left":
     alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
    break;
    case "foward":
     alert("You walk 100 yards and safely make your way out of the cave.");
    break;
    case "right":
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
       break;
       default:
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");  
        break;
}

let rating = Number(prompt('Please rate game from 1-10'));

if (rating > 10) {
    alert('Thank you for playing');
    } else if (rating >=6 && rating <=10) {
    alert('Thank you and play again');
    } else if (rating < 5) {
    alert('Thank you. I am working hard to improve the game.');
  
} 

} else if(game =='no'){
    alert('Thank you and hope you play again sometime');
}