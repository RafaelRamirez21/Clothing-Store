import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Blusas',
    path: '/blusas',
    icon: <GiIcons.GiTShirt />,
    cName: 'nav-text'
  },
  {
    title: 'Vestidos',
    path: '/vestidos',
    icon: <GiIcons.GiLargeDress />,
    cName: 'nav-text'
  },
  {
    title: 'Pantalones',
    path: '/pantalones',
    icon: <GiIcons.GiArmoredPants size={'1.5em'} />,
    cName: 'nav-text'
  }

];