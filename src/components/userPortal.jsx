import { Routes,Route } from "react-router-dom";
import UserNavbar from "./userNavbar";
import UserDashBoard from "./userDashBoard";
import BookList from "./bookList";
import ReadBook from "./readBook";
const UserPortal = () => {
    return ( 
        <div className="userPortal">
          <UserNavbar/>
          <Routes>
            <Route path="/" element={<UserDashBoard/>}/>
            <Route path="/book-list" element={<BookList/>}/>
            <Route path='/book-list/:id' element={<ReadBook/>}/>
          </Routes>
        </div>
     );
}
 
export default UserPortal;