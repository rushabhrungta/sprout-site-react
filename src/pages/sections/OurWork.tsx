import CardBasic from "../../components/CardBasic";


interface WorkData {
    title: string;
    services:string[];
    img: string;
}

interface OurWorkProps {
    workData: WorkData[];
    bgColor?: string;
}

function OurWork({ workData, bgColor = "bg-base-100" }: OurWorkProps) {
    return (
        <CardBasic shadow="null" bgColor={bgColor}>
            <div className="title prose w-full max-w-none md:mb-8">
                <h1 className="font-medium">Our Work</h1>
                <p className="mt-0 text-base">Crafting Excellence, Showcasing Impact – A Glimpse into Our Work.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {workData.map((data, index) => (

                    <div className="prose mb-8 md:mb-0" key={index}>
                        <img src={data.img} className="mb-2 rounded-xl hover:shadow-md w-full"></img>

                        <div className="mb-2">
                            {data.services.map((data, index) => (
                                <div className="badge badge-secondary badge-xs mr-1" key={index}>{data}</div>
                            ))}
                        </div>
                        <h4 className="font-medium mt-0">{data.title}</h4>
                    </div>

                ))}
            </div>
        </CardBasic>
    )
}


export default OurWork;