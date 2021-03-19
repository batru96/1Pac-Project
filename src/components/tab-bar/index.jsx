import React, { useEffect, useState } from 'react'
import Tab from './tab'
import Header from './header'
import TabConfig from '../../services/config'
import Search from './search'
import { httpGetMethod } from '../../apis'

function TabBar() {
    const [tabs, setTabs] = useState(TabConfig);

    const onSelectTab = (tabSelected) => {
        if (tabSelected.selected) return;
        const newTabs = tabs.map(item => ({
            ...item,
            selected: item.id === tabSelected.id
        }));
        setTabs(newTabs);
    }

    const onSubmit = async (text) => {
        try {
            const response = await httpGetMethod("https://images-api.nasa.gov/search?q=" + text)
            console.log("Response:", response);
        } catch (error) {
            console.log("Get method error:", error);
            alert(error.reason)
        }
    }

    useEffect(() => {
        console.log("Use effect tab")
    }, [tabs]);

    return (
        <div>
            <Search submit={onSubmit} />
            <Header tabs={tabs} onSelect={onSelectTab} />
            {
                tabs.map(item => (
                    <Tab tab={item} />
                ))
            }
        </div>
    )
}

export default TabBar
