// use index.html file to make components file
import React, { Component } from 'react';
import api from '../util/api';
class Saved extends Component {
  state = {
    articles:[]
  }
  // this is to get all the articles from the DB
  getSavedArticles = () => {
    api.getArticles().then((res) => {
      this.setState({ articles: res.data });
    });
  };
// this is to delete articles from the DB
  deleteArticle = (id) => {
    api.deleteArticle(id)
      .then(this.getSavedArticles());
  };
  createArticleRows = () => {
    this.getSavedArticles();
    return this.state.articles.map(article => (
      <div className="row" key={article._id}>
        <a href={article.url}>{article.title}</a>
        &nbsp;<i className="fa fa-trash" onClick={() => this.deleteArticle(article._id)}></i>
      </div>
    ));
  };
    render() {
      return (
        <div className="Saved">
          <div class="row">
          <div class="col-sm-12">
            <br />
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <strong>
                    <i class="fa fa-table"></i>Saved Articles</strong>
                </h3>
              </div>
              <div class="panel-body" id="well-section">
              {
                this.createArticleRows()
              }
              </div>
            </div>
          </div>
        </div>
          
        </div>
    
      );
    }
  }
  
  export default Saved;