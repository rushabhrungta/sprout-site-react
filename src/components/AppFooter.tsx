import logo from './images/sprout-logo.svg';
import { routeLinkData } from '../utils/routeData';

function AppFooter() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10">
            <aside>
                <img src={logo}></img>
                <p>
                    {/* Sprout
                    <br /> */}
                    Empowering businesses with technology
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">{routeLinkData.company.title}</h6>
                {routeLinkData.company.pages.map((data,index)=>(
                    <a key={index} href={data.link} className="link link-hover">{data.pTitle}</a>
                ))}
                
            </nav>
            <nav>
                <h6 className="footer-title">{routeLinkData.products.title}</h6>
                {routeLinkData.products.pages.map((data,index)=>(
                    <a key={index} href={data.link} className="link link-hover">{data.pTitle}</a>
                ))}
            </nav>
            <nav>
                <h6 className="footer-title">{routeLinkData.services.title}</h6>
                {routeLinkData.services.pages.map((data,index)=>(
                    <a key={index} href={data.link} className="link link-hover">{data.pTitle}</a>
                ))}
            </nav>
        </footer>
    )
};


export default AppFooter;