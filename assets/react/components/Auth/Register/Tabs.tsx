import {UseFormReturn} from "react-hook-form";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import * as React from "react";
import PersonalTab from "@/react/components/Auth/Register/PersonalTab";
import PasswordTab from "@/react/components/Auth/Register/PasswordTab";

export default function ({ form }: { form: UseFormReturn<any> }) {
    return (
        <Tabs defaultValue='personal'>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal">Personal Infos</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>

            <TabsContent value='personal'>
                <PersonalTab form={form} />
            </TabsContent>
            <TabsContent value='password'>
                <PasswordTab form={form} />
            </TabsContent>
        </Tabs>
    )
}