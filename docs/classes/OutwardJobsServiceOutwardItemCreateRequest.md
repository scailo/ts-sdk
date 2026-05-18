[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceOutwardItemCreateRequest

# Class: OutwardJobsServiceOutwardItemCreateRequest

Describes the parameters required to add an outward item to a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceOutwardItemCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)\>

  ↳ **`OutwardJobsServiceOutwardItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceOutwardItemCreateRequest.md#constructor)

### Properties

- [familyId](OutwardJobsServiceOutwardItemCreateRequest.md#familyid)
- [internalQuantity](OutwardJobsServiceOutwardItemCreateRequest.md#internalquantity)
- [itemHash](OutwardJobsServiceOutwardItemCreateRequest.md#itemhash)
- [outwardJobId](OutwardJobsServiceOutwardItemCreateRequest.md#outwardjobid)
- [specifications](OutwardJobsServiceOutwardItemCreateRequest.md#specifications)
- [userComment](OutwardJobsServiceOutwardItemCreateRequest.md#usercomment)
- [fields](OutwardJobsServiceOutwardItemCreateRequest.md#fields)
- [runtime](OutwardJobsServiceOutwardItemCreateRequest.md#runtime)
- [typeName](OutwardJobsServiceOutwardItemCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceOutwardItemCreateRequest.md#clone)
- [equals](OutwardJobsServiceOutwardItemCreateRequest.md#equals)
- [fromBinary](OutwardJobsServiceOutwardItemCreateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceOutwardItemCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceOutwardItemCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceOutwardItemCreateRequest.md#gettype)
- [toBinary](OutwardJobsServiceOutwardItemCreateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceOutwardItemCreateRequest.md#tojson)
- [toJson](OutwardJobsServiceOutwardItemCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceOutwardItemCreateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceOutwardItemCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceOutwardItemCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceOutwardItemCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceOutwardItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceOutwardItemCreateRequest**(`data?`): [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)\> |

#### Returns

[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceOutwardItemCreateRequest\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:2937](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2937)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2914](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2914)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2928](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2928)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the optional item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2921](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2921)

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2907](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2907)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2935](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2935)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2900](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2900)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2944](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2944)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2942](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2942)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceOutwardItemCreateRequest"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:2943](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2943)

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2965](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2965)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2953](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2953)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2957](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2957)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceOutwardItemCreateRequest`](OutwardJobsServiceOutwardItemCreateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2961](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs.scailo_pb.ts#L2961)
