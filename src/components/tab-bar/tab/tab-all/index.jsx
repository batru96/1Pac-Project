import React, { useState } from 'react';
import { httpGetMethod } from '../../../../apis';
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
        } catch (error) {
            console.log("Get method error:", error);
            alert(error.reason)
        }
    }

    return (
        <div>
            <Search submit={onSubmit} />
            <Table config={config} items={items} />
        </div>
    )
}

export default TabAll;
