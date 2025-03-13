import CardBasic from "../../components/CardBasic";
import HomeWorkTabs from "../../components/HomeWorkTabs";
import { ourWorkTitle } from "../../utils/homeData";


function HomeCases() {
    return (
        <CardBasic shadow="shadow-sm" bgColor="bg-base-200">

            <div className="flex flex-col lg:flex-row justify-evenly items-center">

                <div className="title prose lg:w-1/2 max-w-none mb-8 lg:mb-0">
                    <h1 className="font-light text-5xl lg:text-7xl">Some Of Our <br /><span className="text-secondary">cases</span></h1>
                    <p className="mt-0 text-base">{ourWorkTitle}</p>
                </div>

                <HomeWorkTabs />
            </div>
        </CardBasic>
    )
}


export default HomeCases;