import NavBar from "../components/navbar/NavBar";
import CardBasic from "../components/CardBasic";
import AppFooter from "../components/AppFooter";
import WhyUs from "./sections/WhyUs";
import HomeCases from "./sections/HomeCases";
import OurDetails from "./sections/OurDetails";
import JourneySoFar from "./sections/JourneySoFar";
import Clients from "./sections/Clients";
import PreFooter from "./sections/PreFooter";
import MainBannerContact from "./sections/MainBannerContact";

function Home() {
    return (
        <>

            <NavBar />

            <CardBasic bgColor="bg-base-100" shadow="shadow-null">

                <div className="min-h-[80vh] flex flex-col justify-center">

                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl lg:text-9xl mb-4 md:mb-8">Supercharging Your Growth With <span className="motion-safe:animate-pulse text-primary">Innovation.</span></h1>
                        <h4 className="md:text-xl lg:text-3xl">We craft automation, build products, and drive transformation to elevate your business.</h4>
                    </div>
                    <MainBannerContact/>
                    
                </div>

            </CardBasic>

            <div className="max-w-[1440px] mx-auto">

                <WhyUs />
                <HomeCases />
                <OurDetails />

                <div className="divider"></div>
                <JourneySoFar />


                <div className="divider"></div>

                <Clients/>
                <div className="divider"></div>
                <PreFooter/>

                <AppFooter />
            </div>
        </>
    )
}

export default Home;