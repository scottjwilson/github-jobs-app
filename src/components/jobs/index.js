import React, { useState } from "react";
import { Wrapper } from "./styles";
import { useGetJobs } from "../../hooks/useGetJobs";

import Card from "./Card";
import SearchForm from "./SearchForm";

export const Jobs = () => {
  const [params, setParams] = useState({});

  const { jobs, loading, error } = useGetJobs(params);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;

    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Wrapper>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, try again</h1>}

      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </Wrapper>
  );
};
