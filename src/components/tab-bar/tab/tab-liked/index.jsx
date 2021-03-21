import React, { useEffect, useState } from 'react';
import { ALL_DATA, getStorage, LIKED_DATA, REMOVED_DATA, saveStorage } from '../../../../services/storage';
import Table from '../../../table';

const config = {
    keys: [
        { id: 'id', name: 'Nasa id' },
        { id: 'title', name: 'Title' },
        { id: 'location', name: 'Location' },
    ],
    actions: ["Unlike"]
}

function TabLiked() {
    const [items, setItems] = useState([]);

    const handleAction = (type, selectedItem) => {
        console.log("Handle action", type, selectedItem);
        const newItems = items.filter(item => item.id !== selectedItem.id);
        setItems(newItems);
        if (type === "Unlike") {
            const storageItems = getStorage(ALL_DATA);
            if (storageItems && Array.isArray(storageItems)) {
                storageItems.push(selectedItem);
                saveStorage(ALL_DATA, storageItems);
            } else {
                saveStorage(ALL_DATA, [selectedItem]);
            }
        }
    }

    useEffect(() => {
        const data = getStorage(LIKED_DATA);
        if (data && Array.isArray(data)) {
            setItems(data);
        }
    }, []);

    useEffect(() => {
        saveStorage(LIKED_DATA, items);
    }, [items]);

    return (
        <div>
            <Table config={config} items={items} handleAction={handleAction} />
        </div>
    )
}

export default TabLiked;
