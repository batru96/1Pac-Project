import React from 'react'
import "./tab.css";
import Table from "../../table";

function Tab({ tab, items }) {
    if (!tab.selected) return null
    return (
        <div className="tab-content">
           <Table />
        </div>
    )
}

export default Tab
