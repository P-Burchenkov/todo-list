import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';

import AppBar from './AppBar';
import BasicContainer from './BasicContainer';
import TodoCard from './TodoCard';
import Footer from './Footer';

import { fetchAllTodo } from 'redux/todoList/operations';
import { selectAllTodo, selectIsLoading } from 'redux/todoList/selectors';

import { Container, Main } from './App.styled';

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const todoList = useSelector(selectAllTodo);

  // логіка впровадження пагінації
  // 1. Загальна кількість сторінок
  const totalPages = Math.ceil(todoList.length / itemsPerPage);
  // 2. Стартовий индекс PaginationItem га поточній сторінці
  const startIndex = (currentPage - 1) * itemsPerPage;
  // 3. Останній индекс PaginationItem га поточній сторінці
  const endIndex = startIndex + itemsPerPage;
  // 4. Массив todo для рендеру на поточній сторінці
  const currentItems = todoList.slice(startIndex, endIndex);

  const dispatch = useDispatch();

  const ref = useRef(null);

  const isLoading = useSelector(selectIsLoading);

  // HTTP запит за массивом todo при маунті елемента
  useEffect(() => {
    dispatch(fetchAllTodo());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Main>
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
          {isLoading && (
            // лоадер, використана бібліотека react-loader-spinner
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          )}
        </BasicContainer>
        <Container>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => {
              setCurrentPage(page);
            }}
            size="large"
          />
        </Container>
      </Main>
      <Footer />
      {/* контейнер для відображення попереджень користувачеві, вікористано бібліотеку react-toastify */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
