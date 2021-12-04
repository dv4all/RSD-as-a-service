import {useState, MouseEvent, ChangeEvent} from 'react'
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo() {
  const [page, setPage] = useState(2)
  const [rowsPerPage, setRowsPerPage] = useState(12)
  const rowsPerPageOptions = [12,24,48]

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      labelRowsPerPage="Items per page"
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
