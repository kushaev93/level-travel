import React from "react";
import { connect } from "react-redux";
import ItemCard from "../ItemCard";
import { removeCard } from '../../redux/actions/actionsCreators'

//MUI
import Grid from "@material-ui/core/Grid";

const ItemCardContainer = props => {

  const { remove, activeCities , sortedCities } = props

  const handleRemove = (title) => {
    return remove(title)
  }
  console.log(activeCities)

  const cards = activeCities.map((item, key) => {
    return <ItemCard handleRemove={handleRemove} year={item.year} title={item.title} key={key} />;
  });

  const sortedByYear = sortedCities.map((item,key) => {
    return <ItemCard year={item.year} title={item.title} key={key} />
  }) 

  return (
    <>
    <div><h1>Your added</h1></div>
    <Grid container spacing={1}>
      {cards}
    </Grid>
    <div><h1>Sorted by year</h1></div>
    <Grid container spacing={1}>
      {sortedByYear}
    </Grid>
    </>
  );
};



const mapStateToProps = state => {
  return {
    activeCities: state.city.activeCity,
    sortedCities:state.city.sorted
  };
};


const mapDispatchToProps = dispatch => {
  return {
    remove: title => dispatch(removeCard(title))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemCardContainer);
