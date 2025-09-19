[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultParentFolder

# Class: VaultParentFolder

Describes the parameters of a vault parent folder

**`Generated`**

from message Scailo.VaultParentFolder

## Hierarchy

- `Message`\<[`VaultParentFolder`](VaultParentFolder.md)\>

  ↳ **`VaultParentFolder`**

## Table of contents

### Constructors

- [constructor](VaultParentFolder.md#constructor)

### Properties

- [entityUuid](VaultParentFolder.md#entityuuid)
- [metadata](VaultParentFolder.md#metadata)
- [name](VaultParentFolder.md#name)
- [parentFolderId](VaultParentFolder.md#parentfolderid)
- [parentFolderUuid](VaultParentFolder.md#parentfolderuuid)
- [pathTree](VaultParentFolder.md#pathtree)
- [permissions](VaultParentFolder.md#permissions)
- [fields](VaultParentFolder.md#fields)
- [runtime](VaultParentFolder.md#runtime)
- [typeName](VaultParentFolder.md#typename)

### Methods

- [clone](VaultParentFolder.md#clone)
- [equals](VaultParentFolder.md#equals)
- [fromBinary](VaultParentFolder.md#frombinary)
- [fromJson](VaultParentFolder.md#fromjson)
- [fromJsonString](VaultParentFolder.md#fromjsonstring)
- [getType](VaultParentFolder.md#gettype)
- [toBinary](VaultParentFolder.md#tobinary)
- [toJSON](VaultParentFolder.md#tojson)
- [toJson](VaultParentFolder.md#tojson-1)
- [toJsonString](VaultParentFolder.md#tojsonstring)
- [equals](VaultParentFolder.md#equals-1)
- [fromBinary](VaultParentFolder.md#frombinary-1)
- [fromJson](VaultParentFolder.md#fromjson-1)
- [fromJsonString](VaultParentFolder.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultParentFolder**(`data?`): [`VaultParentFolder`](VaultParentFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultParentFolder`](VaultParentFolder.md)\> |

#### Returns

[`VaultParentFolder`](VaultParentFolder.md)

#### Overrides

Message\&lt;VaultParentFolder\&gt;.constructor

#### Defined in

[src/vault_folders.scailo_pb.ts:233](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L233)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_folders.scailo_pb.ts:189](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L189)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vault_folders.scailo_pb.ts:196](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L196)

___

### name

• **name**: `string` = `""`

The name of the folder

**`Generated`**

from field: string name = 10;

#### Defined in

[src/vault_folders.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L203)

___

### parentFolderId

• **parentFolderId**: `bigint` = `protoInt64.zero`

The ID of the parent folder

**`Generated`**

from field: uint64 parent_folder_id = 11;

#### Defined in

[src/vault_folders.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L210)

___

### parentFolderUuid

• **parentFolderUuid**: `string` = `""`

The UUID of the parent folder

**`Generated`**

from field: string parent_folder_uuid = 50;

#### Defined in

[src/vault_folders.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L231)

___

### pathTree

• **pathTree**: `string` = `""`

The path of the folder

**`Generated`**

from field: string path_tree = 12;

#### Defined in

[src/vault_folders.scailo_pb.ts:217](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L217)

___

### permissions

• **permissions**: [`VaultPermission`](VaultPermission.md)[] = `[]`

The list of permissions

**`Generated`**

from field: repeated Scailo.VaultPermission permissions = 20;

#### Defined in

[src/vault_folders.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L224)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_folders.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L240)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_folders.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L238)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultParentFolder"``

#### Defined in

[src/vault_folders.scailo_pb.ts:239](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L239)

## Methods

### clone

▸ **clone**(): [`VaultParentFolder`](VaultParentFolder.md)

Create a deep copy.

#### Returns

[`VaultParentFolder`](VaultParentFolder.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultParentFolder`](VaultParentFolder.md) \| `PlainMessage`\<[`VaultParentFolder`](VaultParentFolder.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultParentFolder`](VaultParentFolder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultParentFolder`](VaultParentFolder.md)\>

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
| `a` | `undefined` \| [`VaultParentFolder`](VaultParentFolder.md) \| `PlainMessage`\<[`VaultParentFolder`](VaultParentFolder.md)\> |
| `b` | `undefined` \| [`VaultParentFolder`](VaultParentFolder.md) \| `PlainMessage`\<[`VaultParentFolder`](VaultParentFolder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_folders.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L262)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultParentFolder`](VaultParentFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultParentFolder`](VaultParentFolder.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:250](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L250)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultParentFolder`](VaultParentFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultParentFolder`](VaultParentFolder.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L254)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultParentFolder`](VaultParentFolder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultParentFolder`](VaultParentFolder.md)

#### Defined in

[src/vault_folders.scailo_pb.ts:258](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_folders.scailo_pb.ts#L258)
