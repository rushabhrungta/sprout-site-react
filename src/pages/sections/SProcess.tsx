import CardBasic from "../../components/CardBasic";
import { dtProcessData } from "../../utils/servicesData";
import { Tick } from "../../assets/icons";


function SProcess({processData = dtProcessData, title="The Process", subTitle = "We have well-defined SOPs for all our projects, ensuring seamless operations and driving rapid business impact."}) {
    return (
        <CardBasic bgColor="bg-base-100" shadow="shadow-null">
            <div className="title prose w-full max-w-none md:mb-8">
                <h1 className="font-medium">{title}</h1>
                <p className="mt-0 text-base">{subTitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                {processData.map((data, index) => (
                    <CardBasic key={index} bgColor="bg-base-200">
                        <div className="prose">
                            <h3>{data.title}</h3>
                            <img src={data.img} />
                            {data.content.map((text, index) => (
                                <p key={index} className="flex items-start"><span className="text-accent mr-1"><Tick /></span>{text}</p>
                            ))}
                        </div>
                    </CardBasic>
                ))}
            </div>

        </CardBasic>
    )
};

export default SProcess;