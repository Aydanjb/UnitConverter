import React from "react";

interface FormProps {
    submitFunction?: React.FormEventHandler<HTMLFormElement>
}

export default function TemperatureForm(props: FormProps) {
    return (
        <form onSubmit={props.submitFunction}>
            <div>
                <label htmlFor="value">Enter temperature to convert: </label>
                <input name="value" id="value"/>
            </div>
            <div>
                <label htmlFor="from">Unit to convert from: </label>
                <select name="to" id="to">
                    <option value={0} selected={true}>Celsius</option>
                    <option value={1}>Fahrenheit</option>
                </select>
            </div>
            <div>
                <label htmlFor="to">Unit to convert to: </label>
                <select name="to" id="to">
                    <option value={0}>Celsius</option>
                    <option value={1} selected={true}>Fahrenheit</option>
                </select>
            </div>
            <input type="submit" value="Convert"/>
        </form>
    )
}