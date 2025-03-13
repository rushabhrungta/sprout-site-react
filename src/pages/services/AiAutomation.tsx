import NavBar from "../../components/navbar/NavBar";
import CardBasic from "../../components/CardBasic";
import AppFooter from "../../components/AppFooter";
import SProcess from "../sections/SProcess";
import { aiProcessData } from "../../utils/servicesData";
import TechExpertAll from "../sections/TechExpertAll";
import OurWork from "../sections/OurWork";
import Clients from "../sections/Clients";
import PreFooter from "../sections/PreFooter";
import { aiWorkData } from "../../utils/workData";
import MainBannerContact from "../sections/MainBannerContact";


function AiAutomation() {
    return (
        <>
            <NavBar />
            <CardBasic bgColor="bg-base-100" shadow="shadow-null">

                <div className="min-h-[80vh] flex flex-col justify-center">

                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl lg:text-9xl mb-4 md:mb-8">Revolutionizing Businesses with <span className="motion-safe:animate-pulse text-primary">AI-Led</span> Automation</h1>
                        <h4 className="md:text-xl lg:text-3xl">For years, we've been harnessing the power of AI, ML, and DL to craft intelligent solutions—streamlining operations, amplifying efficiency, and shaping the future of business.</h4>
                    </div>
                    <MainBannerContact />

                </div>

            </CardBasic>

            <div className="max-w-[1440px] mx-auto">
                <SProcess processData={aiProcessData} />
                <TechExpertAll />
                <OurWork workData={aiWorkData} bgColor="bg-base-200" />
                <Clients />
                <div className="divider"></div>
                <PreFooter />
                <AppFooter />
            </div>
        </>
    )
};

export default AiAutomation;