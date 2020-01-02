import React from "react";
import AutocompleteField from "./Autocomplete";
import ItemCardContainer from "./containers/ItemCardContainer";

function App() {

  return (
    <div className="container">
      <AutocompleteField />
      <ItemCardContainer />
    </div>
  );
}

export default App;
