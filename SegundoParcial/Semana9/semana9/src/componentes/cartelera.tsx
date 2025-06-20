import type { Ipelicula } from "./pelicula";
interface ICartelera {
    peliculas: Ipelicula[];
}

const Cartelera = ({ peliculas }: ICartelera) => {
    return (
        <div className="cartelera">
            <h1>Cartelera de Películas</h1>
            {peliculas.map((pelicula) => (
                <div key={pelicula.id} className="pelicula">
                    <h2>{pelicula.titulo}</h2>
                    <img src={pelicula.url} alt={pelicula.titulo} style={{ width: 200, height: 300 }} />
                    <p>{pelicula.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default Cartelera;