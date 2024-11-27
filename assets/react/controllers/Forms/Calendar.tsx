import {Calendar, CalendarProps} from "@/components/ui/calendar";
import * as React from "react";

export default function({ fromYear, toYear, className = '', ...props }: CalendarProps) {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
        <Calendar
            {...props}
            mode="single"
            captionLayout="dropdown-buttons" //Also: dropdown | buttons
            fromYear={2022}
            toYear={2023}
            selected={date}
            onSelect={setDate}
            className= {`rounded-md border ${className}`}
        />
    );
}