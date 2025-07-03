
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const HighlightedRFM = () => {
  const rfmData = [
    {
      tenderNo: "472239/RD2",
      title: "Testing OF NW-CNF-2",
      status: "Vendor Announcement",
      remarks: "Mill Pens Spec",
      pic: ""
    },
    {
      tenderNo: "789990/02",
      title: "Testing Ductional BNDA Serapicpe - Sholmery Yang NaltaAction URS JAI Sohkt",
      status: "Bid Opening",
      remarks: "Mill Pens Spec",
      pic: ""
    },
    {
      tenderNo: "221/RID/DTI",
      title: "SBM GA 1",
      status: "Vendor Announcement",
      remarks: "D17ADEA 2Spec Spec",
      pic: ""
    },
    {
      tenderNo: "231/SIG/2016",
      title: "SBM Test Off",
      status: "Pre Qualifications",
      remarks: "D17ADEA 2Spec Spec",
      pic: ""
    },
    {
      tenderNo: "231/SIG/17",
      title: "Test SBM OPP/N 1",
      status: "Cor Challenge Re Opening File should",
      remarks: "D17ADEA 2Spec Spec",
      pic: ""
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">Highlighted RFM</h2>
      
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
                {rfmData.map((row, index) => (
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

export default HighlightedRFM;
