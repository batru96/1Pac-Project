import React, { useEffect, useState } from 'react'
import Header from './header'
import TabConfig from '../../services/config'
import Tab from './tab';

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
        console.log("Use effect tab", tabs)
    }, [tabs]);

    return (
        <div>
            <Header tabs={tabs} onSelect={onSelectTab} />
            {
                tabs.filter(item => item.selected).map(item => <Tab key={item.id} tab={item}/>)
            }
        </div>
    )
}

export default TabBar
