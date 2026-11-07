export type Testimonio = {
    nombre: string;
    rol?: string;
    videoId?: string; // ID de YouTube
    foto?: string;    // ruta en /public
    texto?: string;
    vertical?: boolean;
};

/*
Si un caso tiene video y quieres mostrar también texto, agrega texto: "..." en el mismo objeto 
y se muestran los dos. Si no quieres video, borra la línea videoId y listo.
*/

export const casosPrincipales: Testimonio[] = [
    { nombre: "María G.", rol: "Cliente", videoId: "REEMPLAZAR_ID" },
    { nombre: "Carlos R.", foto: "/testimonios/carlos.jpg", texto: "Texto del testimonio." },
    { nombre: "Lucía P.", texto: "Solo texto, sin foto ni video." },
];

export const casosFinales: Testimonio[] = [
    { nombre: "Ana S.", rol: "Cliente", videoId: "REEMPLAZAR_ID" },
    { nombre: "Jorge M.", foto: "/testimonios/jorge.jpg" },
    { nombre: "Paula D.", texto: "Otro testimonio para el cierre." },
];