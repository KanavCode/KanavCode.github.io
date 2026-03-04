// EDIT: Footer — site name and domain
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* EDIT: Footer text — name and domain */}
        <p className="font-mono text-text-muted text-xs text-center sm:text-left">
          Kanav Modi · Built with Next.js · kanavmodi.me
        </p>
        <p className="font-mono text-text-muted text-xs">{year}</p>
      </div>
    </footer>
  );
}
