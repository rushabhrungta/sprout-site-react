import NavBar from "../../components/navbar/NavBar";
import CardBasic from "../../components/CardBasic";
import ProductKeyFeatures from "../sections/ProductKeyFeatures";
import { taggmeFeatures } from "../../utils/productsData";
import TechExpertAll from "../sections/TechExpertAll";
import Clients from "../sections/Clients";
import OurWork from "../sections/OurWork";
import PreFooter from "../sections/PreFooter";
import AppFooter from "../../components/AppFooter";
import { spTagMeHead, prodSpTaggMe } from "../../utils/workData";
import MainBannerContact from "../sections/MainBannerContact";


function Taggme() {
    return (
        <>
            <NavBar />

            <CardBasic bgColor="bg-base-100" shadow="shadow-null">

                <div className="min-h-[80vh] flex flex-col md:flex-row justify-evenly items-center gap-8">
                    <div className="md:max-w-2/3">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-5xl lg:text-9xl mb-4 md:mb-8"><span className="motion-safe:animate-pulse text-secondary">Tagg</span>Me</h1>
                            <h4 className="md:text-xl lg:text-3xl">Taggme is an AI-powered employment platform that shifts the focus from education to skills, connecting talent with opportunities while enabling seamless portfolio sharing.</h4>
                        </div>
                        <MainBannerContact/>


                    </div>
                    <img
                        src={spTagMeHead}
                        className="md:w-1/3 rounded-lg shadow-sm" />
                </div>

            </CardBasic>


            <div className="max-w-[1440px] mx-auto">
                
                <ProductKeyFeatures feaData={taggmeFeatures}/>

                <TechExpertAll />
                <OurWork workData={prodSpTaggMe} bgColor="bg-base-200" />
                <Clients />
                <div className="divider"></div>
                <PreFooter />
                <AppFooter />


            </div>
        </>
    )
}


export default Taggme;