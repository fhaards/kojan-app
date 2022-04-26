import React, { Component } from "react";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products/category/smartphones", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((records) => {
        this.setState({
          records: records,
        });
      })
      .catch((error) => console.log(error));
  }

  renderListing() {
    let recordList = [];
    this.state.records.slice(0, 3).map((record) => {
      return recordList.push(<p>{record[0].title}</p>);
    });
    return recordList;
  }

  render() {
    return this.renderListing();
  }
}

export default Listing;
