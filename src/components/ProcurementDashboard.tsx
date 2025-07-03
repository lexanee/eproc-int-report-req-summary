
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import RequisitionSummaryByQuantity from "./RequisitionSummaryByQuantity";
import RequisitionSummaryByValue from "./RequisitionSummaryByValue";
import HighlightedRFS from "./HighlightedRFS";
import HighlightedRFM from "./HighlightedRFM";
import ListOfTenders from "./ListOfTenders";

const ProcurementDashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-8 max-w-7xl">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Procurement Progress Report - [January 2025 - December 2025]
          </h1>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quantity Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Quantity (EA)</h2>
          <RequisitionSummaryByQuantity />
        </div>

        {/* Total Value Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Total Value (IDR)</h2>
          <RequisitionSummaryByValue />
        </div>
      </div>

      {/* Highlighted Sections */}
      <div className="space-y-8">
        <HighlightedRFS />
        <HighlightedRFM />
        <ListOfTenders />
      </div>
    </div>
  );
};

export default ProcurementDashboard;
