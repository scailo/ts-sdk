[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GOODS\_DISPATCH\_ITEM\_SORT\_KEY

# Enumeration: GOODS\_DISPATCH\_ITEM\_SORT\_KEY

Enumeration of fields available for sorting goods dispatch item search results.

**`Generated`**

from enum Scailo.GOODS_DISPATCH_ITEM_SORT_KEY

## Table of contents

### Enumeration Members

- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVED\_BY](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_approved_by)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVED\_ON](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_approved_on)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_approver_role_id)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_client_family_code)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_client_quantity)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_client_uom_id)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CREATED\_AT](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_created_at)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_FAMILY\_ID](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_family_id)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_id_unspecified)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_internal_quantity)
- [GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_MODIFIED\_AT](GOODS_DISPATCH_ITEM_SORT_KEY.md#goods_dispatch_item_sort_key_modified_at)

## Enumeration Members

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVED\_BY

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVED\_BY** = ``4``

**`Description`**

Sort by the system ID of the approving user.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_APPROVED_BY = 4;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:80](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L80)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVED\_ON

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVED\_ON** = ``3``

**`Description`**

Sort by the official approval timestamp of the item.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_APPROVED_ON = 3;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:73](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L73)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_APPROVER\_ROLE\_ID** = ``5``

**`Description`**

Sort by the security role ID used by the approver.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:87](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L87)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_FAMILY\_CODE** = ``14``

**`Description`**

Sort alphabetically by the client's specific family code or SKU.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:122](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L122)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_QUANTITY** = ``13``

**`Description`**

Sort by the dispatched quantity evaluated in the client's unit of measure.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:115](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L115)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CLIENT\_UOM\_ID** = ``12``

**`Description`**

Sort by the internal ID of the client's requested unit of measure.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:108](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L108)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CREATED\_AT

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_CREATED\_AT** = ``1``

**`Description`**

Sort by the timestamp the item record was initially created.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_CREATED_AT = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:59](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L59)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_FAMILY\_ID

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_FAMILY\_ID** = ``10``

**`Description`**

Sort by the internal ID of the family.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_FAMILY_ID = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:94](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L94)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_ID\_UNSPECIFIED** = ``0``

**`Description`**

Default sort behavior (by internal item sequence ID).

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:52](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L52)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_INTERNAL\_QUANTITY** = ``11``

**`Description`**

Sort by the dispatched quantity evaluated in the internal unit of measure.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:101](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L101)

___

### GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_MODIFIED\_AT

• **GOODS\_DISPATCH\_ITEM\_SORT\_KEY\_MODIFIED\_AT** = ``2``

**`Description`**

Sort by the timestamp the item record was last modified.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_SORT_KEY_MODIFIED_AT = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:66](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L66)
