import {
    ADD_CITY,
    REMOVE_CITY,
    SORT_BY_YEAR
  } from "../actions/constants";


  
const initialState = {
    activeCity: [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    ],
    sorted:[]
  };
  

export default function CityReducer (state = initialState, action){
    switch (action.type) {
      case ADD_CITY:
        return {
          ...state,
          activeCity: [...state.activeCity , {title: action.payload.title, year:action.payload.year}]
        };
  
      case REMOVE_CITY:
        return {
            ...state,
            activeCity: state.activeCity.filter(item => item.title !== action.payload)
        };

        case SORT_BY_YEAR:
          return {
              ...state,
              sorted: [...action.payload]
          };
  
      default:
        return state;
    }
  };