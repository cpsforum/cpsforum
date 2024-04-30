import { redirect } from "next/navigation";

export default function Auth() {
    redirect('/sign-in');
    //Caso a página for acessada sem ser através do botão de login, o usuário retorna para a home
}