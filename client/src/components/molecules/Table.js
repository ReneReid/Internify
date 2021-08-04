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

function createBasicData(jobId, title, dateCreated, matches) {
  return { jobId, title, dateCreated, matches };
}

function createData(isStarred, jobId, title, dateCreated, matches) {
  return { isStarred, jobId, title, dateCreated, matches };
}

export const TableBasic = (props) => {
  const classes = useStyles();
  const rows = props.data?.map((x) => {
    return createBasicData(
      x.jobId,
      x.header?.title,
      x.dateCreated ? new Date(x.dateCreated) : null,
      x.matches.length ? x.matches.length : null
    );
  });

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Posting&nbsp;title</TableCell>
          <TableCell align="left">Date&nbsp;created</TableCell>
          <TableCell align="left">Matches</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.jobId}
            hover
            onClick={() => {
              window.open(`/view/${row.jobId}`, "_self");
            }}
          >
            <TableCell className={classes.row} align="left">
              {row.title}
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.dateCreated
                ? row.dateCreated.getDate() +
                  "/" +
                  (row.dateCreated.getMonth() + 1) +
                  "/" +
                  row.dateCreated.getFullYear()
                : null}
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.matches}
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
    return createData(x.isStarred, x.title, x.dateCreated, x.matches);
  });
  console.log(rows);

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left" />
          <TableCell align="left">Posting&nbsp;title</TableCell>
          <TableCell align="left">Date&nbsp;created</TableCell>
          <TableCell align="left">Matches</TableCell>
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
              {row.matches}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
