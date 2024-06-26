import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo } from "react";
import Progress from "components/progress";
const ComplexTable = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          Complex Table
        </div>
        <CardMenu />
      </div>

      <div class="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "EVENT") {
                      data = (
                        <div className="py-1 px-2 bg-gray-200 rounded-full w-fit">
                          <p className="text-[12px] font-medium text-navy-700 dark:text-white">
                          {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "ORGANIZER") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className="h-[30px] w-[30px] rounded-full">
                            <img
                              src={cell.value[1]}
                              className="h-full w-full rounded-full"
                              alt=""
                            />
                          </div>
                          <p className="text-sm font-medium text-navy-700 dark:text-white">
                            {cell.value[0]}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "BUDGET") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          Rp{cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "REVENUE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          Rp{cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "EXPENSE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          Rp{cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "Done" ? (
                              <MdCheckCircle className="text-greenPrimary" />
                            ) : cell.value === "Not Started" ? (
                              <MdCancel className="text-redPrimary" />
                            ) : cell.value === "On Progress" ? (
                              <MdOutlineError className="text-blue-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    }
                    // else if (cell.column.Header === "PROGRESS") {
                    //   data = <Progress width="w-[68px]" value={cell.value} />;
                    // }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ComplexTable;
