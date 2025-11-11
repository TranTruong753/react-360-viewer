import { React360Viewer } from "@paulin_bixlers/react-360-product-viewer";
import React from "react";

function Viewer360() {
    return (
        <React.Fragment>
            <React360Viewer
                imagesBaseUrl="/images/rotation/" // url
                imagesCount={120}
                imagesFiletype="jpg"
                imageFilenamePrefix=""
                zeroPad={0}
                autoplay={false}
                mouseDragSpeed={20}
            />
        </React.Fragment>
    );
}

export default Viewer360;