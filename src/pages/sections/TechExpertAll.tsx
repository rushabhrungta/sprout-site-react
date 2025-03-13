import CardBasic from "../../components/CardBasic"
import { expertData } from "../../utils/aboutData"


function TechExpertAll({techData = expertData, title ="Our Expertise", subTitle = "We harness the power of JavaScript and Python’s most advanced frameworks, seamlessly blending them with AI-driven technologies and cutting-edge cloud platforms to build intelligent, scalable solutions."}) {
    return (
        <CardBasic bgColor="bg-base-100" shadow="shadow-null">
            <div className="title prose w-full max-w-none lg:mb-8">
                <h1 className="font-medium">{title}</h1>
                <p className="mt-0 text-base">{subTitle}</p>
            </div>

            <div>

                <CardBasic shadow="shadow-null">
                    <div>
                        <div className="prose mb-4">
                            <h3 className="font-light">Front-End</h3>
                        </div>
                        <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 md:w-1/2">
                            {techData.frontEnd.map((data, index) => (
                                <div className="prose my-auto" key={index}>
                                    <img src={data.img} className="mx-auto mb-2 w-3/4 md:w-1/4"></img>
                                    <p className="text-center mt-0">{data.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardBasic>


                <div className="grid md:grid-cols-2 lg:grid-cols-4">

                    <CardBasic shadow="shadow-null">
                        {/* <div className="mb-8"> */}
                        <div className="prose mb-4">
                            <h3 className="font-light">Back-End</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            {techData.backEnd.map((data, index) => (
                                <div className="prose my-auto" key={index}>
                                    <img src={data.img} className="mx-auto mb-2 w-3/4 md:w-1/2"></img>
                                    <p className="text-center mt-0">{data.name}</p>
                                </div>
                            ))}
                        </div>
                        {/* </div> */}
                    </CardBasic>

                    <CardBasic shadow="null">
                        <div>
                            <div className="prose mb-4">
                                <h3 className="font-light">Databases</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-8">
                                {techData.dataBases.map((data, index) => (
                                    <div className="prose my-auto" key={index}>
                                        <img src={data.img} className="mx-auto mb-2 w-3/4 md:w-1/2"></img>
                                        <p className="text-center mt-0">{data.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardBasic>
                    <CardBasic shadow="shadow-null">
                        {/* <div className="mb-8"> */}
                        <div className="prose mb-4">
                            <h3 className="font-light">Web Services</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            {techData.webServices.map((data, index) => (
                                <div className="prose my-auto" key={index}>
                                    <img src={data.img} className="mx-auto mb-2 w-3/4 md:w-1/2"></img>
                                    <p className="text-center mt-0">{data.name}</p>
                                </div>
                            ))}
                        </div>
                        {/* </div> */}
                    </CardBasic>
                    <CardBasic shadow="null">

                        <div>
                            <div className="prose mb-4">
                                <h3 className="font-light">Cloud Platforms</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-8">
                                {techData.cloudPlatforms.map((data, index) => (
                                    <div className="prose my-auto" key={index}>
                                        <img src={data.img} className="mx-auto mb-2 w-3/4 md:w-1/2"></img>
                                        <p className="text-center mt-0">{data.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardBasic>
                </div>

            </div>
        </CardBasic>
    )
};


export default TechExpertAll;