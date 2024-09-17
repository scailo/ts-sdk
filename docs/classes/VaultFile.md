[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFile

# Class: VaultFile

Describes the parameters of a vault file

**`Generated`**

from message Scailo.VaultFile

## Hierarchy

- `Message`\<[`VaultFile`](VaultFile.md)\>

  ↳ **`VaultFile`**

## Table of contents

### Constructors

- [constructor](VaultFile.md#constructor)

### Properties

- [completedAt](VaultFile.md#completedat)
- [entityUuid](VaultFile.md#entityuuid)
- [folderId](VaultFile.md#folderid)
- [folderUuid](VaultFile.md#folderuuid)
- [isPersistent](VaultFile.md#ispersistent)
- [metadata](VaultFile.md#metadata)
- [name](VaultFile.md#name)
- [pathTree](VaultFile.md#pathtree)
- [permissions](VaultFile.md#permissions)
- [size](VaultFile.md#size)
- [type](VaultFile.md#type)
- [fields](VaultFile.md#fields)
- [runtime](VaultFile.md#runtime)
- [typeName](VaultFile.md#typename)

### Methods

- [clone](VaultFile.md#clone)
- [equals](VaultFile.md#equals)
- [fromBinary](VaultFile.md#frombinary)
- [fromJson](VaultFile.md#fromjson)
- [fromJsonString](VaultFile.md#fromjsonstring)
- [getType](VaultFile.md#gettype)
- [toBinary](VaultFile.md#tobinary)
- [toJSON](VaultFile.md#tojson)
- [toJson](VaultFile.md#tojson-1)
- [toJsonString](VaultFile.md#tojsonstring)
- [equals](VaultFile.md#equals-1)
- [fromBinary](VaultFile.md#frombinary-1)
- [fromJson](VaultFile.md#fromjson-1)
- [fromJsonString](VaultFile.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFile**(`data?`): [`VaultFile`](VaultFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFile`](VaultFile.md)\> |

#### Returns

[`VaultFile`](VaultFile.md)

#### Overrides

Message\&lt;VaultFile\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:319

## Properties

### completedAt

• **completedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the file upload was completed

**`Generated`**

from field: uint64 completed_at = 6;

#### Defined in

src/vault_files.scailo_pb.ts:261

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:247

___

### folderId

• **folderId**: `bigint` = `protoInt64.zero`

The ID of the folder that the file lives in

**`Generated`**

from field: uint64 folder_id = 13;

#### Defined in

src/vault_files.scailo_pb.ts:289

___

### folderUuid

• **folderUuid**: `string` = `""`

The UUID of the folder that the file is present in

**`Generated`**

from field: string folder_uuid = 50;

#### Defined in

src/vault_files.scailo_pb.ts:317

___

### isPersistent

• **isPersistent**: `boolean` = `false`

Stores if the file has been made persistent

**`Generated`**

from field: bool is_persistent = 12;

#### Defined in

src/vault_files.scailo_pb.ts:282

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vault_files.scailo_pb.ts:254

___

### name

• **name**: `string` = `""`

The name of the file

**`Generated`**

from field: string name = 10;

#### Defined in

src/vault_files.scailo_pb.ts:268

___

### pathTree

• **pathTree**: `string` = `""`

The path of the file

**`Generated`**

from field: string path_tree = 14;

#### Defined in

src/vault_files.scailo_pb.ts:296

___

### permissions

• **permissions**: [`VaultPermission`](VaultPermission.md)[] = `[]`

The list of permissions

**`Generated`**

from field: repeated Scailo.VaultPermission permissions = 30;

#### Defined in

src/vault_files.scailo_pb.ts:310

___

### size

• **size**: `bigint` = `protoInt64.zero`

The size of the file in bytes

**`Generated`**

from field: uint64 size = 20;

#### Defined in

src/vault_files.scailo_pb.ts:303

___

### type

• **type**: `string` = `""`

The file type

**`Generated`**

from field: string type = 11;

#### Defined in

src/vault_files.scailo_pb.ts:275

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:326

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:324

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFile"``

#### Defined in

src/vault_files.scailo_pb.ts:325

## Methods

### clone

▸ **clone**(): [`VaultFile`](VaultFile.md)

Create a deep copy.

#### Returns

[`VaultFile`](VaultFile.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFile`](VaultFile.md) \| `PlainMessage`\<[`VaultFile`](VaultFile.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFile`](VaultFile.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFile`](VaultFile.md)\>

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
| `a` | `undefined` \| [`VaultFile`](VaultFile.md) \| `PlainMessage`\<[`VaultFile`](VaultFile.md)\> |
| `b` | `undefined` \| [`VaultFile`](VaultFile.md) \| `PlainMessage`\<[`VaultFile`](VaultFile.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:352

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFile`](VaultFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFile`](VaultFile.md)

#### Defined in

src/vault_files.scailo_pb.ts:340

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFile`](VaultFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFile`](VaultFile.md)

#### Defined in

src/vault_files.scailo_pb.ts:344

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFile`](VaultFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFile`](VaultFile.md)

#### Defined in

src/vault_files.scailo_pb.ts:348
