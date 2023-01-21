import { FETCH_ALL_BOOK } from '../constants/booksActionTypes';
import * as api from '../api/books_api'

export const getBooks = () => async (dispatch) => {
    try {
      const { data } = await api.fetchBooks();
  
      dispatch({ type: FETCH_ALL_BOOK, payload: data });
    } catch (error) {
      console.log(error);
    }
};