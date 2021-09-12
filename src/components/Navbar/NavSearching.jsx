import React from 'react'
import '../../assets/styles/NavSearch.scss'
import { BiSearch } from 'react-icons/bi'
import { IconContext } from 'react-icons'

function NavSearching() {
  return (
    <>
      <nav className="navSearch" >
        <input className="Search" type="text" placeholder="Buscar" />
        <button className="navSearch__button">
          <BiSearch size={'1.5em'} />
        </button>

      </nav>



    </>
  )
}

export { NavSearching }
