import React, { useEffect, useState } from 'react'
import Tab from './tab'
import Header from './header'
import TabConfig from '../../services/config';


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

    useEffect(() => {
        console.log("Use effect tab")
    }, [tabs]);

    return (
        <div>
            <Header tabs={tabs} onSelect={onSelectTab} />
            <Tab />
        </div>
    )
}

export default TabBar
