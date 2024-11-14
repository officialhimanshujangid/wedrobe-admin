import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"
import { vendorRatings } from "../../constants/dashboardConstants"

function VendorRatingChart() {
    return (
        <div className="bg-white border overflow-x-auto shadow text-center rounded-lg py-4 pr-2 my-2">
               <div className=" text-xl px-4 font-bold text-center">Top Vendors Rating</div>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart  data={vendorRatings}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="vendor" />
                    <PolarRadiusAxis />
                    <Radar name="Rating" dataKey="rating" stroke="#9F2D55" fill="#9F2D55" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default VendorRatingChart
