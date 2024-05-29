import React, { useEffect, useState } from "react";
import BarChartBox from "./BarChartBox";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import ButtonBar from "./ButtonBar";
import ChartComponent from "./ChartComponent";

const Dashboard = () => {

const theme = useTheme();


  return (
    <div>
       <Typography 
        sx={{
          fontFamily: 'Display', fontSize: '50px'}}>Dashboard</Typography>
      <ButtonBar />
      <ChartComponent />
          </div>
  );
};

export default Dashboard;