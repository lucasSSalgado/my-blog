import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/Icons";

export default function Page() {
    return <div className="mt-10">
        <h1 className="text-3xl font-semibold underlined-text">Sobre</h1>
        <div className="prose-lg prose max-w-none w-10/12 mx-auto mt-10">
            <p>
                O propósito desse blog é compartilhar ideias que tenha e resumo sobre livros que leio. Com três grandes objetivos.
                1) Voltar a eles no futuro, como um diários de minhas ideias e para refrescar minha memórias. 
                2) Compartilhas esses pensamentos e ideias com qualquer um interessado.
                3) Me estimular a pensar mais sobre as coisas que leio, assim como organizar essas ideias de forma coesa.
            </p>
            <p>
                Me chamo Lucas, tenho formação em Economia pelo Universidade Católica de Minas Gerais e trabalho como programador Java Spring.
                Apesar de ser bastante confortável com algumas outras tecnologias, como node.js e Golang.
            </p>
            <h4>Meus contatos</h4>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/lucas-salgado-2a1448254/" target="_blank" className="inline-block w-6 h-6 mx-3 hover:scale-110 transition-all ease duration-200">
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://github.com/lucasSSalgado" target="_blank" className="inline-block w-6 h-6 mx-3 hover:scale-110 transition-all ease duration-200">
                        Github
                    </a>
                </li>
                <li>
                    <a href="https://x.com/lucssslucsss" target="_blank" className="inline-block w-6 h-6 mx-3 hover:scale-110 transition-all ease duration-200">
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    </div>
}