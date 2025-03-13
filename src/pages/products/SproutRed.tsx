import CardBasic from "../../components/CardBasic"
import NavBar from "../../components/navbar/NavBar"
import { sproutRedFeatures } from "../../utils/productsData";
import TechExpertAll from "../sections/TechExpertAll";
import OurWork from "../sections/OurWork";
import Clients from "../sections/Clients";
import PreFooter from "../sections/PreFooter";
import AppFooter from "../../components/AppFooter";
import ProductKeyFeatures from "../sections/ProductKeyFeatures";
import { spRedHead, prodSpRed } from "../../utils/workData";
import MainBannerContact from "../sections/MainBannerContact";

function SproutRed() {

    return (
        <>
            <NavBar />

            <CardBasic bgColor="bg-base-100" shadow="shadow-null">

                <div className="min-h-[80vh] flex flex-col md:flex-row justify-evenly items-center gap-8">
                    <div className="md:max-w-2/3">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-5xl lg:text-9xl mb-4 md:mb-8"><span className="motion-safe:animate-pulse text-secondary">Red</span> By Sprout</h1>
                            <h4 className="md:text-xl lg:text-3xl">Is our interactive video suite that enables our customers to super-charge their video experiences by bringing to them never seen before </h4>
                        </div>
                        <MainBannerContact/>

                    </div>
                    <img
                        src={spRedHead}
                        className="md:w-1/3 rounded-lg shadow-sm" />
                </div>

            </CardBasic>

            <div className="max-w-[1440px] mx-auto">

                <ProductKeyFeatures feaData={sproutRedFeatures}/>
                <TechExpertAll />
                <OurWork workData={prodSpRed} bgColor="bg-base-200" />
                <Clients />
                <div className="divider"></div>
                <PreFooter />
                <AppFooter />


            </div>
        </>
    )
};


export default SproutRed;