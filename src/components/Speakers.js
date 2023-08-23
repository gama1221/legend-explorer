import SpeakersList from "./SpeakersList";
import SpeakersToolBar from "./SpeakersToolBar";
import { useState } from "react";
const Speakers = ({ theme, setTheme }) => {
    const [showSessions, setShowSessions] = useState(true);
    return (
        <>
            <SpeakersToolBar
                theme={theme}
                setTheme={setTheme}
                setShowSessions={setShowSessions}
                showSessions={showSessions}
            />
            <SpeakersList showSessions={showSessions} />
        </>
    );
}

export default Speakers;