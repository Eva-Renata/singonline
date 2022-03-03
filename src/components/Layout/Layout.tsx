import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { useAuth } from "../Auth/AuthProvider"
import LogoutButton from "../Auth/LogoutButton"

interface iPageProps {
    title: string;
    description: string;
    children: any
}

const Page: React.FC<iPageProps> = ({title, description, children}) => {
    const { slug } = useParams<{slug: string}>()
    const { loginData } = useAuth()

    useEffect(() => {
        document.title = title;
        const meta_desc = document.querySelector('meta[name="description"]');
        //hvis den findes
        if(meta_desc) {
            meta_desc.setAttribute("content", description)
        }
    })

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>SingOnline</IonTitle>
                        {slug && (
							<IonButtons slot="start">
								<IonBackButton default-href="/"></IonBackButton>
							</IonButtons>
						)}
                        {loginData && (
							<IonButtons slot="end">
								<LogoutButton />
							</IonButtons>
						)}
                    </IonToolbar>
                </IonHeader>
                <ContentWrapper>
                    {/* <h1>{title}</h1> */}
                    {children}
                    </ContentWrapper>
            </IonPage>
        </>
    )
}

const ContentWrapper = (props:{children:any}) => {
    return <IonContent>{props.children}</IonContent>
}

export { Page, ContentWrapper }