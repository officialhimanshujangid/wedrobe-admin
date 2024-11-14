/* eslint-disable react/prop-types */

import { buildStyles, CircularProgressbar,} from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css'; // Import circular progress bar styles

const MetricCard = ({ name , size , greentext , text ,value}) => {
  return (
    <div className=" flex items-center justify-between bg-white  border p-6 rounded-lg shadow-lg">
        {/* <span className='bg-sidebarTheme-dark p-2 rounded-full'>{image}</span> */}
      <div className="">
        <p className=" font-bold text-lg">{name}</p>
        <p className="text-3xl font-bold">{size}</p>
        <p className="text-sidebarTheme-dark mt-2">
          {greentext} <span className="text-gray-400">{text}</span>
        </p>
      </div>
      <div>

     <div className="w-16 h-16">


     <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? value : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                
                    // Text size
                    textSize: '20px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                
                    // Colors
                    pathColor: `#D73061`,
      textColor:'black',
                    // trailColor: '#D73061',
                    backgroundColor: '#D73061',
                  })}
                />
              );
            }}
          </VisibilitySensor>
               </div>
           </div>
    </div>
  );
};

export default MetricCard;
