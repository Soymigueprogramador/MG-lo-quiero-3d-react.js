import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p> Este sitio fue creado por 'soymigueprogramador@gmail.com' </p>
        <div>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/miguelito.partusa1"
                  target="_blank"
                >
                  <img
                    className="iconos-footer"
                    src="./icons/redes sociales/facebook.png"
                    alt="al hacer click en este icono vas a entrar a mi facebook"
                  />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://github.com/Soymigueprogramador"
                  target="_blank"
                >
                  <img
                    className="iconos-footer"
                    src="./icons/redes sociales/github (2).png"
                    alt="al hacer click en este icono vas a entrar a mi github"
                  />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.instagram.com/salazar649/" target="_blank">
                  <img
                    className="iconos-footer"
                    src="./icons/redes sociales/instagram.png"
                    alt="al hacer click en este icono vas a entrar a mi instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;