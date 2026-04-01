[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveFrameUpdateRequest

# Class: EnclaveFrameUpdateRequest

Stores the payload that is necessary to update a custom frame for an enclave

**`Generated`**

from message Scailo.EnclaveFrameUpdateRequest

## Hierarchy

- `Message`\<[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)\>

  ↳ **`EnclaveFrameUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EnclaveFrameUpdateRequest.md#constructor)

### Properties

- [autoRefreshInterval](EnclaveFrameUpdateRequest.md#autorefreshinterval)
- [height](EnclaveFrameUpdateRequest.md#height)
- [sequenceNumber](EnclaveFrameUpdateRequest.md#sequencenumber)
- [uuid](EnclaveFrameUpdateRequest.md#uuid)
- [width](EnclaveFrameUpdateRequest.md#width)
- [fields](EnclaveFrameUpdateRequest.md#fields)
- [runtime](EnclaveFrameUpdateRequest.md#runtime)
- [typeName](EnclaveFrameUpdateRequest.md#typename)

### Methods

- [clone](EnclaveFrameUpdateRequest.md#clone)
- [equals](EnclaveFrameUpdateRequest.md#equals)
- [fromBinary](EnclaveFrameUpdateRequest.md#frombinary)
- [fromJson](EnclaveFrameUpdateRequest.md#fromjson)
- [fromJsonString](EnclaveFrameUpdateRequest.md#fromjsonstring)
- [getType](EnclaveFrameUpdateRequest.md#gettype)
- [toBinary](EnclaveFrameUpdateRequest.md#tobinary)
- [toJSON](EnclaveFrameUpdateRequest.md#tojson)
- [toJson](EnclaveFrameUpdateRequest.md#tojson-1)
- [toJsonString](EnclaveFrameUpdateRequest.md#tojsonstring)
- [equals](EnclaveFrameUpdateRequest.md#equals-1)
- [fromBinary](EnclaveFrameUpdateRequest.md#frombinary-1)
- [fromJson](EnclaveFrameUpdateRequest.md#fromjson-1)
- [fromJsonString](EnclaveFrameUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveFrameUpdateRequest**(`data?`): [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)\> |

#### Returns

[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Overrides

Message\&lt;EnclaveFrameUpdateRequest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2757](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2757)

## Properties

### autoRefreshInterval

• **autoRefreshInterval**: `bigint` = `protoInt64.zero`

The time in seconds after which the frame needs to be refreshed

**`Generated`**

from field: uint64 auto_refresh_interval = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:2741](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2741)

___

### height

• **height**: `bigint` = `protoInt64.zero`

The height of the frame in vh (viewport height)

**`Generated`**

from field: uint64 height = 13;

#### Defined in

[src/vault_commons.scailo_pb.ts:2755](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2755)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

The sequence number of the frame

**`Generated`**

from field: uint64 sequence_number = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:2734](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2734)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the frame that needs to be updated

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2727](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2727)

___

### width

• **width**: `bigint` = `protoInt64.zero`

The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12

**`Generated`**

from field: uint64 width = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:2748](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2748)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2764](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2764)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2762](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2762)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveFrameUpdateRequest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2763](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2763)

## Methods

### clone

▸ **clone**(): [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

Create a deep copy.

#### Returns

[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md) \| `PlainMessage`\<[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md) \| `PlainMessage`\<[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)\> |
| `b` | `undefined` \| [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md) \| `PlainMessage`\<[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2784](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2784)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2772](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2772)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2776](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2776)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameUpdateRequest`](EnclaveFrameUpdateRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2780](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vault_commons.scailo_pb.ts#L2780)
