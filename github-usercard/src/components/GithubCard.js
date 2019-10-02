import React from "react";
import styled from "styled-components";
// import {Card} from "../components/styledComp"
// import GitHubCalendar from 'github-calendar';

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


const GithubCard = props => {


  return (
    <Card>
      <Card>
        <img
          alt={props.data.name}
          src={props.data.avatar_url}
         
        />
      </Card>
      <Card className="profile">
        <h2>{props.data.name}</h2>
        <h3>{props.data.login}</h3>
        {props.data.location && <p>Location: {props.data.location}</p>}
        <p>
          Profile:{" "}
          <a
            href={props.data.html_url}
           
          >
            {props.data.html_url}
          </a>
        </p>
        {props.data.followers && <p>Followers: {props.data.followers}</p>}
        {props.data.following && <p>Following: {props.data.following}</p>}
        {props.data.bio && <p>Bio: {props.data.bio}</p>}
      </Card>
      <div />
    </Card>
  );
};

export default GithubCard;
