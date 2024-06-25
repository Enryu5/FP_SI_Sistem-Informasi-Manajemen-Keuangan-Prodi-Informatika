import {
  columnsDataComplex,
} from "./variables/columnsData";

import tableDataComplex from "./variables/tableDataComplex.json";
import ComplexTable from "./components/ComplexTable";

const Marketplace = () => {
  return (
    <div className="mt-5">
      <ComplexTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />
    </div>
  );
};

export default Marketplace;
