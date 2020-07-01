import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles.scss";
import "./styles.less";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      query: "",
    };
  }

  onSearch(e) {
    e.preventDefault();
    const value = e.target.elements.searchtext.value.trim();

    this.setState(() => {
      return {
        query: value,
      };
    });
    e.target.elements.searchtext.value = "";
  }

  render() {
    return (
      <div className="main">
        <div class="container">
          <form onSubmit={this.onSearch}>
            <div className="input-group">
              <input
                className=" form-control"
                type="text"
                class="form-control"
                placeholder="Search"
                name="searchtext"
              />
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="main1">
          <Gifs query={this.state.query} />
        </div>
      </div>
    );
  }
}

class Gifs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  render() {
    if (`${this.props.query}`) {
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.props.query}&api_key=sCC77F9tN1exjCSgRdhiyzv01tBcdhWg&limit=20`;

      fetch(url)
        .then((respone) => respone.json())
        .then((d) => {
          this.setState({
            gifs: d.data,
          });
        })
        .catch((error) => console.log(error));
    }
    return this.state.gifs.map((gif) => (
      <Gif key={gif.id} gif={gif.images.original.url} />
    ));
  }
}

class Gif extends React.Component {
  render() {
    return (
      <div className="singleBlock">
        <img src={this.props.gif} height="150" width="150" />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
