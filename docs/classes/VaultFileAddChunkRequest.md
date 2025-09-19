[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileAddChunkRequest

# Class: VaultFileAddChunkRequest

Describes the parameters necessary to add a chunk to a file

**`Generated`**

from message Scailo.VaultFileAddChunkRequest

## Hierarchy

- `Message`\<[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)\>

  ↳ **`VaultFileAddChunkRequest`**

## Table of contents

### Constructors

- [constructor](VaultFileAddChunkRequest.md#constructor)

### Properties

- [chunk](VaultFileAddChunkRequest.md#chunk)
- [sequenceId](VaultFileAddChunkRequest.md#sequenceid)
- [uuid](VaultFileAddChunkRequest.md#uuid)
- [fields](VaultFileAddChunkRequest.md#fields)
- [runtime](VaultFileAddChunkRequest.md#runtime)
- [typeName](VaultFileAddChunkRequest.md#typename)

### Methods

- [clone](VaultFileAddChunkRequest.md#clone)
- [equals](VaultFileAddChunkRequest.md#equals)
- [fromBinary](VaultFileAddChunkRequest.md#frombinary)
- [fromJson](VaultFileAddChunkRequest.md#fromjson)
- [fromJsonString](VaultFileAddChunkRequest.md#fromjsonstring)
- [getType](VaultFileAddChunkRequest.md#gettype)
- [toBinary](VaultFileAddChunkRequest.md#tobinary)
- [toJSON](VaultFileAddChunkRequest.md#tojson)
- [toJson](VaultFileAddChunkRequest.md#tojson-1)
- [toJsonString](VaultFileAddChunkRequest.md#tojsonstring)
- [equals](VaultFileAddChunkRequest.md#equals-1)
- [fromBinary](VaultFileAddChunkRequest.md#frombinary-1)
- [fromJson](VaultFileAddChunkRequest.md#fromjson-1)
- [fromJsonString](VaultFileAddChunkRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileAddChunkRequest**(`data?`): [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)\> |

#### Returns

[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Overrides

Message\&lt;VaultFileAddChunkRequest\&gt;.constructor

#### Defined in

[src/vault_files.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L559)

## Properties

### chunk

• **chunk**: `Uint8Array`

Stores the content of the chunk

**`Generated`**

from field: bytes chunk = 12;

#### Defined in

[src/vault_files.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L557)

___

### sequenceId

• **sequenceId**: `bigint` = `protoInt64.zero`

Stores the sequence ID of this chunk

**`Generated`**

from field: uint64 sequence_id = 11;

#### Defined in

[src/vault_files.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L550)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/vault_files.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L543)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_files.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L566)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_files.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L564)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileAddChunkRequest"``

#### Defined in

[src/vault_files.scailo_pb.ts:565](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L565)

## Methods

### clone

▸ **clone**(): [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

Create a deep copy.

#### Returns

[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md) \| `PlainMessage`\<[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)\>

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
| `a` | `undefined` \| [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md) \| `PlainMessage`\<[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)\> |
| `b` | `undefined` \| [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md) \| `PlainMessage`\<[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_files.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L584)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Defined in

[src/vault_files.scailo_pb.ts:572](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L572)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Defined in

[src/vault_files.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L576)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileAddChunkRequest`](VaultFileAddChunkRequest.md)

#### Defined in

[src/vault_files.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L580)
