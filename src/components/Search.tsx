type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}
import { BsSearch } from 'react-icons/bs';

import classes from './Search.module.css';

import { useState, KeyboardEvent } from 'react';

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e:KeyboardEvent) => {
        if( e.key === "Enter" ) {
            loadUser(userName)
        }
    };
    return (
        <div className={classes.search}>
            <h2>Busca por usuario</h2>
            <p>Conoce los mejores repositorios</p>
            <div className={classes.search_container}>
                <input type="text"
                 placeholder='Digite el nombre del usuario' 
                 onChange={(e)=> setUserName(e.target.value)}
                 onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>


    );
};

export default Search;