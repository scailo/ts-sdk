[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceContactCreateRequest

# Class: OutwardJobsServiceContactCreateRequest

Describes the parameters necessary to create a outward job contact

**`Generated`**

from message Scailo.OutwardJobsServiceContactCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)\>

  ↳ **`OutwardJobsServiceContactCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceContactCreateRequest.md#constructor)

### Properties

- [associateId](OutwardJobsServiceContactCreateRequest.md#associateid)
- [outwardJobId](OutwardJobsServiceContactCreateRequest.md#outwardjobid)
- [userComment](OutwardJobsServiceContactCreateRequest.md#usercomment)
- [fields](OutwardJobsServiceContactCreateRequest.md#fields)
- [runtime](OutwardJobsServiceContactCreateRequest.md#runtime)
- [typeName](OutwardJobsServiceContactCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceContactCreateRequest.md#clone)
- [equals](OutwardJobsServiceContactCreateRequest.md#equals)
- [fromBinary](OutwardJobsServiceContactCreateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceContactCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceContactCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceContactCreateRequest.md#gettype)
- [toBinary](OutwardJobsServiceContactCreateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceContactCreateRequest.md#tojson)
- [toJson](OutwardJobsServiceContactCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceContactCreateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceContactCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceContactCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceContactCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceContactCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceContactCreateRequest**(`data?`): [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)\> |

#### Returns

[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceContactCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:3170

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:3168

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:3161

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:3154

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:3177

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:3175

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceContactCreateRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:3176

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:3195

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3183

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3187

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceContactCreateRequest`](OutwardJobsServiceContactCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3191
