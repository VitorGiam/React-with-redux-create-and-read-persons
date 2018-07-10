const Styles = theme => ({
  div: {
    width: "90%",
    padding: 30
  },
  table: {
    width: "100%"
  },
  root: {
    width: "100%",
    overflowX: "auto",
    padding: 10
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  thead: {
    marginLeft: theme.spacing.unit,
    fontSize: 12
  },
  tbody: {
    marginLeft: theme.spacing.unit,
    fontSize: 12
  }
});

export default Styles;
