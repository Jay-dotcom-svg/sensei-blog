// const  BlogList = (props) => {
//         const blogs = props.blogs;

import { Link } from "react-router-dom/cjs/react-router-dom.min";

    
//     console.log(props,blogs);
// Lesson 9 props

const BlogList = ({ blogs, title,}) => {

    return ( 
        <div className="blog-list">
        {/* <h2>{ props.title }</h2> */}
        <h2>{ title }</h2>
         {blogs.map((blog) => (
             <div className="blog-preview" key={blog.id}>
                 <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by  { blog.author }</p>                      
                 </Link>

           </div>
        ))}
        </div>
     );
}
 
export default BlogList;