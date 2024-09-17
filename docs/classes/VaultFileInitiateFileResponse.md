[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileInitiateFileResponse

# Class: VaultFileInitiateFileResponse

Describes the payload in the response to a file initiate request

**`Generated`**

from message Scailo.VaultFileInitiateFileResponse

## Hierarchy

- `Message`\<[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)\>

  ↳ **`VaultFileInitiateFileResponse`**

## Table of contents

### Constructors

- [constructor](VaultFileInitiateFileResponse.md#constructor)

### Properties

- [chunkSize](VaultFileInitiateFileResponse.md#chunksize)
- [uuid](VaultFileInitiateFileResponse.md#uuid)
- [fields](VaultFileInitiateFileResponse.md#fields)
- [runtime](VaultFileInitiateFileResponse.md#runtime)
- [typeName](VaultFileInitiateFileResponse.md#typename)

### Methods

- [clone](VaultFileInitiateFileResponse.md#clone)
- [equals](VaultFileInitiateFileResponse.md#equals)
- [fromBinary](VaultFileInitiateFileResponse.md#frombinary)
- [fromJson](VaultFileInitiateFileResponse.md#fromjson)
- [fromJsonString](VaultFileInitiateFileResponse.md#fromjsonstring)
- [getType](VaultFileInitiateFileResponse.md#gettype)
- [toBinary](VaultFileInitiateFileResponse.md#tobinary)
- [toJSON](VaultFileInitiateFileResponse.md#tojson)
- [toJson](VaultFileInitiateFileResponse.md#tojson-1)
- [toJsonString](VaultFileInitiateFileResponse.md#tojsonstring)
- [equals](VaultFileInitiateFileResponse.md#equals-1)
- [fromBinary](VaultFileInitiateFileResponse.md#frombinary-1)
- [fromJson](VaultFileInitiateFileResponse.md#fromjson-1)
- [fromJsonString](VaultFileInitiateFileResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileInitiateFileResponse**(`data?`): [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)\> |

#### Returns

[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Overrides

Message\&lt;VaultFileInitiateFileResponse\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:106

## Properties

### chunkSize

• **chunkSize**: `bigint` = `protoInt64.zero`

The max size of the chunk (in bytes) for uploading a file

**`Generated`**

from field: uint64 chunk_size = 2;

#### Defined in

src/vault_files.scailo_pb.ts:104

___

### uuid

• **uuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:97

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:113

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:111

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileInitiateFileResponse"``

#### Defined in

src/vault_files.scailo_pb.ts:112

## Methods

### clone

▸ **clone**(): [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

Create a deep copy.

#### Returns

[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md) \| `PlainMessage`\<[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)\>

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
| `a` | `undefined` \| [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md) \| `PlainMessage`\<[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)\> |
| `b` | `undefined` \| [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md) \| `PlainMessage`\<[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:130

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Defined in

src/vault_files.scailo_pb.ts:118

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Defined in

src/vault_files.scailo_pb.ts:122

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileInitiateFileResponse`](VaultFileInitiateFileResponse.md)

#### Defined in

src/vault_files.scailo_pb.ts:126
