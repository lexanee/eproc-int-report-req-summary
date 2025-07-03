
import { Card, CardContent } from "@/components/ui/card";

const RequisitionSummaryByQuantity = () => {
  const summaryData = [
    { label: "Received RFS", value: "14" },
    { label: "Received RFM", value: "35" },
    { label: "Total", value: "49", isTotal: true },
    { label: "On Process RFS", value: "8" },
    { label: "On Process RFM", value: "8" },
    { label: "Total", value: "16", isTotal: true },
    { label: "Completed RFS", value: "6" },
    { label: "Completed RFM", value: "5" },
    { label: "Total", value: "11", isTotal: true },
    { label: "Cancelled RFS", value: "0" },
    { label: "Cancelled RFM", value: "0" },
    { label: "Total", value: "0", isTotal: true },
    { label: "Balance RFS", value: "8" },
    { label: "Balance RFM", value: "30" },
    { label: "Total", value: "38", isTotal: true }
  ];

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-0">
        <div className="space-y-0">
          {summaryData.map((item, index) => (
            <div 
              key={index}
              className={`flex justify-between items-center px-4 py-2 border-b border-gray-100 last:border-b-0 ${
                item.isTotal ? 'bg-gray-50 font-medium' : 'hover:bg-gray-25'
              }`}
            >
              <span className="text-sm text-gray-700">{item.label}</span>
              <span className="text-sm font-mono text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RequisitionSummaryByQuantity;
