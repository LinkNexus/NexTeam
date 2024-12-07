import {Calendar, CalendarProps} from "@/components/ui/calendar";
import * as React from "react";
import {SelectSingleEventHandler} from "react-day-picker";

type Props = Omit<CalendarProps & { onChange?: React.ChangeEventHandler<HTMLSelectElement> }, 'selected'> & {
    onSelect: SelectSingleEventHandler,
    selected?: Date
}
export default function({ selected, onSelect, fromYear, toYear, className = '', ...props }: Props): React.ReactElement {
    return (
        <Calendar
            {...props}
            mode="single"
            captionLayout="dropdown-buttons" //Also: dropdown | buttons
            fromYear={fromYear}
            toYear={toYear}
            selected={selected}
            onSelect={onSelect}
            className= {`rounded-md border ${className}`}
        />
    );
}