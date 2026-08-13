[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_INVOICE\_REF\_FROM

# Enumeration: SALES\_INVOICE\_REF\_FROM

Enumeration of the supported source record types from which a Sales Invoice can be generated.
This determines the operational linkage and financial inheritance of the billing document.

**`Generated`**

from enum Scailo.SALES_INVOICE_REF_FROM

## Table of contents

### Enumeration Members

- [SALES\_INVOICE\_REF\_FROM\_ANY\_UNSPECIFIED](SALES_INVOICE_REF_FROM.md#sales_invoice_ref_from_any_unspecified)
- [SALES\_INVOICE\_REF\_FROM\_SALES\_ORDER](SALES_INVOICE_REF_FROM.md#sales_invoice_ref_from_sales_order)

## Enumeration Members

### SALES\_INVOICE\_REF\_FROM\_ANY\_UNSPECIFIED

• **SALES\_INVOICE\_REF\_FROM\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Default behavior, ignoring the source record type. Utilized primarily within search and listing APIs.

**`Generated`**

from enum value: SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED = 0;

#### Defined in

[src/sales_invoices.scailo_pb.ts:24](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L24)

___

### SALES\_INVOICE\_REF\_FROM\_SALES\_ORDER

• **SALES\_INVOICE\_REF\_FROM\_SALES\_ORDER** = ``1``

**`Description`**

Denotes that the sales invoice was generated directly from a fulfilled or approved Sales Order.

**`Generated`**

from enum value: SALES_INVOICE_REF_FROM_SALES_ORDER = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:31](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L31)
