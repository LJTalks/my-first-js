/**
 * Read more at https://www.brainyquote.com/topics/free-quotes
 */
function generate() {
    var quotes = {
        "- Albert Camus": '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "- Nikos Kazantzakis": '"I hope for nothing. I fear nothing. I am free."',
        "- Confucius": '"I hear and I forget. I see and I remember. I do and I understand."',
        "- Confucius" : '"It does not matter how slowly you go as long as you do not stop."',

    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;

}