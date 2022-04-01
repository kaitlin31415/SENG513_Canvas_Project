import React, { useState } from "react";
import HeaderBar from "../components/AllCanvasHeader";
import AllCanvasesGrid from "../components/AllCanvasesGrid";
import NewCanvasModal from "../components/NewCanvasModal";

const AllCanvasesPage = () => {
    const [showNewCanvas, setShowNewCanvas] = useState(false);

    return (
        <div>
            <div className="headerBar">
                <HeaderBar />
            </div>

            <br></br>

            <AllCanvasesGrid />
        </div>
    )
};

export default AllCanvasesPage;