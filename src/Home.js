import { useState } from 'react';
import BlogList from './BlogList';
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

  const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]); 

    return (
        <div className="home">
       <BlogList blogs={blogs} />
        </div>
    ); 
  }
export default Home;