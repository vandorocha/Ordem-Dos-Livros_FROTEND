import { error } from "@sveltejs/kit";
import autores from "../../../constants/autores";

export function load(dados){
    const autorId = dados.params.id;
    console.log(autorId)


    for(let autor of autores){
        if(autor.id == autorId)
            return { autor: autor }
    }

    error(404, "Autor não encontrado")
}