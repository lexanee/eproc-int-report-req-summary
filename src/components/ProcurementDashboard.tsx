
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RequisitionSummaryByValue from "./RequisitionSummaryByValue";
import RequisitionSummaryByQuantity from "./RequisitionSummaryByQuantity";

const ProcurementDashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-semibold text-slate-900">
            Procurement Progress Report
          </h1>
          <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300">
            Active
          </Badge>
        </div>
        <p className="text-lg text-slate-600">
          Januari 2025 - Desember 2025
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span>Asumsi Kurs 1US$</span>
          <span className="font-mono text-base text-slate-800">16250</span>
        </div>
      </div>

      {/* Summary by Quantity Section - Now First */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Requisition Summary by Quantity
        </h2>
        <RequisitionSummaryByQuantity />
      </div>

      {/* Summary by Value Section - Now Second */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Requisition Summary by Value
        </h2>
        <RequisitionSummaryByValue />
      </div>
    </div>
  );
};

export default ProcurementDashboard;
