import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "24px 0px"
  }
}));

export default function CircularUnderLoad() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress disableShrink />
    </div>
  );
}
