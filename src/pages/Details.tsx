import { IonContent } from "@ionic/react";
import { Page } from "../components/Layout/Layout";
import SongDetails from "../components/Song/SongDetails";

const Details:React.FC = () => {
    const song = SongDetails()
    console.log(song)

    return (
        <>
            {song && (
                <Page title={song.title} description={song.name}>
                    <IonContent className="ion-padding">
                        <h1>{song.title}</h1>
                        <h3>{song.name}</h3>
                        <pre>{song.content}</pre>
                    </IonContent>
                </Page>
            )}
        </>
    )
}

export default Details;