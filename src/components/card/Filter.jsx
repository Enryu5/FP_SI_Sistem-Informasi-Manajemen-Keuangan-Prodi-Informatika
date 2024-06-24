import React from "react";
import Dropdown from "components/dropdown";
import { BsThreeDots } from "react-icons/bs";

function Filter(props) {
const { transparent } = props;
const [open, setOpen] = React.useState(false);
return (
    <Dropdown
    button={
        <button
        onClick={() => setOpen(!open)}
        open={open}
        className={`flex items-center text-md hover:cursor-pointer ${
            transparent
            ? "bg-none text-white hover:bg-none active:bg-none"
            : "px-4 py-2 text-gray-600 border border-gray-300 hover:border-brand-500 hover:text-brand-500 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
        } linear justify-center rounded-md font-reguler transition duration-200`}
        >
        Filter
        </button>
    }
    animation={"origin-top-right transition-all duration-300 ease-in-out"}
    classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
    children={
        <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
            Event
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
            Organizer
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
            Date
        </p>
        </div>
    }
    />
);
}

export default Filter;
