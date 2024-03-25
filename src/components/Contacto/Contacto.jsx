import './Contacto.css';

const Contacto = () => {
  return (
    <div>
      <h1 className='text-center'> Contactate con nosotros </h1>
      <div className="flex-container">
        <form className="form">
          <div className="form__selection">
            <input
              type="text"
              className="form__input"
              name="Email"
              placeholder="Email"
            />
          </div>
          <div className="form__selection">
            <input
              type="text"
              className="form__input"
              name="Asunto"
              placeholder="Asunto"
            />
          </div>
          <div className="form__selection">
            <input
              type="text"
              className="form__input"
              name="Nombre"
              placeholder="Nombre"
            />
          </div>
          <div className="form__textarea">
            <textarea
              className="form__input"
              name="Mensaje"
              placeholder="Mensaje"
              defaultValue={""}
            />
          </div>
          <div className="form__button">
            <input type="submit" value="Enviar" className="boton" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacto;