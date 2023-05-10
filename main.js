const generateQuote = function() {
    const quotes = [
        {
            quotes: "If life were predictable it would cease to be life, and be without flavor.",
            author: "- Elanor Roosevelt"
        },
        {
            quotes: "Life is what happens when you're busy making other plans.",
            author: "- John Lennon"
        },
        {
            quotes: "When you reach the end of your rope, tie a knot in it and hang on.",
            author: "- Franklin D. Roosevelt"
        },
        {
            quotes: "Always remember that you are absolutely unique. Just like everyone else.",
            author: "- Margaret Mead"
        },
        {
            quotes: "The way to get started is to quit talking and begin doing.",
            author: "- James Cameron"
        }
    ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quotes;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author; 
}

window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
