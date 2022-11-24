/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ lista }) => {
    return (
        <>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">productos</a>
                <div class="dropdown-menu">
                    <Link className='dropdown-item' to={"/categoria/XL"}>{lista[0]}</Link>
                    <Link className='dropdown-item' to={"/categoria/Medium"}>{lista[1]}</Link>
                    <Link className='dropdown-item' to={"/categoria/Small"}>{lista[2]}</Link>
                </div>
            </li>
        </>
    );
}

export default Dropdown;
