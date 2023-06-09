import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import{Button}  from '@mui/material';

export default function Home
() {

    const [users,setUsers] = useState([]);
    const {bookid} = useParams ()
    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/book");
      setUsers(result.data);
    };

    const deleteBook=async(bookid)=>{
      await axios.delete(`http://localhost:8080/book/${bookid}`)
      loadUsers()
    }
    

  return (
    
    <div className='container'>
       <Navbar />
        <div className='py-4'>
        <table className="table border shadow" width="5000px">
  <thead>
    <tr>
      
      <th scope="col">Book Id</th>
      <th scope="col">Book Name</th>
      <th scope="col">Author Id</th>
      <th scope="col">Author Name</th>
      <th scope="col">Rating</th>
      <th scope="col">Genre Id</th>
      <th scope="col">Genre</th>
      <th scope="col">Publisher Id</th>
      <th scope="col">Publisher Name</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index) => (
    <tr>
      <th scope="row" key={user.bookid}>
        {index+1}
      </th>
      {/* <td>{user.bookId}</td> */}
      <td>{user.bookname}</td>
      <td>{user.authorId}</td>
      <td>{user.author}</td>
      <td>{user.rating}</td>
      <td>{user.genreId}</td>
      <td>{user.genre}</td>
      <td>{user.publisherId}</td>
      <td>{user.publisherName}</td>
      <td>{user.price}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewBook/${user.bookid}`}>
         View
        </Link>
        <Link className="btn btn-outline-primary mx-2" to={`/updateBook/${user.bookid}`}>
        Edit
        </Link>  
         <Link className="btn btn-danger " onClick={()=>deleteBook(user.bookid)}>
         Delete
          </Link> 
           {/* <button class="image-button" to={`/updateBook/${user.bookid}`}><img src="delete.png" alt="Image"/></button>
          <button class="image-button" onClick={()=>deleteBook(user.bookid)}><img src="delete.png" alt="Image"/></button> */}
      </td>
    </tr>
        ))
    }
  </tbody>
</table>
{/* <button onclick="game(0)"style=font-size:300%;> 🪨  </button>  */}
<Link to="/InsertBook"> 
   
    <button className="btn btn-info mx-5  ">
    ➕
      </button>
      </Link>
        </div>
    </div>
  );
}