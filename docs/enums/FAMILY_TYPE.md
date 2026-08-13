[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FAMILY\_TYPE

# Enumeration: FAMILY\_TYPE

Defines the core classification categories for a family within the catalog.
These types dictate the operational lifecycle, permitted transactions (e.g., buy, sell, manufacture),
and the general purpose of the associated items.

**`Generated`**

from enum Scailo.FAMILY_TYPE

## Table of contents

### Enumeration Members

- [FAMILY\_TYPE\_ANY\_UNSPECIFIED](FAMILY_TYPE.md#family_type_any_unspecified)
- [FAMILY\_TYPE\_COMPONENT](FAMILY_TYPE.md#family_type_component)
- [FAMILY\_TYPE\_EQUIPMENT](FAMILY_TYPE.md#family_type_equipment)
- [FAMILY\_TYPE\_FEEDSTOCK](FAMILY_TYPE.md#family_type_feedstock)
- [FAMILY\_TYPE\_INFRASTRUCTURE](FAMILY_TYPE.md#family_type_infrastructure)
- [FAMILY\_TYPE\_MERCHANDISE](FAMILY_TYPE.md#family_type_merchandise)
- [FAMILY\_TYPE\_PRODUCT](FAMILY_TYPE.md#family_type_product)
- [FAMILY\_TYPE\_SERVICE](FAMILY_TYPE.md#family_type_service)

## Enumeration Members

### FAMILY\_TYPE\_ANY\_UNSPECIFIED

• **FAMILY\_TYPE\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the family type filter should be disregarded. Used exclusively within search/filter APIs to bypass type restrictions.

**`Generated`**

from enum value: FAMILY_TYPE_ANY_UNSPECIFIED = 0;

#### Defined in

[src/families.scailo_pb.ts:25](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L25)

___

### FAMILY\_TYPE\_COMPONENT

• **FAMILY\_TYPE\_COMPONENT** = ``1``

**`Description`**

Denotes a component. This is a general-purpose family of items that can be dynamically sold, bought, and manufactured.

**`Generated`**

from enum value: FAMILY_TYPE_COMPONENT = 1;

#### Defined in

[src/families.scailo_pb.ts:32](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L32)

___

### FAMILY\_TYPE\_EQUIPMENT

• **FAMILY\_TYPE\_EQUIPMENT** = ``2``

**`Description`**

Denotes equipment. Represents a capital expenditure (CapEx) item utilized within the manufacturing process (e.g., machinery, assembly tools).

**`Generated`**

from enum value: FAMILY_TYPE_EQUIPMENT = 2;

#### Defined in

[src/families.scailo_pb.ts:39](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L39)

___

### FAMILY\_TYPE\_FEEDSTOCK

• **FAMILY\_TYPE\_FEEDSTOCK** = ``3``

**`Description`**

Denotes feedstock. Represents raw materials that will be consumed and transformed during the manufacturing process.

**`Generated`**

from enum value: FAMILY_TYPE_FEEDSTOCK = 3;

#### Defined in

[src/families.scailo_pb.ts:46](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L46)

___

### FAMILY\_TYPE\_INFRASTRUCTURE

• **FAMILY\_TYPE\_INFRASTRUCTURE** = ``4``

**`Description`**

Denotes infrastructure. Represents non-manufacturing items utilized for general operational purposes (e.g., vehicles, computers, lighting/tubelights).

**`Generated`**

from enum value: FAMILY_TYPE_INFRASTRUCTURE = 4;

#### Defined in

[src/families.scailo_pb.ts:53](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L53)

___

### FAMILY\_TYPE\_MERCHANDISE

• **FAMILY\_TYPE\_MERCHANDISE** = ``5``

**`Description`**

Denotes merchandise. Represents goods that are strictly procured and resold without undergoing any internal value-addition processes.

**`Generated`**

from enum value: FAMILY_TYPE_MERCHANDISE = 5;

#### Defined in

[src/families.scailo_pb.ts:60](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L60)

___

### FAMILY\_TYPE\_PRODUCT

• **FAMILY\_TYPE\_PRODUCT** = ``6``

**`Description`**

Denotes a product. Represents the final, finished outcome of a manufacturing process. Products can only be sold, not directly purchased.

**`Generated`**

from enum value: FAMILY_TYPE_PRODUCT = 6;

#### Defined in

[src/families.scailo_pb.ts:67](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L67)

___

### FAMILY\_TYPE\_SERVICE

• **FAMILY\_TYPE\_SERVICE** = ``7``

**`Description`**

Denotes a service. Represents intangible offerings, labor, or digital services, completely excluding physical goods.

**`Generated`**

from enum value: FAMILY_TYPE_SERVICE = 7;

#### Defined in

[src/families.scailo_pb.ts:74](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L74)
