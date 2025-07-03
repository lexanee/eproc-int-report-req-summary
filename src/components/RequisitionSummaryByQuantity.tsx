import { Card, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface RequisitionData {
  currency: string;
  received: string;
  onProcess: string;
  completed: string;
  cancelled: string;
  balance: string;
}

const RequisitionSummaryByQuantity = () => {
  const rfmData: RequisitionData[] = [
    {
      currency: "IDR",
      received: "100",
      onProcess: "50",
      completed: "95",
      cancelled: "0",
      balance: "55",
    },
    {
      currency: "USD",
      received: "20",
      onProcess: "2",
      completed: "3",
      cancelled: "1",
      balance: "19",
    },
    {
      currency: "Total",
      received: "120",
      onProcess: "52",
      completed: "98",
      cancelled: "1",
      balance: "74",
    },
  ];

  const rfsData: RequisitionData[] = [
    {
      currency: "IDR",
      received: "95",
      onProcess: "45",
      completed: "90",
      cancelled: "-5",
      balance: "55",
    },
    {
      currency: "USD",
      received: "15",
      onProcess: "0",
      completed: "0",
      cancelled: "0",
      balance: "15",
    },
    {
      currency: "Total",
      received: "110",
      onProcess: "45",
      completed: "90",
      cancelled: "-5",
      balance: "70",
    },
  ];

  const columns: ColumnsType<RequisitionData> = [
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      align: "center",
      width: 120,
      render: (text: string) => {
        if (text === "IDR") {
          return (
            <Tag
              color="red"
              className="text-center px-3 py-0.5 rounded-md text-xs"
            >
              {text}
            </Tag>
          );
        } else if (text === "USD") {
          return (
            <Tag
              color="blue"
              className="text-center px-2.5 py-0.5 rounded-md text-xs"
            >
              {text}
            </Tag>
          );
        } else {
          return <span className="font-bold">{text}</span>;
        }
      },
    },
    {
      title: "Received",
      dataIndex: "received",
      key: "received",
      align: "center",
      width: 100,
      render: (text: string) => (
        <span className="flex justify-end text-sm">{text}</span>
      ),
    },
    {
      title: "On Process",
      dataIndex: "onProcess",
      key: "onProcess",
      align: "center",
      width: 120,
      render: (text: string) => (
        <span className="flex justify-end text-sm">{text}</span>
      ),
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      align: "center",
      width: 120,
      render: (text: string) => (
        <span className="flex justify-end text-sm">{text}</span>
      ),
    },
    {
      title: "Cancelled",
      dataIndex: "cancelled",
      key: "cancelled",
      align: "center",
      width: 120,
      render: (text: string) => (
        <span className="flex justify-end text-sm">{text}</span>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      align: "center",
      width: 100,
      render: (text: string) => (
        <span className="flex justify-end text-sm">{text}</span>
      ),
    },
  ];

  const TableCard = ({
    title,
    data,
  }: {
    title: string;
    data: RequisitionData[];
  }) => (
    <Card
      title={title}
      className="border border-slate-200 shadow-sm"
      styles={{
        body: { padding: 0 },
        header: { textAlign: "center" },
      }}
    >
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          size="small"
          scroll={{ x: 600 }}
          rowClassName={(record) =>
            record.currency === "Total" ? "bg-slate-50 font-bold" : ""
          }
          className="custom-table"
        />
      </div>
    </Card>
  );

  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
        Quantity
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <TableCard title="RFM" data={rfmData} />
        <TableCard title="RFS" data={rfsData} />
      </div>
    </div>
  );
};

export default RequisitionSummaryByQuantity;
