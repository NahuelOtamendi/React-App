import "./Opciones.css";

const Opciones = () => {
  const equipos = [
    "Seleccionar Equipo",
    "Programacion",
    "Frot End",
    "Data Science",
    "Dev Ops",
    "UX y Diseño",
    "Movil",
    "Innovacion y Gestion",
  ];
  return (
    <div className="opciones">
      <label>Opciones</label>
      <select className="select" defaultValue={equipos[0]}>
        {equipos.map((equipo, index) => (
          <option hidden={index === 0} key={index}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Opciones;
