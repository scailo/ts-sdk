[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PROFORMA\_INVOICE\_SORT\_KEY

# Enumeration: PROFORMA\_INVOICE\_SORT\_KEY

Enumeration of fields available for sorting proforma invoice search results.

**`Generated`**

from enum Scailo.PROFORMA_INVOICE_SORT_KEY

## Table of contents

### Enumeration Members

- [PROFORMA\_INVOICE\_SORT\_KEY\_AMENDMENT\_COUNT](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_amendment_count)
- [PROFORMA\_INVOICE\_SORT\_KEY\_APPROVED\_BY](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_approved_by)
- [PROFORMA\_INVOICE\_SORT\_KEY\_APPROVED\_ON](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_approved_on)
- [PROFORMA\_INVOICE\_SORT\_KEY\_APPROVER\_ROLE\_ID](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_approver_role_id)
- [PROFORMA\_INVOICE\_SORT\_KEY\_COMPLETED\_ON](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_completed_on)
- [PROFORMA\_INVOICE\_SORT\_KEY\_CREATED\_AT](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_created_at)
- [PROFORMA\_INVOICE\_SORT\_KEY\_FINAL\_REF\_NUMBER](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_final_ref_number)
- [PROFORMA\_INVOICE\_SORT\_KEY\_ID\_UNSPECIFIED](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_id_unspecified)
- [PROFORMA\_INVOICE\_SORT\_KEY\_MODIFIED\_AT](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_modified_at)
- [PROFORMA\_INVOICE\_SORT\_KEY\_REFERENCE\_ID](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_reference_id)
- [PROFORMA\_INVOICE\_SORT\_KEY\_TOTAL\_VALUE](PROFORMA_INVOICE_SORT_KEY.md#proforma_invoice_sort_key_total_value)

## Enumeration Members

### PROFORMA\_INVOICE\_SORT\_KEY\_AMENDMENT\_COUNT

• **PROFORMA\_INVOICE\_SORT\_KEY\_AMENDMENT\_COUNT** = ``18``

**`Description`**

Sort by the total number of times the sales invoice has been amended.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_AMENDMENT_COUNT = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L114)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_APPROVED\_BY

• **PROFORMA\_INVOICE\_SORT\_KEY\_APPROVED\_BY** = ``4``

**`Description`**

Sort by the system ID of the approving user.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVED_BY = 4;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:79](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L79)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_APPROVED\_ON

• **PROFORMA\_INVOICE\_SORT\_KEY\_APPROVED\_ON** = ``3``

**`Description`**

Sort by the official approval timestamp.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVED_ON = 3;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:72](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L72)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_APPROVER\_ROLE\_ID

• **PROFORMA\_INVOICE\_SORT\_KEY\_APPROVER\_ROLE\_ID** = ``5``

**`Description`**

Sort by the security role ID used by the approver.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_APPROVER_ROLE_ID = 5;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:86](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L86)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_COMPLETED\_ON

• **PROFORMA\_INVOICE\_SORT\_KEY\_COMPLETED\_ON** = ``6``

**`Description`**

Sort by the timestamp of record completion.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_COMPLETED_ON = 6;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:93](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L93)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_CREATED\_AT

• **PROFORMA\_INVOICE\_SORT\_KEY\_CREATED\_AT** = ``1``

**`Description`**

Sort by the timestamp the record was initially created.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_CREATED_AT = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:58](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L58)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_FINAL\_REF\_NUMBER

• **PROFORMA\_INVOICE\_SORT\_KEY\_FINAL\_REF\_NUMBER** = ``11``

**`Description`**

Sort alphabetically by the system-generated reference number.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_FINAL_REF_NUMBER = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:107](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L107)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_ID\_UNSPECIFIED

• **PROFORMA\_INVOICE\_SORT\_KEY\_ID\_UNSPECIFIED** = ``0``

**`Description`**

Default sort behavior (by internal ID).

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:51](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L51)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_MODIFIED\_AT

• **PROFORMA\_INVOICE\_SORT\_KEY\_MODIFIED\_AT** = ``2``

**`Description`**

Sort by the timestamp the record was last modified.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_MODIFIED_AT = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:65](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L65)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_REFERENCE\_ID

• **PROFORMA\_INVOICE\_SORT\_KEY\_REFERENCE\_ID** = ``10``

**`Description`**

Sort alphabetically by the user-provided reference ID.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_REFERENCE_ID = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:100](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L100)

___

### PROFORMA\_INVOICE\_SORT\_KEY\_TOTAL\_VALUE

• **PROFORMA\_INVOICE\_SORT\_KEY\_TOTAL\_VALUE** = ``30``

**`Description`**

Sort by the calculated grand total value of the sales invoice.

**`Generated`**

from enum value: PROFORMA_INVOICE_SORT_KEY_TOTAL_VALUE = 30;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L121)
