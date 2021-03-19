import React from "react";
import "./table.css";
import TableData from "./table-data";

const config = {
    keys: [
        { id: 'nasa_id', name: 'Nasa id' },
        { id: 'title', name: 'Title' },
        { id: 'description', name: 'Description' },
    ],
    rows: [
        {
            nasa_id: "Nasa id 01",
            title: "What wrong with you",
            description: "Permission to batru96/1Pac-Project.git denied",
        },
        {
            nasa_id: "Nasa id 02",
            title: "What wrong with you",
            description: "Permission to batru96/1Pac-Project.git denied"
        },
        {
            nasa_id: "Nasa id 03",
            title: "What wrong with you",
            description: "Permission to batru96/1Pac-Project.git denied"
        },
        {
            nasa_id: "Nasa id 04",
            title: "What wrong with you",
            description: "Permission to batru96/1Pac-Project.git denied"
        }
    ],
    actions: ["Like", "Remove"]
}

function Table({ }) {
    const handleAction = (type, item) => {
        console.log("Action type:", type);
        console.log("Action item:", item);
    }

    return (
        <table>
            <tr>
                {config.keys.map(key => <th>{key.name}</th>)}
                {config.actions?.length > 0 && <th>Actions</th>}
            </tr>
            {
                config.rows.map((row, idx) => (
                    <TableData
                        key={idx}
                        row={row}
                        keys={config.keys}
                        actions={config.actions}
                        handleAction={handleAction}
                    />
                ))
            }
        </table>
    )
}

export default Table;
