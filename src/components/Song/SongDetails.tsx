import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../Auth/AuthProvider";

const SongDetails = () => {
    //til at håndtere vores song
    interface iSong {
        id: number;
        title: string;
        content: string;
        name: string;
        slug: string;
    }

    const { loginData } = useAuth()
    const [ apiData, setApiData ] = useState<iSong>()
    const { slug } = useParams<{ slug: string}>()

    useEffect(() => {
        const getData = async () => {
            const options = {
                headers: {
                    Authorization: `Bearer ${loginData.access_token}`
                }
            }
            const url = "https://api.mediehuset.net/singonline/songs/${slug}"
            const result = await axios.get(url, options)
            //console.log(result)
            setApiData(result.data.item);
        }
        getData();
    })

    //hvis vi har data, den skal vises, hvis ikke, så den er null
    return apiData ? apiData : null
}

export default SongDetails;