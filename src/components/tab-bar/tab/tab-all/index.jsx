import React, { useState, useEffect } from 'react';
import { httpGetMethod } from '../../../../apis';
import { ALL_DATA, getStorage, LIKED_DATA, REMOVED_DATA, saveStorage } from '../../../../services/storage';
import Table from '../../../table';
import Search from '../../search';

const config = {
    keys: [
        { id: 'id', name: 'Nasa id' },
        { id: 'title', name: 'Title' },
        { id: 'location', name: 'Location' },
    ],
    actions: ["Like", "Remove"]
}

function TabAll() {
    const [items, setItems] = useState([]);

    const onSubmit = async (text) => {
        try {
            const response = await httpGetMethod("https://images-api.nasa.gov/search?q=" + text);
            const items = response.collection.items.map(item => {
                const data = item.data[0];
                if (data) {
                    return {
                        id: data.nasa_id,
                        title: data.title,
                        location: data.location
                    };
                }
                return {};
            });
            setItems(items);
            saveStorage(LIKED_DATA, []);
            saveStorage(REMOVED_DATA, []);
        } catch (error) {
            console.log("Get method error:", error);
            alert(error.reason)
        }
    }

    const onHandlePushNewItem = (enumType, newItem) => {
        const storageItems = getStorage(enumType);
        if (storageItems && Array.isArray(storageItems)) {
            storageItems.push(newItem);
            saveStorage(enumType, storageItems);
        } else {
            saveStorage(enumType, [newItem]);
        }
    }

    const handleAction = (type, selectedItem) => {
        const newItems = items.filter(item => item.id !== selectedItem.id);
        setItems(newItems);   
        if (type === "Like") {
            onHandlePushNewItem(LIKED_DATA, selectedItem);
        } else if (type === "Remove") {
            onHandlePushNewItem(REMOVED_DATA, selectedItem);
        }
    }

    useEffect(() => {
        const data = getStorage(ALL_DATA);
        if (data && Array.isArray(data)) {
            setItems(data);
        }
    }, []);

    useEffect(() => {
        saveStorage(ALL_DATA, items);
    }, [items])

    return (
        <div>
            <Search submit={onSubmit} />
            <Table config={config} items={items} handleAction={handleAction} />
        </div>
    )
}

export default TabAll;
