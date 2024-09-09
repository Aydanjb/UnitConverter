function App() {
    return (
        <div>
            <h1>Unit Converter</h1>
            <form>
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
        </div>
    )
}

export default App
