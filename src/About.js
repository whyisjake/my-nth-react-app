import useFetch from "./useFetch";

const About = () => {
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/4');

    return (  
        <div className="about">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{blog.title }</h2>
                    <p>By { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default About;
