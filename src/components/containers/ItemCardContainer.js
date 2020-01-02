import React from "react";
import { connect } from "react-redux";
import ItemCard from "../ItemCard";

const ItemCardContainer = props => {


const cards = props.activeCities.map(item => {
    return (
        <ItemCard title={item.title} />
    )
})


  return (
    <div className="item-wrap">
      {cards}
    </div>
 
    
  );
};

const mapStateToProps = state => {
  return {
    activeCities: state.activeCity
  };
};

export default connect(mapStateToProps)(ItemCardContainer);
