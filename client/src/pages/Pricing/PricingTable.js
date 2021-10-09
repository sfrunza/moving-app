import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Box from "@material-ui/core/Box";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SectionHeader from "src/components/SectionHeader";
import { Typography } from "@material-ui/core";
import Clock from "src/icons/Clock";
import Truck from "src/icons/Truck";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 510,
    maxWidth: 1160,
    width: "100%",
    margin: "auto",
  },
  bottomInfo: {
    display: "flex",

    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
    justifyContent: "space-between",
    marginTop: theme.spacing(3),
    "& p": {
      padding: theme.spacing(2),
      maxWidth: 600,
    },
  },
  icon: {
    position: "relative",
    top: 5,
    marginRight: 5,
  },
}));

const StyledTableCellHeader = withStyles((theme) => ({
  root: {
    borderBottom: "none",
    boxShadow: "none",
  },
  head: {
    fontWeight: 600,
    fontSize: "1rem",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableCellBodyName = withStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: 22,
  },
  body: {
    fontWeight: 600,
    fontSize: "1rem",
  },
}))(TableCell);

const StyledTableCellBody = withStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: 22,
  },
  body: {
    // fontSize: 16,
    fontSize: "1rem",
    fontWeight: 600,
    color: theme.palette.text.secondary,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.level2,
    // "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.background.level2,
    // },
  },
}))(TableRow);

function createData(crewSize, regular, subpick, pick) {
  return { crewSize, regular, subpick, pick };
}

const rows = [
  createData("2 Movers", 120, 140, 160),
  createData("3 Movers", 160, 180, 200),
  createData("4 Movers", 200, 220, 240),
  createData("Additional Mover", 40, 40, 40),
  createData("Additional Truck", 30, 30, 30),
];

export default function PricingTable() {
  const classes = useStyles();

  return (
    <>
      <SectionHeader
        title="Pricing table"
        subtitle="See the table below for fixed hourly rates."
        border
      />
      <TableContainer component={Paper} elevation={0}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCellHeader></StyledTableCellHeader>
              <StyledTableCellHeader align="left">
                Regular
              </StyledTableCellHeader>
              <StyledTableCellHeader align="left">
                SubPick
              </StyledTableCellHeader>
              <StyledTableCellHeader align="left">Pick</StyledTableCellHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.crewSize}>
                <StyledTableCellBodyName component="th" scope="row">
                  {row.crewSize}
                </StyledTableCellBodyName>
                <StyledTableCellBody align="left">
                  ${row.regular}
                </StyledTableCellBody>
                <StyledTableCellBody align="left">
                  ${row.subpick}
                </StyledTableCellBody>
                <StyledTableCellBody align="left">
                  ${row.pick}
                </StyledTableCellBody>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.bottomInfo}>
        <Typography variant="body2" color="textSecondary">
          <Truck className={classes.icon} />
          <b>40 min Travel Time</b> is applied to all jobs in Metro Boston area.
          (approx 20 min for our movers to get to you address from our office
          plus approx 20 min to get back when the move is finished).
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Clock className={classes.icon} />
          We have a <b>2 hours minimum,</b> including travel time, charge
          policy. After first 2 hours, the move time is prorated every 15 min.
        </Typography>
      </Box>
    </>
  );
}
