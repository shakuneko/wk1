import {Link}from "react-router-dom"


export default function Header({title}) {
    return (
        <div className="header">
            <Link to="/">
            <h1 className="header-title">
                {title}
            </h1>
            </Link>
                
        </div>
    );
}