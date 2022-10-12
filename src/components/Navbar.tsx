import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-10 bg-gray-200 text-indigo-700 px-10 py-3'>
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-lg tracking-wider sm:pl-16">STORE</Link>
        <div>
          <Link to="/create" className='font-semibold mr-5'>Create Product</Link>
          <Link to="/favorites" className='font-semibold'>Favorites</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar;