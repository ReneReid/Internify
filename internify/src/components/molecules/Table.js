import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { StarPlain, StarColoured } from "../atoms/Icon";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    maxWidth: 600,
  },
  row: {
    borderBottom: "none",
  },
});

function createBasicData(jobId, title, dateCreated, score) {
  return { jobId, title, dateCreated, score };
}

function createData(isStarred, title, dateCreated, score) {
  return { isStarred, title, dateCreated, score };
}

export const TableBasic = (props) => {
  const classes = useStyles();
  const rows = props.data?.map((x) => {
    return createBasicData(x.jobId, x.title, x.dateCreated, x.score);
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
          <TableRow key={row.jobId}>
            <TableCell className={classes.row} align="left">
              {row.title}
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.dateCreated}
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.score}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const TableStar = (props) => {
  const classes = useStyles();
  const rows = props.data?.map((x) => {
    return createData(x.isStarred, x.title, x.dateCreated, x.score);
  });
  console.log(rows);

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left" />
          <TableCell align="left">Posting&nbsp;title</TableCell>
          <TableCell align="left">Date&nbsp;created</TableCell>
          <TableCell align="left">Score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell className={classes.row} align="left">
              {row.isStarred ? <StarColoured /> : <StarPlain />}
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.title}
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.dateCreated}
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.score}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
