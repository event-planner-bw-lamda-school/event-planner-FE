import React from "react";
import Styled from "styled-components";
import items from "../data";
import { withRouter } from "react-router-dom";

const Event = props => {
  const item = items.find(item => {
    console.log(props.match.params);
    return `${item.id}` === props.match.params.id;
  });

  if (!item) return <h4>loading...</h4>;
  return (
    <WRAPPER>
      <CARD>
        <p>Client: {item.name}</p>
        <p>Event: {item.eventTitle}</p>
        <p>Date: {item.date}</p>
        <p>Time: {item.time}</p>
        <h4>Location</h4>
        <p>{item.location}</p>
        <p>
          Address:{" "}
          <span>
            {item.address}, {item.city}, {item.state}
          </span>
        </p>
        <h4>Budget</h4>
        <p>{item.budget}</p>
        <h4>Description</h4>
        <p>{item.description}</p>
        <button on>Update</button>
        <button>Delete</button>
      </CARD>
    </WRAPPER>
  );
};

export default withRouter(Event);

const CARD = Styled.div`
    text-align: left;
    max-width: 500px;
    border: 1px solid black;
    padding: 10px;
    margin-top: 100px;
    border-radius: 5px;
`;

const WRAPPER = Styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;
