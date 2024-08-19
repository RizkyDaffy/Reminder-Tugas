import React from 'react'


export default function tagModule() {
  return (
    <> <div className="tab-container">
        <div className="tab">
            <button className="tablinks center" onclick="openTab(event, 'besok')">Besok</button>
            <button className="tablinks center" onclick="openTab(event, 'hari-ini')" id="defaultOpen">Hari ini</button>
            <button className="tablinks center" onclick="openTab(event, 'info')">Info</button>
        </div>
    </div>
    
    </>
  );
}
