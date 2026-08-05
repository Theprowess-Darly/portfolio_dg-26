import Container from './components/ui/Container'
import Section from './components/ui/Section'
import Button from './components/ui/Button'
import Badge from './components/ui/Badge'
import Card from './components/ui/Card'


function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section>
        <Container>
          <Badge>
            SOFTWARE DEVELOPER
          </Badge>

          <h1 className="text-5xl font-bold">
            Building digital products
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            I build digital products that solve real problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>
              View my work
            </Button>

            <Button variant="secondary">
              Let's talk
            </Button>

            <Button variant="text">
              Download CV →
            </Button>
          </div>
          <div className="mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Card>
              <p className="font-mono text-xs text-sky-400">
                PROJECT
              </p>

              <h2 className="mt-3 text-xl font-semibold">
                Multi-vendor E-commerce Platform
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                A scalable platform designed to support multiple
                independent stores and their customers.
              </p>
            </Card>

            <Card>
              <p className="font-mono text-xs text-sky-400">
                PROJECT
              </p>

              <h2 className="mt-3 text-xl font-semibold">
                Mobile Application
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                A mobile experience focused on solving a practical
                problem through a simple interface.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  )
}

export default App

// import AppRoutes from './routes/AppRoutes'

// function App() {
//   return <AppRoutes />
// }

// export default App