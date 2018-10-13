// this builds the url to call the NYT/use the api
function buildQueryURL(searchTerm, startYear, endYear) {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  
    // add the api key parameter (the one we received when we registered)
    queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
  
    // grab text the user typed into the search input, add as parameter to url and return the articles
    // & is used to add a query to a url and q is the variable for the nyt.
    queryURL += "&q=" + searchTerm.value;
  
    // if the user provides a startYear, include it in the queryURL//parseInt turns a string into an interger
    if (parseInt(startYear)) {
      queryURL += "&begin_date=" + startYear + "0101";
    }
  
    // if the user provides an endYear, include it in the queryURL
    if (parseInt(endYear)) {
      queryURL += "&end_date=" + endYear + "0101";
    }
  
    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");

    return queryURL;
  }
  // this export this function
  export default buildQueryURL;