export default function Footer() {
    return (
        <footer className="mt-auto bg-zinc-800 p-6">
            <div className="container mx-auto text-center flex w-10/12 justify-evenly text-white">
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://x.com/lucssslucsss" target="_blank" rel="noopener noreferrer" 
                        className="hover:scale-105 transition-all ease duration-100">
                        Twitter
                    </a>
                    <a href="https://github.com/lucasSSalgado" target="_blank" rel="noopener noreferrer" 
                        className="hover:scale-105 transition-all ease duration-100">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-salgado-2a1448254/" target="_blank" rel="noopener noreferrer" 
                        className="hover:scale-105 transition-all ease duration-100">
                        LinkedIn
                    </a>
                </div>
                <p>Lucas Sodré Salgado.</p>
            </div>
        </footer>
    );
}
