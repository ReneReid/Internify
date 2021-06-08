import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    maxWidth: 600,
  },
});

function createBasicData(title, dateCreated, score) {
  return { title, dateCreated, score };
}

export const BasicTable = (props) => {
  const classes = useStyles();
  console.log(props.data);

  const rows = props.data?.map((x) => {
      return createBasicData(x.title, x.dateCreated, x.score);
  });

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Posting&nbsp;title</TableCell>
          <TableCell align="left">Date&nbsp;created</TableCell>
          <TableCell align="left">Score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell align="left">{row.title}</TableCell>
            <TableCell align="left">{row.dateCreated}</TableCell>
            <TableCell align="left">{row.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasicTable;
