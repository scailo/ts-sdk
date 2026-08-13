[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_QUOTATION\_REFERENCE\_CONTEXT

# Enumeration: SALES\_QUOTATION\_REFERENCE\_CONTEXT

Enumeration of the operational contexts in which a referenced document is applied to a Sales Quotation.

**`Generated`**

from enum Scailo.SALES_QUOTATION_REFERENCE_CONTEXT

## Table of contents

### Enumeration Members

- [SALES\_QUOTATION\_REFERENCE\_CONTEXT\_ANY\_UNSPECIFIED](SALES_QUOTATION_REFERENCE_CONTEXT.md#sales_quotation_reference_context_any_unspecified)
- [SALES\_QUOTATION\_REFERENCE\_CONTEXT\_BILLING](SALES_QUOTATION_REFERENCE_CONTEXT.md#sales_quotation_reference_context_billing)

## Enumeration Members

### SALES\_QUOTATION\_REFERENCE\_CONTEXT\_ANY\_UNSPECIFIED

• **SALES\_QUOTATION\_REFERENCE\_CONTEXT\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Default behavior, ignoring the context filter. Utilized primarily within search and listing APIs.

**`Generated`**

from enum value: SALES_QUOTATION_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0;

#### Defined in

[src/sales_quotations.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L162)

___

### SALES\_QUOTATION\_REFERENCE\_CONTEXT\_BILLING

• **SALES\_QUOTATION\_REFERENCE\_CONTEXT\_BILLING** = ``1``

**`Description`**

Denotes that the referenced document is used specifically to dictate billing or invoicing constraints.

**`Generated`**

from enum value: SALES_QUOTATION_REFERENCE_CONTEXT_BILLING = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:169](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L169)
