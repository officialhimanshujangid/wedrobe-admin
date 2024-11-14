/* eslint-disable no-unused-vars */

import Header from "../components/header/Header";
import Dashboard from "../pages/Dashboard";

import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserList from "../pages/UserList";
import Transactions from "../pages/Transactions";
import TransactionDetails from "../pages/TransactionDetails";
import Invoice from "../pages/Invoice";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";
import ChatMessages from "../pages/ChatMessages";
import OptionsList from "../components/optionsList/OptionsList";
import Subscription from "../pages/Subscription";
import Analytics from "../pages/Analytics";
import EventCalander from "../pages/EventCalander";
import CreateVendor from "../pages/CreateVendor";
import VendorProfile from "../pages/VendorProfile";
import AboutUs from "../pages/AboutUs";
import HelpAndSuppport from "../pages/HelpAndSuppport";





const Layout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (
    <>
      <div className="xl:flex w-screen   overflow-hidden ">

        <OptionsList sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div style={{boxShadow:"4px 0 8px rgba(255, 255, 255, 0.5)"}} className="flex-1 flex flex-col relative border-l  bg-[#FFFFFF]">
          <div className="h-screen overflow-auto ">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="flex-1   mt-[50px] mb-[80px] lg:mb-2  p-4">
            <Routes >
              <Route index  path="/dashboard" element={<Dashboard />} />
              <Route path="/userlist/:userType" element={<UserList />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/transaction-details/:clientId" element={<TransactionDetails />} />
              <Route path="/invoice/:bookingId" element={<Invoice />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/product-details/:productId" element={<ProductDetails />} />
              <Route path="/product-create" element={<CreateProduct />} />
              <Route path="/product-edit/:ProductId" element={<EditProduct />} />
              <Route path="/user-chat-box" element={<ChatMessages />} />
              <Route path="/user-subscription" element={<Subscription />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/event-calander" element={<EventCalander />} />
              <Route path="/create-user" element={<CreateVendor />} />
              <Route path="/profile" element={<VendorProfile />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/help-support" element={<HelpAndSuppport />} />

            </Routes>
          </main>
          </div>
        </div>
      </div>

    </>
  );
};

export default Layout;

