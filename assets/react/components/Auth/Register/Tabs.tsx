import {UseFormReturn} from "react-hook-form";
import {RegistrationSchema} from "@/schemas";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import * as React from "react";

export default function ({ form }: { form: UseFormReturn<any, any, undefined> }) {
    return (
        <Tabs defaultValue='personal'>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal">Personal Infos</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>

            <TabsContent value='personal'>
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

                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}