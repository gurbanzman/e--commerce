import { BreadCrumb } from 'primereact/breadcrumb';
import { useLocation } from 'react-router-dom';
const BreadCrumbs = () => {
   const location = useLocation();
   const pathSegments = location.pathname.split("/").filter(Boolean);
   console.log(pathSegments);
   

   const items = [
      { label: 'Home', url: '/' },
      ...pathSegments.map((segment, index) => {
         const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
         return { label: segment.charAt(0).toUpperCase() + segment.slice(1), url };
      })
   ];
  
   const home = { icon: 'pi pi-home', url: '/' };
   return <BreadCrumb model={items} home={home} />
};

export default BreadCrumbs;
