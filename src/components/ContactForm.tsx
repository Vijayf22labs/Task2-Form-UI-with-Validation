import { useForm } from "@tanstack/react-form";
import { contactSchema } from "../schema/contactSchema";
import ContactInput from "./ContactInput";
import { useState } from "react";
import ContactCheckbox from "./ContactCheckbox";
import ContactFileUpload from "./ContactFileUpload";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
        companyName: '',
        businessNature: '',
        address: '',
        postcode: '',
        contactName: '',
        contactPhone: '',
        email: '',
        linkedin: '',
        message: '',
        file: undefined as unknown as File,
        nda: false,
    },
    onSubmit: async ({ value }) => {
        setIsSubmitting(true);
        console.log('Form submitted:', value);
        toast.success('Form submitted successfully!');
        form.reset();
        setIsSubmitting(false);
    }
  });

  return (
    <div className="sm:w-[60%]">
        <h1 className="text-4xl font-bold text-black dark:text-white">Contact us</h1>

        <div className="text-base leading-6 text-gray-600 dark:text-gray-300 mt-4 mb-8">
            <p>Need an experienced and skilled hand with custom IT projects?</p>
            <p>Fill out the form to get a free consultation.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(); }} className="flex flex-col gap-y-8">
            <form.Field name="companyName" validators={{ onChange: contactSchema.shape.companyName }}>
                {(field) => (
                    <ContactInput name="companyName" placeholder="Your Company Name" field={field} />
                )}
            </form.Field>

            <form.Field name="businessNature" validators={{ onChange: contactSchema.shape.businessNature }}>
                {(field) => (
                    <ContactInput name="businessNature" placeholder="Nature of Business" field={field} />
                )}
            </form.Field>

            <div className="flex flex-col sm:flex-row gap-y-8 justify-between">
                <form.Field name="address" validators={{ onChange: contactSchema.shape.address }}>
                    {(field) => (
                    <ContactInput name="address" placeholder="Address" className="sm:w-[60%]" field={field} />
                    )}
                </form.Field>

                <form.Field name="postcode" validators={{ onChange: contactSchema.shape.postcode }}>
                    {(field) => (
                        <ContactInput name="postcode" placeholder="Postcode" className="sm:w-[35%]" field={field} />
                    )}
                </form.Field>
            </div>

            <form.Field name="contactName" validators={{ onChange: contactSchema.shape.contactName }}>
                {(field) => (
                    <ContactInput name="contactName" placeholder="Contact Name" field={field}  />
                )}
            </form.Field>

            <form.Field name="contactPhone" validators={{ onChange: contactSchema.shape.contactPhone }}>
                {(field) => (
                    <ContactInput name="contactPhone" placeholder="Contact Phone" field={field} />
                )}
            </form.Field>

            <form.Field name="email" validators={{ onChange: contactSchema.shape.email }}>
                {(field) => (
                    <ContactInput name="email" placeholder="Email" field={field} type="email" />
                )}
            </form.Field>

            <form.Field name="linkedin" validators={{ onChange: contactSchema.shape.linkedin }}>
                {(field) => (
                    <ContactInput name="linkedin" placeholder="LinkedIn" field={field} />
                )}
            </form.Field>

            <form.Field name="message" validators={{ onChange: contactSchema.shape.message }}>
                {(field) => (
                    <ContactInput name="message" placeholder="Let’s talk about your idea" field={field} />
                )}
            </form.Field>

            <form.Field name="file"
                validators={{
                    onChange: (file) => {
                        console.log('File changed:', file);
                        if (!file.value || typeof file.value !== 'object'){
                            return 'Please upload a valid file';
                        }
                        if (file.value?.size > (10 * 1024 * 1024)) {
                            return 'File must be less than 10MB';
                        }
                        return undefined;
                    },
                }}  
            >
                {(field) => <ContactFileUpload name="file" field={field} />}
            </form.Field>

            <form.Field name="nda" validators={{ onChange: contactSchema.shape.nda }}>
                {(field) => (
                    <ContactCheckbox label="I want to protect my data by signing an NDA" name="nda" field={field} />
                )}
            </form.Field>

            <div className="w-full">
                <button disabled={isSubmitting} type="submit"className="text-white w-full font-medium disabled:bg-green-500 disabled:cursor-not-allowed cursor-pointer text-sm px-6 py-4 bg-green-700">
                    SUBMIT
                </button>
            </div>
        </form>
    </div>
  );
};

export default ContactForm;
