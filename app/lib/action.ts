/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn} from '@/auth';
import { AuthError } from 'next-auth';

export type DataForm = {
  errors?: {
    name?: string[];
    email?: string[];
    image?: string[];
  };
  message?: string | null;
};

const AddCustomerSchema = z.object({
  name: z.string().min(1, "Name is required"), 
  email: z.string().email("Invalid email format"),
  image: z.string().url("Invalid URL format").optional(),
});

export async function AddCustomer(prevState: DataForm, formData: FormData) {
  const validatedFields = AddCustomerSchema.safeParse({
    name: formData.get('customerName'),
    email: formData.get('customerEmail'),
    image: formData.get('customerImageUrl'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
 
  // Prepare data for insertion into the database
  const { name, email, image } = validatedFields.data;
 
  // Insert data into the database
  try {
    await sql`
      INSERT INTO customers (name, email, image_url, total_invoices, total_paid, total_pending)
      VALUES (${name}, ${email}, ${image}, ${0}, ${0}, ${0})
    `;
  } catch (error) {

    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/customers/overview');
  redirect('/dashboard/customers/overview');
}


const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
 
  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;

    await sql`
      UPDATE customers
SET 
    total_paid = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'paid'),
    total_pending = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'pending')
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;

    await sql`
      UPDATE customers
SET 
    total_invoices = total_paid + total_pending
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
 
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;

    await sql`
      UPDATE customers
SET 
    total_paid = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'paid'),
    total_pending = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'pending')
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;

    await sql`
      UPDATE customers
SET 
    total_invoices = total_paid + total_pending
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;

    await sql`
      UPDATE customers
SET 
    total_paid = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'paid'),
    total_pending = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'pending')
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;

    await sql`
      UPDATE customers
SET 
    total_invoices = total_paid + total_pending
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function deleteCustomer(id: string) {
  try {
    await sql`DELETE FROM customers WHERE id = ${id}`;

    await sql`
      UPDATE customers
SET 
    total_paid = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'paid'),
    total_pending = (SELECT COUNT(*) FROM invoices WHERE customer_id = customers.id AND status = 'pending')
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;

    await sql`
      UPDATE customers
SET 
    total_invoices = total_paid + total_pending
WHERE id IN (SELECT DISTINCT customer_id FROM invoices)
    `;
    revalidatePath('/dashboard/customers/overview');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function deleteSystem() {
  try {
    await sql`
      DELETE FROM invoices
    `;

    await sql`
      UPDATE customers
SET 
    total_invoices = 0,
    total_paid = 0,
    total_pending = 0;
    `;
    revalidatePath('/dashboard/acme');
    return { message: 'Deleted successfully.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}