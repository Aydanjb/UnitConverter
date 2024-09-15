import React from "react";
import LengthForm from "./LengthForm.tsx";
import WeightForm from "./WeightForm.tsx";
import TemperatureForm from "./TemperatureForm.tsx";

interface FormsProps {
    submitFunction?: (e: React.FormEvent) => void,
    type: number
}

export default function Forms(props: FormsProps) {
    switch (props.type) {
        default:
            return <LengthForm submitFunction={props.submitFunction} />
        case 1:
            return <WeightForm submitFunction={props.submitFunction} />
        case 2:
            return <TemperatureForm submitFunction={props.submitFunction} />
    }
}