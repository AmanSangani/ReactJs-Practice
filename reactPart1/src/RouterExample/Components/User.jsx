import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const User = () => {
    const { id } = useParams()
    return (
        <>
            <div className='mt-5 text-3xl text-center'>Projects of User : {id}</div>
            <div
                className="mt-10 ms-[250px] mb-[10px] hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col p-4 mt-4 font-medium bg-gray-800 rounded lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                            to="/user/counter"
                            className={({ isActive }) =>
                                `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Counter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/user/cards"
                            className={({ isActive }) =>
                                `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Cards Component
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/user/bgChange"
                            className={({ isActive }) =>
                                `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Background Changer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/user/password"
                            className={({ isActive }) =>
                                `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Password Generator
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/user/currencyconverter"
                            className={({ isActive }) =>
                                `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Currency Converter
                        </NavLink>
                    </li>


                </ul>
            </div>
            <div
                className="mt-10 ms-[250px] mb-[10px] hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col p-4 font-medium bg-gray-800 rounded lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                            to="/user/contextApi"
                            className={({ isActive }) =>
                                `text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Context API
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default User