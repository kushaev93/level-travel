/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { connect } from "react-redux";

import { SORT_BY_YEAR } from "../redux/actions/constants";

//Lodash
import _ from "lodash";

//ActionCreators
import { getData } from "../redux/actions/actionsCreators";
import { addCard } from "../redux/actions/actionsCreators";
import { clearErr } from "../redux/actions/actionsCreators";
import { errAction } from "../redux/actions/actionsCreators";
import { sortBy } from "../redux/actions/actionsCreators";

//Components
import PopUpMessage from "./PopUpMessage";
import Loader from "./Loader";
import Filter from "./Filter";

//MUI
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const AutocompleteField = props => {
  const classes = useStyles();

  const {
    loading,
    list,
    data,
    loaded,
    add,
    errors,
    err,
    clear,
    sortByYear,
    sorted
  } = props;

  const [selected, setSelected] = useState(null);

  const handleBlur = event => {
    setSelected(event.target.value);
  };

  // const res = _.orderBy(list, ["year"], ["desc"]);
  // console.log(res);

  const getYear = (event, value) => {
    const data = _.filter(list, el => {
      return el.year > value;
    });

    sortByYear(SORT_BY_YEAR, data);
    console.log(data);
    console.log(data.length);

    // _.filter(users, function(o) { return !o.active; });
  };

  const handleAdd = () => {
    return new Promise((resolve, reject) => {
      if (selected) {
        const req = _.find(list, { title: selected });
        return resolve(req);
      } else {
        throw "Can't be add empty field";
      }
    })
      .then(res => add(res.title, res.year))
      .catch(e => {
        return new Promise((resolve, reject) => {
          if (e) {
            return resolve(e);
          }
        })
          .then(e => err(e))
          .then(() => clear());
      });
  };

  return (
    <>
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
                onBlur={handleBlur}
              />
            )}
          />
          <div className={classes.btnWrap}>
            <Button
              onClick={handleAdd}
              disabled={loading}
              className={classes.addBtn}
            >
              +
            </Button>
          </div>
          <div>{loading ? <Loader /> : ""}</div>
        </div>
        <Filter getYear={getYear} sorted={sorted} />
      </div>
      <PopUpMessage messages={errors} />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    data: () => dispatch(getData()),
    add: (title, year) => dispatch(addCard(title, year)),
    err: e => dispatch(errAction(e)),
    clear: () => dispatch(clearErr()),
    sortByYear: (tip, data) => dispatch(sortBy(tip, data))
  };
};

const mapStateToProps = state => {
  const { cities, loaded, loading } = state.data;
  const { errors } = state.error;
  const { sorted } = state.city;
  return {
    list: cities,
    loading: loading,
    loaded: loaded,
    errors: errors,
    sorted : sorted
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteField);
