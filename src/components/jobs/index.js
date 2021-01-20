import React from "react";
import { Wrapper } from "./styles";
import { useGetJobs } from "../../hooks/useGetJobs";

import Card from "./Card";

export const Jobs = () => {
  const { jobs, loading, error } = useGetJobs();
  return (
    <Wrapper>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, try again</h1>}

      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </Wrapper>
  );
};
