import React, {useState, useContext} from 'react';
import useFirebase from "../../hooks/useFirebase";
import { CartContext } from '../../context/CartProvider';

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName} //{`form-control ${error.nombre && "is-invalid"}`}
        placeholder={placeholder}
      />
      {error.nombre && (
        <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
      )}
    </div>
  );
};


const Formulario = ({total, compra, totalArt}) => {

  const { generateTicket } = useFirebase();
  const { validarTodoLLeno, clear } = useContext(CartContext);

  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      nombre: "",
      apellido: "",
      telefono: "",
    },
    total: total,
    items: compra,
  });
  
  const [error, setError] = useState({});
  const [disable, setDisable] = useState(true);
  const {
    buyer: { email, nombre, apellido, telefono },
  } = formulario;

  const onBotton = ()=>{
    !validarTodoLLeno([email, nombre, apellido, telefono]) &&
      setDisable(false)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (validarTodoLLeno([email, nombre, apellido, telefono])) {
      console.log("no funca");
      return;
    }
    console.log("funca");
    generateTicket({ datos: formulario });
    clear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value,
      },
    });
    onBotton()
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Este campo es obligatorio" });
      setDisable(true)
      return;
    }
    setError({});
  };
  
  return (
    <form onSubmit={onSubmit} className="row mb-2">
      <h3 className="text-uppercase text-center my-4">datos recipiente</h3>
      {Object.keys(formulario.buyer).map((key,index) => (
        <Input
        key={index}
        className="mb-3"
        type="text"
        name={`${key}`}
        value={key.value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputClassName={`form-control ${error[key] && "is-invalid"}`}
        placeholder={`${key}`}
        error={error}
        />
      ))}
      
      <div class="d-flex justify-content-between mb-5">
        <h5 class="text-uppercase">Cantidad de articulos</h5>
        <h5>{totalArt}</h5>
      </div>
      
      <div class="d-flex justify-content-between mb-5">
        <h5 class="text-uppercase">Precio total</h5>
        <h5>${total}</h5>
      </div>

      <button
          type="submit"
          disabled={disable}
          className="btn btn-primary text-uppercase w-100 my-4"
        >
          terminar la compra
        </button>
    </form>
  )
}

export default Formulario