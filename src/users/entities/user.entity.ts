export class User {
    //En el ejemplo no usa tanto esta clase porque usa otra BD: Prisma (genera un objeto que luce como la BD)
    id: number;
    name: string;
    lastname: string;
    dni: string;
    email: string;
    password: string;
}