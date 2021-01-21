import React, { useState } from "react";

import ReactTimeAgo from "react-time-ago";
import ReactMarkdown from "react-markdown";
import {
  CardWrapper,
  Content,
  Time,
  Dot,
  JobTitle,
  Company,
  CompanyLogo,
  Location,
  JobWrapper,
  modalStyles,
} from "./styles";
import Modal from "react-modal";

const Card = ({ job }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!modalIsOpen);
  return (
    <CardWrapper>
      <Content onClick={toggleModal}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          style={modalStyles.content}
        >
          <JobWrapper>
            <ReactMarkdown source={job.description} />
            <button onClick={toggleModal}>close</button>
          </JobWrapper>
        </Modal>
        <CompanyLogo>
          <img src={job.company_logo} alt="dev_job_company_logo" />
        </CompanyLogo>
        <Time>
          <ReactTimeAgo date={job.created_at} />

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
