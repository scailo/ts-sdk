[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFolderMoveFolderRequest

# Class: VaultFolderMoveFolderRequest

Describes the parameters necessary to move a vault folder

**`Generated`**

from message Scailo.VaultFolderMoveFolderRequest

## Hierarchy

- `Message`\<[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)\>

  ↳ **`VaultFolderMoveFolderRequest`**

## Table of contents

### Constructors

- [constructor](VaultFolderMoveFolderRequest.md#constructor)

### Properties

- [destinationFolderUuid](VaultFolderMoveFolderRequest.md#destinationfolderuuid)
- [sourceFolderUuid](VaultFolderMoveFolderRequest.md#sourcefolderuuid)
- [fields](VaultFolderMoveFolderRequest.md#fields)
- [runtime](VaultFolderMoveFolderRequest.md#runtime)
- [typeName](VaultFolderMoveFolderRequest.md#typename)

### Methods

- [clone](VaultFolderMoveFolderRequest.md#clone)
- [equals](VaultFolderMoveFolderRequest.md#equals)
- [fromBinary](VaultFolderMoveFolderRequest.md#frombinary)
- [fromJson](VaultFolderMoveFolderRequest.md#fromjson)
- [fromJsonString](VaultFolderMoveFolderRequest.md#fromjsonstring)
- [getType](VaultFolderMoveFolderRequest.md#gettype)
- [toBinary](VaultFolderMoveFolderRequest.md#tobinary)
- [toJSON](VaultFolderMoveFolderRequest.md#tojson)
- [toJson](VaultFolderMoveFolderRequest.md#tojson-1)
- [toJsonString](VaultFolderMoveFolderRequest.md#tojsonstring)
- [equals](VaultFolderMoveFolderRequest.md#equals-1)
- [fromBinary](VaultFolderMoveFolderRequest.md#frombinary-1)
- [fromJson](VaultFolderMoveFolderRequest.md#fromjson-1)
- [fromJsonString](VaultFolderMoveFolderRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFolderMoveFolderRequest**(`data?`): [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)\> |

#### Returns

[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Overrides

Message\&lt;VaultFolderMoveFolderRequest\&gt;.constructor

#### Defined in

[src/vault_folders.scailo_pb.ts:98](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L98)

## Properties

### destinationFolderUuid

• **destinationFolderUuid**: `string` = `""`

The UUID of the destination folder that the folder needs to be moved into

**`Generated`**

from field: string destination_folder_uuid = 13;

#### Defined in

[src/vault_folders.scailo_pb.ts:96](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L96)

___

### sourceFolderUuid

• **sourceFolderUuid**: `string` = `""`

The UUID of the folder

**`Generated`**

from field: string source_folder_uuid = 1;

#### Defined in

[src/vault_folders.scailo_pb.ts:89](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L89)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_folders.scailo_pb.ts:105](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L105)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_folders.scailo_pb.ts:103](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L103)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFolderMoveFolderRequest"``

#### Defined in

[src/vault_folders.scailo_pb.ts:104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L104)

## Methods

### clone

▸ **clone**(): [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

Create a deep copy.

#### Returns

[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md) \| `PlainMessage`\<[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)\>

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
| `a` | `undefined` \| [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md) \| `PlainMessage`\<[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)\> |
| `b` | `undefined` \| [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md) \| `PlainMessage`\<[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_folders.scailo_pb.ts:122](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L122)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:110](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L110)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L114)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolderMoveFolderRequest`](VaultFolderMoveFolderRequest.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L118)
