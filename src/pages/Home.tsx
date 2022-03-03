import { IonSearchbar } from "@ionic/react";
import { useState } from "react";
import { Page } from "../components/Layout/Layout"
import SongList from "../components/Song/SongList";

const Home: React.FC = () => {
    const [keyword, setKeyword] = useState<string>('')

    const handleSearch = (e:any):void => {
        setKeyword(e.target.value)
    }

    return (
       <Page title="Velkommen til SingOnline" description="Vælg eller søg efter en sang">
           <IonSearchbar onIonInput={handleSearch} />
           <SongList keyword={keyword}></SongList>
       </Page>
    )
}
export default Home;