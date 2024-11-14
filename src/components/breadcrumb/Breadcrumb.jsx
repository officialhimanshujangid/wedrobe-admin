/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Breadcrumb({ breadcrumpData }) {
    console.log(breadcrumpData , "bdsjhs")
    const navigate = useNavigate();

    return (
        <div className="mb-3">
            <nav>
                <span className="text-black capitalize">
                    {breadcrumpData?.map((element, index) => (
                        <span key={index} onClick={() => navigate(element.link)} style={{ cursor: 'pointer' }}>
                            {element.name}
                            {index < breadcrumpData.length - 1 && " > "}
                        </span>
                    ))}
                </span>
            </nav>
        </div>
    );
}

export default Breadcrumb;
