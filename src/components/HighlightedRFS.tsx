import { Card, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface RFSData {
  number: string;
  description: string;
  status: string;
  date: string;
}

const rfsData: RFSData[] = [
  {
    number: "RFS-001",
    description: "Request for software licenses",
    status: "Approved",
    date: "2025-01-12",
  },
  {
    number: "RFS-002",
    description: "Catering service for event",
    status: "Pending",
    date: "2025-01-18",
  },
  {
    number: "RFS-003",
    description: "Office renovation",
    status: "Rejected",
    date: "2025-01-22",
  },
];

const columns: ColumnsType<RFSData> = [
  {
    title: "RFS No",
    dataIndex: "number",
    key: "number",
    align: "center",
    width: 120,
    render: (text: string) => <span className="font-medium">{text}</span>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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
        color={
          text === "Approved" ? "green" : text === "Pending" ? "blue" : "red"
        }
        className="text-xs px-2 py-0.5"
      >
        {text}
      </Tag>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    align: "center",
    width: 140,
    render: (text: string) => <span className="text-sm">{text}</span>,
  },
];

const HighlightedRFS = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500 mb-4">
      <i className="text-xs sm:text-sm">
        {"*) "}This table highlights recent RFS requests.
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
          dataSource={rfsData}
          pagination={false}
          size="small"
          scroll={{ x: 600 }}
          className="custom-table"
        />
      </div>
    </Card>
  </div>
);

export default HighlightedRFS;
