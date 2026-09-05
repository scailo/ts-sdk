[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PROFORMA\_INVOICE\_BILLING\_STATUS

# Enumeration: PROFORMA\_INVOICE\_BILLING\_STATUS

Enumeration of the supported financial conversion statuses for a Proforma Invoice.
This tracks the lifecycle progression of a preliminary billing document, identifying
whether its estimated charges have been formally realized and converted into a final, legally binding Sales Invoice.

**`Generated`**

from enum Scailo.PROFORMA_INVOICE_BILLING_STATUS

## Table of contents

### Enumeration Members

- [PROFORMA\_INVOICE\_BILLING\_STATUS\_ANY\_UNSPECIFIED](PROFORMA_INVOICE_BILLING_STATUS.md#proforma_invoice_billing_status_any_unspecified)
- [PROFORMA\_INVOICE\_BILLING\_STATUS\_BILLED](PROFORMA_INVOICE_BILLING_STATUS.md#proforma_invoice_billing_status_billed)
- [PROFORMA\_INVOICE\_BILLING\_STATUS\_UNBILLED](PROFORMA_INVOICE_BILLING_STATUS.md#proforma_invoice_billing_status_unbilled)

## Enumeration Members

### PROFORMA\_INVOICE\_BILLING\_STATUS\_ANY\_UNSPECIFIED

• **PROFORMA\_INVOICE\_BILLING\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Default behavior, ignoring the billing status criteria. Utilized primarily within search and filtering payloads to return all records regardless of their conversion state.

**`Generated`**

from enum value: PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:152](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L152)

___

### PROFORMA\_INVOICE\_BILLING\_STATUS\_BILLED

• **PROFORMA\_INVOICE\_BILLING\_STATUS\_BILLED** = ``1``

**`Description`**

Indicates that the proforma invoice has been formally converted into a finalized, legally binding Sales Invoice (typically after physical fulfillment is complete).

**`Generated`**

from enum value: PROFORMA_INVOICE_BILLING_STATUS_BILLED = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L159)

___

### PROFORMA\_INVOICE\_BILLING\_STATUS\_UNBILLED

• **PROFORMA\_INVOICE\_BILLING\_STATUS\_UNBILLED** = ``2``

**`Description`**

Indicates that the proforma invoice remains in a preliminary state (e.g., acting as an estimate or awaiting advance payment) and has not yet been converted into a formal Sales Invoice.

**`Generated`**

from enum value: PROFORMA_INVOICE_BILLING_STATUS_UNBILLED = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:166](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L166)
