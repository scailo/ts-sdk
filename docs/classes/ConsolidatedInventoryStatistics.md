[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ConsolidatedInventoryStatistics

# Class: ConsolidatedInventoryStatistics

Describes the message consisting of all the inventory statistics for the given family ID

**`Generated`**

from message Scailo.ConsolidatedInventoryStatistics

## Hierarchy

- `Message`\<[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)\>

  ↳ **`ConsolidatedInventoryStatistics`**

## Table of contents

### Constructors

- [constructor](ConsolidatedInventoryStatistics.md#constructor)

### Properties

- [baseDemandCount](ConsolidatedInventoryStatistics.md#basedemandcount)
- [familyId](ConsolidatedInventoryStatistics.md#familyid)
- [indentedCount](ConsolidatedInventoryStatistics.md#indentedcount)
- [orderedCount](ConsolidatedInventoryStatistics.md#orderedcount)
- [qcCount](ConsolidatedInventoryStatistics.md#qccount)
- [rejectedCount](ConsolidatedInventoryStatistics.md#rejectedcount)
- [requiredCount](ConsolidatedInventoryStatistics.md#requiredcount)
- [returnableCount](ConsolidatedInventoryStatistics.md#returnablecount)
- [reworkCount](ConsolidatedInventoryStatistics.md#reworkcount)
- [scrapCount](ConsolidatedInventoryStatistics.md#scrapcount)
- [storeCount](ConsolidatedInventoryStatistics.md#storecount)
- [workInProgressCount](ConsolidatedInventoryStatistics.md#workinprogresscount)
- [fields](ConsolidatedInventoryStatistics.md#fields)
- [runtime](ConsolidatedInventoryStatistics.md#runtime)
- [typeName](ConsolidatedInventoryStatistics.md#typename)

### Methods

- [clone](ConsolidatedInventoryStatistics.md#clone)
- [equals](ConsolidatedInventoryStatistics.md#equals)
- [fromBinary](ConsolidatedInventoryStatistics.md#frombinary)
- [fromJson](ConsolidatedInventoryStatistics.md#fromjson)
- [fromJsonString](ConsolidatedInventoryStatistics.md#fromjsonstring)
- [getType](ConsolidatedInventoryStatistics.md#gettype)
- [toBinary](ConsolidatedInventoryStatistics.md#tobinary)
- [toJSON](ConsolidatedInventoryStatistics.md#tojson)
- [toJson](ConsolidatedInventoryStatistics.md#tojson-1)
- [toJsonString](ConsolidatedInventoryStatistics.md#tojsonstring)
- [equals](ConsolidatedInventoryStatistics.md#equals-1)
- [fromBinary](ConsolidatedInventoryStatistics.md#frombinary-1)
- [fromJson](ConsolidatedInventoryStatistics.md#fromjson-1)
- [fromJsonString](ConsolidatedInventoryStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ConsolidatedInventoryStatistics**(`data?`): [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)\> |

#### Returns

[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Overrides

Message\&lt;ConsolidatedInventoryStatistics\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1287

## Properties

### baseDemandCount

• **baseDemandCount**: `bigint` = `protoInt64.zero`

The base demand quantity

**`Generated`**

from field: int64 base_demand_count = 10;

#### Defined in

src/inventory.scailo_pb.ts:1215

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/inventory.scailo_pb.ts:1208

___

### indentedCount

• **indentedCount**: `bigint` = `protoInt64.zero`

The indented quantity

**`Generated`**

from field: int64 indented_count = 30;

#### Defined in

src/inventory.scailo_pb.ts:1229

___

### orderedCount

• **orderedCount**: `bigint` = `protoInt64.zero`

The ordered quantity

**`Generated`**

from field: int64 ordered_count = 40;

#### Defined in

src/inventory.scailo_pb.ts:1236

___

### qcCount

• **qcCount**: `bigint` = `protoInt64.zero`

The quantity in QC

**`Generated`**

from field: int64 qc_count = 100;

#### Defined in

src/inventory.scailo_pb.ts:1243

___

### rejectedCount

• **rejectedCount**: `bigint` = `protoInt64.zero`

The quantity that has been rejected

**`Generated`**

from field: int64 rejected_count = 110;

#### Defined in

src/inventory.scailo_pb.ts:1250

___

### requiredCount

• **requiredCount**: `bigint` = `protoInt64.zero`

The quantity that is required

**`Generated`**

from field: int64 required_count = 200;

#### Defined in

src/inventory.scailo_pb.ts:1285

___

### returnableCount

• **returnableCount**: `bigint` = `protoInt64.zero`

The quantity that has been marked for return

**`Generated`**

from field: int64 returnable_count = 120;

#### Defined in

src/inventory.scailo_pb.ts:1257

___

### reworkCount

• **reworkCount**: `bigint` = `protoInt64.zero`

The quantity in rework

**`Generated`**

from field: int64 rework_count = 130;

#### Defined in

src/inventory.scailo_pb.ts:1264

___

### scrapCount

• **scrapCount**: `bigint` = `protoInt64.zero`

The quantity that has been scrapped

**`Generated`**

from field: int64 scrap_count = 140;

#### Defined in

src/inventory.scailo_pb.ts:1271

___

### storeCount

• **storeCount**: `bigint` = `protoInt64.zero`

The quantity in store

**`Generated`**

from field: int64 store_count = 150;

#### Defined in

src/inventory.scailo_pb.ts:1278

___

### workInProgressCount

• **workInProgressCount**: `bigint` = `protoInt64.zero`

The work in progress quantity

**`Generated`**

from field: int64 work_in_progress_count = 20;

#### Defined in

src/inventory.scailo_pb.ts:1222

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1294

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1292

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ConsolidatedInventoryStatistics"``

#### Defined in

src/inventory.scailo_pb.ts:1293

## Methods

### clone

▸ **clone**(): [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

Create a deep copy.

#### Returns

[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md) \| `PlainMessage`\<[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)\>

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
| `a` | `undefined` \| [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md) \| `PlainMessage`\<[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)\> |
| `b` | `undefined` \| [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md) \| `PlainMessage`\<[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1321

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Defined in

src/inventory.scailo_pb.ts:1309

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Defined in

src/inventory.scailo_pb.ts:1313

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ConsolidatedInventoryStatistics`](ConsolidatedInventoryStatistics.md)

#### Defined in

src/inventory.scailo_pb.ts:1317
