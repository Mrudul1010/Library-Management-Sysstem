import AdminNavbar from "./adminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./adminDashboard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddUser from "./addUser";
import Addbook from "./addbook";
const AdminHome = () => {
    return ( 
        <div className="adminportal">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/book-list' element={<BookList/>}/>
                <Route path='/user-list' element={<UserList/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
                <Route path='/add-user' element={<AddUser/>}/>
                <Route path='/add-book' element={<Addbook/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHome;