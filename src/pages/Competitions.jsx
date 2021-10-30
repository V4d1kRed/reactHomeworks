import React from 'react';
import Wrapper from "../components/wrapper/Wrapper";
import {Box} from "@mui/material";
import Container from "../components/container/Container";
import CompetitionsList from "../components/competitions/competitionsList/CompetitionsList";
import CompetitionsSearch from "../components/search/searchCompetitions/CompetitionsSearch";

const Competitions = () => {
  return (
    <Wrapper>
      <Box className="competitions">
        <Container>
          <Box className="competitions__body">
            <CompetitionsSearch/>
            <CompetitionsList/>
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default Competitions;
