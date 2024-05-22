import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookTable from '../components/BookTable';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks();
  }, [page, pageSize, searchTerm]);

  const fetchBooks = async () => {
    const searchQuery = searchTerm ? `&q=${searchTerm}` : '';
    const response = await axios.get(`https://openlibrary.org/search.json?offset=${(page-1)*pageSize}&limit=${pageSize}${searchQuery}`);
    setBooks(response.data.docs);
    setTotalRecords(response.data.numFound);
};

console.log(books);

  

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <BookTable books={books} />
      <Pagination
        totalRecords={totalRecords}
        pageSize={pageSize}
        currentPage={page}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

export default Dashboard;

