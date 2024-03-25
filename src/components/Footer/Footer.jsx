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
                <a href="https://www.facebook.com/german.salazar.315" target="_blank"
                >
                  <img
                    className="iconos-footer"
                    src="../../../public/icons/redes sociales/facebook.png"
                    alt="al hacer click en este icono vas a entrar a mi facebook"
                  />
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://www.instagram.com/mgloquiero3d/" target="_blank">
                  <img
                    className="iconos-footer"
                    src="../../../public/icons/redes sociales/instagram.png"
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