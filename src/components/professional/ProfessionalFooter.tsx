import Link from "next/link";

export default function ProfessionalFooter() {
    return (
        <footer className="shrink-0 border-t bg-background px-6 py-3 text-xs text-muted-foreground">
            <div className="flex items-center justify-between">
                <span>© Collabora — Todos os direitos reservados</span>
                <div className="flex items-center gap-4">
                <Link href="#" className="hover:text-foreground">Termos de Uso</Link>
                <Link href="#" className="hover:text-foreground">Política de Privacidade</Link>
                <Link href="#" className="hover:text-foreground">Suporte</Link>
                </div>
            </div>
        </footer>
    );
}
