"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { POST } from "@/app/api/send/route";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const formSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  email: z.string().email(),
  profile: z.string({required_error: "Required field."}),
  industry: z.string({required_error: "Required field."}),
  size: z.string({required_error: "Required field."}),
  favouriteCases:  z.array(z.string()).min(1, {message: "Please choose at least one case"}),
  risk: z.string().optional(),
  updates: z.boolean()

})

const defaultValues = {
  name: "",
  position: "",
  email: "",
  profile: "",
  industry: "",
  size: "",
  favouriteCases: [],
  risk: "",
  updates: true
}
const useCases = [
{
  value: 'Process automation',
label: 'Process automation',
},
{
  value: 'Boost productivity',
label: 'Boost productivity',
},
{
  value: 'Build a chatbot',
label: 'Build a chatbot',
},
{
  value: 'Training and onboarding',
label: 'Training and onboarding',
},
{
  value: 'Customer service',
label:  'Customer service',
},
{
  value: 'Share data with the team',
label:'Share data with the team',
},
{
  value: 'Inventory management',
label: 'Inventory management',
},
{
  value: 'Sales and marketing',
label: 'Sales and marketing',
}
]
export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
      })
     
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        try {
           // await POST(values.username);  // Pass form data to POST
          } catch (error) {
            console.log(error)
          }

      }

      const onInvalid = (errors: any) => console.error(errors);

  return (
    
<div className="w-1/2">
    
    <Form {...form}>
      
      <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className=" space-y-4 w-full bg-transparent border-2 border-teal-300 rounded-2xl p-12">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input placeholder="Ivan Ivanov" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input placeholder="ivan_ivanov@gmail.com" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position:</FormLabel>
              <FormControl>
                <Input placeholder="Project Manager" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="profile"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Profile:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="business" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Business
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="individual" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Individual
                    </FormLabel>
                  </FormItem>
                  
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry:</FormLabel>
              <FormControl>
                <Input placeholder="Industry" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the number of emloyees in your company" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="Over_50">Over 50</SelectItem>
                </SelectContent>
              </Select>
            
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
                            control={form.control}
                            name="favouriteCases"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Favourite use cases:</FormLabel>
                                    {useCases.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Checkbox
                                                checked={field.value.includes(item.value)}
                                                onCheckedChange={(checked) => {
                                                    if (checked) {
                                                        field.onChange([...field.value, item.value]);
                                                    } else {
                                                        field.onChange(field.value.filter((v: string) => v !== item.value));
                                                    }
                                                }}
                                            />
                                            <FormLabel>{item.label}</FormLabel>
                                        </div>
                                    ))}
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                          <FormField
          control={form.control}
          name="risk"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the biggest risk to apply AI to your business?</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
          name="updates"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
       
                <FormLabel>
                I would like to receive updates from Semantif.AI
                </FormLabel>
                
              
            </FormItem>
          )}
        />
        <Button type="submit" variant='gooeyLeftTealTransparent' >Sign up</Button>
      </form>
    </Form>
    </div>
  )
}
