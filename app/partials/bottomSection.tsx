import React from 'react'
import Link from 'next/link'
import { IonIcon } from '@ionic/react';
import { timeOutline } from 'ionicons/icons';

export default function bottomSection() {
  return (
     <> <footer>
          <Link className="linknavg" href="/"> <div className="nav-icon">
              <ion-icon name="home"></ion-icon>
           </div></Link>
           <Link className="linknavg nav-icon" href="/buat">
               <ion-icon name="create"></ion-icon>
           </Link>
       </footer>
   <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script></>
  );
}
