import { NavLink } from "react-router-dom"

export default function Navbar() {
    return <>
        <nav className="bg-secondary-50 px-20">
            <div className="container flex justify-between items-center">
                <div className="header p-9">
                    <NavLink className="text-4xl uppercase font-bold text-white" to="/">
                    Start Framework
                    </NavLink>
                </div>

                <div>
                    <ul className="flex items-center gap-5 text-xl text-white me-12">
                        <li><NavLink className={({ isActive }) => {
                            return `${isActive ? `bg-primary p-2 rounded-md font-semibold` : ""}`
                        }} to="/about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => {
                            return `${isActive ? `bg-primary p-2 rounded-md  font-semibold` : ""}`
                        }} to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink className={({ isActive }) => {
                            return `${isActive ? `bg-primary p-2 rounded-md font-semibold` : ""}`
                        }} to="/signup">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
