import { Card, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface RFMData {
  number: string;
  description: string;
  status: string;
  date: string;
}

const rfmData: RFMData[] = [
  {
    number: "RFM-001",
    description: "Request for new laptops",
    status: "Approved",
    date: "2025-01-10",
  },
  {
    number: "RFM-002",
    description: "Office furniture replacement",
    status: "Pending",
    date: "2025-01-15",
  },
  {
    number: "RFM-003",
    description: "Printer maintenance",
    status: "Rejected",
    date: "2025-01-20",
  },
];

const columns: ColumnsType<RFMData> = [
  {
    title: "RFM No",
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

const HighlightedRFM = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500 mb-4">
      <i className="text-xs sm:text-sm">
        {"*) "}This table highlights recent RFM requests.
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
          dataSource={rfmData}
          pagination={false}
          size="small"
          scroll={{ x: 600 }}
          className="custom-table"
        />
      </div>
    </Card>
  </div>
);

export default HighlightedRFM;
