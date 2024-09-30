import { FaShoppingBag, FaUsers, FaShoppingCart } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import ProductDetail from "../../Components/admin/ProductDetail";
import OrderDetail from "../../Components/admin/OrderDetail";
import UserDetail from "../../Components/admin/UserDetail";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  return (
    <div>
      {/* Top */}
      <div className="top mb-5 px-5 mt-5">
        <div className="py-5 borde rounded-lg">
          <h1 className=" text-center text-2xl font-bold text-black">Admin Dashboard</h1>
        </div>
      </div>

      <div className="px-5">
        {/* Mid  */}
        <div className="mid mb-5">
          {/* main  */}
          <div className="py-5">
            {/* image  */}
            <div className="flex justify-center">
              {/* <img src="" alt="" /> */}
            </div>
            {/* text  */}
            <div className="">
              <h1 className=" text-center text-lg text-black">
                <span className=" font-bold">Name :</span>
                {user?.name}
              </h1>
              <h1 className=" text-center text-lg text-black">
                <span className=" font-bold">Email :</span>
                {user?.email}
              </h1>
              <h1 className=" text-center text-lg text-black">
                <span className=" font-bold">Email :</span>
                {user?.date}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="">
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-cyan-100 hover:bg-gray-200 border-blue-gray-300 px-4 py-3 rounded-xl" >
                  <div className="text-black w-12 h-12 mb-3 inline-block" >
                    <FaShoppingBag
                      size={50}
                      color="red"
                    />

                  </div>
                  <h2 className="title-font font-medium text-3xl text-green-600 fonts1" >10</h2>
                  <p className=" text-black font-bold" >Total Products</p>
                </div>
              </Tab>

              {/* Total Order  */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-cyan-100 hover:bg-gray-200 border-blue-gray-300 px-4 py-3 rounded-xl">
                  <div className="text-pink-500 w-12 h-12 mb-3 inline-block" >
                    <FaShoppingCart
                      size={50}
                      color="red" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-green-600 fonts1" >10</h2>
                  <p className=" text-black font-bold" >Count Order</p>
                </div>
              </Tab>

              {/* Total User  */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-cyan-100 hover:bg-gray-200 border-blue-gray-300 px-4 py-3 rounded-xl" >
                  <div className="text-pink-500 w-12 h-12 mb-3 inline-block" >
                    <FaUsers
                      size={50}
                      color="red" />

                  </div>
                  <h2 className="title-font font-medium text-3xl text-green-600 fonts1" >10</h2>
                  <p className=" text-black font-bold" >Total User</p>
                </div>
              </Tab>
            </TabList>
            <TabPanel><ProductDetail /></TabPanel>
            <TabPanel><OrderDetail /></TabPanel>
            <TabPanel><UserDetail /></TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;