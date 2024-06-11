import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Revenue this month"}
          subtitle={"Rp75.500.000"}
          positive={"+25%"}
          description={"since last month"}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"Expense this month"}
          subtitle={"Rp69.550.000"}
          negative={"+5%"}
          description={"since last month"}
        />
        <Widget
          icon={<IoDocuments className="h-7 w-7" />}
          title={"Events"}
          subtitle={"190"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="md:col-span-2">
          <TotalSpent />
        </div>
        <div className="md:col-span-1">
          <PieChartCard />
        </div>
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5">
        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

      </div>
    </div>
  );
};

export default Dashboard;
