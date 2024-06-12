import { logOut } from 'ionicons/icons';
import { useNavigate } from "react-router-dom";
import useAuthService from "@services/useAuthService";
import { IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonIcon } from '@ionic/react';


export default function Navbar() {

    const { user, logout } = useAuthService();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const logoutResponse = await logout();
        if (logoutResponse === undefined) {
            navigate("/login");
        }
    }

    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle className="ion-text-center">Uribia Online</IonTitle>
            </IonToolbar>
            <IonToolbar color="primary">
                <IonButtons slot="end">
                    {user && <IonButton color="danger" onClick={handleLogout}>
                        <IonIcon icon={logOut} slot="icon-only" />
                    </IonButton>}
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}