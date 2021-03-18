import React, { useEffect, useState } from 'react'
import './header.css'

function Header({ tabs, onSelect }) {
    
    const _tabClassName = (item) => {
        return item.selected ? 'tab tab-selected' : 'tab';
    }

    useEffect(() => {
        console.log('Use effect header')
    }, []);

    return (
        <div className='header'>
            {
                tabs.map(item => (
                    <button key={item.id} className={_tabClassName(item)} onClick={() => onSelect(item)}>{item.name}</button>
                ))
            }
        </div>
    )
}

export default Header
