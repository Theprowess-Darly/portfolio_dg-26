import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/Home/Home'




function About() {
    return <h1>About</h1>
}
function Projects() {
    return <h1>Projects</h1>
}
function ProjectDetails() {
    return <h1>Project Details</h1>
}
function Blog() {
    return <h1>Blog</h1>
}
function BlogDetails() {
    return <h1>Blog Details</h1>
}
function Contact() {
    return <h1>Contact</h1>
}

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/projects/:slug" element={<ProjectDetails />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/blog/:slug" element={<BlogDetails />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
