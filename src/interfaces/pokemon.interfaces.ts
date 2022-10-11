export interface IPokemon {
    id:number;
    name:string;
    description:string;
    imageUrl:string;
    size:number;
    weight:number;
    type : "electricity" | "fire" | "ice" | "wind"
}

