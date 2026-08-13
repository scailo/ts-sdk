[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GOODS\_DISPATCH\_REF\_FROM

# Enumeration: GOODS\_DISPATCH\_REF\_FROM

Enumeration of the supported source record types from which a Goods Dispatch can be generated.
This determines the operational linkage between the physical logistics/fulfillment process
and the original commercial contract.

**`Generated`**

from enum Scailo.GOODS_DISPATCH_REF_FROM

## Table of contents

### Enumeration Members

- [GOODS\_DISPATCH\_REF\_FROM\_ANY\_UNSPECIFIED](GOODS_DISPATCH_REF_FROM.md#goods_dispatch_ref_from_any_unspecified)
- [GOODS\_DISPATCH\_REF\_FROM\_SALES\_ORDER](GOODS_DISPATCH_REF_FROM.md#goods_dispatch_ref_from_sales_order)

## Enumeration Members

### GOODS\_DISPATCH\_REF\_FROM\_ANY\_UNSPECIFIED

• **GOODS\_DISPATCH\_REF\_FROM\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Default behavior, ignoring the source record type. Utilized primarily within search and filtering APIs to return dispatches regardless of their origin.

**`Generated`**

from enum value: GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED = 0;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:25](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L25)

___

### GOODS\_DISPATCH\_REF\_FROM\_SALES\_ORDER

• **GOODS\_DISPATCH\_REF\_FROM\_SALES\_ORDER** = ``1``

**`Description`**

Denotes that the goods dispatch was generated directly against an approved, legally binding Sales Order.

**`Generated`**

from enum value: GOODS_DISPATCH_REF_FROM_SALES_ORDER = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:32](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L32)
