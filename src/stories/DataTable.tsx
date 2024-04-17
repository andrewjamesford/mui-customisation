import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

export interface Data {
  id: number;
  movieName: string;
  director: string;
  year: number;
  rating: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

interface TableHeaderProps {
  headCells: readonly HeadCell[];
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: () => void;
  orderBy: string;
  rowCount: number;
}

interface TableProps {
  selectedRows: number[];
  orderBy: string;
  rowCount: number;
  rows: Data[];
  header: HeadCell[];
}

const TableHeader = (props: TableHeaderProps) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const DataTable = (props: TableProps) => {
  const { rows, selectedRows, orderBy, rowCount, header } = props;
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 750 }}
        aria-labelledby="tableTitle"
        size={"medium"}
      >
        <TableHeader
          headCells={header}
          numSelected={0}
          onSelectAllClick={() => {}}
          order={() => {}}
          orderBy=""
          onRequestSort={() => {}}
          rowCount={0}
        />
        <TableBody>
          {rows.map((row, index) => (
            <TableRow>
              <></>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
