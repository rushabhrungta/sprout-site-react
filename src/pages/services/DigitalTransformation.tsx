import NavBar from "../../components/navbar/NavBar";
import CardBasic from "../../components/CardBasic";
import TechExpertAll from "../sections/TechExpertAll";
import OurWork from "../sections/OurWork";
import Clients from "../sections/Clients";
import PreFooter from "../sections/PreFooter";
import AppFooter from "../../components/AppFooter";
import SProcess from "../sections/SProcess";
import { dtWorkData } from "../../utils/workData";
import MainBannerContact from "../sections/MainBannerContact";


function DigitalTransformation() {
    return (
        <>
            <NavBar />
            <CardBasic bgColor="bg-base-100" shadow="shadow-null">

                <div className="min-h-[80vh] flex flex-col justify-center">

                    <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl lg:text-9xl mb-4 md:mb-8">Elevating Businesses For The<span className="motion-safe:animate-pulse text-primary">Digital</span> Age</h1>
                    <h4 className="md:text-xl lg:text-3xl">We empower Enterprises and SMBs with digital technology and AI-driven automation—enhancing customer experiences, optimizing operations, and transforming business models.</h4>
                    </div>
                    <MainBannerContact/>
                </div>

            </CardBasic>

            <div className="max-w-[1440px] mx-auto">
                
                <SProcess/>

                <TechExpertAll />
                <OurWork workData={dtWorkData} bgColor="bg-base-200"/>
                {/* <div className="divider"></div> */}
                <Clients/>
                <div className="divider"></div>
                <PreFooter/>
                <AppFooter/>


            </div>
        </>
    )
}

export default DigitalTransformation;