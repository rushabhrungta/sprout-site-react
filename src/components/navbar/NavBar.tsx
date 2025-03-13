import logo from "../images/sprout-logo.svg";
import { routeLinkData } from "../../utils/routeData";

function NavBar() {
    return (
        <div className="navbar bg-base-100 shadow-null rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="/about">About</a></li>
                        <li>
                            <a>{routeLinkData.products.title}</a>
                            <ul className="p-2">
                                {routeLinkData.products.pages.map((data, index) => (
                                    <li key={index}><a href={data.link}>{data.pTitle}</a></li>
                                ))}

                            </ul>
                        </li>
                        <li>
                            <a>{routeLinkData.services.title}</a>
                            <ul className="p-2">
                                {routeLinkData.services.pages.map((data, index) => (
                                    <li key={index}><a href={data.link}>{data.pTitle}</a></li>
                                ))}
                            </ul>
                        </li>
                        {/* <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/"><img src={logo}></img></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/about">About</a></li>
                    <li>
                        <details>
                            <summary>{routeLinkData.products.title}</summary>
                            <ul className="p-2 z-40">
                                {routeLinkData.products.pages.map((data, index) => (
                                    <li key={index}><a href={data.link}>{data.pTitle}</a></li>
                                ))}

                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>{routeLinkData.services.title}</summary>
                            <ul className="p-2 z-40">
                                {routeLinkData.services.pages.map((data, index) => (
                                    <li key={index}><a href={data.link}>{data.pTitle}</a></li>
                                ))}

                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-secondary" href="/contact">Contact Us</a>
            </div>
        </div>
    )
};

export default NavBar;