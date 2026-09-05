[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_INVOICE\_ITEM\_SORT\_KEY

# Enumeration: SALES\_INVOICE\_ITEM\_SORT\_KEY

Enumeration of fields available for sorting sales invoice item search results.

**`Generated`**

from enum Scailo.SALES_INVOICE_ITEM_SORT_KEY

## Table of contents

### Enumeration Members

- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_BY](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_approved_by)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_ON](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_approved_on)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_approver_role_id)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_client_family_code)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_client_quantity)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_client_uom_id)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_CREATED\_AT](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_created_at)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_FAMILY\_ID](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_family_id)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_id_unspecified)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_internal_quantity)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_MODIFIED\_AT](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_modified_at)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_tax_group_id)
- [SALES\_INVOICE\_ITEM\_SORT\_KEY\_UNIT\_PRICE](SALES_INVOICE_ITEM_SORT_KEY.md#sales_invoice_item_sort_key_unit_price)

## Enumeration Members

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_BY

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_BY** = ``4``

**`Description`**

Sort by the system ID of the approving user.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4;

#### Defined in

[src/sales_invoices.scailo_pb.ts:178](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L178)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_ON

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_ON** = ``3``

**`Description`**

Sort by the official approval timestamp of the item.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L171)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID** = ``5``

**`Description`**

Sort by the security role ID used by the approver.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:185](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L185)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE** = ``14``

**`Description`**

Sort alphabetically by the client's specific family code or SKU.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:220](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L220)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY** = ``13``

**`Description`**

Sort by the invoiced quantity evaluated in the client's unit of measure.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;

#### Defined in

[src/sales_invoices.scailo_pb.ts:213](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L213)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID** = ``12``

**`Description`**

Sort by the internal ID of the client's requested unit of measure.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;

#### Defined in

[src/sales_invoices.scailo_pb.ts:206](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L206)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_CREATED\_AT

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_CREATED\_AT** = ``1``

**`Description`**

Sort by the timestamp the item record was initially created.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L157)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_FAMILY\_ID

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_FAMILY\_ID** = ``10``

**`Description`**

Sort by the internal ID of the family.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:192](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L192)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED** = ``0``

**`Description`**

Default sort behavior (by internal item sequence ID).

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;

#### Defined in

[src/sales_invoices.scailo_pb.ts:150](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L150)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY** = ``11``

**`Description`**

Sort by the invoiced quantity evaluated in the internal unit of measure.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:199](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L199)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_MODIFIED\_AT

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_MODIFIED\_AT** = ``2``

**`Description`**

Sort by the timestamp the item record was last modified.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L164)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID** = ``16``

**`Description`**

Sort by the internal ID of the assigned tax group.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;

#### Defined in

[src/sales_invoices.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L234)

___

### SALES\_INVOICE\_ITEM\_SORT\_KEY\_UNIT\_PRICE

• **SALES\_INVOICE\_ITEM\_SORT\_KEY\_UNIT\_PRICE** = ``15``

**`Description`**

Sort by the invoiced base unit price.

**`Generated`**

from enum value: SALES_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:227](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L227)
