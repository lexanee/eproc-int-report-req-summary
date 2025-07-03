
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

const ListOfTenders = () => {
  const tendersData = [
    {
      tenderNo: "231/SIG/2017",
      requisitionType: "Service",
      tenderMethod: "OE",
      contractSpecialist: "D17ADEA Pras Spec",
      rfmReceiptDate: "24/08/2015",
      tenderRelease: "24/08/2015",
      bidSubmission: "24/08/2015",
      negotiation: "",
      award: "7/4/063"
    },
    {
      tenderNo: "847/SIG/17",
      requisitionType: "Service",
      tenderMethod: "DA",
      contractSpecialist: "Mill Pens Spec",
      rfmReceiptDate: "60/04/2018",
      tenderRelease: "2/08/2016",
      bidSubmission: "23/07/2016",
      negotiation: "-",
      award: "-"
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">List of Tenders</h2>
      
      <Card className="border border-gray-200">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tender No.</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Requisition Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tender Method</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Contract Specialist</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">RFM Receipt Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tender Release/RFQ</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Bid Submission Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Negotiation Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Award</th>
                </tr>
              </thead>
              <tbody>
                {tendersData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-25">
                    <td className="px-4 py-3 text-sm text-gray-900">{row.tenderNo}</td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="text-xs">
                        {row.requisitionType}
                      </Badge>  
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{row.tenderMethod}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.contractSpecialist}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.rfmReceiptDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.tenderRelease}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.bidSubmission}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.negotiation}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.award}</td>
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

export default ListOfTenders;
