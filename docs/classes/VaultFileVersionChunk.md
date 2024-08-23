[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileVersionChunk

# Class: VaultFileVersionChunk

Describes the parameters of each chunk of a file version

**`Generated`**

from message Scailo.VaultFileVersionChunk

## Hierarchy

- `Message`\<[`VaultFileVersionChunk`](VaultFileVersionChunk.md)\>

  ↳ **`VaultFileVersionChunk`**

## Table of contents

### Constructors

- [constructor](VaultFileVersionChunk.md#constructor)

### Properties

- [checksum](VaultFileVersionChunk.md#checksum)
- [chunk](VaultFileVersionChunk.md#chunk)
- [entityUuid](VaultFileVersionChunk.md#entityuuid)
- [metadata](VaultFileVersionChunk.md#metadata)
- [sequenceId](VaultFileVersionChunk.md#sequenceid)
- [vaultFileVersionId](VaultFileVersionChunk.md#vaultfileversionid)
- [fields](VaultFileVersionChunk.md#fields)
- [runtime](VaultFileVersionChunk.md#runtime)
- [typeName](VaultFileVersionChunk.md#typename)

### Methods

- [clone](VaultFileVersionChunk.md#clone)
- [equals](VaultFileVersionChunk.md#equals)
- [fromBinary](VaultFileVersionChunk.md#frombinary)
- [fromJson](VaultFileVersionChunk.md#fromjson)
- [fromJsonString](VaultFileVersionChunk.md#fromjsonstring)
- [getType](VaultFileVersionChunk.md#gettype)
- [toBinary](VaultFileVersionChunk.md#tobinary)
- [toJSON](VaultFileVersionChunk.md#tojson)
- [toJson](VaultFileVersionChunk.md#tojson-1)
- [toJsonString](VaultFileVersionChunk.md#tojsonstring)
- [equals](VaultFileVersionChunk.md#equals-1)
- [fromBinary](VaultFileVersionChunk.md#frombinary-1)
- [fromJson](VaultFileVersionChunk.md#fromjson-1)
- [fromJsonString](VaultFileVersionChunk.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileVersionChunk**(`data?`): [`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileVersionChunk`](VaultFileVersionChunk.md)\> |

#### Returns

[`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Overrides

Message\&lt;VaultFileVersionChunk\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:638

## Properties

### checksum

• **checksum**: `string` = `""`

Stores the checksum of the chunk

**`Generated`**

from field: string checksum = 13;

#### Defined in

src/vault_files.scailo_pb.ts:636

___

### chunk

• **chunk**: `Uint8Array`

Stores the content of the chunk

**`Generated`**

from field: bytes chunk = 12;

#### Defined in

src/vault_files.scailo_pb.ts:629

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:601

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vault_files.scailo_pb.ts:608

___

### sequenceId

• **sequenceId**: `bigint` = `protoInt64.zero`

Stores the sequence ID of this chunk

**`Generated`**

from field: uint64 sequence_id = 11;

#### Defined in

src/vault_files.scailo_pb.ts:622

___

### vaultFileVersionId

• **vaultFileVersionId**: `bigint` = `protoInt64.zero`

Stores the ID of the file version to which this chunk belongs

**`Generated`**

from field: uint64 vault_file_version_id = 10;

#### Defined in

src/vault_files.scailo_pb.ts:615

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:645

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:643

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileVersionChunk"``

#### Defined in

src/vault_files.scailo_pb.ts:644

## Methods

### clone

▸ **clone**(): [`VaultFileVersionChunk`](VaultFileVersionChunk.md)

Create a deep copy.

#### Returns

[`VaultFileVersionChunk`](VaultFileVersionChunk.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileVersionChunk`](VaultFileVersionChunk.md) \| `PlainMessage`\<[`VaultFileVersionChunk`](VaultFileVersionChunk.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileVersionChunk`](VaultFileVersionChunk.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileVersionChunk`](VaultFileVersionChunk.md)\>

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
| `a` | `undefined` \| [`VaultFileVersionChunk`](VaultFileVersionChunk.md) \| `PlainMessage`\<[`VaultFileVersionChunk`](VaultFileVersionChunk.md)\> |
| `b` | `undefined` \| [`VaultFileVersionChunk`](VaultFileVersionChunk.md) \| `PlainMessage`\<[`VaultFileVersionChunk`](VaultFileVersionChunk.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:666

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Defined in

src/vault_files.scailo_pb.ts:654

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Defined in

src/vault_files.scailo_pb.ts:658

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileVersionChunk`](VaultFileVersionChunk.md)

#### Defined in

src/vault_files.scailo_pb.ts:662
