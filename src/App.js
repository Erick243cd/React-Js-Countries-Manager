import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;


// import Home from "./pages/Home";
//
// function App() {
//     return ( <
//         div >
//         <
//         h1 > Hello React < /h1> <
//         Home / >
//         <
//       /div>
//     );
// }
//
// export default App;