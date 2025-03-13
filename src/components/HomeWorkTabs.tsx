import { homeWorkData } from "../utils/homeData";
import HomeWorkCard from "./HomeWorkCard";

function HomeWorkTabs() {
    return (

        <div className="tabs tabs-box lg:max-w-1/3">
            {[
                ...homeWorkData.map((data, index) => (
                    <>
                        <input
                            key={`input-${index}`}
                            type="radio"
                            name="my_tabs_6"
                            className="tab mb-2"
                            aria-label={data.tabTitle}
                            defaultChecked={index === 0} 
                        />
                        <div
                            key={`content-${index}`}
                            className="tab-content"
                        >
                            <HomeWorkCard data={data}/>
                        </div>
                    </>
                )),
            ]}
        </div>







    )
};

export default HomeWorkTabs;