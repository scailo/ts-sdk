[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceMultipleOutwardItemsCreateRequest

# Class: InwardJobsServiceMultipleOutwardItemsCreateRequest

Describes the parameters required to add multiple items to a inward job

**`Generated`**

from message Scailo.InwardJobsServiceMultipleOutwardItemsCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)\>

  ↳ **`InwardJobsServiceMultipleOutwardItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#constructor)

### Properties

- [inwardJobId](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#inwardjobid)
- [list](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#list)
- [userComment](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#usercomment)
- [fields](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#fields)
- [runtime](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#runtime)
- [typeName](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#clone)
- [equals](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#equals)
- [fromBinary](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#frombinary)
- [fromJson](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#gettype)
- [toBinary](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#tobinary)
- [toJSON](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#tojson)
- [toJson](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#tojsonstring)
- [equals](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceMultipleOutwardItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceMultipleOutwardItemsCreateRequest**(`data?`): [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceMultipleOutwardItemsCreateRequest\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2752

## Properties

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:2743

___

### list

• **list**: [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.InwardJobsServiceMultipleOutwardItemsSingleton list = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:2750

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:2736

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2759

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2757

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceMultipleOutwardItemsCreateRequest"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2758

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2777

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2765

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2769

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsCreateRequest`](InwardJobsServiceMultipleOutwardItemsCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2773
