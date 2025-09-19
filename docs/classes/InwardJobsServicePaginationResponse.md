[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServicePaginationResponse

# Class: InwardJobsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.InwardJobsServicePaginationResponse

## Hierarchy

- `Message`\<[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)\>

  ↳ **`InwardJobsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](InwardJobsServicePaginationResponse.md#constructor)

### Properties

- [count](InwardJobsServicePaginationResponse.md#count)
- [offset](InwardJobsServicePaginationResponse.md#offset)
- [payload](InwardJobsServicePaginationResponse.md#payload)
- [total](InwardJobsServicePaginationResponse.md#total)
- [fields](InwardJobsServicePaginationResponse.md#fields)
- [runtime](InwardJobsServicePaginationResponse.md#runtime)
- [typeName](InwardJobsServicePaginationResponse.md#typename)

### Methods

- [clone](InwardJobsServicePaginationResponse.md#clone)
- [equals](InwardJobsServicePaginationResponse.md#equals)
- [fromBinary](InwardJobsServicePaginationResponse.md#frombinary)
- [fromJson](InwardJobsServicePaginationResponse.md#fromjson)
- [fromJsonString](InwardJobsServicePaginationResponse.md#fromjsonstring)
- [getType](InwardJobsServicePaginationResponse.md#gettype)
- [toBinary](InwardJobsServicePaginationResponse.md#tobinary)
- [toJSON](InwardJobsServicePaginationResponse.md#tojson)
- [toJson](InwardJobsServicePaginationResponse.md#tojson-1)
- [toJsonString](InwardJobsServicePaginationResponse.md#tojsonstring)
- [equals](InwardJobsServicePaginationResponse.md#equals-1)
- [fromBinary](InwardJobsServicePaginationResponse.md#frombinary-1)
- [fromJson](InwardJobsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](InwardJobsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServicePaginationResponse**(`data?`): [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)\> |

#### Returns

[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Overrides

Message\&lt;InwardJobsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1643)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1620)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1627)

___

### payload

• **payload**: [`InwardJob`](InwardJob.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.InwardJob payload = 4;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1641)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1634)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1650)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1648)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServicePaginationResponse"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1649)

## Methods

### clone

▸ **clone**(): [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1669)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1657)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1661)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServicePaginationResponse`](InwardJobsServicePaginationResponse.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1665](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1665)
