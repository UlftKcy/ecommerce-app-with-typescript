import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=  useNavigate();
  return (
    <header className='bg-gray-700 text-white px-5 py-3'>
        <div className="container flex justify-between items-center">
            <Link to="/" className="font-bold text-lg">Store</Link>
            <div>
                <Link to="/create">Create Product</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar;