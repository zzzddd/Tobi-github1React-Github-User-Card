import React from "react";
import styled from "styled-components";

import GithubCard from "./GithubCard";



const MainCard = props => {
  return (
    <div>
      <GithubCard data={props.data} />
    </div>
  );
};

export default MainCard;
