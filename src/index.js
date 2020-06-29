import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles.scss";
import "./styles.less";

class Gifs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
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
  renderItems() {
    return this.state.gifs.map((gif) => (
      <Gif key={gif.id} gif={gif.images.original.url} />
    ));
  }

  render() {
    return <div className="row"> {this.renderItems()}</div>;
  }
}

class Gif extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.gif} height="150" width="150" />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "world",
    };
  }

  render() {
    return (
      <div>
        <Gifs query={this.state.query} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
