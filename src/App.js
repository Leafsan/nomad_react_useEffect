import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log("I run all the time");
    const runOnlyOnce = () => {
        console.log("I run only once.");
    };

    useEffect(runOnlyOnce, []);
    useEffect(() => {
        console.log("Search for ", keyword);
    }, [keyword]);

    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
            <h1 className={styles.title}>Welcome back to React!</h1>
            <h2>{counter}</h2>
            <Button text="Click me!" onClick={onClick}/>
        </div>
    );
}

export default App;
