import React from 'react';
import './App.scss';
import Checkbox from "./fields/checkbox/Checkbox";

class App extends React.Component{

    render() {
        return (
            <div className="App">
                <div className="field">
                    <Checkbox
                        checkboxId={"checkbox"}
                        name={"checkbox-name"}
                    ></Checkbox>
                </div>
            </div>
        );
    }
}

export default App;
