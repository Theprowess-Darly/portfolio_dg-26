import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import Container from "../ui/Container"
import Section from "../ui/Section"
import ProjectCard from "./ProjectCard"

import { getProjects } from "../../services/projectService"

function FeaturedProjects() {
    const [projects, setProjects] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadProjects() {
            try{const data = await getProjects()
                setProjects(data.data ?? data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProjects
    }, [])

    return (
        <section>
            <Container>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="font-mono text-xs uppercase tracking tracking-wider text-primary">
                            Selected work
                        </p>

                        <h2>
                            Projects that solve real problems.
                        </h2>

                        <p className="mt-4 max-w-2xl text-content-secondary">
                            A selection of digital products I've designed and developed
                        </p>
                    </div>

                    <Link to="/projects"
                        className="text-sm font-medium text-primary hover:text-primary-strong"
                    >
                        View all projects →
                    </Link>
                </div>

                <div className="mt-12 mb-4">
                    {loading && (
                        <p className="text-sm text-content-muted">
                            Loading projects...
                        </p>
                    )}

                    {error &&(
                        <p className="text-sm text-red-400">
                            Unable to load projects right now.
                        </p>
                    )}

                    {!loading && error && projects.length === 0 && (
                        <p className="text-sm text-content-muted">
                            No projects available yet
                        </p>
                    )}

                    {!loading && error && projects.length > 0 && (
                        <div className="grid gap-8 lg:gid-cols-2">
                            { projects.slice(0, 4).map((project) =>(
                                <ProjectCard  
                                    key={project.id}
                                    project={project}
                                />                                    
                            )) }
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default FeaturedProjects