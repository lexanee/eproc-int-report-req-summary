
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RequisitionSummaryByValue from "./RequisitionSummaryByValue";
import RequisitionSummaryByQuantity from "./RequisitionSummaryByQuantity";

const ProcurementDashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-slate-800">
            Procurement Progress Report
          </h1>
          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
            Active
          </Badge>
        </div>
        <p className="text-xl text-slate-600 font-medium">
          Januari 2025 - Desember 2025
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
          <span>Asumsi Kurs 1US$</span>
          <span className="font-mono text-lg text-slate-700">16250</span>
        </div>
      </div>

      {/* Summary by Value Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            Requisition Summary by Value
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <RequisitionSummaryByValue />
      </div>

      {/* Summary by Quantity Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            Requisition Summary by Quantity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        <RequisitionSummaryByQuantity />
      </div>
    </div>
  );
};

export default ProcurementDashboard;
