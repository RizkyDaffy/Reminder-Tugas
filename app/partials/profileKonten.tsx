import React from 'react'

import { IonIcon } from '@ionic/react';

export default function profileTop() {
  return (
    <><main className="p-main">
        <section className="profile-task">
            <h3>TUGAS BAHASA</h3>
            <p>harus menjelaskan materi tentang ..</p>
            <div className="profile-deadline">
                <IonIcon name="time"></IonIcon>
                <span>Deadline: Hari ini pukul 8:15</span>
            </div>
        </section>
        <section className="profile-task">
            <h3>TUGAS BAHASA</h3>
            <p>harus menjelaskan materi tentang ..</p>
            <div className="profile-deadline">
                <IonIcon name="time"></IonIcon>
                <span>Deadline: Hari ini pukul 8:15</span>
            </div>
        </section>
    </main></>
  );
}
