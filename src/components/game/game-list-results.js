import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

export const GameListResults = ({ games, ...rest }) => {
  const [selectedGameIds, setSelectedGameIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedGameIds;

    if (event.target.checked) {
      newSelectedGameIds = games.map((game) => game._id);
    } else {
      newSelectedGameIds = [];
    }

    setSelectedGameIds(newSelectedProductIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedGameIds.indexOf(id);
    let selectedGameIds = [];

    if (selectedIndex === -1) {
      newSelectedGameIds = newSelectedGameIds.concat(selectedGameIds, id);
    } else if (selectedIndex === 0) {
      newSelectedGameIds = newSelectedGameIds.concat(selectedGameIds.slice(1));
    } else if (selectedIndex === selectedGameIds.length - 1) {
      newSelectedGameIds = newSelectedGameIds.concat(selectedGameIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedGameIds = newSelectedGameIds.concat(
        selectedGameIds.slice(0, selectedIndex),
        selectedGameIds.slice(selectedIndex + 1)
      );
    }

    setSelectedGameIds(selectedGameIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedGameIds.length === games.length}
                    color="primary"
                    indeterminate={
                      selectedGameIds.length > 0 && selectedGameIds.length < games.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Platform</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {games.slice(0, limit).map((game) => (
                <TableRow hover key={game._id} selected={selectedGameIds.indexOf(game._id) !== -1}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedGameIds.indexOf(game._id) !== -1}
                      onChange={(event) => handleSelectOne(event, game._id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="body1">
                      {game.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="body1">
                      {game.code.toUpperCase()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="body1">
                      {game.engine.toUpperCase()}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={games.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

GameListResults.propTypes = {
  games: PropTypes.array.isRequired,
};
