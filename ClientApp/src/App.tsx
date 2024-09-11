import React, {useState} from "react";

function App() {
    const [data, setData] = useState(0);
    
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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="length">Enter length to convert: </label>
                    <input name="length" id="length" />
                </div>
                <div>
                    <label htmlFor="from">Unit to convert from: </label>
                    <select name="from" id="from">
                        <option value="Millimeters">Millimeters</option>
                        <option value="Centimeters">Centimeters</option>
                        <option value="Meters">Meters</option>
                        <option value="Kilometers">Kilometers</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="to">Unit to convert to: </label>
                    <select name="to" id="to">
                        <option value="Millimeters">Millimeters</option>
                        <option value="Centimeters">Centimeters</option>
                        <option value="Meters">Meters</option>
                        <option value="Kilometers">Kilometers</option>
                    </select>
                </div>
                <input type="submit" value="Convert" />
            </form>
            
            <h1>Result: {data}</h1>
        </div>
    )
}

export default App
