
interface CardBasicProps {
    children: React.ReactNode;
    bgColor?: string;
    shadow?: string;
    marginY?: string;
  }

function CardBasic({children ,bgColor = "bg-base-100", shadow="shadow-sm", marginY = "my-4" }:CardBasicProps) {
    return (
        <div className={`card ${bgColor} ${shadow} ${marginY}`}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}


export default CardBasic;