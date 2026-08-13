[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GOODS\_DISPATCH\_BILLING\_STATUS

# Enumeration: GOODS\_DISPATCH\_BILLING\_STATUS

Enumeration of the supported financial conversion statuses for a Goods Dispatch.
This tracks the cross-departmental lifecycle progression of a physical fulfillment operation,
identifying whether the specific quantities that left the warehouse have been formally
realized and converted into a final, legally binding Sales Invoice by the finance team.

**`Generated`**

from enum Scailo.GOODS_DISPATCH_BILLING_STATUS

## Table of contents

### Enumeration Members

- [GOODS\_DISPATCH\_BILLING\_STATUS\_ANY\_UNSPECIFIED](GOODS_DISPATCH_BILLING_STATUS.md#goods_dispatch_billing_status_any_unspecified)
- [GOODS\_DISPATCH\_BILLING\_STATUS\_BILLED](GOODS_DISPATCH_BILLING_STATUS.md#goods_dispatch_billing_status_billed)
- [GOODS\_DISPATCH\_BILLING\_STATUS\_UNBILLED](GOODS_DISPATCH_BILLING_STATUS.md#goods_dispatch_billing_status_unbilled)

## Enumeration Members

### GOODS\_DISPATCH\_BILLING\_STATUS\_ANY\_UNSPECIFIED

• **GOODS\_DISPATCH\_BILLING\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Default behavior, ignoring the billing status criteria. Utilized primarily within search and filtering payloads to return all logistical records regardless of their financial conversion state.

**`Generated`**

from enum value: GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L272)

___

### GOODS\_DISPATCH\_BILLING\_STATUS\_BILLED

• **GOODS\_DISPATCH\_BILLING\_STATUS\_BILLED** = ``1``

**`Description`**

Indicates that the goods dispatch has been formally billed. A finalized, legally binding Sales Invoice has been successfully generated to request payment for these exact physically shipped quantities.

**`Generated`**

from enum value: GOODS_DISPATCH_BILLING_STATUS_BILLED = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L279)

___

### GOODS\_DISPATCH\_BILLING\_STATUS\_UNBILLED

• **GOODS\_DISPATCH\_BILLING\_STATUS\_UNBILLED** = ``2``

**`Description`**

Indicates that the goods dispatch remains unbilled. The physical fulfillment has been recorded, but a formal Sales Invoice has not yet been generated, meaning the revenue for this shipment is pending.

**`Generated`**

from enum value: GOODS_DISPATCH_BILLING_STATUS_UNBILLED = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L286)
