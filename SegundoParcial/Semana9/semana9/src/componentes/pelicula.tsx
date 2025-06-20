interface Ipelicula{
    id: number;
    titulo: string;
    descripcion: string,
    url: string;

}

interface IpeliculaProps {
    titulo: string;
    url: string;
}

const Pelicula = ({titulo, url}:IpeliculaProps, )=> {
    return (
        <div className="pelicula">
            <h2>{titulo}</h2>
            <img src={url} alt={titulo} style = {{width: 10, height: 10}}/>
        </div>
    )
}

export default Pelicula
export type { Ipelicula };