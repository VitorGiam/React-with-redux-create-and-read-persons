import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import WithFetching from "./TableBody";
// import Styles from "./Styles";

function personListCompose(props) {
  const { classes } = props;

  return (
    <div className={classes.div}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <h1 className={classes.thead}>Lista de carros</h1>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Sobre nome</TableCell>
            </TableRow>
          </TableHead>
          <WithFetching />
        </Table>
      </Paper>
    </div>
  );
}

personListCompose.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(personListCompose);
