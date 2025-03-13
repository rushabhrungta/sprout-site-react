import CardBasic from "../../components/CardBasic";
import { aboutData, aboutFirstP } from "../../utils/homeData";


function OurDetails() {
    return (
        <CardBasic shadow="null">
            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:min-h-[56vh]">
                <div className="title prose lg:w-1/2 max-w-none">
                    <h1 className="font-light">We craft automation, build products, and drive transformation to elevate your business.</h1>
                    <p className="mt-0 text-base">{aboutFirstP}</p>
                </div>
                <div className="prose lg:w-1/2 max-w-none">
                    {aboutData.map((data, index) => (<p className="text-base" key={index}>{data}</p>))}
                </div>
            </div>
        </CardBasic>
    )
};


export default OurDetails;