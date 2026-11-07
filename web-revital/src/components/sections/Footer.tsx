export function Footer() {
    return (
        <footer className="border-t border-paper/10 bg-ink px-4 py-10 text-center text-sm text-paper/50">
            <p>© {new Date().getFullYear()} Revital90. Todos los derechos reservados.</p>
            <p className="mt-2">
                Desarrollado por{" "}
                <a
                    href="https://treestech.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand underline-offset-4 transition hover:underline"
                >
                    TreesTech
                </a>
            </p>
        </footer>
    );
}