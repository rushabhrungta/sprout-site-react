import CardBasic from "../../components/CardBasic";
import { jourData } from "../../utils/homeData";

function JourneySoFar() {
    return (
        <CardBasic shadow="null">
            <div className="title prose w-full max-w-none md:mb-8">
                <h1 className="font-medium">Journey So Far</h1>
                <p className="mt-0 text-base">Some of our key milestones that have shaped our journey and success.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-16">

                {jourData.map((data, index) => (

                    <CardBasic bgColor="bg-base-200" key={index}>
                        <div className="prose mx-auto flex flex-col items-center">
                            <img src={data.img}></img>
                            <h3 className="font-medium mt-0">{data.data}</h3>
                        </div>
                    </CardBasic>

                ))}

            </div>
        </CardBasic>
    )
};


export default JourneySoFar;