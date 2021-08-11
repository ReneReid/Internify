import { React } from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { ChipRed, ChipYellow, ChipBlue } from "../atoms/Chips";

const useStyles = makeStyles({
  root: {
    width: 75,
  },
  head: {
    height: 30,
    padding: 0,
  },
  row: {
    borderBottom: "none",
    padding: "6px 0 0 0 ",
  },
});

const MatchesLegend = () => {
  const classes = useStyles();

  return (
    <Table className={classes.root} aria-label="simple table legend">
      <TableHead>
        <TableRow>
          <TableCell className={classes.head} align="center">
            Matches
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classes.body} align="center">
        <TableRow key="blue-label">
          <TableCell className={classes.row} align="center">
            <ChipBlue label={"> 75"} />
          </TableCell>
        </TableRow>
        <TableRow key="yellow-label">
          <TableCell className={classes.row} align="center">
            <ChipYellow label={"> 25"} />
          </TableCell>
        </TableRow>
        <TableRow key="red-label">
          <TableCell className={classes.row} align="center">
            <ChipRed label={"< 25"} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MatchesLegend;
