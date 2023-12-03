import { useState } from 'react';
import Button from '@mui/material/Button';

import BasicModal from 'components/BasicModal';
import AddTodoForm from 'components/AddTodoForm';

import { Container, Header, Title } from './AppBar.styled';

export default function AppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Header>
      <Container>
        <Title>Todo List APP</Title>
        <Button
          type="button"
          variant="contained"
          color="success"
          size="large"
          onClick={openModal}
        >
          Add Todo
        </Button>
      </Container>
      <BasicModal open={isModalOpen} handleClose={closeModal}>
        <AddTodoForm closeModal={closeModal} />
      </BasicModal>
    </Header>
  );
}
