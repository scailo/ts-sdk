[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FAMILY\_TYPE

# Enumeration: FAMILY\_TYPE

Stores the available family types

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

Denotes any family type (only used for filter and search queries, when family type needs to be disregarded)

**`Generated`**

from enum value: FAMILY_TYPE_ANY_UNSPECIFIED = 0;

#### Defined in

src/families.scailo_pb.ts:23

___

### FAMILY\_TYPE\_COMPONENT

• **FAMILY\_TYPE\_COMPONENT** = ``1``

Denotes a component (a family that can be sold, bought, and manufactured - this is a general purpose family)

**`Generated`**

from enum value: FAMILY_TYPE_COMPONENT = 1;

#### Defined in

src/families.scailo_pb.ts:30

___

### FAMILY\_TYPE\_EQUIPMENT

• **FAMILY\_TYPE\_EQUIPMENT** = ``2``

Denotes equipment (a family that can be used within manufacturing process as a capex item, such as machines)

**`Generated`**

from enum value: FAMILY_TYPE_EQUIPMENT = 2;

#### Defined in

src/families.scailo_pb.ts:37

___

### FAMILY\_TYPE\_FEEDSTOCK

• **FAMILY\_TYPE\_FEEDSTOCK** = ``3``

Denotes feedstock (a family that will be used as raw material within manufacturing process, and will be consumed)

**`Generated`**

from enum value: FAMILY_TYPE_FEEDSTOCK = 3;

#### Defined in

src/families.scailo_pb.ts:44

___

### FAMILY\_TYPE\_INFRASTRUCTURE

• **FAMILY\_TYPE\_INFRASTRUCTURE** = ``4``

Denotes infrastructure (a family that can be used for any non-manufacturing purpose. Examples include cars, rtubelights, computers, etc.)

**`Generated`**

from enum value: FAMILY_TYPE_INFRASTRUCTURE = 4;

#### Defined in

src/families.scailo_pb.ts:51

___

### FAMILY\_TYPE\_MERCHANDISE

• **FAMILY\_TYPE\_MERCHANDISE** = ``5``

Denotes merchandise (a family that can only be bought and sold, and will not be a part of any value addition processes)

**`Generated`**

from enum value: FAMILY_TYPE_MERCHANDISE = 5;

#### Defined in

src/families.scailo_pb.ts:58

___

### FAMILY\_TYPE\_PRODUCT

• **FAMILY\_TYPE\_PRODUCT** = ``6``

Denotes product (a family that is the final outcome of a manufacturing process. Can only be sold, but not purchased)

**`Generated`**

from enum value: FAMILY_TYPE_PRODUCT = 6;

#### Defined in

src/families.scailo_pb.ts:65

___

### FAMILY\_TYPE\_SERVICE

• **FAMILY\_TYPE\_SERVICE** = ``7``

Denotes service (a family that deals exclusively with services, and no goods)

**`Generated`**

from enum value: FAMILY_TYPE_SERVICE = 7;

#### Defined in

src/families.scailo_pb.ts:72
