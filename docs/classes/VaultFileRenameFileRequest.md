[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileRenameFileRequest

# Class: VaultFileRenameFileRequest

Describes the parameters necessary to rename a vault file

**`Generated`**

from message Scailo.VaultFileRenameFileRequest

## Hierarchy

- `Message`\<[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)\>

  ↳ **`VaultFileRenameFileRequest`**

## Table of contents

### Constructors

- [constructor](VaultFileRenameFileRequest.md#constructor)

### Properties

- [name](VaultFileRenameFileRequest.md#name)
- [uuid](VaultFileRenameFileRequest.md#uuid)
- [fields](VaultFileRenameFileRequest.md#fields)
- [runtime](VaultFileRenameFileRequest.md#runtime)
- [typeName](VaultFileRenameFileRequest.md#typename)

### Methods

- [clone](VaultFileRenameFileRequest.md#clone)
- [equals](VaultFileRenameFileRequest.md#equals)
- [fromBinary](VaultFileRenameFileRequest.md#frombinary)
- [fromJson](VaultFileRenameFileRequest.md#fromjson)
- [fromJsonString](VaultFileRenameFileRequest.md#fromjsonstring)
- [getType](VaultFileRenameFileRequest.md#gettype)
- [toBinary](VaultFileRenameFileRequest.md#tobinary)
- [toJSON](VaultFileRenameFileRequest.md#tojson)
- [toJson](VaultFileRenameFileRequest.md#tojson-1)
- [toJsonString](VaultFileRenameFileRequest.md#tojsonstring)
- [equals](VaultFileRenameFileRequest.md#equals-1)
- [fromBinary](VaultFileRenameFileRequest.md#frombinary-1)
- [fromJson](VaultFileRenameFileRequest.md#fromjson-1)
- [fromJsonString](VaultFileRenameFileRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileRenameFileRequest**(`data?`): [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)\> |

#### Returns

[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Overrides

Message\&lt;VaultFileRenameFileRequest\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:156

## Properties

### name

• **name**: `string` = `""`

The new name of the file

**`Generated`**

from field: string name = 10;

#### Defined in

src/vault_files.scailo_pb.ts:154

___

### uuid

• **uuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:147

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:163

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:161

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileRenameFileRequest"``

#### Defined in

src/vault_files.scailo_pb.ts:162

## Methods

### clone

▸ **clone**(): [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

Create a deep copy.

#### Returns

[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md) \| `PlainMessage`\<[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)\>

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
| `a` | `undefined` \| [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md) \| `PlainMessage`\<[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)\> |
| `b` | `undefined` \| [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md) \| `PlainMessage`\<[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:180

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:168

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:172

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileRenameFileRequest`](VaultFileRenameFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:176
