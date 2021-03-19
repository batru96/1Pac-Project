import React from 'react'
import "./tab.css";
import TabAll from './tab-all';
import TabLiked from './tab-liked';
import TabRemoved from './tab-removed';

function Tab({ tab }) {
    if (!tab.selected) return null
    return (
        <div className="tab-content">
            {tab.id === "all" && <TabAll />}
            {tab.id === "liked" && <TabLiked />}
            {tab.id === "removed" && <TabRemoved />}
        </div>
    )
}

export default Tab
