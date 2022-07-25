export default function ComParametro(props) {
    const sub = props.subtitulo
    const status = props.nota >= 7 ? 'Aprovado!' : 'Recuperação'
    const notaInt = Math.ceil(props.nota);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{sub} </strong>
                tem nota <strong>{notaInt} </strong>
                e está <strong>{status}</strong>
            </p>
        </div>
    )
}