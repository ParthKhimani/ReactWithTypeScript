import React, { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

const CRUDTable = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },  
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  ]);
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    year: 0,
  });
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);

  const createBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ id: 0, title: "", author: "", year: 0 });
  };

  const readBook = (id: number) => {
    const book = books.find((book) => book.id === id);
    setSelectedBook(book);
  };

  const updateBook = (id: number, updatedBook: Book) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? updatedBook : book
    );
    setBooks(updatedBooks);
    setSelectedBook(undefined);
  };

  const deleteBook = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    setSelectedBook(undefined);
  };

  return (
    <div>
      <h2>Books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <button onClick={() => readBook(book.id)}>Read</button>
                <button onClick={() => setSelectedBook(book)}>Edit</button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{selectedBook ? `Editing ${selectedBook.title}` : "Create Book"}</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          selectedBook
            ? updateBook(selectedBook.id, selectedBook)
            : createBook();
        }}
      >
        <label>
          Title:
          <input
            type="text"
            value={selectedBook ? selectedBook.title : newBook.title}
            onChange={(event) =>
              setSelectedBook((prevBook) => ({
                id: prevBook?.id ?? 0,
                title: event.target.value,
                author: prevBook?.author ?? "",
                year: prevBook?.year ?? 0,
              }))
            }
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={selectedBook ? selectedBook.author : newBook.author}
            onChange={(event) =>
              setSelectedBook((prevBook) => ({
                id: prevBook?.id ?? 0,
                title: event.target.value,
                author: prevBook?.author ?? "",
                year: prevBook?.year ?? 0,
              }))
            }
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            value={selectedBook ? selectedBook.year : newBook.year}
            onChange={(event) =>
              setSelectedBook((prevBook) => ({
                id: prevBook?.id ?? 0,
                title: event.target.value,
                author: prevBook?.author ?? "",
                year: prevBook?.year ?? 0,
              }))
            }
          />
        </label>
        <button type="submit">{selectedBook ? "Update" : "Create"}</button>
        {selectedBook && (
          <button onClick={() => setSelectedBook(undefined)}>Cancel</button>
        )}
      </form>
    </div>
  );
};

export default CRUDTable;
