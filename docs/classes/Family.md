[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Family

# Class: Family

Represents a full Family within the system.

**`Generated`**

from message Scailo.Family

## Hierarchy

- `Message`\<[`Family`](Family.md)\>

  ↳ **`Family`**

## Table of contents

### Constructors

- [constructor](Family.md#constructor)

### Properties

- [amendmentCount](Family.md#amendmentcount)
- [approvalMetadata](Family.md#approvalmetadata)
- [code](Family.md#code)
- [consumptionSequence](Family.md#consumptionsequence)
- [description](Family.md#description)
- [entityUuid](Family.md#entityuuid)
- [familyType](Family.md#familytype)
- [formData](Family.md#formdata)
- [hsnSacCode](Family.md#hsnsaccode)
- [isLeaf](Family.md#isleaf)
- [ledgerId](Family.md#ledgerid)
- [logs](Family.md#logs)
- [metadata](Family.md#metadata)
- [minStockToMaintain](Family.md#minstocktomaintain)
- [name](Family.md#name)
- [parentId](Family.md#parentid)
- [price](Family.md#price)
- [printName](Family.md#printname)
- [status](Family.md#status)
- [taxGroupId](Family.md#taxgroupid)
- [unitQuantity](Family.md#unitquantity)
- [uomId](Family.md#uomid)
- [vaultFolderId](Family.md#vaultfolderid)
- [fields](Family.md#fields)
- [runtime](Family.md#runtime)
- [typeName](Family.md#typename)

### Methods

- [clone](Family.md#clone)
- [equals](Family.md#equals)
- [fromBinary](Family.md#frombinary)
- [fromJson](Family.md#fromjson)
- [fromJsonString](Family.md#fromjsonstring)
- [getType](Family.md#gettype)
- [toBinary](Family.md#tobinary)
- [toJSON](Family.md#tojson)
- [toJson](Family.md#tojson-1)
- [toJsonString](Family.md#tojsonstring)
- [equals](Family.md#equals-1)
- [fromBinary](Family.md#frombinary-1)
- [fromJson](Family.md#fromjson-1)
- [fromJsonString](Family.md#fromjsonstring-1)

## Constructors

### constructor

• **new Family**(`data?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Family`](Family.md)\> |

#### Returns

[`Family`](Family.md)

#### Overrides

Message\&lt;Family\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1343)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

**`Description`**

The number of times that this record has been amended after approval.

**`Example`**

```ts
5
```

**`Generated`**

from field: uint64 amendment_count = 40;

#### Defined in

[src/families.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1333)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/families.scailo_pb.ts:1147](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1147)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique alphanumeric code used to internally classify and represent the family.

**`Example`**

```ts
"FAM-IND-FST-01"
```

**`Generated`**

from field: string code = 12;

#### Defined in

[src/families.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1203)

___

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

**`Description`**

The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).

**`Example`**

```ts
"CONSUMPTION_SEQUENCE_FIFO_INTAKE"
```

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 29;

#### Defined in

[src/families.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1323)

___

### description

• **description**: `string` = `""`

**`Description`**

A detailed text description outlining the characteristics, specifications, and purpose of the family.

**`Example`**

```ts
"Heavy duty industrial fasteners suitable for high-stress applications."
```

**`Generated`**

from field: string description = 14;

#### Defined in

[src/families.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1213)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/families.scailo_pb.ts:1131](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1131)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

**`Description`**

The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product).

**`Example`**

```ts
"FAMILY_TYPE_COMPONENT"
```

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 15;

#### Defined in

[src/families.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1223)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

[src/families.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1341)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

**`Description`**

The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.

**`Example`**

```ts
"73181500"
```

**`Generated`**

from field: string hsn_sac_code = 16;

#### Defined in

[src/families.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1233)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families).

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_leaf = 20;

#### Defined in

[src/families.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1273)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.

**`Example`**

```ts
452
```

**`Generated`**

from field: uint64 ledger_id = 21;

#### Defined in

[src/families.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1283)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/families.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1163)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/families.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1139)

___

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

**`Description`**

The minimum inventory threshold required to be maintained for items within this family, commonly used to trigger automated restock alerts.

**`Example`**

```ts
500
```

**`Generated`**

from field: uint64 min_stock_to_maintain = 27;

#### Defined in

[src/families.scailo_pb.ts:1313](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1313)

___

### name

• **name**: `string` = `""`

**`Description`**

The primary, human-readable name of the family.

**`Example`**

```ts
"Industrial Fasteners"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/families.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1183)

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 parent_id = 19;

#### Defined in

[src/families.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1263)

___

### price

• **price**: `bigint` = `protoInt64.zero`

**`Description`**

The default base unit price for items in this family, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1550
```

**`Generated`**

from field: uint64 price = 26;

#### Defined in

[src/families.scailo_pb.ts:1303](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1303)

___

### printName

• **printName**: `string` = `""`

**`Description`**

The designated name of the family utilized for external-facing documents, invoices, and printed reports.

**`Example`**

```ts
"Ind. Fasteners"
```

**`Generated`**

from field: string print_name = 11;

#### Defined in

[src/families.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1193)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/families.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1155)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the default tax group applied to items nested under this family.

**`Example`**

```ts
4
```

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

[src/families.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1293)

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The standard batch or unit quantity multiplier for items within this family, represented in base subunits.

**`Example`**

```ts
100
```

**`Generated`**

from field: uint64 unit_quantity = 18;

#### Defined in

[src/families.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1253)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the unit of material (UOM) used to measure items within this family.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 uom_id = 17;

#### Defined in

[src/families.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1243)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/families.scailo_pb.ts:1173](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1173)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1350)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1348)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Family"``

#### Defined in

[src/families.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1349)

## Methods

### clone

▸ **clone**(): [`Family`](Family.md)

Create a deep copy.

#### Returns

[`Family`](Family.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`Family`](Family.md) \| `PlainMessage`\<[`Family`](Family.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`Family`](Family.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Family`](Family.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`Family`](Family.md) \| `PlainMessage`\<[`Family`](Family.md)\> |
| `b` | `undefined` \| [`Family`](Family.md) \| `PlainMessage`\<[`Family`](Family.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:1388](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1388)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

[src/families.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1376)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

[src/families.scailo_pb.ts:1380](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1380)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

[src/families.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L1384)
