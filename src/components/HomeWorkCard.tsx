import { homeWorkData } from "../utils/homeData";

function HomeWorkCard({ data = homeWorkData[0] }) {
    return (
        <div className="card bg-base-100 w-auto shadow-sm">
            <figure>
                <img
                    src={data.img || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={data.title} />
            </figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-2 mb-2">
                    {data.services.map((sData, index) => (

                        <div className="badge badge-secondary" key={index}>{sData}</div>

                    ))}
                </div>
                <h2 className="card-title">
                    {data.title}
                </h2>
                <p>{data.data}</p>

            </div>
        </div>

    )
};


export default HomeWorkCard;