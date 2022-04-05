//console.log("connected");

let quotes = ["`Genius is one percent inspiration and ninety-nine percent perspiration.`  - Thomas Edison ",
"`You can observe a lot just by watching.` - Yogi Berra",
"`A house divided against itself cannot stand.`  - Abraham Lincoln",
"`Difficulties increase the nearer we get to the goal.`  - Johann Wolfgang von Goethe",
"`Fate is in your hands and no one elses` - Byron Pulsifer", 
"`Be the chief but never the lord.` -Lao Tzu", 
];
let newQuote = () => {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];

}

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("quote").value = newQuote();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======