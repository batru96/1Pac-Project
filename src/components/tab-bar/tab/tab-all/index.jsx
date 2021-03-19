import React, { useState, useEffect } from 'react';
import { httpGetMethod } from '../../../../apis';
import { ALL_DATA, getStorage, saveStorage } from '../../../../services/storage';
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
            saveStorage(ALL_DATA, items);
            setItems(items);
        } catch (error) {
            console.log("Get method error:", error);
            alert(error.reason)
        }
    }

    useEffect(() => {
        const data = getStorage(ALL_DATA);
        if (data) {
            setItems(data);
        }
    }, []);

    return (
        <div>
            <Search submit={onSubmit} />
            <Table config={config} items={items} />
        </div>
    )
}

export default TabAll;
