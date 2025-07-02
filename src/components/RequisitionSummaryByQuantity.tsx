
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RequisitionSummaryByQuantity = () => {
  const rfmData = [
    { desc: "IDR", received: "100", onProcess: "50", completed: "95", cancelled: "0", balance: "55" },
    { desc: "USD", received: "20", onProcess: "2", completed: "3", cancelled: "1", balance: "19" },
    { desc: "Total", received: "120", onProcess: "52", completed: "98", cancelled: "1", balance: "74" }
  ];

  const rfsData = [
    { desc: "IDR", received: "95", onProcess: "45", completed: "90", cancelled: "-5", balance: "55" },
    { desc: "USD", received: "15", onProcess: "0", completed: "0", cancelled: "0", balance: "15" },
    { desc: "Total", received: "110", onProcess: "45", completed: "90", cancelled: "-5", balance: "70" }
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
                    row.desc === 'Total' ? 'bg-slate-50 font-medium' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <Badge variant={row.desc === 'USD' ? 'default' : row.desc === 'IDR' ? 'secondary' : 'outline'}>
                      {row.desc}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right font-mono">{row.received}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.onProcess}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.completed}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.cancelled}</td>
                  <td className="px-4 py-3 text-right font-mono font-medium">{row.balance}</td>
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

export default RequisitionSummaryByQuantity;
