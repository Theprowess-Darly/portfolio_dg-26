import { Link } from 'react-router-dom'

const navigation = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
]

function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-sm">
                        <Link
                            to="/"
                            className="font-mono text-sm font-medium text-content"
                        >
                            <span className="text-primary">&lt;</span>
                                DG
                            <span className="text-primary">/&gt;</span>
                        </Link>

                        <p className="mt-4 text-sm leading-6 text-content-muted">
                            Software developer building practical digital products
                            that solve real problems.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <p className="font-mono text-xs uppercase tracking-wider text-content-muted">
                            Navigation
                        </p>

                        <div className="mt-4 flex flex-col gap-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="text-sm text-content-secondary transition-colors hover:text-primary"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-content-muted sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} TheProwess Holdings. All rights reserved.
                    </p>

                    <p className="font-mono">
                        Built with React + Vite on Laravel
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer