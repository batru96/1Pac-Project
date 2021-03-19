import React from "react";

function TableData({ keys, row, actions, handleAction }) {
    const onClick = event => {
        console.log("On click:", event)
    }

    return (
        <tr>
            {keys.map(key => <td key={key.id}>{row[key.id]}</td>)}
            <td>
                {
                    actions?.length > 0 && actions.map(action => (
                        <button
                            key={'action-' + action + '-' + row.id}
                            type="button"
                            onClick={() => handleAction(action, row)}
                        >{action}</button>
                    ))
                }
            </td>
        </tr>
    )
}

export default TableData;
