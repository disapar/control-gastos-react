import { useState } from "react";
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("no es un presupuesto válido");
      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(Number(e.target.value));
            }}
            type="text"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
          />
          <input type="submit" value="Añadir" />
        </div>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
