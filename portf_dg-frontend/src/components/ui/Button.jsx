function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
    const variants = {
        primary:
            'bg-sky-400 text-slate-950 hover:bg-sky-300 focus-visisible:outline-sky-400',
        
        seconday:
            'border border-slate-700 bg-slate-900 text-wite hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-sky-400',

        text:
            'px-0 py-1 text-slate-300 hover:text-white focus-visible:outline-sky-400',
    }

    return (
        <button className={`${baseStyles} ${variant[variant]} ${className}`}>
            {children}
        </button>
    )
}

export default Button