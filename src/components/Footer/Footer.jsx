import React from 'react'
import '../../assets/styles/Footer.scss'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="l-footer">
          <h1 className="logo">KOCHANIE</h1>
          <p>
            Somos una micro-empresa ubicada en la ciudad de Barranquilla-Colombia que participa activamente en la industria de manufactura y confecciones textil desde hace más de 10 años. Su trayectoria ha estado vinculada a la producción de vestimentas femeninas y al desarrollo de uniformes empresariales y deportivos.</p>
        </div>
        <ul className="r-footer">
          <li>
            <h2>
              Social</h2>
            <ul className="box">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Pinterest</a></li>
            </ul>
          </li>
          <li >
            <h2>
              Productos</h2>
            <ul className="box">
              <li><a href="#">Vestidos</a></li>
              <li><a href="#">Blusas</a></li>
              <li><a href="#">Pantalones</a></li>

            </ul>
          </li>
          <li>
            <h2>Contacto</h2>
            <ul className="box">
              <li><a href="#">+57 3153186296</a></li>
              <li><a href="#">cm.kochanie@gmail.com</a></li>

            </ul>
          </li>
        </ul>
        <div className="b-footer">
          <p>
            Todos los derechos revervados © RafaelR - KOCHANIE 2021 </p>
        </div>
      </footer>

    </>
  )
}

export { Footer }
