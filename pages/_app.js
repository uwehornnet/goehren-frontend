import Wrapper from "../components/Wrapper";

import "swiper/css";
import "../styles/leaflet.css";
import "../styles/fonts.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Wrapper>
            <Component {...pageProps} />
        </Wrapper>
    );
}

export default MyApp;
