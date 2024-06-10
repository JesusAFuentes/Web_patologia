import './ClinicalStudies.css'
import microscopio from './images/microscopio.png'
import estetoscopio from './images/esteto.png'
function ClinicalStudies() {
    return (
        <>

            <div className="dashboard">
                <div className="sidebar">
                    <div className="logo">
                        <img src={microscopio} alt="Microscopio" className="microscopio" />
                        <label className="patologia">Patologia Guillermo Patiño</label>
                    </div>
                </div>
                <div className="content">
                    <div className="texto-informacion">
                    <img src={estetoscopio} alt="esteto" className="esteto" />
                        <h1>Informacion de estudios</h1>
                    </div>
                    <div className="contenedor-tabla">
                        <table className="tabla">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Medico solicitante</th>
                                    <th>Fecha de recepcion</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Diana Ortiz</td>
                                    <td>Dr. Pierre Ornelas</td>
                                    <td>04/Abril/2024</td>
                                    <td>En proceso</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>Arturo Soto</td>
                                    <td>Dr. Carlos Patiño</td>
                                    <td>25/Marzo/2024</td>
                                    <td>Finalizado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClinicalStudies