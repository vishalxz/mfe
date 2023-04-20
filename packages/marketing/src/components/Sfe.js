import React from "react";
import { Pie } from "react-chartjs-2";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    contain:{
        width:'250px'
    },
  }));



const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};


const PieChart = () => {
    const classes = useStyles();
    return (
      <div  className={classes.contain}>
        <h2>"Example Pie Chart"</h2>
        <Pie data={data} />
      </div>
    );
  };
  
  export default PieChart;

