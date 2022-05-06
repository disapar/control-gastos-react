import { useState, useEffect } from "react";
import cerrarModal from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({ setModal, animarModal, guardarGasto, gastoEditar, setGastoEditar }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState('');
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('')

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  },[])


  const handleSumit = e =>{
    e.preventDefault()
    if([nombre, cantidad, categoria].includes('')){
      setMensaje('todos los campos son obligatorios')
      setTimeout(()=>{
        setMensaje('')
      },1200)
      return
    }
    guardarGasto({nombre, cantidad, categoria, id, fecha})
  }
  const cerraModal = () => {
    setModal(false);
    setGastoEditar({})

  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarModal} alt=" cerrar modal" onClick={cerraModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : ""}`}
        onSubmit={handleSumit}
      >
        <legend>{gastoEditar.nombre ? 'Editar Gasto': 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto ej: 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
          <input type="submit" value={gastoEditar.nombre ? 'Guardar Cambios': 'Añadir Gasto'} />
        </div>
      </form>
    </div>
  );
};

export default Modal;
