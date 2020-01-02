import {
    ADD_CITY,
    REMOVE_CITY
  } from "../actions/constants";


  
const initialState = {
    loading: false,
    activeCity: [
      { title: "The Shawshank Redemption" },
      { title: "The Godfather" },
      { title: "The Godfather: Part II" },
      { title: "The Dark Knight" }
    ]
  };
  

export default function CityReducer (state = initialState, action){
    switch (action.type) {
      case ADD_CITY:
        return {
          ...state,
          activeCity: [...state.activeCity , ...action.payload]
        };
  
      // case REMOVE_CITY:
      //   return {
      //       ...state,
      //     activeCity: activeCity.map(city => {
      //         if(city.title !== action.title){
      //             return city
      //         }
      //         return city
      //     })
      //   };
  
      default:
        return state;
    }
  };