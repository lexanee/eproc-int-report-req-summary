import { Card, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TenderData {
  tenderNo: string;
  title: string;
  status: string;
  closingDate: string;
}

const tenderData: TenderData[] = [
  {
    tenderNo: "TDR-001",
    title: "Procurement of Office Supplies",
    status: "Open",
    closingDate: "2025-02-15",
  },
  {
    tenderNo: "TDR-002",
    title: "IT Equipment Upgrade",
    status: "Closed",
    closingDate: "2025-01-30",
  },
  {
    tenderNo: "TDR-003",
    title: "Building Maintenance Service",
    status: "Open",
    closingDate: "2025-03-10",
  },
];

const columns: ColumnsType<TenderData> = [
  {
    title: "Tender No",
    dataIndex: "tenderNo",
    key: "tenderNo",
    align: "center",
    width: 120,
    render: (text: string) => <span className="font-medium">{text}</span>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    align: "left",
    width: 240,
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
    width: 100,
    render: (text: string) => (
      <Tag
        color={text === "Open" ? "green" : "red"}
        className="text-xs px-2 py-0.5"
      >
        {text}
      </Tag>
    ),
  },
  {
    title: "Closing Date",
    dataIndex: "closingDate",
    key: "closingDate",
    align: "center",
    width: 140,
    render: (text: string) => <span className="text-sm">{text}</span>,
  },
];

const ListOfTenders = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500 mb-4">
      <i className="text-xs sm:text-sm">
        {"*) "}This table shows the current and recent tenders.
      </i>
    </div>
    <Card
      className="border border-slate-200"
      styles={{
        body: { padding: 0 },
        header: {
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          minHeight: 46,
          paddingTop: 4,
          paddingBottom: 4,
        },
      }}
    >
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={tenderData}
          pagination={false}
          size="small"
          scroll={{ x: 600 }}
          className="custom-table"
        />
      </div>
    </Card>
  </div>
);

export default ListOfTenders;
