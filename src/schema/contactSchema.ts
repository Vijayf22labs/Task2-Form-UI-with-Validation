import { z } from 'zod';

export const contactSchema = z.object({
    companyName: z.string().min(1, 'Company name is required'),
    businessNature: z.string().min(1, 'Nature of business is required'),
    address: z.string().min(1, 'Address is required'),
    postcode: z.string().regex(/^\d{6,}$/, 'Postcode must be at least 6 digits'),
    contactName: z.string().min(1, 'Contact name is required'),
    contactPhone: z.string().regex(/^\d{10,}$/, 'Phone number must be at least 10 digits'),
    email: z.string().email('Please enter a valid email address'),
    linkedin: z.string().url('Please enter a valid LinkedIn URL'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    file: z.instanceof(File, { message: 'Please upload a valid file' }).refine((file) => file.size <= 10 * 1024 * 1024, {message: 'File must be less than 10MB'}),
    nda: z.boolean().refine((val) => val === true, 'You must agree to the NDA to proceed'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
