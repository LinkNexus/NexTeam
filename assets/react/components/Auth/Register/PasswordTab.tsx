import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {UseFormReturn} from "react-hook-form";
import {Input} from "@/components/ui/input";
import ReactPasswordChecklist from "react-password-checklist";

export default function ({ form }: { form: UseFormReturn<any> }) {
    const password: string = form.getValues("password");
    const confirmPassword: string = form.getValues("confirmPassword");

    return (
        <Card>
            <CardHeader className='w-full flex flex-col items-center justify-center'>
                <CardTitle className="text-2xl font-medium">
                    Password
                </CardTitle>
                <CardDescription>Choose a strong password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input  {...field} type="password" placeholder="******" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input  {...field} type="password" placeholder="******" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <ReactPasswordChecklist
                    style={{
                        marginTop: "1rem"
                    }}
                    rules={["minLength", "specialChar", "number", "capital", "match"]}
                    value={password}
                    minLength={6}
                    iconSize={10}
                    valueAgain={confirmPassword}
                    messages={{
                        minLength: "Password must be at least 6 characters",
                        specialChar: "Password must contain at least one special character",
                        number: "Password must contain at least one digit",
                        capital: "Password must contain at least one uppercase letter",
                        match: "Passwords must match"
                    }} />
            </CardContent>
        </Card>
    );
}