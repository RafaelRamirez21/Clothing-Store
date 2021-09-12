import React from 'react';
import { Link } from 'react-router-dom';

function ItemNavbar({ item }) {
  return (
    <>
      <li className={item.cName}>
        <Link to={item.path}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </li>
    </>
  )
}

export { ItemNavbar }
