import React from "react";
import "./App.css";
import { Cardlist } from "./components/card-list/Card-list.component.jsx";
import { SearchBox } from "./components/searchBox/searchBox.component.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monesters: [],
      searchFields: "",
    };
    
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monesters: users }));
  }
  handleChange = e=> {
    this.setState({ searchFields: e.target.value });
  }

  render() {
    const { monesters, searchFields } = this.state; // its like const monsters = this.state.monesters and const searchFields = this.state.searchFields
    const FilteredMonsters = monesters.filter((monister) =>
      monister.name.toLowerCase().includes(searchFields.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Monsters Cardlist</h1>
        <SearchBox
          placeholder="SearchMonister"
          handleChange={this.handleChange}
        />
        <Cardlist monesters={FilteredMonsters} />
      </div>
    );
  }
}
export default App;
