import React, { Component } from "react";
import axios from "axios";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Styles from "../Styles";
import mitter from "../../../mitter";

const WithFetching = url => Comp =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null
      };
    }

    eventGetCars() {}

    componentDidMount() {
      this.setState({ isLoading: true });
      axios(url)
        .then(response => {
          if (response) {
            console.log(response);
            return response.data;
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return <Comp {...this.props} {...this.state} />;
    }
  };

const App = ({ data, isLoading, error }) => {
  const persons = data.persons || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <TableBody>
      {persons.map(person => {
        return (
          <TableRow className={Styles.tbody} key={person.id}>
            <TableCell className={Styles.row}>{person.id}</TableCell>
            <TableCell className={Styles.row}>{person.name}</TableCell>
            <TableCell className={Styles.row}>{person.lastName}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default WithFetching("/persons")(App);
