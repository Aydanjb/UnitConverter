import React from "react";

interface FormProps {
    submitFunction?: React.FormEventHandler<HTMLFormElement>
}

export default function LengthForm(props: FormProps) {
    return (
        <form className="flex flex-col gap-2" onSubmit={props.submitFunction}>
            <div>
                <label htmlFor="value">Enter length to convert: </label>
                <input className="placeholder=transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" name="value" placeholder="10" />
            </div>
            <div>
                <select className="p-2 w-full" name="from" id="from">
                    <option value={0} selected={true}>Millimeters</option>
                    <option value={1}>Centimeters</option>
                    <option value={2}>Meters</option>
                    <option value={3}>Kilometers</option>
                </select>
            </div>
            <div>
                <select className="p-2 w-full" name="to" id="to">
                    <option value={0}>Millimeters</option>
                    <option value={1} selected={true}>Centimeters</option>
                    <option value={2}>Meters</option>
                    <option value={3}>Kilometers</option>
                </select>
            </div>
            <input className="bg-green-500 text-white rounded-md px-2 py-1" type="submit" value="Convert"/>
        </form>
    )
}