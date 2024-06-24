import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import Card from 'components/card';
import Filter from 'components/card/Filter';
import {
MdCheckCircle,
MdCancel,
MdOutlineError,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ComplexTable = ({ columnsData, tableData }) => {
const [formData, setFormData] = useState({
    eventName: '',
    organizer: '',
    timeRange: '',
    budget: ''
});

const columns = useMemo(() => columnsData, [columnsData]);
const data = useMemo(() => tableData, [tableData]);

const navigate = useNavigate(); // React Router's hook for navigation

const tableInstance = useTable(
    {
    columns,
    data,
    initialState: { pageSize: 5 }, // Set the initial page size
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
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
} = tableInstance;

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleRowClick = (id) => {
    console.log(`Navigating to plan with ID: ${id}`);
    navigate(`/admin/planning/event/${id}`);
};

return (
    <Card extra={'w-full h-full p-4 sm:overflow-x-auto'}>
    <div className="relative flex items-center justify-end space-x-2">
        <button className="px-4 py-1 text-md font-medium text-brand-500 hover:text-white hover:bg-brand-500 border border-brand-500 rounded-md">
        Export
        </button>
    </div>
    <div className="relative flex items-center justify-between mt-5 border border-gray-100 rounded-lg p-1">
        {/* Search Bar */}
        <form
        action="/search"
        method="GET"
        className="flex items-center w-full max-w-md"
        >
        <div className="relative w-full">
            <input
            type="text"
            name="query"
            placeholder="Search by any keyword"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500"
            onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault(); // Prevent form submission on Enter
            }}
            />
            {/* <SearchIcon className="absolute top-2 left-2 w-6 h-6 text-gray-400" /> */}
        </div>
        <button type="submit" className="hidden">
            Submit
        </button>
        </form>

        {/* Filter Button */}
        <Filter />
    </div>

    <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
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
                    {column.render('Header')}
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
                <tr {...row.getRowProps()} 
                key={index}
                onClick={() => handleRowClick(row.original.id)}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-navy-600"
                >
                {row.cells.map((cell, index) => {
                    let data = '';
                    if (cell.column.Header === 'EVENT') {
                    data = (
                        <div className="py-1 px-2 bg-gray-200 rounded-full w-fit">
                        <p className="text-[12px] font-medium text-navy-700 dark:text-white">
                            {cell.value}
                        </p>
                        </div>
                    );
                    } else if (cell.column.Header === 'BUDGET') {
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
                    } else if (cell.column.Header === 'TIME RANGE') {
                    data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {cell.value}
                        </p>
                    );
                    }
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

        {/* Pagination Controls */}
        <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-md ${
                !canPreviousPage
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            >
            {'<<'}
            </button>
            <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-md ${
                !canPreviousPage
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            >
            {'<'}
            </button>
            <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-md ${
                !canNextPage
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            >
            {'>'}
            </button>
            <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-md ${
                !canNextPage
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            >
            {'>>'}
            </button>
        </div>
        <span className="text-sm text-gray-600">
            Page{' '}
            <strong>
            {pageIndex + 1} of {pageOptions.length}
            </strong>
        </span>
        <span className="text-sm text-gray-600">
            Go to page:{' '}
            <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
                const page = e.target.value
                ? Number(e.target.value) - 1
                : 0;
                gotoPage(page);
            }}
            className="w-12 p-1 border border-gray-300 rounded-md focus:ring-1 focus:ring-brand-500"
            />
        </span>
        </div>
    </div>
    </Card>
);
};

export default ComplexTable;
