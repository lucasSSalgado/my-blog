export default function Footer() {
    return (
        <footer className="mt-auto bg-zinc-800 p-6">
            <div className="container mx-auto text-center flex w-10/12 justify-evenly text-white">
                <p className="text-sm flex flex-col">
                    <p> &copy; {new Date().getFullYear()} Lucas Sodré Salgado. </p>
                    <p>Todos os direitos reservados.</p>
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="underline-animation">
                        Twitter
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="underline-animation">
                        Facebook
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline-animation">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
