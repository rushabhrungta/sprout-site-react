import CardBasic from "../../components/CardBasic";
import { clientImgs } from "../../utils/homeData";


function Clients() {
    return (
        <CardBasic shadow="null">
            <div className="title prose w-full max-w-none md:mb-8">
                <h1 className="font-medium">Our Clients</h1>
                <p className="mt-0 text-base">We partner with leading clients, implementing the latest technologies to drive meaningful business impact.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 md:gap-16 mb-8">

                {clientImgs.map((image, index) => (

                    <CardBasic shadow="null" key={index}>

                        <img src={image} className="max-h-32 object-contain my-auto"></img>

                    </CardBasic>

                ))}

            </div>
        </CardBasic>
    )
};

export default Clients;