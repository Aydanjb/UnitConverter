import React from "react";

interface FormProps {
    submitFunction?: React.FormEventHandler<HTMLFormElement>
}

export default function Form(props: FormProps) {
    return (
        <form className="flex flex-col gap-2" onSubmit={props.submitFunction}>
            <div>
                <label htmlFor="value">Enter weight to convert: </label>
                <input className="placeholder=transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" name="value" placeholder="1000"/>
            </div>
            <div>
                <select className="p-2 w-full" name="from" id="from">
                    <option value={4} selected={true}>Grams</option>
                    <option value={5}>Kilograms</option>
                </select>
            </div>
            <div>
                <select className="p-2 w-full" name="to" id="to">
                    <option value={4}>Grams</option>
                    <option value={5} selected={true}>Kilograms</option>
                </select>
            </div>
            <input className="bg-green-500 text-white rounded-md px-2 py-1" type="submit" value="Convert"/>
        </form>
    )
}