[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceMultipleOutwardItemsCreateRequest

# Class: OutwardJobsServiceMultipleOutwardItemsCreateRequest

Describes the parameters required to add multiple items to a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceMultipleOutwardItemsCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)\>

  ↳ **`OutwardJobsServiceMultipleOutwardItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#constructor)

### Properties

- [list](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#list)
- [outwardJobId](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#outwardjobid)
- [userComment](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#usercomment)
- [fields](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#fields)
- [runtime](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#runtime)
- [typeName](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#clone)
- [equals](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#equals)
- [fromBinary](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#gettype)
- [toBinary](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#tojson)
- [toJson](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceMultipleOutwardItemsCreateRequest**(`data?`): [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceMultipleOutwardItemsCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:2450

## Properties

### list

• **list**: [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.OutwardJobsServiceMultipleOutwardItemsSingleton list = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:2448

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:2441

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:2434

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:2457

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:2455

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceMultipleOutwardItemsCreateRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:2456

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:2475

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2463

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2467

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsCreateRequest`](OutwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2471
