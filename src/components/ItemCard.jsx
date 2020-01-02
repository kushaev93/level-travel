import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: "10px "
  },
  title: {
    fontSize: 14
  },
  actionsBtn: {
    justifyContent: "flex-end"
  }
});

const ItemCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActions className={classes.actionsBtn}>
        <Button size="small">Delete Icon</Button>
      </CardActions>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
