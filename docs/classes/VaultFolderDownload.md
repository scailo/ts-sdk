[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFolderDownload

# Class: VaultFolderDownload

Describes the parameters of a vault folder download

**`Generated`**

from message Scailo.VaultFolderDownload

## Hierarchy

- `Message`\<[`VaultFolderDownload`](VaultFolderDownload.md)\>

  ↳ **`VaultFolderDownload`**

## Table of contents

### Constructors

- [constructor](VaultFolderDownload.md#constructor)

### Properties

- [downloadEndedAt](VaultFolderDownload.md#downloadendedat)
- [downloadStartedAt](VaultFolderDownload.md#downloadstartedat)
- [downloadedBy](VaultFolderDownload.md#downloadedby)
- [entityUuid](VaultFolderDownload.md#entityuuid)
- [error](VaultFolderDownload.md#error)
- [folderId](VaultFolderDownload.md#folderid)
- [isZipped](VaultFolderDownload.md#iszipped)
- [metadata](VaultFolderDownload.md#metadata)
- [requestedBy](VaultFolderDownload.md#requestedby)
- [zipFilePath](VaultFolderDownload.md#zipfilepath)
- [fields](VaultFolderDownload.md#fields)
- [runtime](VaultFolderDownload.md#runtime)
- [typeName](VaultFolderDownload.md#typename)

### Methods

- [clone](VaultFolderDownload.md#clone)
- [equals](VaultFolderDownload.md#equals)
- [fromBinary](VaultFolderDownload.md#frombinary)
- [fromJson](VaultFolderDownload.md#fromjson)
- [fromJsonString](VaultFolderDownload.md#fromjsonstring)
- [getType](VaultFolderDownload.md#gettype)
- [toBinary](VaultFolderDownload.md#tobinary)
- [toJSON](VaultFolderDownload.md#tojson)
- [toJson](VaultFolderDownload.md#tojson-1)
- [toJsonString](VaultFolderDownload.md#tojsonstring)
- [equals](VaultFolderDownload.md#equals-1)
- [fromBinary](VaultFolderDownload.md#frombinary-1)
- [fromJson](VaultFolderDownload.md#fromjson-1)
- [fromJsonString](VaultFolderDownload.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFolderDownload**(`data?`): [`VaultFolderDownload`](VaultFolderDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFolderDownload`](VaultFolderDownload.md)\> |

#### Returns

[`VaultFolderDownload`](VaultFolderDownload.md)

#### Overrides

Message\&lt;VaultFolderDownload\&gt;.constructor

#### Defined in

src/vault_folders.scailo_pb.ts:394

## Properties

### downloadEndedAt

• **downloadEndedAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the download of the folder finished

**`Generated`**

from field: uint64 download_ended_at = 15;

#### Defined in

src/vault_folders.scailo_pb.ts:378

___

### downloadStartedAt

• **downloadStartedAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the download of the folder began

**`Generated`**

from field: uint64 download_started_at = 14;

#### Defined in

src/vault_folders.scailo_pb.ts:371

___

### downloadedBy

• **downloadedBy**: `string` = `""`

Stores the username of the user who downloaded this folder

**`Generated`**

from field: string downloaded_by = 16;

#### Defined in

src/vault_folders.scailo_pb.ts:385

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vault_folders.scailo_pb.ts:329

___

### error

• **error**: `string` = `""`

Stores an error encountered, if any

**`Generated`**

from field: string error = 17;

#### Defined in

src/vault_folders.scailo_pb.ts:392

___

### folderId

• **folderId**: `bigint` = `protoInt64.zero`

The ID of the folder that is being downloaded

**`Generated`**

from field: uint64 folder_id = 10;

#### Defined in

src/vault_folders.scailo_pb.ts:343

___

### isZipped

• **isZipped**: `boolean` = `false`

Stores if the folder has been zipped

**`Generated`**

from field: bool is_zipped = 12;

#### Defined in

src/vault_folders.scailo_pb.ts:357

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vault_folders.scailo_pb.ts:336

___

### requestedBy

• **requestedBy**: `string` = `""`

Stores the username of the user who requested this download

**`Generated`**

from field: string requested_by = 13;

#### Defined in

src/vault_folders.scailo_pb.ts:364

___

### zipFilePath

• **zipFilePath**: `string` = `""`

The path to the generated zip file

**`Generated`**

from field: string zip_file_path = 11;

#### Defined in

src/vault_folders.scailo_pb.ts:350

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_folders.scailo_pb.ts:401

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_folders.scailo_pb.ts:399

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFolderDownload"``

#### Defined in

src/vault_folders.scailo_pb.ts:400

## Methods

### clone

▸ **clone**(): [`VaultFolderDownload`](VaultFolderDownload.md)

Create a deep copy.

#### Returns

[`VaultFolderDownload`](VaultFolderDownload.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFolderDownload`](VaultFolderDownload.md) \| `PlainMessage`\<[`VaultFolderDownload`](VaultFolderDownload.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFolderDownload`](VaultFolderDownload.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFolderDownload`](VaultFolderDownload.md)\>

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
| `a` | `undefined` \| [`VaultFolderDownload`](VaultFolderDownload.md) \| `PlainMessage`\<[`VaultFolderDownload`](VaultFolderDownload.md)\> |
| `b` | `undefined` \| [`VaultFolderDownload`](VaultFolderDownload.md) \| `PlainMessage`\<[`VaultFolderDownload`](VaultFolderDownload.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_folders.scailo_pb.ts:426

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFolderDownload`](VaultFolderDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFolderDownload`](VaultFolderDownload.md)

#### Defined in

src/vault_folders.scailo_pb.ts:414

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFolderDownload`](VaultFolderDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolderDownload`](VaultFolderDownload.md)

#### Defined in

src/vault_folders.scailo_pb.ts:418

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFolderDownload`](VaultFolderDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFolderDownload`](VaultFolderDownload.md)

#### Defined in

src/vault_folders.scailo_pb.ts:422
