import React from "react";
import { useFetchCsvData } from "../hooks/useFetchCsvData";
import EEGCharts from "../components/EEGCharts";
import { FIRST_HEADER, SECOND_HEADER } from "../constants/constants";
import { Grid } from "@mui/material";
import UnitsMenu from "../components/UnitsMenu";
// SECOND_HEADER
// headers={FIRST_HEADER}

const EEGPortal = () => {
  const [isLoading, firstHalf, secondHalf] = useFetchCsvData("/index.json");

  return (
    <div className="charts-container">
      {isLoading && firstHalf && secondHalf ? (
        <p>Loading Charts</p>
      ) : (
        <div>
          <div>
            <Grid container>
              <Grid item xs={1} lg={1}>
                <UnitsMenu data={FIRST_HEADER} />
                <UnitsMenu data={SECOND_HEADER} />
              </Grid>
              <Grid
                item
                xs={11}
                lg={11}
                style={{ width: "100%", overflowX: "auto" }}
              >
                <EEGCharts chartsData={firstHalf} />
                <EEGCharts chartsData={secondHalf} />
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default EEGPortal;
