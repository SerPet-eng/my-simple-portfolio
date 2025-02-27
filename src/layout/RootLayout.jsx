import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
