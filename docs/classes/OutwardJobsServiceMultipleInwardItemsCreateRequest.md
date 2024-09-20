[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceMultipleInwardItemsCreateRequest

# Class: OutwardJobsServiceMultipleInwardItemsCreateRequest

Describes the parameters required to add multiple items to a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceMultipleInwardItemsCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)\>

  ↳ **`OutwardJobsServiceMultipleInwardItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#constructor)

### Properties

- [list](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#list)
- [outwardJobId](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#outwardjobid)
- [userComment](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#usercomment)
- [fields](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#fields)
- [runtime](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#runtime)
- [typeName](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#clone)
- [equals](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#equals)
- [fromBinary](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#gettype)
- [toBinary](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#tojson)
- [toJson](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceMultipleInwardItemsCreateRequest**(`data?`): [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceMultipleInwardItemsCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:964

## Properties

### list

• **list**: [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.OutwardJobsServiceMultipleInwardItemsSingleton list = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:962

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:955

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:948

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:971

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:969

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceMultipleInwardItemsCreateRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:970

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:989

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:977

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:981

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsCreateRequest`](OutwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:985
