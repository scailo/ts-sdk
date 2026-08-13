[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CONSUMPTION\_SEQUENCE

# Enumeration: CONSUMPTION\_SEQUENCE

Defines the inventory depletion strategy and consumption prioritization rules for stored items.
These sequences determine the exact order in which stock is utilized, fulfilled, or depleted based on temporal or lifecycle attributes.

**`Generated`**

from enum Scailo.CONSUMPTION_SEQUENCE

## Table of contents

### Enumeration Members

- [CONSUMPTION\_SEQUENCE\_ANY\_UNSPECIFIED](CONSUMPTION_SEQUENCE.md#consumption_sequence_any_unspecified)
- [CONSUMPTION\_SEQUENCE\_FIFO\_INTAKE](CONSUMPTION_SEQUENCE.md#consumption_sequence_fifo_intake)
- [CONSUMPTION\_SEQUENCE\_FIFO\_SHELF\_LIFE](CONSUMPTION_SEQUENCE.md#consumption_sequence_fifo_shelf_life)
- [CONSUMPTION\_SEQUENCE\_FIFO\_WARRANTY](CONSUMPTION_SEQUENCE.md#consumption_sequence_fifo_warranty)
- [CONSUMPTION\_SEQUENCE\_LIFO\_INTAKE](CONSUMPTION_SEQUENCE.md#consumption_sequence_lifo_intake)
- [CONSUMPTION\_SEQUENCE\_LIFO\_SHELF\_LIFE](CONSUMPTION_SEQUENCE.md#consumption_sequence_lifo_shelf_life)
- [CONSUMPTION\_SEQUENCE\_LIFO\_WARRANTY](CONSUMPTION_SEQUENCE.md#consumption_sequence_lifo_warranty)

## Enumeration Members

### CONSUMPTION\_SEQUENCE\_ANY\_UNSPECIFIED

• **CONSUMPTION\_SEQUENCE\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the consumption sequence should be disregarded. Used exclusively within search/filter APIs to bypass sequencing restrictions.

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED = 0;

#### Defined in

[src/families.scailo_pb.ts:101](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L101)

___

### CONSUMPTION\_SEQUENCE\_FIFO\_INTAKE

• **CONSUMPTION\_SEQUENCE\_FIFO\_INTAKE** = ``1``

**`Description`**

Denotes a First-In-First-Out (FIFO) prioritization strictly based on the physical intake or receiving timestamp.

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_FIFO_INTAKE = 1;

#### Defined in

[src/families.scailo_pb.ts:108](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L108)

___

### CONSUMPTION\_SEQUENCE\_FIFO\_SHELF\_LIFE

• **CONSUMPTION\_SEQUENCE\_FIFO\_SHELF\_LIFE** = ``2``

**`Description`**

Denotes a First-In-First-Out (FIFO) prioritization based on the expiration or shelf-life timeline (earliest to expire is consumed first).

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_FIFO_SHELF_LIFE = 2;

#### Defined in

[src/families.scailo_pb.ts:115](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L115)

___

### CONSUMPTION\_SEQUENCE\_FIFO\_WARRANTY

• **CONSUMPTION\_SEQUENCE\_FIFO\_WARRANTY** = ``3``

**`Description`**

Denotes a First-In-First-Out (FIFO) prioritization based on the warranty expiration timeline (earliest warranty end is consumed first).

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_FIFO_WARRANTY = 3;

#### Defined in

[src/families.scailo_pb.ts:122](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L122)

___

### CONSUMPTION\_SEQUENCE\_LIFO\_INTAKE

• **CONSUMPTION\_SEQUENCE\_LIFO\_INTAKE** = ``4``

**`Description`**

Denotes a Last-In-First-Out (LIFO) prioritization strictly based on the physical intake or receiving timestamp (newest arrivals consumed first).

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_LIFO_INTAKE = 4;

#### Defined in

[src/families.scailo_pb.ts:129](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L129)

___

### CONSUMPTION\_SEQUENCE\_LIFO\_SHELF\_LIFE

• **CONSUMPTION\_SEQUENCE\_LIFO\_SHELF\_LIFE** = ``5``

**`Description`**

Denotes a Last-In-First-Out (LIFO) prioritization based on the expiration or shelf-life timeline (latest to expire is consumed first).

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_LIFO_SHELF_LIFE = 5;

#### Defined in

[src/families.scailo_pb.ts:136](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L136)

___

### CONSUMPTION\_SEQUENCE\_LIFO\_WARRANTY

• **CONSUMPTION\_SEQUENCE\_LIFO\_WARRANTY** = ``6``

**`Description`**

Denotes a Last-In-First-Out (LIFO) prioritization based on the warranty expiration timeline (latest warranty end is consumed first).

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_LIFO_WARRANTY = 6;

#### Defined in

[src/families.scailo_pb.ts:143](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L143)
