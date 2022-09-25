import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                主頁
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                關於我
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                平面設計
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                手繪
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                建模
            </NavLink>
        </div>
    );
}