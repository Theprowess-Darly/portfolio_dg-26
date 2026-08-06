import { Link, NavLink } from 'react-router-dom'

const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
]

function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <nav
                className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10"
                aria-label="Main navigation"
            >
                <Link
                    to="/"
                    className="font-mono text-sm font-medium tracking-tight text-content"
                >
                    <span className="text-primary">&lt;</span>
                    DG -- TheProwess
                    <span className="text-primary">/&gt;</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm transition-colors ${
                                isActive
                                    ? 'text-primary'
                                    : 'text-content-muted hover:text-content'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <Link
                    to="/contact"
                    className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary-strong md:inline-flex"
                >
                    Let's talk
                </Link>

                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-content md:hidden"
                    aria-label="Open navigation menu"
                >
                    <span className="text-lg">☰</span>
                </button>
            </nav>
        </header>
    )
}

export default Navbar

// import {Link, NavLink } from 'react-router-dom'

// const navigation = [
//     {name: 'Home', path: '/'},
//     {name: 'About', path: '/about'},
//     {name: 'Projects', path: '/projects'},
//     {name: 'Blog', path: '/blog'},
//     {name: 'Contact', path: '/contact'},
// ]

// function Navbar() {
//     return (
//         <header className='sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md'>
//             <nav className='mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10' aria-label="Main navigation">
//                 <Link to="/" className='font-mono text-sm font-medium tracking-tight text-content'>
//                     <span className='text-primary'>&lt;</span>
//                         DG -- TheProwess
//                     <span className='text-primary'>/&gt;</span>
//                 </Link>

//                 <div className='hidden items-center gap-8 md:flex'>
//                     {navigation.map((item) => (
//                         <NavLink
//                             key={item.path}
//                             to={item.path}
//                             className={({ isActive})
//                                 `text-sm transition-colors ${isActive ? 'text-primary'
//                                     : 'text-content-muted hover:text-content'
//                                 }`
//                             }
//                         >
//                             {item.name}
//                         </NavLink>
//                     ))}
//                 </div>

//                 <link to="/contact" className='hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary-strong md:inline-flex'
//                 >
//                     Let's talk
//                 </link>

//                 <button type='button' className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-content md:hidden' aria-label='Open navigation menu'>
//                     <span className='text-lg'>☰</span>
//                 </button>
//             </nav>
//         </header>
//     )
// }

// export default Navbar