import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { HiHome } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

function BreadcrumbUI() {
  let location = useLocation();
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#"> <HiHome/> </Breadcrumb.Item>
      <Breadcrumb.Item active>
        {location.pathname === "/matches" ? "Matches" : "" }
        {location.pathname === "/viewed-profile" ? "Viewed Profile" : "" }
        {location.pathname === "/viewed-Not-Contacted" ? "Viewed Not Contacted" : "" }
        {location.pathname === "/premium-Members" ? "Premium Members" : "" }
        {location.pathname === "/inbox" ? "Inbox" : "" }
        {location.pathname === "/send" ? "Send" : "" }
        
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbUI;