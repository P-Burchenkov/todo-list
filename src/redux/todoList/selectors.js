// функції-селектори, що повертають потрібну частину стейту

export const selectAllTodo = state => state.todoList;
export const selectIsLoading = state => state.isLoading;
export const selectIsError = state => state.isError;
