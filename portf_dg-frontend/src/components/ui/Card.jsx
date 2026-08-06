function Card({ children, className = '' }) {
    return (
        <div className={`rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:translate-y1 hover:border-content-muted/30 hover:bg-surface ${className}`}>
            {children}
        </div>
    )
}

export default Card