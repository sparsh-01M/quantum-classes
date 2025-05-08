import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;