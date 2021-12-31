import React, { useState } from "react";
import { HashRouter as Router, Route, Routers } from "react-router-dom";

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <Route>
            <Routers>
                {isLoggedIn ? show home : show login page}
            </Routers>
        </Route>
    )
}