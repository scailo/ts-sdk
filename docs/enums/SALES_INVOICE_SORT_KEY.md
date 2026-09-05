[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_INVOICE\_SORT\_KEY

# Enumeration: SALES\_INVOICE\_SORT\_KEY

Enumeration of fields available for sorting sales invoice search results.

**`Generated`**

from enum Scailo.SALES_INVOICE_SORT_KEY

## Table of contents

### Enumeration Members

- [SALES\_INVOICE\_SORT\_KEY\_AMENDMENT\_COUNT](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_amendment_count)
- [SALES\_INVOICE\_SORT\_KEY\_APPROVED\_BY](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_approved_by)
- [SALES\_INVOICE\_SORT\_KEY\_APPROVED\_ON](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_approved_on)
- [SALES\_INVOICE\_SORT\_KEY\_APPROVER\_ROLE\_ID](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_approver_role_id)
- [SALES\_INVOICE\_SORT\_KEY\_COMPLETED\_ON](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_completed_on)
- [SALES\_INVOICE\_SORT\_KEY\_CREATED\_AT](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_created_at)
- [SALES\_INVOICE\_SORT\_KEY\_FINAL\_REF\_NUMBER](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_final_ref_number)
- [SALES\_INVOICE\_SORT\_KEY\_ID\_UNSPECIFIED](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_id_unspecified)
- [SALES\_INVOICE\_SORT\_KEY\_MODIFIED\_AT](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_modified_at)
- [SALES\_INVOICE\_SORT\_KEY\_REFERENCE\_ID](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_reference_id)
- [SALES\_INVOICE\_SORT\_KEY\_TOTAL\_VALUE](SALES_INVOICE_SORT_KEY.md#sales_invoice_sort_key_total_value)

## Enumeration Members

### SALES\_INVOICE\_SORT\_KEY\_AMENDMENT\_COUNT

• **SALES\_INVOICE\_SORT\_KEY\_AMENDMENT\_COUNT** = ``18``

**`Description`**

Sort by the total number of times the sales invoice has been amended.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18;

#### Defined in

[src/sales_invoices.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L114)

___

### SALES\_INVOICE\_SORT\_KEY\_APPROVED\_BY

• **SALES\_INVOICE\_SORT\_KEY\_APPROVED\_BY** = ``4``

**`Description`**

Sort by the system ID of the approving user.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_APPROVED_BY = 4;

#### Defined in

[src/sales_invoices.scailo_pb.ts:79](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L79)

___

### SALES\_INVOICE\_SORT\_KEY\_APPROVED\_ON

• **SALES\_INVOICE\_SORT\_KEY\_APPROVED\_ON** = ``3``

**`Description`**

Sort by the official approval timestamp.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_APPROVED_ON = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:72](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L72)

___

### SALES\_INVOICE\_SORT\_KEY\_APPROVER\_ROLE\_ID

• **SALES\_INVOICE\_SORT\_KEY\_APPROVER\_ROLE\_ID** = ``5``

**`Description`**

Sort by the security role ID used by the approver.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:86](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L86)

___

### SALES\_INVOICE\_SORT\_KEY\_COMPLETED\_ON

• **SALES\_INVOICE\_SORT\_KEY\_COMPLETED\_ON** = ``6``

**`Description`**

Sort by the timestamp of record completion.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_COMPLETED_ON = 6;

#### Defined in

[src/sales_invoices.scailo_pb.ts:93](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L93)

___

### SALES\_INVOICE\_SORT\_KEY\_CREATED\_AT

• **SALES\_INVOICE\_SORT\_KEY\_CREATED\_AT** = ``1``

**`Description`**

Sort by the timestamp the record was initially created.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_CREATED_AT = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:58](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L58)

___

### SALES\_INVOICE\_SORT\_KEY\_FINAL\_REF\_NUMBER

• **SALES\_INVOICE\_SORT\_KEY\_FINAL\_REF\_NUMBER** = ``11``

**`Description`**

Sort alphabetically by the system-generated reference number.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:107](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L107)

___

### SALES\_INVOICE\_SORT\_KEY\_ID\_UNSPECIFIED

• **SALES\_INVOICE\_SORT\_KEY\_ID\_UNSPECIFIED** = ``0``

**`Description`**

Default sort behavior (by internal ID).

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;

#### Defined in

[src/sales_invoices.scailo_pb.ts:51](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L51)

___

### SALES\_INVOICE\_SORT\_KEY\_MODIFIED\_AT

• **SALES\_INVOICE\_SORT\_KEY\_MODIFIED\_AT** = ``2``

**`Description`**

Sort by the timestamp the record was last modified.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_MODIFIED_AT = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:65](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L65)

___

### SALES\_INVOICE\_SORT\_KEY\_REFERENCE\_ID

• **SALES\_INVOICE\_SORT\_KEY\_REFERENCE\_ID** = ``10``

**`Description`**

Sort alphabetically by the user-provided reference ID.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_REFERENCE_ID = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:100](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L100)

___

### SALES\_INVOICE\_SORT\_KEY\_TOTAL\_VALUE

• **SALES\_INVOICE\_SORT\_KEY\_TOTAL\_VALUE** = ``30``

**`Description`**

Sort by the calculated grand total value of the sales invoice.

**`Generated`**

from enum value: SALES_INVOICE_SORT_KEY_TOTAL_VALUE = 30;

#### Defined in

[src/sales_invoices.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L121)
