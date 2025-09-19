[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceInwardItemCreateRequest

# Class: OutwardJobsServiceInwardItemCreateRequest

Describes the parameters required to add an inward item to a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceInwardItemCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)\>

  ↳ **`OutwardJobsServiceInwardItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceInwardItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](OutwardJobsServiceInwardItemCreateRequest.md#deliverydate)
- [familyId](OutwardJobsServiceInwardItemCreateRequest.md#familyid)
- [internalQuantity](OutwardJobsServiceInwardItemCreateRequest.md#internalquantity)
- [outwardJobId](OutwardJobsServiceInwardItemCreateRequest.md#outwardjobid)
- [specifications](OutwardJobsServiceInwardItemCreateRequest.md#specifications)
- [userComment](OutwardJobsServiceInwardItemCreateRequest.md#usercomment)
- [fields](OutwardJobsServiceInwardItemCreateRequest.md#fields)
- [runtime](OutwardJobsServiceInwardItemCreateRequest.md#runtime)
- [typeName](OutwardJobsServiceInwardItemCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceInwardItemCreateRequest.md#clone)
- [equals](OutwardJobsServiceInwardItemCreateRequest.md#equals)
- [fromBinary](OutwardJobsServiceInwardItemCreateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceInwardItemCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceInwardItemCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceInwardItemCreateRequest.md#gettype)
- [toBinary](OutwardJobsServiceInwardItemCreateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceInwardItemCreateRequest.md#tojson)
- [toJson](OutwardJobsServiceInwardItemCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceInwardItemCreateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceInwardItemCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceInwardItemCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceInwardItemCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceInwardItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceInwardItemCreateRequest**(`data?`): [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)\> |

#### Returns

[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceInwardItemCreateRequest\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L837)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/outward_jobs.scailo_pb.ts:828](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L828)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/outward_jobs.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L814)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/outward_jobs.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L821)

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L807)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/outward_jobs.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L835)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L800)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L844)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L842)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceInwardItemCreateRequest"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L843)

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L865)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L853)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L857)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceInwardItemCreateRequest`](OutwardJobsServiceInwardItemCreateRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L861)
