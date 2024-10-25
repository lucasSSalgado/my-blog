export default function Footer() {
    return (
        <footer className="mt-auto bg-primary text-primary-foreground dark:bg-neutral-900 dark:text-white p-6">
            <div className="container mx-auto text-center w-10/12 justify-evenly flex flex-col md:flex-row">
                <p className="hidden md:block">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                
                <div className="flex justify-center space-x-4">
                    <a href="https://x.com/lucssslucsss" target="_blank" rel="noopener noreferrer" 
                        className="hover:scale-105 transition-all ease duration-100">
                        Twitter
                    </a>
                    <p className="mt-3 md:mt-0">Nome sei la o que.</p>
                </div>
            </div>
        </footer>
    );
}
