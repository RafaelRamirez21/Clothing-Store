import React from 'react'
import Blusas from '../database/blusas.json'
import Vestidos from '../database/vestidos.json'
import Pantalones from '../database/pantalones.json'

export const getItemById = (id, path) => {
  console.log(path, id)
  if (path === "/blusas/:id") {
    return Blusas.find(hero => hero.id === id);
  }
  else if (path === "/vestidos/:id") {
    return Vestidos.find(vestido => vestido.id === id);
  } else if (path === "/pantalones/:id") {
    return Pantalones.find(pantalon => pantalon.id === id);
  }
}

