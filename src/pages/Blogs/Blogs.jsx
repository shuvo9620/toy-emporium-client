import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Blogs = () => {

    useTitle('Blogs');
    
    const blogs = [
        {
            Question: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
            Answer: "Access Token: An access token is a credential that validates the identity of a user and grants them access to protected resources. It is issued upon successful authentication and is included in each request to the server for authorization.Refresh Token: A refresh token is a long-lived credential used to obtain a new access token without requiring the user to reauthenticate. It is securely stored on the client-side and exchanged for a new access token when the current one expires. Storage on Client-side: Access tokens are typically stored in browser memory or local storage, while refresh tokens should be stored in secure HTTP-only cookies. This ensures secure access token management and reduces the risk of unauthorized access or attacks."
        },
        {
            Question: "Compare SQL and NoSQL databases?",
            Answer: "SQL databases are based on a structured schema and use tables to store data in a tabular format. They provide strong consistency and are suitable for complex data structures and transactions.NoSQL databases are non-relational and offer flexible data models like key-value, document, columnar, or graph. They provide scalability and performance for handling large amounts of unstructured data.SQL databases are best for fixed schemas and well-defined relationships, while NoSQL databases are suitable for dynamic schemas and scalability. The choice depends on the application's requirements and data characteristics.",
        },
        {
            Question: "What is Express.js and Nest.js",
            Answer: "Express.js is a lightweight web application framework for Node.js that simplifies server-side development by handling HTTP requests, routing, and middleware. Nest.js is a TypeScript-based web application framework for Node.js that builds on top of Express.js and provides a modular and scalable architecture inspired by Angular. It enhances the capabilities of Express.js with features like dependency injection and decorators.",
        },
        {
            Question: "What is MongoDB aggregate and how does it work?",
            Answer: "MongoDB's aggregate is a feature that allows for advanced data processing and analysis within the database. It works by processing a pipeline of stages, each stage performing a specific operation on the input documents and passing the modified documents to the next stage. It enables tasks such as filtering, grouping, sorting, and applying mathematical computations to retrieve aggregated results from the data stored in MongoDB.",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl text-center font-bold mb-4">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {blogs.map((blog) => (
                    <div className="bg-white shadow-md rounded-md p-4" key={blog.id}>
                        <h2 className="text-xl font-bold mb-2">{blog.Question}</h2>
                        <p>{blog.Answer}</p>
                        <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
