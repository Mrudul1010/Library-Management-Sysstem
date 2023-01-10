import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className="adminNAv">
            <div className='logo'>
                <img src="https://oas.igsss.org/images/adminType.png" width='70px' height='70px' alt="" />
            </div>
            <div className="lists">
                <ul>
                    <li><Link to="/admin/" className='lists'>Dashboard</Link></li>
                    <li><Link to="/admin/add-book" className='lists'>Add Books</Link></li>
                    <li><Link to="/admin/add-user" className='lists'>Add User </Link></li>
                    <li><Link to="/admin/book-list" className='lists'>Book List</Link></li>
                    <li><Link to="/admin/user-list" className='lists'>User List</Link></li>
                    <li><Link to="/" className='lists'>Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AdminNavbar;