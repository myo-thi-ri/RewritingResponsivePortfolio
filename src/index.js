function getQuote() {
  return fetch("https://favqs.com/api/qotd")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.quote.body);
      return data.quote.body;
    });
}


function showQuote(quote) {
  let quoteContainer = document.querySelector(".quote-container");
  quoteContainer.innerHTML = `<h3>${quote}</h3>`;
}

getQuote().then((data) => {
  showQuote(data);
});
