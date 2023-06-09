import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateBook() {

    let navigate = useNavigate();
    const {id}=useParams();
    useEffect(() =>
    {
        axios.get('http://localhost:8080/book/'+id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])


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

      
      const { bookid,bookname,author,price,genre,genreId,publisherId,publisherName,authorId,rating} = user;
        
        const onInputChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
        };
        
          
            const onSubmit = async (e) => {
                e.preventDefault();
                await axios.put(`http://localhost:8080/updateBooks/${bookid}`, user);
                navigate("/");
            };
            

      

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow reg-label formbox-control'>
            <h2 className='text-center m-4 input3-label'>UPDATE A BOOK</h2>
            
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3  input-label">
          <label htmlFor="bookid" className="form-label">
            Book Id
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter book Id"
            name="bookid"
            value={bookid}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="bookname" className="form-label">
            Book Name
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter Bookname"
            name="bookname"
            value={bookname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="authorId" className="form-label">
            AuthorId
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter authorid"
            name="authorId"
            value={authorId}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="author" className="form-label">
            Author Name
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter the authorname"
            name="author"
            value={author}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="rating" className="form-label">
          Rating
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter rating"
            name="rating"
            value={rating}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="genreId" className="form-label">
          GenreId
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter GenreId"
            name="genreId"
            value={genreId}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="genre" className="form-label">
          Genre
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter the genre"
            name="genre"
            value={genre}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="publisherId" className="form-label">
          publisher Id
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter the publisherId"
            name="publisherId"
            value={publisherId}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="publisherName" className="form-label">
          publisher Name
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter the publisher Name"
            name="publisherName"
            value={publisherName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3  input-label">
          <label htmlFor="price" className="form-label">
          Price
          </label>
          <input
            type={"text"}
            className="form-control form-boxcontrol"
            style={{width:"400px"}}
            placeholder="Enter the Price"
            name="price"
            value={price}
            onChange={(e) => onInputChange(e)}
          />
        </div>
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
            <Link to={"/Home"} className='btn btn-danger mx-2'>
                Cancel
            </Link>
            </form>
        </div>  
    </div>
</div>
  )
}