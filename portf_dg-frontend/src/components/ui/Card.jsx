function Card({ children, className = '' }) {
    return (
        <div className={`rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:translate-y1 hover:border-slate-700 hover-slate-900 ${className}`}>
            {children}
        </div>
    )
}

export default Card