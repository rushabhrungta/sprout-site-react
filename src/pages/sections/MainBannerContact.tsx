import { routeLinkData } from "../../utils/routeData";

function MainBannerContact(){
    return(
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {routeLinkData.services.pages.map((data,index)=>(
                            <a key={index} href={data.link}><h2 className="text-xl text-secondary hover:underline">{data.pTitle}</h2></a>
                        ))}
                        <a href="/product/taggme"><h2 className="text-xl text-secondary hover:underline">TaggMe</h2></a>
                        <a href="/contact"><h2 className="text-xl text-primary hover:underline">Get In Touch</h2></a>
                    </div>
    )
}

export default MainBannerContact;