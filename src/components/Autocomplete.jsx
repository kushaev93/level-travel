/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions/actionsCreators";
import { addCard } from "../redux/actions/actionsCreators"

//MUI
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "./Loader";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%"
  },
  searchBlock: {
    display: "flex",
    padding: "10px",
    width: "30%",
    justifyContent: "space-around"
  },
  addBtn: {
    border: "1px solid #000",
    padding: "0 12px",
    width: "90%",
    fontSize: "30px"
  },
  btnWrap: {
    margin: "17px 5px",
    width: "32%"
  }
}));

const AutocompleteField = (props) => {
  const classes = useStyles();

  const { loading, list , data , loaded, add } = props;

  const [selected, setSelected] = useState(null);

  const handleChange = event => {
    setSelected(event.target.value);
  };

  const handleAdd = () => {
      return add(selected)
  }
  

  return (
    <div className="wrapp">
      <div className={classes.searchBlock}>
        <Autocomplete
          id="autocomplete"
          className={classes.root}
          freeSolo
          onFocus={loaded ? data : null}
          options={list.map(option => option.title)}
          renderInput={params => (
            <TextField
              {...params}
              label="Enter City"
              margin="normal"
              variant="outlined"
              fullWidth
              onBlur={handleChange}
            />
          )}
        />
        <div className={classes.btnWrap}>
          <Button onClick={handleAdd} disabled={loading} className={classes.addBtn}>
            +
          </Button>
        </div>
        <div>{loading ? <Loader /> : ""}</div>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    data: () => dispatch(getData()),
    add: selected => dispatch(addCard(selected))
  }
}

const mapStateToProps = state => {
  return {
    list: state.cities,
    loading: state.loading,
    loaded:state.loaded
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(AutocompleteField);
