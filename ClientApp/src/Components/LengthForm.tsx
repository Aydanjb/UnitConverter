import React from "react";

interface FormProps {
    submitFunction?: React.FormEventHandler<HTMLFormElement>
}

export default function LengthForm(props: FormProps) {
    return (
        <form onSubmit={props.submitFunction}>
            <div>
                <label htmlFor="value">Enter length to convert: </label>
                <input name="value" id="value"/>
            </div>
            <div>
                <label htmlFor="from">Unit to convert from: </label>
                <select name="from" id="from">
                    <option value={0} selected={true}>Millimeters</option>
                    <option value={1}>Centimeters</option>
                    <option value={2}>Meters</option>
                    <option value={3}>Kilometers</option>
                </select>
            </div>
            <div>
                <label htmlFor="to">Unit to convert to: </label>
                <select name="to" id="to">
                    <option value={0}>Millimeters</option>
                    <option value={1} selected={true}>Centimeters</option>
                    <option value={2}>Meters</option>
                    <option value={3}>Kilometers</option>
                </select>
            </div>
            <input type="submit" value="Convert"/>
        </form>
    )
}