import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();

    return ( 
        <div className="blog-details">
            <h2> This is the blog title </h2>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nihil veritatis facilis quas eveniet, cupiditate dicta voluptatum aspernatur possimus officia adipisci deserunt, mollitia nemo vitae a. Autem, recusandae. Molestias, expedita! </p>
            <p> By RB </p>
        </div>
     );
}
 
export default BlogDetails;