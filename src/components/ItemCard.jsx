import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 345,
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
  const { handleRemove, title, year } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActions className={classes.actionsBtn}>
        <Button size="small" onClick={() => handleRemove(title)}>
          <CloseIcon />
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography variant="h6" component="h1">
          {year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
