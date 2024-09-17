[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileMoveFileRequest

# Class: VaultFileMoveFileRequest

Describes the parameters necessary to move a vault file

**`Generated`**

from message Scailo.VaultFileMoveFileRequest

## Hierarchy

- `Message`\<[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)\>

  ↳ **`VaultFileMoveFileRequest`**

## Table of contents

### Constructors

- [constructor](VaultFileMoveFileRequest.md#constructor)

### Properties

- [destinationFolderUuid](VaultFileMoveFileRequest.md#destinationfolderuuid)
- [uuid](VaultFileMoveFileRequest.md#uuid)
- [fields](VaultFileMoveFileRequest.md#fields)
- [runtime](VaultFileMoveFileRequest.md#runtime)
- [typeName](VaultFileMoveFileRequest.md#typename)

### Methods

- [clone](VaultFileMoveFileRequest.md#clone)
- [equals](VaultFileMoveFileRequest.md#equals)
- [fromBinary](VaultFileMoveFileRequest.md#frombinary)
- [fromJson](VaultFileMoveFileRequest.md#fromjson)
- [fromJsonString](VaultFileMoveFileRequest.md#fromjsonstring)
- [getType](VaultFileMoveFileRequest.md#gettype)
- [toBinary](VaultFileMoveFileRequest.md#tobinary)
- [toJSON](VaultFileMoveFileRequest.md#tojson)
- [toJson](VaultFileMoveFileRequest.md#tojson-1)
- [toJsonString](VaultFileMoveFileRequest.md#tojsonstring)
- [equals](VaultFileMoveFileRequest.md#equals-1)
- [fromBinary](VaultFileMoveFileRequest.md#frombinary-1)
- [fromJson](VaultFileMoveFileRequest.md#fromjson-1)
- [fromJsonString](VaultFileMoveFileRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileMoveFileRequest**(`data?`): [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)\> |

#### Returns

[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Overrides

Message\&lt;VaultFileMoveFileRequest\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:206

## Properties

### destinationFolderUuid

• **destinationFolderUuid**: `string` = `""`

The UUID of the destination folder that the file needs to be moved into

**`Generated`**

from field: string destination_folder_uuid = 13;

#### Defined in

src/vault_files.scailo_pb.ts:204

___

### uuid

• **uuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:197

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:213

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:211

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileMoveFileRequest"``

#### Defined in

src/vault_files.scailo_pb.ts:212

## Methods

### clone

▸ **clone**(): [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

Create a deep copy.

#### Returns

[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md) \| `PlainMessage`\<[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)\>

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
| `a` | `undefined` \| [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md) \| `PlainMessage`\<[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)\> |
| `b` | `undefined` \| [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md) \| `PlainMessage`\<[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:230

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:218

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:222

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileMoveFileRequest`](VaultFileMoveFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:226
