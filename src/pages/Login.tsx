import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    useIonRouter,
    IonButton,
} from '@ionic/react'

const Login: React.FC = () => {

    const navigation = useIonRouter()

    const doLogin = () => {
        navigation.push('app', 'root', 'replace')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='ion-top'>
                    <IonTitle className='ion-title'>GAI Academy : Assignment on Core Ionic components and Routing</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonButton expand='full' onClick={() => doLogin()}>
                    Proceed
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login