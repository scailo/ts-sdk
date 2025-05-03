[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobInwardInventoryMatch

# Class: InwardJobInwardInventoryMatch

Describes the parameters that are part of an inward job's inward inventory match

**`Generated`**

from message Scailo.InwardJobInwardInventoryMatch

## Hierarchy

- `Message`\<[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)\>

  ↳ **`InwardJobInwardInventoryMatch`**

## Table of contents

### Constructors

- [constructor](InwardJobInwardInventoryMatch.md#constructor)

### Properties

- [familyId](InwardJobInwardInventoryMatch.md#familyid)
- [jobQtyPrimary](InwardJobInwardInventoryMatch.md#jobqtyprimary)
- [receivedQtyPrimary](InwardJobInwardInventoryMatch.md#receivedqtyprimary)
- [returnedQtyPrimary](InwardJobInwardInventoryMatch.md#returnedqtyprimary)
- [fields](InwardJobInwardInventoryMatch.md#fields)
- [runtime](InwardJobInwardInventoryMatch.md#runtime)
- [typeName](InwardJobInwardInventoryMatch.md#typename)

### Methods

- [clone](InwardJobInwardInventoryMatch.md#clone)
- [equals](InwardJobInwardInventoryMatch.md#equals)
- [fromBinary](InwardJobInwardInventoryMatch.md#frombinary)
- [fromJson](InwardJobInwardInventoryMatch.md#fromjson)
- [fromJsonString](InwardJobInwardInventoryMatch.md#fromjsonstring)
- [getType](InwardJobInwardInventoryMatch.md#gettype)
- [toBinary](InwardJobInwardInventoryMatch.md#tobinary)
- [toJSON](InwardJobInwardInventoryMatch.md#tojson)
- [toJson](InwardJobInwardInventoryMatch.md#tojson-1)
- [toJsonString](InwardJobInwardInventoryMatch.md#tojsonstring)
- [equals](InwardJobInwardInventoryMatch.md#equals-1)
- [fromBinary](InwardJobInwardInventoryMatch.md#frombinary-1)
- [fromJson](InwardJobInwardInventoryMatch.md#fromjson-1)
- [fromJsonString](InwardJobInwardInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobInwardInventoryMatch**(`data?`): [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)\> |

#### Returns

[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Overrides

Message\&lt;InwardJobInwardInventoryMatch\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:3641

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:3618

___

### jobQtyPrimary

• **jobQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the job quantity

**`Generated`**

from field: uint64 job_qty_primary = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:3625

___

### receivedQtyPrimary

• **receivedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the received quantity

**`Generated`**

from field: uint64 received_qty_primary = 20;

#### Defined in

src/inward_jobs.scailo_pb.ts:3632

___

### returnedQtyPrimary

• **returnedQtyPrimary**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned_qty_primary = 30;

#### Defined in

src/inward_jobs.scailo_pb.ts:3639

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:3648

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:3646

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobInwardInventoryMatch"``

#### Defined in

src/inward_jobs.scailo_pb.ts:3647

## Methods

### clone

▸ **clone**(): [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

Create a deep copy.

#### Returns

[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md) \| `PlainMessage`\<[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)\>

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
| `a` | `undefined` \| [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md) \| `PlainMessage`\<[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)\> |
| `b` | `undefined` \| [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md) \| `PlainMessage`\<[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:3667

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3655

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3659

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardInventoryMatch`](InwardJobInwardInventoryMatch.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3663
