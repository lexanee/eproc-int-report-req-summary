
import { Card, CardContent } from "@/components/ui/card";

const RequisitionSummaryByValue = () => {
  const summaryData = [
    { label: "Received IDR", value: "17,418,023,294" },
    { label: "Received USD", value: "450,000" },
    { label: "Total Value in USD", value: "1,563,802", isTotal: true },
    { label: "On Process IDR", value: "7,199,057,080" },
    { label: "On Process USD", value: "150,000" },
    { label: "Total Value in USD", value: "619,906", isTotal: true },
    { label: "Completed IDR", value: "5,595,034,054" },
    { label: "Completed USD", value: "200,000" },
    { label: "Total Value in USD", value: "559,503", isTotal: true },
    { label: "Cancelled IDR", value: "0" },
    { label: "Cancelled USD", value: "0" },
    { label: "Total Value in USD", value: "0", isTotal: true },
    { label: "Balance IDR", value: "18,607,825,320" },
    { label: "Balance USD", value: "500,000" },
    { label: "Total Value in USD", value: "1,860,783", isTotal: true }
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
