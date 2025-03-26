import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ToastContainer />
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
