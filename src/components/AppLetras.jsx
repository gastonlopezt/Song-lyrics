import Formulario from './Formulario'
import Alerta from './Alerta'
import useLetras from '../hooks/useLetras'

const AppLetras = () => {

  const { alerta } = useLetras()

  return (
    <>
      <header>Búsqueda de letras de canciones</header>
      <Formulario />
      <main>
        {alerta && <Alerta>{alerta}</Alerta>}
      </main>
    </>
  )
}

export default AppLetras