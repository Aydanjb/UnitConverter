import React, {useState} from "react";
import Forms from "./Forms.tsx";

function App() {
    const [data, setData] = useState(0);
    const [formType, setFormType] = useState(0);
    
    async function convert(formData: FormData) {
        await fetch('https://localhost:7116/api/UnitConverter', {method: 'post', body: formData})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
        
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        convert(formData);
    }
    
    return (
        <div>
            <h1>Unit Converter</h1>
            <button onClick={() => setFormType(0)}>Length</button>
            <button onClick={() => setFormType(1)}>Weight</button>
            <button onClick={() => setFormType(2)}>Temperature</button>
            <Forms submitFunction={handleSubmit} type={formType}/>  
            <h1>Result: {data}</h1>
        </div>
    )
}

export default App
