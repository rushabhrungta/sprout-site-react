import CardBasic from "../../components/CardBasic";

interface Feature {
    img: string;
    content: string;
  }
  
  interface ProductKeyFeaturesProps {
    feaData: Feature[];
  }



function ProductKeyFeatures({feaData}:ProductKeyFeaturesProps) {
    return (
        <CardBasic shadow="null">
            <div className="title prose w-full max-w-none md:mb-8">
                <h1 className="font-medium">Key Features</h1>
                <p className="mt-0 text-base">Our platform is packed with powerful features designed to give you a competitive edge—here are just a few.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {feaData.map((data, index) => (
                    <CardBasic key={index} bgColor="bg-base-200">
                        <div className="flex gap-4 items-center ">
                            <img src={data.img} className="w-1/4" />
                            <p>{data.content}</p>
                        </div>
                    </CardBasic>
                ))}
            </div>
        </CardBasic>
    )
}

export default ProductKeyFeatures;