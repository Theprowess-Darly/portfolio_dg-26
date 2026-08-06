import { Link } from 'react-router-dom'
import card from '../ui/Card'

function ProjectCard({ project }) {
    return (
        <card className="group overflow-hidden p-0">
            <div className='aspect-video overflow-hidden bg-surface-elevated'>
                {project.image ?(
                    <img src={project.image}
                        alt={project.title}
                        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                ) : (
                    <div className='flex h-full items-center justify-center'>
                        <span className='font-mon text-xs text-content-muted'>
                            PROJECT PREVIEW
                        </span>
                    </div>
                )}
            </div>

            <div className='p-6'>
                <p className='font-mono text-xs uppercase tracking-wider ext-primary'>
                    Project
                </p>

                <h3 className='mt-3 text-xl font-semibold text-content'>
                    {project.title}
                </h3>

                <p className='mt-3 line-clamp-3 text-sm leading-6 text-content-muted'>
                    {project.short_descripton || project.description}
                </p>

                {project.technologies?.lenght > 0 && (
                    <div className='mt-5 flex flex-wrap gap-2'>
                        {project.technologies.map((technology) => (
                            <span key={technology.id || technology.name}
                                className='rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-content-secondary'
                            >
                                {technology.name}
                            </span>
                        ))}
                    </div>
                )}
                <Link to={`/projects/${project.slug}`}
                >
                    View project →
                </Link>
            </div>
        </card>
    )
}

export default ProjectCard