
import { Button } from "rizzui"

function Invoice() {






    return (
        <div className="bg-slate-900 text-xs  text-gray-800 min-h-screen p-10">
        {/* Header Section */}
        <div className="sm:flex block justify-between items-center  mb-12 ">
          <h1 className="text-4xl text-white font-extrabold tracking-tight mb-4">Invoice Details</h1>
          <div className="space-x-4">
            <Button onClick={()=>{window.print()}} className="border-2 border-gray-700 text-white hover:bg-gray-100 transition-all px-5 py-2 rounded-md">
              Print
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md transition-all">
              Download
            </Button>
          </div>
        </div>
      
        {/* Invoice Details Section */}
        <div className="bg-white border  border-gray-200 p-8 rounded-lg shadow-md mb-10">
          <div className="grid  lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-8">
           
            <div>
              <h3 className="font-semibold text-xl mb-2">From</h3>
              <p className="text-gray-700">REDQ, INC</p>
              <p className="text-gray-700">Jerome Bell</p>
              <p className="text-gray-700">4140 Parker Rd. Allentown, NM 31134</p>
              <p className="text-gray-700">(302) 555-0107</p>
              <p className="text-gray-700">Creation Date: Mar 22, 2013</p>
            </div>
      
           
            <div>
              <h3 className="font-semibold text-xl mb-2">Bill To</h3>
              <p className="text-gray-700">TRANSPORT LLC</p>
              <p className="text-gray-700">Albert Flores</p>
              <p className="text-gray-700">2715 Ash Dr. San Jose, SD 83475</p>
              <p className="text-gray-700">(671) 555-0110</p>
              <p className="text-gray-700">Due Date: Mar 22, 2013</p>
            </div>
      
            
            <div className="text-right">
              <div className="inline-block px-4 py-1 bg-green-500 text-white rounded-lg font-bold">Paid</div>
              <p className="mt-2 text-2xl font-semibold text-gray-800">INV - #246098</p>
              <p className="text-gray-500">Invoice Number</p>
              <div className="inline-block mt-4">
                <img
                  src="/qr.png"
                  alt="QR Code"
                  className="w-24 h-24 shadow-lg rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      
        {/* Items Table */}
        <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md mb-10">
          <table className="w-full text-left border-collapse">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="pb-4 text-gray-600">#</th>
                <th className="pb-4 text-gray-600">Item</th>
                <th className="pb-4 text-gray-600">Quantity</th>
                <th className="pb-4 text-gray-600">Unit Price</th>
                <th className="pb-4 text-gray-600">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4">1</td>
                <td className="py-4">ChawkBazar Laravel Flutter Mobile App</td>
                <td className="py-4">2</td>
                <td className="py-4">$100</td>
                <td className="py-4">$200</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4">2</td>
                <td className="py-4">Borobazar React Next Grocery Template</td>
                <td className="py-4">2</td>
                <td className="py-4">$100</td>
                <td className="py-4">$200</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4">3</td>
                <td className="py-4">Superprops React Modern Landing Page Template</td>
                <td className="py-4">3</td>
                <td className="py-4">$100</td>
                <td className="py-4">$300</td>
              </tr>
            </tbody>
          </table>
        </div>
      
        {/* Notes and Summary Section */}
        <div className="lg:flex block justify-between items-start mt-12">
          {/* Notes Section */}
          <div className=" text-white">
            <h3 className="font-semibold text-lg mb-2">Notes</h3>
            <p className="text-sm text-white text-gray-600">
              We appreciate your business. Should you need us to add VAT or extra notes, let us know!
            </p>
          </div>
      
          {/* Invoice Summary */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md ">
            <div className="flex justify-between mb-2">
              <p>Subtotal:</p>
              <p>$700</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping:</p>
              <p>$142</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Discount:</p>
              <p>-$250</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Taxes (15%):</p>
              <p>$67.50</p>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4 border-t pt-4">
              <p>Total:</p>
              <p>$659.50</p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Invoice
