[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFolder

# Class: VaultFolder

Describes the parameters of a vault folder

**`Generated`**

from message Scailo.VaultFolder

## Hierarchy

- `Message`\<[`VaultFolder`](VaultFolder.md)\>

  ↳ **`VaultFolder`**

## Table of contents

### Constructors

- [constructor](VaultFolder.md#constructor)

### Properties

- [entityUuid](VaultFolder.md#entityuuid)
- [metadata](VaultFolder.md#metadata)
- [name](VaultFolder.md#name)
- [parentFolderId](VaultFolder.md#parentfolderid)
- [parentFolderUuid](VaultFolder.md#parentfolderuuid)
- [parentFolders](VaultFolder.md#parentfolders)
- [pathTree](VaultFolder.md#pathtree)
- [permissions](VaultFolder.md#permissions)
- [fields](VaultFolder.md#fields)
- [runtime](VaultFolder.md#runtime)
- [typeName](VaultFolder.md#typename)

### Methods

- [clone](VaultFolder.md#clone)
- [equals](VaultFolder.md#equals)
- [fromBinary](VaultFolder.md#frombinary)
- [fromJson](VaultFolder.md#fromjson)
- [fromJsonString](VaultFolder.md#fromjsonstring)
- [getType](VaultFolder.md#gettype)
- [toBinary](VaultFolder.md#tobinary)
- [toJSON](VaultFolder.md#tojson)
- [toJson](VaultFolder.md#tojson-1)
- [toJsonString](VaultFolder.md#tojsonstring)
- [equals](VaultFolder.md#equals-1)
- [fromBinary](VaultFolder.md#frombinary-1)
- [fromJson](VaultFolder.md#fromjson-1)
- [fromJsonString](VaultFolder.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFolder**(`data?`): [`VaultFolder`](VaultFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFolder`](VaultFolder.md)\> |

#### Returns

[`VaultFolder`](VaultFolder.md)

#### Overrides

Message\&lt;VaultFolder\&gt;.constructor

#### Defined in

[src/vault_folders.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L330)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_folders.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L279)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vault_folders.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L286)

___

### name

• **name**: `string` = `""`

The name of the folder

**`Generated`**

from field: string name = 10;

#### Defined in

[src/vault_folders.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L293)

___

### parentFolderId

• **parentFolderId**: `bigint` = `protoInt64.zero`

The ID of the parent folder

**`Generated`**

from field: uint64 parent_folder_id = 11;

#### Defined in

[src/vault_folders.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L300)

___

### parentFolderUuid

• **parentFolderUuid**: `string` = `""`

The UUID of the parent folder

**`Generated`**

from field: string parent_folder_uuid = 50;

#### Defined in

[src/vault_folders.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L328)

___

### parentFolders

• **parentFolders**: [`VaultParentFolder`](VaultParentFolder.md)[] = `[]`

The list of all the parent folders

**`Generated`**

from field: repeated Scailo.VaultParentFolder parent_folders = 30;

#### Defined in

[src/vault_folders.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L321)

___

### pathTree

• **pathTree**: `string` = `""`

The path of the folder

**`Generated`**

from field: string path_tree = 12;

#### Defined in

[src/vault_folders.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L307)

___

### permissions

• **permissions**: [`VaultPermission`](VaultPermission.md)[] = `[]`

The list of permissions

**`Generated`**

from field: repeated Scailo.VaultPermission permissions = 20;

#### Defined in

[src/vault_folders.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L314)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_folders.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L337)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_folders.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L335)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFolder"``

#### Defined in

[src/vault_folders.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L336)

## Methods

### clone

▸ **clone**(): [`VaultFolder`](VaultFolder.md)

Create a deep copy.

#### Returns

[`VaultFolder`](VaultFolder.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFolder`](VaultFolder.md) \| `PlainMessage`\<[`VaultFolder`](VaultFolder.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFolder`](VaultFolder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFolder`](VaultFolder.md)\>

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
| `a` | `undefined` \| [`VaultFolder`](VaultFolder.md) \| `PlainMessage`\<[`VaultFolder`](VaultFolder.md)\> |
| `b` | `undefined` \| [`VaultFolder`](VaultFolder.md) \| `PlainMessage`\<[`VaultFolder`](VaultFolder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_folders.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L360)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFolder`](VaultFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFolder`](VaultFolder.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L348)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFolder`](VaultFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolder`](VaultFolder.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L352)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFolder`](VaultFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolder`](VaultFolder.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L356)
