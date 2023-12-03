import AppBar from './AppBar';
import BasicContainer from './BasicContainer';
import { Pagination, PaginationItem } from '@mui/material';
import TodoCard from './TodoCard';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTodo } from 'redux/todoList/operations';
import { selectAllTodo } from 'redux/todoList/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const todoList = useSelector(selectAllTodo);

  const totalPages = Math.ceil(todoList.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = todoList.slice(startIndex, endIndex);

  const dispatch = useDispatch();

  const ref = useRef(null);

  useEffect(() => {
    dispatch(fetchAllTodo());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <BasicContainer>
        {currentItems.map(item => {
          return (
            <PaginationItem
              component={TodoCard}
              ref={ref}
              id={item.id}
              key={item.id}
              name={item.name}
              isCompleted={item.isCompleted}
            />
          );
        })}
      </BasicContainer>
      <BasicContainer>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => {
            setCurrentPage(page);
          }}
          size="large"
        />
      </BasicContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
