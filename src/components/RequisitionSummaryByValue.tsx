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

const RequisitionSummaryByValue = () => {
  const rfmData: RequisitionData[] = [
    {
      currency: "IDR",
      received: "100,000,000",
      onProcess: "75,000,000",
      completed: "20,000,000",
      cancelled: "1,000,000",
      balance: "154,000,000",
    },
    {
      currency: "USD",
      received: "2,000,000.00",
      onProcess: "500,000.00",
      completed: "400,000.00",
      cancelled: "-",
      balance: "2,100,000.00",
    },
    {
      currency: "Total",
      received: "102,000,000",
      onProcess: "75,500,000",
      completed: "20,400,000",
      cancelled: "1,000,000",
      balance: "156,100,000",
    },
    {
      currency: "Total In USD",
      received: "2,006,153.85",
      onProcess: "504,615.38",
      completed: "400,230.77",
      cancelled: "61.54",
      balance: "2,109,476.92",
    },
  ];

  const rfsData: RequisitionData[] = [
    {
      currency: "IDR",
      received: "99,999,500",
      onProcess: "74,999,500",
      completed: "19,999,500",
      cancelled: "999,500",
      balance: "153,999,500",
    },
    {
      currency: "USD",
      received: "1,999,500.00",
      onProcess: "499,500.00",
      completed: "399,500.00",
      cancelled: "-",
      balance: "2,099,500.00",
    },
    {
      currency: "Total",
      received: "101,999,000",
      onProcess: "75,499,000",
      completed: "20,399,000",
      cancelled: "999,500",
      balance: "156,099,000",
    },
    {
      currency: "Total In USD",
      received: "2,005,653.82",
      onProcess: "504,115.35",
      completed: "400,730.74",
      cancelled: "61.51",
      balance: "2,108,976.89",
    },
  ];

  const columns: ColumnsType<RequisitionData> = [
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      align: "center",
      width: 140,
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
      width: 140,
      render: (text: string) => (
        <span className="flex justify-end text-sm">{text}</span>
      ),
    },
    {
      title: "On Process",
      dataIndex: "onProcess",
      key: "onProcess",
      align: "center",
      width: 140,
      render: (text: string) => (
        <span className="flex justify-end text-sm">{text}</span>
      ),
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      align: "center",
      width: 140,
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
      width: 140,
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
        header: { textAlign: "center", backgroundColor: "#f0f0f0" },
      }}
    >
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          size="small"
          scroll={{ x: 800 }}
          rowClassName={(record) =>
            record.currency.includes("Total") ? "bg-slate-50 font-bold" : ""
          }
          className="custom-table"
        />
      </div>
    </Card>
  );

  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
        Total Value
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500 mb-4">
        <i className="text-xs sm:text-sm">
          *The "Total In USD" value has been converted using assumed exchange
          rate of 1 USD = <Tag color="red">IDR 16,250</Tag>
        </i>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <TableCard title="RFM" data={rfmData} />
        <TableCard title="RFS" data={rfsData} />
      </div>
    </div>
  );
};

export default RequisitionSummaryByValue;
