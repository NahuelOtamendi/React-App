import "./Form.css";
import Input from "../Input/Input";
import Opciones from "../Opciones/Opciones";
import Boton from "../Boton/Boton";

const Form = () => {
  const envioFormulario = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <form onSubmit={envioFormulario}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input titulo="Nombre" placeholder="Ingresar Nombre" required />
        <Input titulo="Puesto" placeholder="Ingresar Puesto" required />
        <Input titulo="Foto" placeholder="Ingresar enlace de Foto" required />
        <Opciones />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};
export default Form;
