import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles.scss";
import "./styles.less";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Search />
//       </div>
//     );
//   }
// }

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  onSearchChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="search"
            onChange={this.onSearchChange.bind(this)}
            name="search"
            ref="query"
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

// const onFormSubmit = (e) => {
//   e.preventDefault();
//   const keyword = e.target.elements.keyword.value;

//   if (keyword) {
//     e.target.elements.keyword.value = "";
//     const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=sCC77F9tN1exjCSgRdhiyzv01tBcdhWg&limit=15`;
//     const result = fetch(url).then((response) => {
//       return response.json();
//     });
//     <Item item={result} />;
//   }
// };

class Item extends React.Component {
  render() {
    return <img src={this.props.url} height="150" width="150" />;
  }
}

class ItemList extends React.Component {
  render() {
    const results = this.props.data;
    let items = results.map((item) => (
      <Item url={item.images.original.url} key={item.id} />
    ));

    return <ul>{items}</ul>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      url: ``,
    };
  }

  performSearch(query) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=sCC77F9tN1exjCSgRdhiyzv01tBcdhWg&limit=15`
    )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ items: responseData.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <Search onSearch={this.performSearch.bind(this)} />
        <ItemList data={this.state.items} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
