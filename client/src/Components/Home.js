// use index.html file to make components file
import React, { Component } from 'react';
import buildQueryURL from "../util/nytQuery";
// axios is used to make get and post requests.
import axios from "axios";
import api from '../util/api';
  class Home extends Component {
    state = {
      results:[]
    }
// this creates the function to get the article information
    searchHandler = () =>{
      let searchTerm = document.getElementById("search-term");
      let startYear = document.getElementById("start-year");
      let endYear= document.getElementById("end-year")
      let queryURL = buildQueryURL(searchTerm, startYear, endYear);
      // this is to set the results to the state.
      axios.get(queryURL)
          .then(res =>{
            this.setState({
              results: res.data.response.docs
            })
          })
          this.displayResults();
    }
    // this function displays the results
    displayResults = () => {
      return (
        <div>
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-table"></i> Results</strong>
            </h3>
          </div>
          <div className="panel-body">
            { this.createResultRows() }
          </div>
        </div>
      )
    };
    createResultRows = () =>{
      return this.state.results.map(article =>(
        // This displays everything as html file
        <div className ="row" key={article._id}>
        <a href = {article.web_url}>{article.headline.main}
        </a>
        {/* &nbsp=character code for non-breaking space. save article if icon is clicked  */}
&nbsp;<i className="fa fa-save" onClick={() => this.saveArticle(article)}></i>
        </div>
      )) 
    }
    // this is to save the articles to the database
    saveArticle = article =>{
api.saveArticle({
  // to parse data from NYT object
  title: article.headline.main,
  date: article.pub_date,
  url: article.web_url
})
    }
    // This creates a form for the article search.
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="jumbotron">
            <h1 className="text-center">
              <strong>
                <i className="fa fa-newspaper-o"></i> New York Times Article Scrapper</strong>
            </h1>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <br />

            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <strong>
                    <i class="fa  fa-list-alt"></i> Search Parameters</strong>
                </h3>
              </div>
              <div class="panel-body">
    
                <div class="form-group">
                    <label for="search">Search Term:</label>
                    <input type="text" class="form-control" id="search-term" />
                  </div>

                  <div class="form-group">
                    <label for="pwd">Number of Records to Retrieve:</label>
                    <select class="form-control" id="article-count">
                      <option value="1">1</option>

                      <option value="5" selected>5</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="topic">Topic:</label>
                    <input type="text" class="form-control" id="topic" />
                  </div>

                  <div class="form-group">
                    <label for="start-year">Start Year (Optional):</label>
                    <input type="text" class="form-control" id="start-year" />
                  </div>

                  <div class="form-group">
                    <label for="end-year">End Year (Optional):</label>
                    <input type="text" class="form-control" id="end-year" />
                  </div>
                  
                  <button type="submit" class="btn btn-default" id="run-search" onClick={
                    this.searchHandler}>
                    <i class="fa fa-search"></i> Search</button>
                 
      
              </div>
            </div>
          </div>
        </div>
        {/* this displays the articles */}
        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-primary">
              { this.displayResults() }
            </div>
          </div>
        </div>
        
      </div>

    );
  }
}

export default Home;