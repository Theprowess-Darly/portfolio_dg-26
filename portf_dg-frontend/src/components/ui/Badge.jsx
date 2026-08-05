function Badge({ children, className = ''}){
    return (
        <span className={`inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1.5 font-mono text-xs font-medium text-sky-300 ${className}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true"/>

            {children}
        </span>
    )
}

export default Badge
