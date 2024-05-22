import React from 'react';
import { Pagination as MuiPagination, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Pagination = ({ totalRecords, pageSize, currentPage, onPageChange, onPageSizeChange }) => {
  const totalPages = Math.ceil(totalRecords / pageSize);

  return (
    <div>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
      />
      <FormControl>
        <InputLabel>Records per page</InputLabel>
        <Select
          value={pageSize}
          onChange={(e) => onPageSizeChange(e.target.value)}
        >
          {[10, 20, 50, 100].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Pagination;
