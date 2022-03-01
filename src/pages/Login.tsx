import { IonCard } from "@ionic/react";
import LoginForm from "../components/Auth/LoginForm";
import { Page } from "../components/Layout/Layout";

const Login = () => {
    return (
       <Page title="Login" description="Log ind og få adgang til vores sang arkiv">
           <IonCard>
               <LoginForm></LoginForm>
           </IonCard>
       </Page>
    )
}
export default Login;