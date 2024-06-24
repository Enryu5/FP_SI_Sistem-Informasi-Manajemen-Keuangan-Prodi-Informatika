import {
    columnsDataComplexPlan,
} from "./variables/columnsData";

import tableDataComplex from "./variables/tableDataComplex.json";
import ComplexTable from "./components/ComplexTable";

const Marketplace = () => {
    return (
    <div className="mt-5">
        <ComplexTable
            columnsData={columnsDataComplexPlan}
            tableData={tableDataComplex}
        />
    </div>
    );
};

export default Marketplace;
