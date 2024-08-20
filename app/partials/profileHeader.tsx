import React from 'react'

import { IonIcon } from '@ionic/react';

export default function profileHeader() {
  return (
    <><header>
        <div className="profile">
            <IonIcon name="person-circle" class="profile-icon"></IonIcon>
            <h2>Rizky Ganteng</h2>
        </div>
    </header></>
  );
}
