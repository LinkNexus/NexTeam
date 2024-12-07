import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import * as React from "react";
import {Input} from "@/components/ui/input";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {DateTime} from "luxon";
import {UseFormReturn} from "react-hook-form";
import Calendar from "@/react/components/Forms/Calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ({ form }: { form: UseFormReturn<any, any, undefined> }) {
    return (
        <Card>
            <CardHeader className="w-full flex flex-col items-center justify-center">
                <CardTitle className="text-2xl font-medium">
                    Personal Infos
                </CardTitle>
                <CardDescription>Your personal information</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">

                <FormField
                    control={form.control}
                    name="email"
                    render={({field}): React.ReactElement => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input {...field} type='email' placeholder='example@domain.com' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({field}): React.ReactElement => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder='John Doe' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({field}): React.ReactElement => (
                        <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "pl-3 text-left font-normal w-full",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className= "ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        // disabled={(date) => date > new Date(DateTime.now().minus({years: 17}).toString()) || date < new Date("1900-01-01")}
                                        initialFocus
                                        defaultMonth={new Date(DateTime.now().minus({years: 17}).toString())}
                                        pagedNavigation={true}
                                        fromYear={DateTime.now().minus({years: 17}).minus({years: 100}).year}
                                        toYear={DateTime.now().minus({years: 17}).year}
                                        showOutsideDays={false}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="gender"
                    render={({field}) => (
                        <FormItem className="w-full">
                            <FormLabel>Choose your gender</FormLabel>
                            <FormControl className="w-full flex justify-between">
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex"
                                >
                                    <FormItem className="flex items-center space-x-3">
                                        <FormControl>
                                            <RadioGroupItem value="male" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Male</FormLabel>
                                    </FormItem>

                                    <FormItem className="flex items-center space-x-3">
                                        <FormControl>
                                            <RadioGroupItem value="female" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Female</FormLabel>
                                    </FormItem>

                                    <FormItem className="flex items-center space-x-3">
                                        <FormControl>
                                            <RadioGroupItem value="other" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Other</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            </CardContent>
        </Card>
    );
}