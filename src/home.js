import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Building with React', body: 'lorem ipsum...', author: 'RB', id: 1 },
        { title: 'Finally, components', body: 'lorem ipsum...', author: 'RB', id: 2 },
        { title: 'Where to go from here', body: 'lorem ipsum...', author: 'RB', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        // Code to run on component mount
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
};

export default Home;
