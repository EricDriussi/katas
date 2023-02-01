# CSV Invoice Filter Kata

Write a program that filters valid invoices from a CSV file.
It should output only the valid invoices and discard the invalid ones.

The CSV is expected to have a header indicating which fields are where.
A sample header: [Invoice_num, Date, Gross_amount, Net_amount, IVA, IGIC, Prod_or_service, client_CIF, client_NIF]

Rules for a valid CSV:

1. Can be empty.
2. Cannot have only one line (first line is expected to be the header).

Rules for a valid invoice:

1. There should be one and only one tax field.
2. Tax fields should be decimal numbers.
3. The net amount should be correct (as in: NetAmount = GrossAmount - (GrossAmount * Tax) / 100).
4. The net amount should vary according to the applied tax type.
5. There should be one and only one ID type (CIF, NIF).
6. There should not be multiple invoices with the same Invoice ID.

## Bonus

Handle CSV with varying fields position (and corresponding header variation).

## Examples

A valid CSV file:
[Invoice_num, Date, Gross_amount, Net_amount, IVA, IGIC, Prod_or_service, client_CIF, client_NIF]
[1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,]
[2,02/05/2021,1000,790,,7,ACER Laptop,,C76430134]

An invalid CSV file:
[Invoice_num, Date, Gross_amount, Net_amount, IVA, IGIC, Prod_or_service, client_CIF, client_NIF]

A valid invoice:
[1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,]

An invalid invoice:
[1,02/05/2021,1000,790,21,7,ACER Laptop,B76430134,]
