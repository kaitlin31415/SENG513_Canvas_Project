import React, { useState } from "react";
import AllCanvasesGrid from "../components/AllCanvasesGrid";
import NewCanvasModal from "../components/NewCanvasModal";

const AllCanvasesPage = () => {
    const [showNewCanvas, setShowNewCanvas] = useState(false);

    return (
        <div>
            <div className='yourCanvases'>
                <h1>Your Canvases</h1>
            </div>
            <AllCanvasesGrid />
        </div>
    )
};

export default AllCanvasesPage;