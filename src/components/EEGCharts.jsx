import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import ChartComponent from "./ChartComponent";
import { Container } from "@mui/material";

const EEGCharts = ({ chartsData }) => {
  return (
    <Container style={{ maxWidth: "100%" }}>
      {chartsData?.length &&
        chartsData.map((header, index) => (
          <Grid container key={index}>
            <Grid item xs={11} lg={11}>
              <ChartComponent csvData={chartsData[index]} />
            </Grid>
          </Grid>
        ))}
    </Container>
  );
};
EEGCharts.propTypes = {
  chartsData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default EEGCharts;
