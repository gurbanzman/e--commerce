import { Link, useLocation } from 'react-router-dom';
const BreadCrumbs = () => {
   const location = useLocation();
   
   let currentLink = '';

   const crumbs = location.pathname.split("/").filter(crumb => crumb !== '').map(crumb => {
      currentLink =+ `/${crumb}`
      return (
         <div key={crumb} className='crumb'>
            <Link to={currentLink}>{crumb}</Link>
         </div>
      )
   })
   
   
   return (
      <ul>
         <li>
            {crumbs}
         </li>
      </ul>
   )
};

export default BreadCrumbs;
