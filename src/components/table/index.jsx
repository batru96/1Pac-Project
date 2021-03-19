import React from "react";
import "./table.css";
import TableData from "./table-data";

function Table({ config, items }) {
    const handleAction = (type, item) => {
        console.log("Action type:", type);
        console.log("Action item:", item);
    }

    return (
        <table>
            <thead>
                <tr>
                    {config.keys.map(key => <th key={key.id}>{key.name}</th>)}
                    {config.actions?.length > 0 && <th>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {
                    items.map((row, idx) => (
                        <TableData
                            key={idx}
                            row={row}
                            keys={config.keys}
                            actions={config.actions}
                            handleAction={handleAction}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
