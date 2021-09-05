import Create from "./components/Create";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import axios from "axios";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";

function App() {
  const [APIData, setAPIData] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(
      "https://6130665a5fc50700175f189a.mockapi.io/mockData"
    );
    setAPIData(data.data);
  };

  return (
    <Router>
      <div className="App">
        <div className="main">
          <h2 className="main-header">
            <Link exact to="/crud-v1-react/">
              React Crud Operations
            </Link>
          </h2>
          {/* <Switch> */}
          <Navbar />
          <div>
            <Route
              exact
              path="/crud-v1-react/read"
              render={(props) => <Create {...props} fetchData={fetchData} />}
            />
          </div>
          <div>
            <Route
              exact
              path="/crud-v1-react/read"
              render={(routeProps) => (
                <Read {...routeProps} APIData={APIData} fetchData={fetchData} />
              )}
            />
          </div>
          <div>
            <Route exact path="/crud-v1-react/update" component={Update} />
          </div>
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
