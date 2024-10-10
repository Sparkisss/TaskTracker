import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <div>404 not found</div>
            <Link to="/">Homed</Link>
        </div>
    );
};

export default NotFoundPage;