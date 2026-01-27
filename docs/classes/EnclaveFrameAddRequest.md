[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveFrameAddRequest

# Class: EnclaveFrameAddRequest

Stores the payload that is necessary to create a custom frame for an enclave

**`Generated`**

from message Scailo.EnclaveFrameAddRequest

## Hierarchy

- `Message`\<[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)\>

  ↳ **`EnclaveFrameAddRequest`**

## Table of contents

### Constructors

- [constructor](EnclaveFrameAddRequest.md#constructor)

### Properties

- [autoRefreshInterval](EnclaveFrameAddRequest.md#autorefreshinterval)
- [fileUuid](EnclaveFrameAddRequest.md#fileuuid)
- [height](EnclaveFrameAddRequest.md#height)
- [sequenceNumber](EnclaveFrameAddRequest.md#sequencenumber)
- [width](EnclaveFrameAddRequest.md#width)
- [fields](EnclaveFrameAddRequest.md#fields)
- [runtime](EnclaveFrameAddRequest.md#runtime)
- [typeName](EnclaveFrameAddRequest.md#typename)

### Methods

- [clone](EnclaveFrameAddRequest.md#clone)
- [equals](EnclaveFrameAddRequest.md#equals)
- [fromBinary](EnclaveFrameAddRequest.md#frombinary)
- [fromJson](EnclaveFrameAddRequest.md#fromjson)
- [fromJsonString](EnclaveFrameAddRequest.md#fromjsonstring)
- [getType](EnclaveFrameAddRequest.md#gettype)
- [toBinary](EnclaveFrameAddRequest.md#tobinary)
- [toJSON](EnclaveFrameAddRequest.md#tojson)
- [toJson](EnclaveFrameAddRequest.md#tojson-1)
- [toJsonString](EnclaveFrameAddRequest.md#tojsonstring)
- [equals](EnclaveFrameAddRequest.md#equals-1)
- [fromBinary](EnclaveFrameAddRequest.md#frombinary-1)
- [fromJson](EnclaveFrameAddRequest.md#fromjson-1)
- [fromJsonString](EnclaveFrameAddRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveFrameAddRequest**(`data?`): [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)\> |

#### Returns

[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Overrides

Message\&lt;EnclaveFrameAddRequest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2427](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2427)

## Properties

### autoRefreshInterval

• **autoRefreshInterval**: `bigint` = `protoInt64.zero`

The time in seconds after which the frame needs to be refreshed. O denotes no auto refresh.

**`Generated`**

from field: uint64 auto_refresh_interval = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:2411](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2411)

___

### fileUuid

• **fileUuid**: `string` = `""`

The UUID of the enclave file that will be updated with the given frame

**`Generated`**

from field: string file_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2397](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2397)

___

### height

• **height**: `bigint` = `protoInt64.zero`

The height of the frame in vh (viewport height)

**`Generated`**

from field: uint64 height = 13;

#### Defined in

[src/vault_commons.scailo_pb.ts:2425](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2425)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

The sequence number of the frame

**`Generated`**

from field: uint64 sequence_number = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:2404](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2404)

___

### width

• **width**: `bigint` = `protoInt64.zero`

The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12

**`Generated`**

from field: uint64 width = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:2418](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2418)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2434)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2432](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2432)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveFrameAddRequest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2433](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2433)

## Methods

### clone

▸ **clone**(): [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

Create a deep copy.

#### Returns

[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md) \| `PlainMessage`\<[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)\>

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
| `a` | `undefined` \| [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md) \| `PlainMessage`\<[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)\> |
| `b` | `undefined` \| [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md) \| `PlainMessage`\<[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2454](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2454)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2442](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2442)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2446](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2446)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameAddRequest`](EnclaveFrameAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2450](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/vault_commons.scailo_pb.ts#L2450)
