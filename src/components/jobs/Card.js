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
const Card = ({ job }) => {
  return (
    <CardWrapper>
      <Content>
        <Time>
          {job.created_at}
          <Dot>{" • "}</Dot>
          {job.type}
        </Time>
        <JobTitle>{job.title}</JobTitle>
        <Company>{job.company}</Company>
        <Location>{job.location}</Location>
      </Content>
    </CardWrapper>
  );
};

export default Card;
