export interface Pregunta {
    id: number;
    pregunta: string;
    respuesta: string;
}

export interface PreguntasData {
    preguntas: Pregunta[];
}