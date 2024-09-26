import React from "react"; 
import styles from "./style.module.css";
const SearchUser = React.memo(() => {
   return (
      <form className={`py-2 px-5 ${styles[`search-form`]} relative`}>
         <input type="text" name="search-user" className={styles[`search-user`]} placeholder="What are you looking for?"/>
      </form>
   )
});

SearchUser.displayName = "SearchUser";
export default SearchUser;