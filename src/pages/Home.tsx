import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonText,
} from '@ionic/react'

import '@ionic/react/css/core.css';
import './Home.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='ion-title'>GAI Academy : Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonText className='ion-text'>
                    Welcome to GAI Academy Mobile App Development Bootcamp!
                </IonText>
            </IonContent>
        </IonPage>
    );
};

export default Home;