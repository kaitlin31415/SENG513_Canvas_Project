import React from "react";
import HeaderBar from "../components/AllCanvasHeader";
import AllCanvasesGrid from "../components/AllCanvasesGrid";

const AllCanvasesPage = () => {
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