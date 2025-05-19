const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generateBtn = document.getElementById("generateBtn");

async function generateQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML= data.content;
    author.innerHTML= data.author;
}


generateBtn.addEventListener('click', () => generateQuote(api_url));
twitter.addEventListener('click', () => tweet());


function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"---by "+author.innerHTML,"tweet window", "width=700px","height=300px")
}