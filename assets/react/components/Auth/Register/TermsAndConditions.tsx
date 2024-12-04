import {UseFormReturn} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormMessage} from "@/components/ui/form";
import Checkbox from "@/react/components/Forms/Checkbox";
import * as React from "react";

export default function ({ form }: { form: UseFormReturn<any> }): React.ReactElement {
    return (
        <FormField
            control={form.control}
            name="termsAndConditions"
            render={({field}) => (
                <FormItem>
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            {...field}
                            label="I agree to the Terms and Conditions"
                        />
                    </FormControl>
                    <FormDescription>
                        By creating an account, you agree to our <a href="#" className="text-primary hover:underline underline-offset-4">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline underline-offset-4">Privacy Policy</a>.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}