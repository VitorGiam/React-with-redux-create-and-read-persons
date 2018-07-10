import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { fetchPeople } from "../../actions/personList";
import { bindActionCreators } from "redux";

class personList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Last name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.people.map(person => {
                return (
                  <TableRow>
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.lastName}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { people: store.personReducer.people };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPeople }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(personList);
