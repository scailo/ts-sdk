[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_ORDER\_REFERENCE\_CONTEXT

# Enumeration: SALES\_ORDER\_REFERENCE\_CONTEXT

Enumeration of the operational contexts in which a referenced document is applied to a Sales Order.

**`Generated`**

from enum Scailo.SALES_ORDER_REFERENCE_CONTEXT

## Table of contents

### Enumeration Members

- [SALES\_ORDER\_REFERENCE\_CONTEXT\_ANY\_UNSPECIFIED](SALES_ORDER_REFERENCE_CONTEXT.md#sales_order_reference_context_any_unspecified)
- [SALES\_ORDER\_REFERENCE\_CONTEXT\_BILLING](SALES_ORDER_REFERENCE_CONTEXT.md#sales_order_reference_context_billing)

## Enumeration Members

### SALES\_ORDER\_REFERENCE\_CONTEXT\_ANY\_UNSPECIFIED

• **SALES\_ORDER\_REFERENCE\_CONTEXT\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Default behavior, ignoring the context filter. Utilized primarily within search and listing APIs.

**`Generated`**

from enum value: SALES_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED = 0;

#### Defined in

[src/sales_orders.scailo_pb.ts:170](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L170)

___

### SALES\_ORDER\_REFERENCE\_CONTEXT\_BILLING

• **SALES\_ORDER\_REFERENCE\_CONTEXT\_BILLING** = ``1``

**`Description`**

Denotes that the referenced document is used specifically to dictate billing or invoicing constraints.

**`Generated`**

from enum value: SALES_ORDER_REFERENCE_CONTEXT_BILLING = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:177](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L177)
