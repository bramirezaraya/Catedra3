export interface Clima {
    id:number;
    dia:string;
    imagen:string;
    temperatura:number;
    estadoDelClima:string;
}


export let listaClima:Array<Clima>=[
    {
        id:1,
        dia:"Lunes",
        imagen:"imagenNube.jpg",
        temperatura:9,
        estadoDelClima:"Nublado",
    },
    {
        id:2,
        dia:"Martes",
        imagen:"imagenSol.jpg",
        temperatura:18,
        estadoDelClima:"Soleado",
    },
    {
        id:3,
        dia:"Miercoles",
        imagen:"imagenNube.jpg",
        temperatura:11,
        estadoDelClima:"Nublado",
    },
    {
        id:4,
        dia:"Jueves",
        imagen:"imagenLluvia.jpg",
        temperatura:7,
        estadoDelClima:"lluvioso",
    },
    {
        id:5,
        dia:"Viernes",
        imagen:"imagenTormenta.jpg",
        temperatura:5,
        estadoDelClima:"Tormenta",
    },
    {
        id:6,
        dia:"Sabado",
        imagen:"imagenNube.jpg",
        temperatura:6,
        estadoDelClima:"Nublado",
    },
    {
        id:7,
        dia:"Domingo",
        imagen:"imagenSol.jpg",
        temperatura:15,
        estadoDelClima:"Soleado",
    },
]


