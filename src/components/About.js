import React from "react";
import Rainbow from "../hoc/Rainbow"

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, iure mollitia, temporibus totam provident vitae quidem excepturi reprehenderit voluptatem consequatur debitis? Tenetur, deleniti quis exercitationem explicabo quas corporis eius aspernatur.</p>
        </div>
    )
}

export default Rainbow(About);