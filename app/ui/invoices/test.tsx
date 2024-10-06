export default function EditInvoiceForm ({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [, formAction] = useActionState(updateInvoiceWithId, initialState);
  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
          <Select id="customer" name="customerId" defaultValue="" aria-describedby="customer-error">

<SelectTrigger className="w-[180px] bg-white-200 w-full">
  <SelectValue placeholder="Select a customer" />
</SelectTrigger>
<SelectContent className="bg-white">
<SelectContent className="bg-white">
      {customers.map((customer) => (
        <SelectItem key={customer.id} value={customer.id} className="hover:bg-gray-200">
          {customer.name}
        </SelectItem>
      ))}
    </SelectContent>
</SelectContent>
</Select>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={invoice.amount}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">

<RadioGroup defaultValue="paid" name="status">
<div className="flex items-center space-x-2">
<RadioGroupItem value="paid" id="paid" />
<div className="flex w-[120%] items-center bg-green-300 rounded-lg">
<CheckIcon className="h-4 w-4 mr-2" />
<Label htmlFor="paid">Paid</Label>
</div>
</div>
<div className="flex items-center space-x-2">
<RadioGroupItem value="pending" id="pending" />
<div className="flex w-[120%] items-center bg-gray-200 rounded-lg">
<ClockIcon className="h-4 w-4 mr-2" />
<Label htmlFor="pending">Pending</Label>
</div>
</div>
</RadioGroup>
</div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button variant="default" onClick={() =>
        toast("Invoice edited successfully")
      }>Apply changes</Button>
      </div>
    </form>
  );
}