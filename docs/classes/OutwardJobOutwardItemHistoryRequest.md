[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobOutwardItemHistoryRequest

# Class: OutwardJobOutwardItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.OutwardJobOutwardItemHistoryRequest

## Hierarchy

- `Message`\<[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)\>

  ↳ **`OutwardJobOutwardItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobOutwardItemHistoryRequest.md#constructor)

### Properties

- [familyId](OutwardJobOutwardItemHistoryRequest.md#familyid)
- [outwardJobId](OutwardJobOutwardItemHistoryRequest.md#outwardjobid)
- [fields](OutwardJobOutwardItemHistoryRequest.md#fields)
- [runtime](OutwardJobOutwardItemHistoryRequest.md#runtime)
- [typeName](OutwardJobOutwardItemHistoryRequest.md#typename)

### Methods

- [clone](OutwardJobOutwardItemHistoryRequest.md#clone)
- [equals](OutwardJobOutwardItemHistoryRequest.md#equals)
- [fromBinary](OutwardJobOutwardItemHistoryRequest.md#frombinary)
- [fromJson](OutwardJobOutwardItemHistoryRequest.md#fromjson)
- [fromJsonString](OutwardJobOutwardItemHistoryRequest.md#fromjsonstring)
- [getType](OutwardJobOutwardItemHistoryRequest.md#gettype)
- [toBinary](OutwardJobOutwardItemHistoryRequest.md#tobinary)
- [toJSON](OutwardJobOutwardItemHistoryRequest.md#tojson)
- [toJson](OutwardJobOutwardItemHistoryRequest.md#tojson-1)
- [toJsonString](OutwardJobOutwardItemHistoryRequest.md#tojsonstring)
- [equals](OutwardJobOutwardItemHistoryRequest.md#equals-1)
- [fromBinary](OutwardJobOutwardItemHistoryRequest.md#frombinary-1)
- [fromJson](OutwardJobOutwardItemHistoryRequest.md#fromjson-1)
- [fromJsonString](OutwardJobOutwardItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobOutwardItemHistoryRequest**(`data?`): [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)\> |

#### Returns

[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Overrides

Message\&lt;OutwardJobOutwardItemHistoryRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:2731

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:2729

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:2722

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:2738

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:2736

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobOutwardItemHistoryRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:2737

## Methods

### clone

▸ **clone**(): [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:2755

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2743

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2747

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemHistoryRequest`](OutwardJobOutwardItemHistoryRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2751
