[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServicePaginatedInwardItemsResponse

# Class: OutwardJobsServicePaginatedInwardItemsResponse

Describes the response to a pagination inward items request

**`Generated`**

from message Scailo.OutwardJobsServicePaginatedInwardItemsResponse

## Hierarchy

- `Message`\<[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)\>

  ↳ **`OutwardJobsServicePaginatedInwardItemsResponse`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServicePaginatedInwardItemsResponse.md#constructor)

### Properties

- [count](OutwardJobsServicePaginatedInwardItemsResponse.md#count)
- [offset](OutwardJobsServicePaginatedInwardItemsResponse.md#offset)
- [payload](OutwardJobsServicePaginatedInwardItemsResponse.md#payload)
- [total](OutwardJobsServicePaginatedInwardItemsResponse.md#total)
- [fields](OutwardJobsServicePaginatedInwardItemsResponse.md#fields)
- [runtime](OutwardJobsServicePaginatedInwardItemsResponse.md#runtime)
- [typeName](OutwardJobsServicePaginatedInwardItemsResponse.md#typename)

### Methods

- [clone](OutwardJobsServicePaginatedInwardItemsResponse.md#clone)
- [equals](OutwardJobsServicePaginatedInwardItemsResponse.md#equals)
- [fromBinary](OutwardJobsServicePaginatedInwardItemsResponse.md#frombinary)
- [fromJson](OutwardJobsServicePaginatedInwardItemsResponse.md#fromjson)
- [fromJsonString](OutwardJobsServicePaginatedInwardItemsResponse.md#fromjsonstring)
- [getType](OutwardJobsServicePaginatedInwardItemsResponse.md#gettype)
- [toBinary](OutwardJobsServicePaginatedInwardItemsResponse.md#tobinary)
- [toJSON](OutwardJobsServicePaginatedInwardItemsResponse.md#tojson)
- [toJson](OutwardJobsServicePaginatedInwardItemsResponse.md#tojson-1)
- [toJsonString](OutwardJobsServicePaginatedInwardItemsResponse.md#tojsonstring)
- [equals](OutwardJobsServicePaginatedInwardItemsResponse.md#equals-1)
- [fromBinary](OutwardJobsServicePaginatedInwardItemsResponse.md#frombinary-1)
- [fromJson](OutwardJobsServicePaginatedInwardItemsResponse.md#fromjson-1)
- [fromJsonString](OutwardJobsServicePaginatedInwardItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServicePaginatedInwardItemsResponse**(`data?`): [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)\> |

#### Returns

[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Overrides

Message\&lt;OutwardJobsServicePaginatedInwardItemsResponse\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:2340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2340)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2317)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2324](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2324)

___

### payload

• **payload**: [`OutwardJobInwardItem`](OutwardJobInwardItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.OutwardJobInwardItem payload = 4;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2338](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2338)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2331](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2331)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2347](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2347)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2345](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2345)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServicePaginatedInwardItemsResponse"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:2346](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2346)

## Methods

### clone

▸ **clone**(): [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

Create a deep copy.

#### Returns

[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)\> |
| `b` | `undefined` \| [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2366](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2366)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2354)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2358)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServicePaginatedInwardItemsResponse`](OutwardJobsServicePaginatedInwardItemsResponse.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2362](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2362)
