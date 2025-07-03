
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const HighlightedRFS = () => {
  const rfsData = [
    {
      tenderNo: "231/RDF/DT1",
      title: "Test WS 2 IFM WS - Coal Cub ID WS-Spec",
      status: "PreQualifications",
      remarks: "D17ADEA 2Spec Spec",
      pic: ""
    },
    {
      tenderNo: "84,88,189",
      title: "Test RFS - ISD Ligpet",
      status: "PreQualifications",
      remarks: "Mill Pens Spec",
      pic: ""
    },
    {
      tenderNo: "231/RDF/DT",
      title: "Test WS - Recurring",
      status: "Pre Qualifications",
      remarks: "D17ADEA 2Spec Spec",
      pic: ""
    },
    {
      tenderNo: "231/SIGADT",
      title: "Test WS OPP/N 1",
      status: "Pre Qualifications",
      remarks: "D17ADEA 2Spec Spec",
      pic: ""
    },
    {
      tenderNo: "030/5/2016",
      title: "Teq Spesial Komplesi Model Diversifiks",
      status: "PreQualifications",
      remarks: "D17ADEA 2Spec Spec",
      pic: ""
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">Highlighted RFS</h2>
      
      <Card className="border border-gray-200">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tender No.</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tender Title</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Remarks</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">PIC</th>
                </tr>
              </thead>
              <tbody>
                {rfsData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-25">
                    <td className="px-4 py-3 text-sm text-gray-900">{row.tenderNo}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{row.title}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="text-xs">
                        {row.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.remarks}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.pic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default HighlightedRFS;
