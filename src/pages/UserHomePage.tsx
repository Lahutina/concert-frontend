import {Box} from "@mui/material";
import '../App.css';
import Header from "../components/Header";
import ControlledCarousel from "../components/user-home-page/ControlledCarousel";
import EventsLocation from "../components/user-home-page/EventsLocation";


function UserHomePage() {
    return (
        <Box>
            <Header/>
            <ControlledCarousel/>
            <EventsLocation/>
        </Box>
    );
}

export default UserHomePage;