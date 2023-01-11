import { Link } from "react-router-dom";
const adminNavbar = () => {
    return ( 
        <div className="adminNAv">
        <div className='logo'>
            <img src="https://e7.pngegg.com/pngimages/733/876/png-clipart-computer-icons-google-account-icon-design-login-others-miscellaneous-desktop-wallpaper-thumbnail.png" width='70px' height='70px' alt="" />
        </div>
        <div className="lists">
            <ul>
                <li><Link to="/user/" className='lists'>Dashboard</Link></li>
                <li><Link to="/user/book-list" className='lists'>Book List</Link></li>
                <li><Link to="/" className='lists'>Logout</Link></li>
            </ul>
        </div>
    </div>
     );
}
 
export default adminNavbar;