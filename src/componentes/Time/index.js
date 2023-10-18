import './Time.css';
import Colaborador from '../Colaborador';

function Time(props) {

    const estiloBloco = { backgroundColor: props.corSecundaria };
    const estiloTitulo = { borderColor: props.corPrimaria };
    return (
        (props.colaboradores.length > 0) &&
        <section className="time" style={estiloBloco} >
            <h3 style={estiloTitulo}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </ section>
    );
}

export default Time;