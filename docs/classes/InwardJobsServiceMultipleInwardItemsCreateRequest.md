[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceMultipleInwardItemsCreateRequest

# Class: InwardJobsServiceMultipleInwardItemsCreateRequest

Describes the parameters required to add multiple items to a inward job

**`Generated`**

from message Scailo.InwardJobsServiceMultipleInwardItemsCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)\>

  ↳ **`InwardJobsServiceMultipleInwardItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceMultipleInwardItemsCreateRequest.md#constructor)

### Properties

- [inwardJobId](InwardJobsServiceMultipleInwardItemsCreateRequest.md#inwardjobid)
- [list](InwardJobsServiceMultipleInwardItemsCreateRequest.md#list)
- [userComment](InwardJobsServiceMultipleInwardItemsCreateRequest.md#usercomment)
- [fields](InwardJobsServiceMultipleInwardItemsCreateRequest.md#fields)
- [runtime](InwardJobsServiceMultipleInwardItemsCreateRequest.md#runtime)
- [typeName](InwardJobsServiceMultipleInwardItemsCreateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceMultipleInwardItemsCreateRequest.md#clone)
- [equals](InwardJobsServiceMultipleInwardItemsCreateRequest.md#equals)
- [fromBinary](InwardJobsServiceMultipleInwardItemsCreateRequest.md#frombinary)
- [fromJson](InwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceMultipleInwardItemsCreateRequest.md#gettype)
- [toBinary](InwardJobsServiceMultipleInwardItemsCreateRequest.md#tobinary)
- [toJSON](InwardJobsServiceMultipleInwardItemsCreateRequest.md#tojson)
- [toJson](InwardJobsServiceMultipleInwardItemsCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceMultipleInwardItemsCreateRequest.md#tojsonstring)
- [equals](InwardJobsServiceMultipleInwardItemsCreateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceMultipleInwardItemsCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceMultipleInwardItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceMultipleInwardItemsCreateRequest**(`data?`): [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceMultipleInwardItemsCreateRequest\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:1034

## Properties

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:1025

___

### list

• **list**: [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.InwardJobsServiceMultipleInwardItemsSingleton list = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:1032

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:1018

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:1041

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:1039

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceMultipleInwardItemsCreateRequest"``

#### Defined in

src/inward_jobs.scailo_pb.ts:1040

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:1059

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1047

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1051

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsCreateRequest`](InwardJobsServiceMultipleInwardItemsCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1055
