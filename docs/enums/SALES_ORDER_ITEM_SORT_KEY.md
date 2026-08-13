[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_ORDER\_ITEM\_SORT\_KEY

# Enumeration: SALES\_ORDER\_ITEM\_SORT\_KEY

Enumeration of fields available for sorting sales order item search results.

**`Generated`**

from enum Scailo.SALES_ORDER_ITEM_SORT_KEY

## Table of contents

### Enumeration Members

- [SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVED\_BY](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_approved_by)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVED\_ON](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_approved_on)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_approver_role_id)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_client_family_code)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_client_quantity)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_client_uom_id)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_CREATED\_AT](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_created_at)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_DELIVERY\_DATE](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_delivery_date)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_DISCOUNT](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_discount)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_FAMILY\_ID](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_family_id)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_id_unspecified)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_internal_quantity)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_MODIFIED\_AT](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_modified_at)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_tax_group_id)
- [SALES\_ORDER\_ITEM\_SORT\_KEY\_UNIT\_PRICE](SALES_ORDER_ITEM_SORT_KEY.md#sales_order_item_sort_key_unit_price)

## Enumeration Members

### SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVED\_BY

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVED\_BY** = ``4``

**`Description`**

Sort by the system ID of the approving user.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_APPROVED_BY = 4;

#### Defined in

[src/sales_orders.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L268)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVED\_ON

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVED\_ON** = ``3``

**`Description`**

Sort by the official approval timestamp of the item.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_APPROVED_ON = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L261)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID** = ``5``

**`Description`**

Sort by the security role ID used by the approver.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;

#### Defined in

[src/sales_orders.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L275)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE** = ``14``

**`Description`**

Sort alphabetically by the client's specific family code or SKU.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:310](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L310)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY** = ``13``

**`Description`**

Sort by the ordered quantity evaluated in the client's unit of measure.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:303](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L303)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID** = ``12``

**`Description`**

Sort by the internal ID of the client's requested unit of measure.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L296)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_CREATED\_AT

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_CREATED\_AT** = ``1``

**`Description`**

Sort by the timestamp the item record was initially created.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_CREATED_AT = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:247](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L247)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_DELIVERY\_DATE

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_DELIVERY\_DATE** = ``18``

**`Description`**

Sort chronologically by the target delivery date for the item.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_DELIVERY_DATE = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L338)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_DISCOUNT

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_DISCOUNT** = ``17``

**`Description`**

Sort by the percentage discount applied to the item.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_DISCOUNT = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:331](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L331)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_FAMILY\_ID

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_FAMILY\_ID** = ``10``

**`Description`**

Sort by the internal ID of the family.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_FAMILY_ID = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L282)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED** = ``0``

**`Description`**

Default sort behavior (by internal item sequence ID).

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;

#### Defined in

[src/sales_orders.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L240)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY** = ``11``

**`Description`**

Sort by the ordered quantity evaluated in the internal unit of measure.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L289)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_MODIFIED\_AT

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_MODIFIED\_AT** = ``2``

**`Description`**

Sort by the timestamp the item record was last modified.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_MODIFIED_AT = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L254)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_TAX\_GROUP\_ID** = ``16``

**`Description`**

Sort by the internal ID of the assigned tax group.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_TAX_GROUP_ID = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:324](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L324)

___

### SALES\_ORDER\_ITEM\_SORT\_KEY\_UNIT\_PRICE

• **SALES\_ORDER\_ITEM\_SORT\_KEY\_UNIT\_PRICE** = ``15``

**`Description`**

Sort by the agreed-upon base unit price.

**`Generated`**

from enum value: SALES_ORDER_ITEM_SORT_KEY_UNIT_PRICE = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:317](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L317)
