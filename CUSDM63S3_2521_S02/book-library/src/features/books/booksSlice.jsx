import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      isRead: false
    }
  ]
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer: (state, action) => {
        state.books.push(action.payload);
      },
      prepare: ({ title, author, genre }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            author,
            genre,
            isRead: false
          }
        };
      }
    },
    toggleReadStatus: (state, action) => {
      const book = state.books.find(book => book.id === action.payload);
      if (book) {
        book.isRead = !book.isRead;
      }
    },
    editBook: (state, action) => {
      const { id, title, author, genre } = action.payload;
      const book = state.books.find(book => book.id === id);
      if (book) {
        book.title = title;
        book.author = author;
        book.genre = genre;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    }
  }
});

export const { addBook, toggleReadStatus, editBook, deleteBook } = booksSlice.actions;
export const selectAllBooks = state => state.books.books;
export default booksSlice.reducer;