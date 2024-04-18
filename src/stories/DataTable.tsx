import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export interface Data {
  id: number;
  movieName: string;
  director: string;
  year: number;
  rating: number;
}

export interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

interface TableHeaderProps {
  headCells: readonly HeadCell[];
}

interface TableProps {
  rows: Data[];
  header: HeadCell[];
}

const TableHeader = (props: TableHeaderProps) => {
  const { headCells } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const DataTable = (props: TableProps) => {
  const { rows, header } = props;
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 750 }}
        aria-labelledby="tableTitle"
        size={"medium"}
      >
        <TableHeader headCells={header} />
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((key) => (
                <TableCell key={key}>{row[key as keyof Data]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
