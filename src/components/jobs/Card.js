import React from "react";
import {
  CardWrapper,
  Content,
  Time,
  Dot,
  JobTitle,
  Company,
  Location,
} from "./styles";
const Card = ({ time, schedule, title, company, location }) => {
  return (
    <CardWrapper>
      <Content>
        <Time>
          {time}
          <Dot>{" • "}</Dot>
          {schedule}
        </Time>
        <JobTitle>{title}</JobTitle>
        <Company>{company}</Company>
        <Location>{location}</Location>
      </Content>
    </CardWrapper>
  );
};

export default Card;
