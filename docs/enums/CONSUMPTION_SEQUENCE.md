[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CONSUMPTION\_SEQUENCE

# Enumeration: CONSUMPTION\_SEQUENCE

Stores the available consumption sequences

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

Denotes any consumption sequence (only used for filter and search queries, when consumption sequence needs to be disregarded)

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED = 0;

#### Defined in

src/families.scailo_pb.ts:98

___

### CONSUMPTION\_SEQUENCE\_FIFO\_INTAKE

• **CONSUMPTION\_SEQUENCE\_FIFO\_INTAKE** = ``1``

Denotes first-in-first-out according to the intake timestamp

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_FIFO_INTAKE = 1;

#### Defined in

src/families.scailo_pb.ts:105

___

### CONSUMPTION\_SEQUENCE\_FIFO\_SHELF\_LIFE

• **CONSUMPTION\_SEQUENCE\_FIFO\_SHELF\_LIFE** = ``2``

Denotes first-in-first-out according to the shelf life

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_FIFO_SHELF_LIFE = 2;

#### Defined in

src/families.scailo_pb.ts:112

___

### CONSUMPTION\_SEQUENCE\_FIFO\_WARRANTY

• **CONSUMPTION\_SEQUENCE\_FIFO\_WARRANTY** = ``3``

Denotes first-in-first-out according to the warranty

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_FIFO_WARRANTY = 3;

#### Defined in

src/families.scailo_pb.ts:119

___

### CONSUMPTION\_SEQUENCE\_LIFO\_INTAKE

• **CONSUMPTION\_SEQUENCE\_LIFO\_INTAKE** = ``4``

Denotes last-in-first-out according to the intake timestamp

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_LIFO_INTAKE = 4;

#### Defined in

src/families.scailo_pb.ts:126

___

### CONSUMPTION\_SEQUENCE\_LIFO\_SHELF\_LIFE

• **CONSUMPTION\_SEQUENCE\_LIFO\_SHELF\_LIFE** = ``5``

Denotes last-in-first-out according to the shelf life

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_LIFO_SHELF_LIFE = 5;

#### Defined in

src/families.scailo_pb.ts:133

___

### CONSUMPTION\_SEQUENCE\_LIFO\_WARRANTY

• **CONSUMPTION\_SEQUENCE\_LIFO\_WARRANTY** = ``6``

Denotes last-in-first-out according to the warranty

**`Generated`**

from enum value: CONSUMPTION_SEQUENCE_LIFO_WARRANTY = 6;

#### Defined in

src/families.scailo_pb.ts:140
