import React, { useEffect, useState } from 'react'
import Tab from './tab'
import Header from './header'
import TabConfig from '../../services/config'
import Search from './search'

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

    const onSubmit = (text) => {
        console.log("On Submit", text);
        // Todo: Call api to get list
    }

    useEffect(() => {
        console.log("Use effect tab")
    }, [tabs]);

    return (
        <div>
            <Search submit={onSubmit} />
            <Header tabs={tabs} onSelect={onSelectTab} />
            <Tab />
        </div>
    )
}

export default TabBar
