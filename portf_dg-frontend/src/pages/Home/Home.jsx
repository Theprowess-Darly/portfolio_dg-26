import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import FeaturedProjects from '../../components/projects/FeaturedProjects'

function Home() {
    return (
        <div>
            <Section className="min-h-[calc(100vh-5rem)] flex items-center">
                <Container>
                    <div className="max-w-4xl">
                        <Badge>SOFTWARE DEVELOPER</Badge>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-content sm:text-5xl lg:text-6xl">
                            I build digital products that solve real problems.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-content-secondary">
                            I design and develop practical web and mobile experiences,
                            turning ideas into reliable software that people can actually
                            use.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button>
                                View my work
                            </Button>

                            <Button variant="secondary">
                                Let's talk
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
            <FeaturedProjects />
        </div>
    )
}

export default Home