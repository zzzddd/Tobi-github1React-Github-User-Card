import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import MainCard from "./components/MainCard";
import GithubCard from "./components/GithubCard";

class App extends React.Component {
  state = {
    data: '',
    user: "zzzddd",
    followers: [],
    
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)

      .then(res => {
        console.log("user data...",res)
        this.setState({ data: res.data})})
      .catch(err => console.log(err));
    axios
      .get(`https://api.github.com/users/${this.state.user}/followers`)

      .then(res => {console.log('inside followers..',res.data)
        this.setState({ followers: res.data })})

      .catch(err => console.log(err));
  }

  
  render() {
    console.log("Followers", this.state.followers);
    return (
      <div>
        <GithubCard data={this.state.data} />
        {this.state.followers.map(user => (
          <MainCard
            key={user.id}
            data={user}
          />
        ))}
      </div>
    );
  }
}

export default App;
