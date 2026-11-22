export type Testimonio = {
    nombre: string;
    rol?: string;
    video?: string;   // ruta, ej: "/videos/maria.mp4"
    foto?: string;
    texto?: string;
    ajuste?: "cover" | "contain"; // cover = recorta (default), contain = se ve completa
    posicion?: string;  // ej: "top", "center", "50% 20%"
};

/*
Si un caso tiene video y quieres mostrar también texto, agrega texto: "..." en el mismo objeto 
y se muestran los dos. Si no quieres video, borra la línea videoId y listo.
*/

export const casosPrincipales: Testimonio[] = [
    { nombre: "Fernando Garcia", foto: "/testimonios/FernandoGarcia.png", ajuste: "contain" },
    { nombre: "Nahuel Meissl", foto: "/testimonios/NahuelMeissl.png" },
    { nombre: "Marco Rampulla", foto: "/testimonios/MarcoRampullaFrente.png", posicion: "top" },
    { nombre: "Leo", foto: "/testimonios/Leo.jpg", ajuste: "contain" },
    { nombre: "Claudio Elizondo", foto: "/testimonios/ClaudioElizondo.png", ajuste: "contain" },
    { nombre: "Cristian Apablaza", foto: "/testimonios/CristianApablaza.png", ajuste: "contain" },
    { nombre: "Ernesto Piere", foto: "/testimonios/ErnestoPiere.png", ajuste: "contain" },
    { nombre: "Tomas", foto: "/testimonios/Tomas.jpg", posicion: "top" },
    { nombre: "Valentina", foto: "/testimonios/Valentina.jpg", ajuste: "contain" },
];

export const casosFinales: Testimonio[] = [
    { nombre: "Rodrigo Tapia", rol: "Cliente", video: "/testimonios/videos/rodrigoTapia.mp4" },
    { nombre: "Fernando Garcia", rol: "Cliente", video: "/testimonios/videos/fernandoGarcia.mp4" },
    { nombre: "Juan Manuel", rol: "Cliente", video: "/testimonios/videos/juanManuel.mp4" },
    { nombre: "Alejandro", rol: "Cliente", video: "/testimonios/videos/alejandro.mp4" },
];