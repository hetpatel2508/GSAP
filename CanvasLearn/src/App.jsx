import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/Navbar'
import MainKarigari from './components/MainKarigari';
import './App.css';

export default function App() {
  return (
    <div className='w-full min-h-screen bg-gray-700'>
      <NavScrollExample />
      <MainKarigari />
    </div>
  )
}
