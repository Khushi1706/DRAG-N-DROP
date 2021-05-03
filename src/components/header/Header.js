import React from 'react'

const Header = ({ setSelection, selection }) => {

    const onClick = (e, value) => {
        e.preventDefault();
        setSelection(value);
    }

    return (<header className="grid grid-cols-2 gap-x-4 w-64">
        <button className={selection === "core" ? "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" : "bg-transparent hover:bg-pink font-semibold py-2 px-4 border border-pink rounded"} onClick={ev => {onClick(ev, "core")}} >Without Plugin</button>
        <button className={selection === "plugin" ? "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150": "bg-transparent hover:bg-pink font-semibold py-2 px-4 border border-pink rounded"} onClick={ev => {onClick(ev, "plugin")}}>With Plugin</button>
    </header>)

}

export default Header;