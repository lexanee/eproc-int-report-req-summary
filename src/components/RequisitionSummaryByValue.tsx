
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RequisitionSummaryByValue = () => {
  const rfmData = [
    { desc: "IDR", received: "100,000,000", onProcess: "75,000,000.00", completed: "20,000,000.00", cancelled: "1,000,000.00", balance: "154,000,000.00" },
    { desc: "USD", received: "2,000,000", onProcess: "500,000.00", completed: "400,000.00", cancelled: "-", balance: "2,100,000.00" },
    { desc: "Total", received: "102,000,000", onProcess: "75,500,000", completed: "20,400,000", cancelled: "1,000,000", balance: "156,100,000" },
    { desc: "Total In USD", received: "2,006,153.85", onProcess: "504,615.38", completed: "400,230.77", cancelled: "61.54", balance: "2,109,476.92" }
  ];

  const rfsData = [
    { desc: "IDR", received: "99,999,500.00", onProcess: "74,999,500.00", completed: "19,999,500.00", cancelled: "999,500.00", balance: "153,999,500.00" },
    { desc: "USD", received: "1,999,500.00", onProcess: "499,500.00", completed: "399,500.00", cancelled: "-", balance: "2,099,500.00" },
    { desc: "Total", received: "101,999,000.00", onProcess: "75,499,000.00", completed: "20,399,000.00", cancelled: "999,500.00", balance: "156,099,000.00" },
    { desc: "Total In USD", received: "2,005,653.82", onProcess: "504,115.35", completed: "400,730.74", cancelled: "61.51", balance: "2,108,976.89" }
  ];

  const TableCard = ({ title, data }: { title: string, data: any[] }) => (
    <Card className="border border-slate-200">
      <CardHeader className="bg-white border-b border-slate-200">
        <CardTitle className="text-center text-lg font-semibold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-left font-medium text-slate-700">Desc</th>
                <th className="px-4 py-3 text-right font-medium text-slate-700">Received</th>
                <th className="px-4 py-3 text-right font-medium text-slate-700">On-Process</th>
                <th className="px-4 py-3 text-right font-medium text-slate-700">Completed</th>
                <th className="px-4 py-3 text-right font-medium text-slate-700">Cancelled</th>
                <th className="px-4 py-3 text-right font-medium text-slate-700">Balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-slate-100 hover:bg-slate-25 ${
                    row.desc.includes('Total') ? 'bg-slate-50 font-medium' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <Badge variant={row.desc === 'USD' ? 'default' : row.desc === 'IDR' ? 'secondary' : 'outline'}>
                      {row.desc}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-sm">{row.received}</td>
                  <td className="px-4 py-3 text-right font-mono text-sm">{row.onProcess}</td>
                  <td className="px-4 py-3 text-right font-mono text-sm">{row.completed}</td>
                  <td className="px-4 py-3 text-right font-mono text-sm">{row.cancelled}</td>
                  <td className="px-4 py-3 text-right font-mono text-sm font-medium">{row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TableCard title="RFM" data={rfmData} />
      <TableCard title="RFS" data={rfsData} />
    </div>
  );
};

export default RequisitionSummaryByValue;
