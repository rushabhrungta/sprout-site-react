import NavBar from "../../components/navbar/NavBar";
import CardBasic from "../../components/CardBasic";
import AppFooter from "../../components/AppFooter";
import SProcess from "../sections/SProcess";
import TechExpertAll from "../sections/TechExpertAll";
import OurWork from "../sections/OurWork";
import Clients from "../sections/Clients";
import PreFooter from "../sections/PreFooter";
import { pdProcessData } from "../../utils/servicesData";
import { pdWorkData } from "../../utils/workData";
import MainBannerContact from "../sections/MainBannerContact";


function ProductDevelopment() {
    return (
        <>
            <NavBar />
            <CardBasic bgColor="bg-base-100" shadow="shadow-null">

                <div className="min-h-[80vh] flex flex-col justify-center">

                    <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl lg:text-9xl mb-4 md:mb-8"><span className="motion-safe:animate-pulse text-primary">Innovative</span> products that power new business ideas.</h1>
                    <h4 className="md:text-xl lg:text-3xl">Our world-class team of expert product managers, developers, and UX designers transforms your vision into reality with cutting-edge innovation.</h4>
                    </div>
                    <MainBannerContact/>

                </div>

            </CardBasic>

            <div className="max-w-[1440px] mx-auto">
                <SProcess processData={pdProcessData}/>
                <TechExpertAll/>
                <OurWork workData={pdWorkData} bgColor="bg-base-200"/>
                <Clients/>
                <div className="divider"></div>
                <PreFooter/>
                <AppFooter/>
            </div>
        </>
    )
};


export default ProductDevelopment;