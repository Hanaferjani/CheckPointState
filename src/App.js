import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      FullName: "Hana",
      Bio: "i am pretty girl. i have 38 years old. i love challenges and hard workers",
      Img: "https://www.shutterstock.com/image-photo/little-blonde-girl-walks-summer-260nw-1780237781.jpg",
      Profession: "Accounting Charted",
      Show: false

    }
  }
  HideProfile=()=>{
    this.setState({Show:!this.state.Show})

  }
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <button onClick={this.HideProfile}> {this.state.Show == true ? "Hide" : "Show"} profile </button>
        {this.state.Show==true? <div>
          <h1>{this.state.FullName}</h1>
          <h4>{this.state.Bio}</h4>
          <img src={this.state.Img} />
          <p>{this.state.Profession}</p>
          </div>:null}
        </div>
        )
  }
}
