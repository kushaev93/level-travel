import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: 27
  }
}));

export default function Filter(props) {

  const classes = useStyles();

  const { getYear , sorted } = props

console.log(sorted.length)


  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Sort By year
      </Typography>
      <Slider
        defaultValue={1921}
        aria-labelledby="discrete-slider-small-steps"
        step={10}
        marks
        min={1921}
        max={2017}
        onChangeCommitted={getYear}
        valueLabelDisplay="auto"
      />
      <span>Finded {sorted.length} Films of 100</span>
    </div>
  );
}
