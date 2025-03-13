import { whyUsData, whyUsTitle } from "../../utils/homeData"
import CardBasic from "../../components/CardBasic"

function WhyUs() {
    return (
        <CardBasic bgColor="bg-base-100" shadow="shadow-null">

            <div className="title prose w-full max-w-none mb-4 grid lg:grid-cols-2 lg:mb-8">
                <h1 className="font-medium">Why Choose Us?</h1>
                <p className="mt-0 text-base">{whyUsTitle}</p>
            </div>

            <div className="flex flex-row justify-between">

                <div className="grid md:grid-cols-2 gap-2 lg:max-w-1/2 md:gap-4">
                    {whyUsData.map((data, index) => (
                        <CardBasic bgColor="bg-base-100" shadow="null" key={index}>
                            <img src={data.img} className="w-1/2 md:w-1/3 mb-4"></img>
                            <div className="prose max-w-none w-full">
                                <h3>{data.title}</h3>
                                <p className="">{data.data}</p>
                            </div>


                        </CardBasic>
                    ))}
                </div>
                <div className="hidden lg:block bg-[url('/images/home/work-bg-main.png')] bg-cover min-h-screen w-full animate-pulse"></div>
            </div>
        </CardBasic>
    )
};

export default WhyUs;