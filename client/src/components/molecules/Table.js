import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { ChipRed, ChipYellow, ChipBlue } from "../atoms/Chips";
import { StarPlain, StarColoured } from "../atoms/Icon";
import "./styles/Table.css";

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

function createStarredData(isStarred, jobId, title, dateCreated, matches) {
  return { isStarred, jobId, title, dateCreated, matches };
}

function createDataWithAuthor(
  profilePicture,
  authorName,
  jobId,
  title,
  dateCreated,
  matches
) {
  return { profilePicture, authorName, jobId, title, dateCreated, matches };
}

export const TableBasic = (props) => {
  const classes = useStyles();
  const rows = props.data?.map((x) => {
    return createBasicData(
      x.jobId,
      x.header?.title,
      x.dateCreated ? new Date(x.dateCreated) : null,
      x.matches ? x.matches : 0
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
              {row.matches < 25 && (
                <div>
                  <ChipRed label={row.matches} />
                </div>
              )}
              {row.matches >= 25 && row.matches <= 75 && (
                <div>
                  <ChipYellow label={row.matches} />
                </div>
              )}
              {row.matches > 75 && (
                <div>
                  <ChipBlue label={row.matches} />
                </div>
              )}
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
    return createStarredData(x.isStarred, x.title, x.dateCreated, x.matches);
  });

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

export const TableUsers = (props) => {
  const classes = useStyles();
  const rows = props.data?.map((x) => {
    return createDataWithAuthor(
      x.profilePicture,
      x.authorName,
      x.jobId,
      x.header?.title,
      new Date(x.dateCreated),
      x.matches
    );
  });

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left" />
          <TableCell align="left">User</TableCell>
          <TableCell align="left">Posting&nbsp;title</TableCell>
          <TableCell align="left">Date&nbsp;created</TableCell>
          <TableCell align="left">Matches</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell className={classes.row} align="left">
              <img
                src={row.profilePicture}
                className="table_profile_picture"
                alt={row.authorName}
              />
            </TableCell>
            <TableCell className={classes.row} align="left">
              {row.authorName}
            </TableCell>
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
              {row.matches < 25 && (
                <div>
                  <ChipRed label={row.matches} />
                </div>
              )}
              {row.matches >= 25 && row.matches <= 75 && (
                <div>
                  <ChipYellow label={row.matches} />
                </div>
              )}
              {row.matches > 75 && (
                <div>
                  <ChipBlue label={row.matches} />
                </div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
