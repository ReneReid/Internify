import { React, useState } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
  IconButton,
} from "@material-ui/core";
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
  AccountCircle,
} from "@material-ui/icons";
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

const usePaginationStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = usePaginationStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  let index = 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
        {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map((row) => (
          <TableRow
            key={index++}
            hover
            onClick={() => {
              window.open(`/view/${row.jobId}`, "_self");
            }}
          >
            <TableCell className={classes.row} align="center">
              {row.profilePicture ? (
                <img
                  src={row.profilePicture}
                  className="table_profile_picture"
                  alt={row.authorName}
                />
              ) : (
                <AccountCircle
                  className="table_profile_picture"
                  style={{ fontSize: 33 }}
                />
              )}
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
              {(row.matches < 25 ||
                row.matches === undefined ||
                row.matches === null) && (
                <div>
                  {row.matches ? (
                    <ChipRed label={row.matches} />
                  ) : (
                    <ChipRed label={"0"} />
                  )}
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
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, { label: "All", value: -1 }]}
            colSpan={6}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { "aria-label": "rows per page" },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};
