import RequisitionSummaryByValue from "./RequisitionSummaryByValue";
import RequisitionSummaryByQuantity from "./RequisitionSummaryByQuantity";
import { Button, Tag } from "antd";

const ProcurementDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dummy Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">NavBar</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Main Header Section */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 pb-2 border-b border-gray-200">
                  Procurement Progress Report
                </h1>

                <p className="text-base sm:text-lg text-gray-600">
                  January 2025 - December 2025
                </p>
              </div>

              <Button
                type="primary"
                className="bg-green-700 hover:bg-amber-50 hover:text-green-700 border-green-700 hover:border-amber-50 transition-colors duration-200 font-semibold"
              >
                Download
              </Button>
            </div>
          </div>
        </div>

        {/* Requisition Summary Section */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Requisition Summary
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500 mb-4">
                  <span className="text-xs sm:text-sm">
                    Assumed 1 USD Exchange Rate
                  </span>
                  <Tag color="blue">16,250</Tag>
                </div>

                {/* Requisition Summary Content */}
                <div className="space-y-8 sm:space-y-12">
                  <RequisitionSummaryByQuantity />
                  <RequisitionSummaryByValue />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementDashboard;
