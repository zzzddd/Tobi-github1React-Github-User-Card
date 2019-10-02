import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import GitHubCalendar from 'github-calendar';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .center {
    text-align: center;
  }
`;

const SearchBar = styled.div`
  background-color: #24292e;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0;
    color: #e8e8e8;
    font-size: 28px;

    .no-bold {
      font-weight: normal;
    }
  }

  input {
    background-color: #3f4448;
    width: 70%;
    color: #8d908d;
    border: none;
    outline: none;
    border-radius: 3px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    padding: 8px;
  }

  button {
    margin-left: 10px;
    border: none;
    outline: none;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #8d908d;
    }
  }
`;


const Card = styled.div`
  border: 1px solid silver;
  border-radius: 3px;
  width: 90%;
  max-width: 550px;
  margin: 30px auto;

  .main-content {
    display: flex;
  }

  .img-wrapper {
    background-color: #f6f8fa;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    max-width: 200px;
    border-radius: 3px;
    cursor: pointer;
  }

  .profile {
    border-left: 1px solid silver;
    padding: 0 2%;
  }

  .extra-content {
    border-top: 1px solid silver;
  }
`;
export default { GlobalStyle,SearchBar, Card };