import { Bars2Icon, BuildingOfficeIcon, CreditCardIcon,  UserIcon, UsersIcon } from "@heroicons/react/20/solid"
import { useState } from "react";
import { Tab } from "rizzui"
import CategoriWise from "../components/analytics/CategoriWise";
import LocationWise from "../components/analytics/LocationWise";
import StateWise from "../components/analytics/StateWise";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
const breadcrumpData = [
  {
    name :"App",
    link:"/"
  },
  {
    name :"Analytics",
    link:null
    
  }
]
function Analytics() {
    const [activeTab, setActiveTab] = useState(null); 
    const [activeTab2, setActiveTab2] = useState(0); 

  const handleTabChange = (index) => {
    setActiveTab(index); 
  };
  const handleTabChange2 = (index) => {
    setActiveTab2(index); 
  };

    return (
     <>
      <Breadcrumb breadcrumpData={breadcrumpData} />
        <div className="p-4">
        {/* Header Tabs */}
        <div>
          <Tab>
            <Tab.List>
                
              <Tab.ListItem onClick={() => handleTabChange(null)}>
                 All 
              </Tab.ListItem>
              <Tab.ListItem onClick={() => handleTabChange(0)}>
                <UserIcon className="h-4 w-4" />  enquiries
              </Tab.ListItem>
              <Tab.ListItem onClick={() => handleTabChange(1)}>
                <BuildingOfficeIcon className="h-4 w-4" /> Leads
              </Tab.ListItem>
              <Tab.ListItem onClick={() => handleTabChange(2)}>
                <UsersIcon className="h-4 w-4" /> Calls
              </Tab.ListItem>
              <Tab.ListItem onClick={() => handleTabChange(3)}>
                <CreditCardIcon className="h-4 w-4" /> Pricing insights
              </Tab.ListItem>
          
              <Tab.ListItem onClick={() => handleTabChange(4)}>
                <Bars2Icon className="h-4 w-4" /> Reviews
              </Tab.ListItem>
            </Tab.List>
  
           
          </Tab>
        </div>
        <div className="pl-4">
        <Tab >
            <Tab.List>
           
            <Tab.ListItem onClick={() => handleTabChange2(0)}>
                Categories
              </Tab.ListItem>
            <Tab.ListItem onClick={() => handleTabChange2(1)}>
                Location
              </Tab.ListItem>
            <Tab.ListItem onClick={() => handleTabChange2(2)}>
                States
              </Tab.ListItem>
            </Tab.List>
          </Tab>
        </div>
{activeTab2 === 0 &&        <div><CategoriWise activeTab={activeTab} /></div>
}
{activeTab2 === 1 &&        <div><LocationWise  activeTab={activeTab} /></div>
}
{activeTab2 === 2 &&        <div><StateWise  activeTab={activeTab} /></div>
}

      </div>
     </>
  
    )
}

export default Analytics
