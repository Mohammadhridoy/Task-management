import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { IoIosLogOut } from "react-icons/io";

const Dasboard = () => {
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const handlelogOut = () =>{
        logOut()
        navigate('/')
    }

    return (
        <div>
                    <div className="flex "> 
            {/* left side */}
             <div  >
                <div className="flex w-32 md:w-56 lg:w-72 min-h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <span
                    className="grid h-10 w-24 md:w-32 place-content-center rounded-lg text-xs text-gray-600"
                    >
                    <img className=' ' src={logo} alt="" />
                    </span>
                    {/* user manus */}
                    <ul className="mt-20 space-y-1">
                    <li>
                              <Link className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" to="/dashboard/task">
                               Tasks </Link>
              
                          </li>
                            
                        
                       
                        
                  

                    {/* user manus end  */}
                    
                    <li className="pt-2">
                  
                        <Link className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" to="/">
                        Home</Link>
                    </li>

                    </ul>
                    


                </div>

                <div className=" hidden md:flex  sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        
                        src={ user?.photoURL}
                        className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-xs">
                        <strong className="block font-medium">{user?.displayName}</strong>

                        <span>{user?.email}</span>
                        </p>
                    </div>
                    {/* logout section */}
                    <div>
                    <IoIosLogOut className='w-12 text-2xl' onClick={handlelogOut} />
                    </div>
                    </a>
                
                </div>
                </div>
             </div>
            {/* right side */}
            <div >
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dasboard;