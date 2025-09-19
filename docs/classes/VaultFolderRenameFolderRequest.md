[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFolderRenameFolderRequest

# Class: VaultFolderRenameFolderRequest

Describes the parameters necessary to rename a vault folder

**`Generated`**

from message Scailo.VaultFolderRenameFolderRequest

## Hierarchy

- `Message`\<[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)\>

  ↳ **`VaultFolderRenameFolderRequest`**

## Table of contents

### Constructors

- [constructor](VaultFolderRenameFolderRequest.md#constructor)

### Properties

- [name](VaultFolderRenameFolderRequest.md#name)
- [uuid](VaultFolderRenameFolderRequest.md#uuid)
- [fields](VaultFolderRenameFolderRequest.md#fields)
- [runtime](VaultFolderRenameFolderRequest.md#runtime)
- [typeName](VaultFolderRenameFolderRequest.md#typename)

### Methods

- [clone](VaultFolderRenameFolderRequest.md#clone)
- [equals](VaultFolderRenameFolderRequest.md#equals)
- [fromBinary](VaultFolderRenameFolderRequest.md#frombinary)
- [fromJson](VaultFolderRenameFolderRequest.md#fromjson)
- [fromJsonString](VaultFolderRenameFolderRequest.md#fromjsonstring)
- [getType](VaultFolderRenameFolderRequest.md#gettype)
- [toBinary](VaultFolderRenameFolderRequest.md#tobinary)
- [toJSON](VaultFolderRenameFolderRequest.md#tojson)
- [toJson](VaultFolderRenameFolderRequest.md#tojson-1)
- [toJsonString](VaultFolderRenameFolderRequest.md#tojsonstring)
- [equals](VaultFolderRenameFolderRequest.md#equals-1)
- [fromBinary](VaultFolderRenameFolderRequest.md#frombinary-1)
- [fromJson](VaultFolderRenameFolderRequest.md#fromjson-1)
- [fromJsonString](VaultFolderRenameFolderRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFolderRenameFolderRequest**(`data?`): [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)\> |

#### Returns

[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Overrides

Message\&lt;VaultFolderRenameFolderRequest\&gt;.constructor

#### Defined in

[src/vault_folders.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L148)

## Properties

### name

• **name**: `string` = `""`

The new name of the folder

**`Generated`**

from field: string name = 10;

#### Defined in

[src/vault_folders.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L146)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the folder

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/vault_folders.scailo_pb.ts:139](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L139)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_folders.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L155)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_folders.scailo_pb.ts:153](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L153)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFolderRenameFolderRequest"``

#### Defined in

[src/vault_folders.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L154)

## Methods

### clone

▸ **clone**(): [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

Create a deep copy.

#### Returns

[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md) \| `PlainMessage`\<[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)\>

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
| `a` | `undefined` \| [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md) \| `PlainMessage`\<[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)\> |
| `b` | `undefined` \| [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md) \| `PlainMessage`\<[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_folders.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L172)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:160](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L160)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L164)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolderRenameFolderRequest`](VaultFolderRenameFolderRequest.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L168)
