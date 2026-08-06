import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

function PublicLayout() {
    return (
        <div className='min-h-screen bg-background text-content'>
           
            <Navbar />
            
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default PublicLayout