[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobInwardItemHistoryRequest

# Class: OutwardJobInwardItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.OutwardJobInwardItemHistoryRequest

## Hierarchy

- `Message`\<[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)\>

  ↳ **`OutwardJobInwardItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobInwardItemHistoryRequest.md#constructor)

### Properties

- [familyId](OutwardJobInwardItemHistoryRequest.md#familyid)
- [outwardJobId](OutwardJobInwardItemHistoryRequest.md#outwardjobid)
- [fields](OutwardJobInwardItemHistoryRequest.md#fields)
- [runtime](OutwardJobInwardItemHistoryRequest.md#runtime)
- [typeName](OutwardJobInwardItemHistoryRequest.md#typename)

### Methods

- [clone](OutwardJobInwardItemHistoryRequest.md#clone)
- [equals](OutwardJobInwardItemHistoryRequest.md#equals)
- [fromBinary](OutwardJobInwardItemHistoryRequest.md#frombinary)
- [fromJson](OutwardJobInwardItemHistoryRequest.md#fromjson)
- [fromJsonString](OutwardJobInwardItemHistoryRequest.md#fromjsonstring)
- [getType](OutwardJobInwardItemHistoryRequest.md#gettype)
- [toBinary](OutwardJobInwardItemHistoryRequest.md#tobinary)
- [toJSON](OutwardJobInwardItemHistoryRequest.md#tojson)
- [toJson](OutwardJobInwardItemHistoryRequest.md#tojson-1)
- [toJsonString](OutwardJobInwardItemHistoryRequest.md#tojsonstring)
- [equals](OutwardJobInwardItemHistoryRequest.md#equals-1)
- [fromBinary](OutwardJobInwardItemHistoryRequest.md#frombinary-1)
- [fromJson](OutwardJobInwardItemHistoryRequest.md#fromjson-1)
- [fromJsonString](OutwardJobInwardItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobInwardItemHistoryRequest**(`data?`): [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)\> |

#### Returns

[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Overrides

Message\&lt;OutwardJobInwardItemHistoryRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:1237

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:1235

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:1228

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:1244

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:1242

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobInwardItemHistoryRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:1243

## Methods

### clone

▸ **clone**(): [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:1261

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1249

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1253

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItemHistoryRequest`](OutwardJobInwardItemHistoryRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1257
