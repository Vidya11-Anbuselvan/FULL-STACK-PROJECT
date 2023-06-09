import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewBook() {
  const [user, setUser] = useState({
    bookid: "",
    bookname: "",
    author: "",
    price: "",
    genre: "",
    genreId: "",
    publisherId: "",
    publisherName: "",
    authorId: "",
    rating: ""
  });

  const { bookid } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/book/`+bookid);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow reg-label">
          <h2 className="text-center m-4 input3-label">BOOK DETAILS</h2>

          <div className="card">
            <div className="card-header">
              Details of book id : {user.bookid}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Book Name:</b>
                  {user.bookname}
                </li>
                <li className="list-group-item">
                  <b>author:</b>
                  {user.author}
                </li>
                <li className="list-group-item">
                  <b>Price:</b>
                  {user.price}
                </li>
                <li className="list-group-item">
                  <b>Genre:</b>
                  {user.genre}
                </li>
                <li className="list-group-item">
                  <b>Genre Id:</b>
                  {user.genreId}
                </li>
                <li className="list-group-item">
                  <b>Publisher Id:</b>
                  {user.publisherId}
                </li>
                <li className="list-group-item">
                  <b>Publisher Name:</b>
                  {user.publisherName}
                </li>
                <li className="list-group-item">
                  <b>Author Id:</b>
                  {user.authorId}
                </li>
                <li className="list-group-item">
                  <b>Rating:</b>
                  {user.rating}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}