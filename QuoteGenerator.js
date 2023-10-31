const getNewQuote = async () => {
    //API for quotes
    var url="https://type.fit/api/quotes"; 

    // fetch the data from api
    const response = await fetch(url);

    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote = allQuotes[indx].text;
    //Store the author present at the index
    let auth = allQuotes[indx].author;

    //If theres no author, put anonymous as the author
    if(auth==null){
        author = "Anonymous";
    }

    //Added for loop to remove added text that is not part of authors name
    let l = 0;
    for (let i = 0; i < auth.length; i++){
        if(auth[i] != ","){
            l = l + 1;
        }else{
            break;
        }
    }
    let slicedWord = auth.slice(0,l);
    auth = slicedWord;


    //Display it in the HTML ID elements. 
    const text = document.getElementById("quote");
    const author = document.getElementById("author");

    //Insert the values inside HTML ID element using the innerHTML property.
    text.innerHTML = quote;
    author.innerHTML = "~ " + auth;

    //Twitter tweet button
    const tweetButton = document.getElementById("tweet");
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;

}
getNewQuote();