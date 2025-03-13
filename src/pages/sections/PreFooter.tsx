import CardBasic from "../../components/CardBasic"


function PreFooter() {
    return (
        <CardBasic shadow="shadow-sm" bgColor="bg-base-200" >

            <div className="min-h-[24vh] flex items-center">
                <h1 className="font-base text-3xl md:text-5xl lg:text-7xl ">Lets make something amazing together. Start by <a href="/contact"><span className="text-secondary hover:text-primary">Saying Hi!</span></a></h1>
            </div>

        </CardBasic>
    )
};

export default PreFooter