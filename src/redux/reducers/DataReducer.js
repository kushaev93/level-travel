import {
    FETCHING_START,
    FETCHING_SUCCESS
  } from "../actions/constants";

  
const initialState = {
    loaded:true,  
    loading: false,
    cities: [],
  };
  



export default function DataReducer (state = initialState, action){

    switch (action.type) {
  
      case FETCHING_START:
          return {
              ...state,
              loading: true
          };
  
  
      case FETCHING_SUCCESS: 
          return {
           ...state,
           cities: [...state.cities , ...action.cities],
           loading: false,
           loaded:false
       }
  
      default:
        return state;
    }
  };
  