import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
} from '@ionic/react'
import { Redirect, Route } from 'react-router';
import { ellipse, triangle} from 'ionicons/icons';

import Home from './Home';
import Form from './Form';

const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path='/app/home' component={Home}/>
                <Route exact path='/app/form' component={Form}/>
                
                <Route exact path='/app'>
                    <Redirect to='/app/home' />
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab='home' href='/app/home'>
                    <IonIcon icon={ellipse}></IonIcon>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab='form' href='/app/form'>
                    <IonIcon icon={triangle}></IonIcon>
                    <IonLabel>Form</IonLabel>
                </IonTabButton>
            </IonTabBar>

        </IonTabs>
    );
};

export default Tabs;