import React from "react";
import { Wrapper } from "./styles";
import { data } from "./data";
import Card from "./Card";
export const Jobs = () => {
  return (
    <Wrapper>
      {data.map((job) => (
        <Card
          key={job.id}
          time={job.time}
          schedule={job.schedule}
          title={job.title}
          company={job.company}
          location={job.location}
        />
      ))}
    </Wrapper>
  );
};
