import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonAlert,
} from '@ionic/react'
import { useState } from 'react';

import '@ionic/react/css/core.css';
import './Home.css';

const Form: React.FC = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = () => {
        if (!fullName || !email) {
            setAlertMessage('Please fill out all fields.');
            setShowAlert(true);
        } else if (!emailRegex.test(email)) {
            setAlertMessage('Please enter a valid email address.');
            setShowAlert(true);
        } else {
            // Handle form submission logic here
            console.log('Form submitted:', { fullName, email });
            // Reset form
            setFullName('');
            setEmail('');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='ion-title'>GAI Academy : Form</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonItem>
                    <IonLabel position="floating" className='ion-label'>Full Name</IonLabel>
                    <IonInput value={fullName} onIonChange={e => setFullName(e.detail.value!)} className='ion-input'/>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating" className='ion-label'>Email Address</IonLabel>
                    <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} className='ion-input'/>
                </IonItem>
                <IonButton expand="full" onClick={handleSubmit} className='ion-button'>Submit</IonButton>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Error'}
                    message={alertMessage}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default Form;
