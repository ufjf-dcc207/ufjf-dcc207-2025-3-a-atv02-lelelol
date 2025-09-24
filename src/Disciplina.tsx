import "./Disciplina.css"

type DisciplinaProps = {
    nome: string,
    codigo: string
}
function Disciplina({ codigo, nome }: DisciplinaProps) {
    return (
        <div className="Disciplina">
            <div>
                {codigo}
            </div>
            <div>
                {nome}
            </div>
        </div>
    );
}
export default Disciplina;