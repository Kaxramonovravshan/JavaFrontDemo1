import React from "react";
import axios from "axios";
import { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState("");
  const [bookData, setBookData] = useState({
    bookName: "",
    price: "",
  });

  console.log(authors);

  function postFuncAuthor() {
    axios({
      url: "http://localhost:8080/author/postAuthor",
      method: "post",
      data: name,
    });

    console.log(books);
  }

  function postFunc() {
    if (bookData.bookName === "" && bookData.price === "") {
      alert("Maydon bo'sh qoldi");
    } else {
      if (edit) {
        axios({
          url: `http://localhost:8080/book/editBook/${bookData.book_id}`,
          method: "put",
          data: bookData,
        });
      } else {
        axios({
          url: "http://localhost:8080/book/postBook",
          method: "post",
          data: bookData,
        });
      }
    }
  }

  function getFuncAuthor() {
    axios({
      url: `http://localhost:8080/author/getAuthor`,
      method: "get",
    }).then(({ data }) => {
      setAuthors(data);
    });
  }

  function getFunc() {
    axios({
      url: `http://localhost:8080/book/getBook`,
      method: "get",
    }).then(({ data }) => {
      setBooks(data);
    });
  }

  function deleteBook(book_id) {
    axios({
      url: `http://localhost:8080/book/deleteBook/${book_id}`,
      method: "delete",
    }).then(({ data }) => {
      getFunc();
    });
  }

  function editBook(i) {
    setBookData(i);
    setEdit(true);
  }

  return (
    <div>
      <div className="w-75 p-4 shadow rounded mx-auto my-5 d-flex align-items-center flex-column gap-3">
        <input
          className="form-control w-50"
          value={bookData.bookName}
          onChange={(e) =>
            setBookData({ ...bookData, bookName: e.target.value })
          }
          placeholder="Book name"
          required
          type="text"
        />
        <input
          className="form-control w-50"
          value={bookData.price}
          onChange={(e) => setBookData({ ...bookData, price: e.target.value })}
          placeholder="price"
          required
          type="number"
        />
        <select name="" id="">
          {authors.map((i) => (
            <option value="">salom</option>
          ))}
        </select>
        <div className="btn-group w-50">
          <button className="btn btn-success w-50" onClick={postFunc}>
            Post
          </button>
          <button className="btn btn-primary w-50" onClick={getFunc}>
            Get
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Book name</td>
              <td>Author</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {books.map((i) => (
              <tr key={i?.book_id}>
                <td>{i?.book_id}</td>
                <td>{i?.bookName}</td>
                <td>{i?.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBook(i?.book_id)}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => editBook(i)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-75 p-4 shadow rounded mx-auto my-5 d-flex align-items-center flex-column gap-3">
        <input
          className="form-control w-50"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Author name"
          required
          type="text"
        />
        <div className="btn-group w-50">
          <button className="btn btn-success w-50" onClick={postFuncAuthor}>
            Post
          </button>
          <button className="btn btn-primary w-50" onClick={getFuncAuthor}>
            Get
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
