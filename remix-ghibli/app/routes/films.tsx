import type {LinksFunction,LoaderFunction,MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Film, getFilms } from "~/api/films";

//Server Side to collect data before render
export const loader: LoaderFunction = async() => {
    return getFilms()
};

export const meta: MetaFunction = () => {
    return [
        { title: "Films about Ghibly"},
        { name: "description", content: "Ghibli films" },
    ];
};

export const links: LinksFunction = () => {
    return [{rel: 'stylesheet', href:'styles'}];
};


//client where render
export default function FilmsIndex(){
    const films = useLoaderData<Film[]>();
    return (
        <div className="p-16 font-sans">
            <h1 className="text-5xl font-bold text-center">Studio Ghibli Films</h1>
            
            <form>
                
            </form>
            
            <div className="grid grid-cols-4 gap-4">
                {films.map((film) => (
                    <div key={film.id}
                        className="
                            hover:shadow-2xl
                            hover:scale-105
                            hover:font-bold
                            cursor-pointer
                        "
                    >
                        <div>{film.title}</div>
                        <img src={film.image} alt={film.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}