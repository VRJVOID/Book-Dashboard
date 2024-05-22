import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper } from '@mui/material';

const BookTable = ({ books }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('title');

  const handleSortRequest = (cellId) => {
    const isAsc = orderBy === cellId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(cellId);
  };

  const sortBooks = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedBooks = sortBooks(books, getComparator(order, orderBy));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {['ratings_average', 'author_name', 'title', 'first_publish_year', 'subject', 'author_birth_date', 'author_top_work'].map((cell) => (
              <TableCell key={cell}>
                <TableSortLabel
                  active={orderBy === cell}
                  direction={orderBy === cell ? order : 'asc'}
                  onClick={() => handleSortRequest(cell)}
                >
                  {cell.replace('_', ' ')}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{book.ratings_average}</TableCell>
              <TableCell>{book.author_name}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.first_publish_year}</TableCell>
              <TableCell>{book.subject?.join(', ')}</TableCell>
              <TableCell>{book.author_birth_date}</TableCell>
              <TableCell>{book.author_top_work}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookTable;

