import React, { Component } from "react";

class PersonDetails extends Component {
  constructor() {
    super()
    this.state = {
      person: []
    }
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          person: data.results,
        })
      })

  }

  render() {
    return ()
  }
}


export default PersonDetails