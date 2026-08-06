function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
    const variants = {
        primary:
            'bg-primary text-background hover:bg-primary-strong focus-visisible:outline-primary',
        
        seconday:
            'border border-border bg-surface text-content hover:border-content-muted hover:bg-elevated focus-visible:outline-primary',

        text:
            'px-0 py-1 text-content-secondary hover:text-content focus-visible:outline-primary',
    }

    return (
        <button className={`${baseStyles} ${variant[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button