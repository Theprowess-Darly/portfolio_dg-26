function Badge({ children, className = ''}){
    return (
        <span className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface-elevated/5 px-3 py-1.5 font-mono text-xs font-medium text-primary ${className}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true"/>

            {children}
        </span>
    )
}

export default Badge
