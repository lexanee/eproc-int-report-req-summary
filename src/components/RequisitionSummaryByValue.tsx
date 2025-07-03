
import { Card, CardContent } from "@/components/ui/card";

const RequisitionSummaryByValue = () => {
  const summaryData = [
    { label: "Received RFS", value: "5,990,355,054" },
    { label: "Received RFM", value: "11,427,668,240" },
    { label: "Total IDR", value: "17,427,137,394", isTotal: true },
    { label: "On Process RFS", value: "2,300,000,000" },
    { label: "On Process RFM", value: "4,899,057,080" },
    { label: "Total IDR", value: "6,729,556,080", isTotal: true },
    { label: "Completed RFS", value: "3,795,034,054" },
    { label: "Completed RFM", value: "1,800,000,000" },
    { label: "Total IDR", value: "5,595,054,054", isTotal: true },
    { label: "Cancelled RFS", value: "0" },
    { label: "Cancelled RFM", value: "0" },
    { label: "Total IDR", value: "0", isTotal: true },
    { label: "Balance RFS", value: "4,481,002,000" },
    { label: "Balance RFM", value: "14,126,823,320" },
    { label: "Total IDR", value: "18,607,825,320", isTotal: true }
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

export default RequisitionSummaryByValue;
