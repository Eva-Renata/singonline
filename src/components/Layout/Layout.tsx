import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useEffect } from "react"

interface iPageProps {
    title: string;
    description: string;
    children: any
}

const Page: React.FC<iPageProps> = ({title, description, children}) => {

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