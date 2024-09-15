import React, {useState} from "react";
import Forms from "./Components/Forms.tsx";

function App() {
    const [data, setData] = useState();
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
        formData.append('property', formType.toString())
        convert(formData);
    }
    
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
            <h1 className="text-6xl">Unit Converter</h1>
            <div className="flex flex-row gap-2 text-2xl">
                <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={() => setFormType(0)}>Length</button>
                <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={() => setFormType(1)}>Weight</button>
                <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={() => setFormType(2)}>Temperature</button>
            </div>
            <div className="flex flex-col text-xl">
                <Forms submitFunction={handleSubmit} type={formType}/>
            </div>
            <h1 className="m-2 text-3xl ">Result: {data}</h1>
        </div>
    )
}

export default App
