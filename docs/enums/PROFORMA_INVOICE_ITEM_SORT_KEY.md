[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PROFORMA\_INVOICE\_ITEM\_SORT\_KEY

# Enumeration: PROFORMA\_INVOICE\_ITEM\_SORT\_KEY

Enumeration of fields available for sorting proforma invoice item search results.

**`Generated`**

from enum Scailo.PROFORMA_INVOICE_ITEM_SORT_KEY

## Table of contents

### Enumeration Members

- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_BY](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_approved_by)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_ON](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_approved_on)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_approver_role_id)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_client_family_code)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_client_quantity)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_client_uom_id)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CREATED\_AT](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_created_at)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_FAMILY\_ID](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_family_id)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_id_unspecified)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_internal_quantity)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_MODIFIED\_AT](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_modified_at)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_tax_group_id)
- [PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_UNIT\_PRICE](PROFORMA_INVOICE_ITEM_SORT_KEY.md#proforma_invoice_item_sort_key_unit_price)

## Enumeration Members

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_BY

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_BY** = ``4``

**`Description`**

Sort by the system ID of the approving user.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_BY = 4;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L215)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_ON

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVED\_ON** = ``3``

**`Description`**

Sort by the official approval timestamp of the item.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVED_ON = 3;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L208)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID** = ``5``

**`Description`**

Sort by the security role ID used by the approver.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:222](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L222)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE** = ``14``

**`Description`**

Sort alphabetically by the client's specific family code or SKU.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:257](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L257)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY** = ``13``

**`Description`**

Sort by the invoiced quantity evaluated in the client's unit of measure.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:250](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L250)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID** = ``12``

**`Description`**

Sort by the internal ID of the client's requested unit of measure.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:243](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L243)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CREATED\_AT

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_CREATED\_AT** = ``1``

**`Description`**

Sort by the timestamp the item record was initially created.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_CREATED_AT = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:194](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L194)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_FAMILY\_ID

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_FAMILY\_ID** = ``10``

**`Description`**

Sort by the internal ID of the family.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_FAMILY_ID = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:229](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L229)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED** = ``0``

**`Description`**

Default sort behavior (by internal item sequence ID).

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L187)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY** = ``11``

**`Description`**

Sort by the invoiced quantity evaluated in the internal unit of measure.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L236)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_MODIFIED\_AT

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_MODIFIED\_AT** = ``2``

**`Description`**

Sort by the timestamp the item record was last modified.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_MODIFIED_AT = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:201](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L201)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID** = ``16``

**`Description`**

Sort by the internal ID of the assigned tax group.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_TAX_GROUP_ID = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:271](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L271)

___

### PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_UNIT\_PRICE

• **PROFORMA\_INVOICE\_ITEM\_SORT\_KEY\_UNIT\_PRICE** = ``15``

**`Description`**

Sort by the invoiced base unit price.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_SORT_KEY_UNIT_PRICE = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L264)
