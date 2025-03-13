import NavBar from "../components/navbar/NavBar";
import CardBasic from "../components/CardBasic";
import { foundingTeam, aboutWorkData } from "../utils/aboutData";
import AppFooter from "../components/AppFooter";
import WhyUs from "./sections/WhyUs";
import OurDetails from "./sections/OurDetails";
import JourneySoFar from "./sections/JourneySoFar";
import Clients from "./sections/Clients";
import PreFooter from "./sections/PreFooter";
import TechExpertAll from "./sections/TechExpertAll";
import OurWork from "./sections/OurWork";
import { routeLinkData } from "../utils/routeData";

function About() {
    return (
        <>
            <NavBar />
            <CardBasic bgColor="bg-base-100" shadow="shadow-null">

                <div className="min-h-[80vh] flex flex-col justify-center">

                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl lg:text-9xl mb-4 md:mb-8">Where Innovation <span className="motion-safe:animate-pulse text-primary">Meets</span> Execution.</h1>
                        <h4 className="md:text-xl lg:text-3xl">Ideas alone don’t drive change—execution does. We bring the right technology, automation, and strategy together to turn bold visions into reality, helping businesses scale and thrive.</h4>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {routeLinkData.services.pages.map((data,index)=>(
                            <a key={index} href={data.link}><h2 className="text-xl text-secondary hover:underline">{data.pTitle}</h2></a>
                        ))}
                        <a href="/product/taggme"><h2 className="text-xl text-secondary hover:underline">TaggMe</h2></a>
                        <a href="/contact"><h2 className="text-xl text-primary hover:underline">Get In Touch</h2></a>
                    </div>

                </div>

            </CardBasic>

            <div className="max-w-[1440px] mx-auto">
                <CardBasic bgColor="bg-base-100" shadow="shadow-null">
                    <div className="title prose w-full max-w-none md:mb-8">
                        <h1 className="font-medium">Founding Team</h1>
                        <p className="mt-0 text-base">With over two decades of experience and six years of seamless collaboration, we’ve built, innovated, and delivered across multiple projects, turning ideas into impactful solutions.</p>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-8">
                        {foundingTeam.map((data, index) => (
                            <CardBasic shadow="null" key={index}>
                                <div className="prose">
                                    <img src={data.img} className="mx-auto"></img>
                                    <p className="text-center">{data.data}</p>
                                </div>
                            </CardBasic>
                        ))}

                    </div>
                </CardBasic>

                <TechExpertAll />

                <OurWork workData={aboutWorkData} bgColor="bg-base-200"/>

                <WhyUs />
                
                <div className="divider"></div>
                <OurDetails />

                <div className="divider"></div>
                <JourneySoFar />


                <div className="divider"></div>

                <Clients />
                <div className="divider"></div>
                <PreFooter />

                <AppFooter />
            </div>
        </>
    )
}


export default About;