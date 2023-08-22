import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
const Speakers = () => {
    return (
        <SpeakersList data={data} />
    );
}

export default Speakers;