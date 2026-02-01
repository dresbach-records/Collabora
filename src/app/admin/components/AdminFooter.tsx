import Link from "next/link";

export default function AdminFooter() {
    return (
        <footer className="shrink-0 border-t bg-white px-6 py-3 text-xs text-muted-foreground">
            <div className="flex items-center justify-between">
                <span>© {new Date().getFullYear()} Tech Labs | Versão: 1.0.0 (Prod)</span>
                <Link href="#" className="hover:text-foreground">Documentação interna</Link>
            </div>
        </footer>
    );
}
