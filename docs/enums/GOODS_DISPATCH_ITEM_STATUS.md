[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GOODS\_DISPATCH\_ITEM\_STATUS

# Enumeration: GOODS\_DISPATCH\_ITEM\_STATUS

Enum defining the applicable lifecycle and verification statuses for goods dispatch items.

**`Generated`**

from enum Scailo.GOODS_DISPATCH_ITEM_STATUS

## Table of contents

### Enumeration Members

- [GOODS\_DISPATCH\_ITEM\_STATUS\_ANY\_UNSPECIFIED](GOODS_DISPATCH_ITEM_STATUS.md#goods_dispatch_item_status_any_unspecified)
- [GOODS\_DISPATCH\_ITEM\_STATUS\_APPROVED](GOODS_DISPATCH_ITEM_STATUS.md#goods_dispatch_item_status_approved)
- [GOODS\_DISPATCH\_ITEM\_STATUS\_UNAPPROVED](GOODS_DISPATCH_ITEM_STATUS.md#goods_dispatch_item_status_unapproved)

## Enumeration Members

### GOODS\_DISPATCH\_ITEM\_STATUS\_ANY\_UNSPECIFIED

• **GOODS\_DISPATCH\_ITEM\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L151)

___

### GOODS\_DISPATCH\_ITEM\_STATUS\_APPROVED

• **GOODS\_DISPATCH\_ITEM\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the goods dispatch item association has passed verification and is actively approved.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_STATUS_APPROVED = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L158)

___

### GOODS\_DISPATCH\_ITEM\_STATUS\_UNAPPROVED

• **GOODS\_DISPATCH\_ITEM\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the goods dispatch item association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: GOODS_DISPATCH_ITEM_STATUS_UNAPPROVED = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L165)
