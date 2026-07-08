import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
// const Home = () => {
//     // let name = 'mario';
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25)

//     const handleClick = () => {
//         setName('luigi');
//         setAge(30)
//     }
//     return ( 
//         <div>
//             <h2>Homepage</h2>
//             <p> { name } is {age} years old</p>
//             <button onClick={handleClick}> Click Me</button>

//         </div>
//      );
// }
// Lesson 8 useState and hooks

// Lesson 12 Reusing components and props 
// Lesson 20 Custom hooks 
  const Home = () => { 
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const [blogs, setBlogs] = useState(null); 
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const [name, setName] = useState('mario'); 

// Lesson 13 Functions as props
    //     const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // } 
 

    // Lesson 14 useEffect hook
    // useEffect(() => {
    //   setTimeout(() => {
    //      fetch('http://localhost:8000/blogs')
    //   .then(res => {
    //     console.log(res);
    //     if(!res.ok) {
    //       throw Error('could not fetch the data for that resource')
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data); 
    //     setBlogs(data);
    //     setIsPending(false);
    //     setError(null); 
    //   })
    //   .catch((err => {
    //     setIsPending(false);
    //     setError(err.message);
    //   }))
    //   }, 1000);
      // console.log('use effect ran'); 
    // }, []);
    //   console.log(name); 
    // }, [name]); 

    return (
        <div className="home">
        { error && <div>{ error }</div> }
        {isPending && <div>Loading...</div> }
       {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );   
  }
export default Home;