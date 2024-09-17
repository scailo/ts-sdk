[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileVersion

# Class: VaultFileVersion

Describes the parameres of a version of each file

**`Generated`**

from message Scailo.VaultFileVersion

## Hierarchy

- `Message`\<[`VaultFileVersion`](VaultFileVersion.md)\>

  ↳ **`VaultFileVersion`**

## Table of contents

### Constructors

- [constructor](VaultFileVersion.md#constructor)

### Properties

- [completedAt](VaultFileVersion.md#completedat)
- [entityUuid](VaultFileVersion.md#entityuuid)
- [metadata](VaultFileVersion.md#metadata)
- [name](VaultFileVersion.md#name)
- [size](VaultFileVersion.md#size)
- [type](VaultFileVersion.md#type)
- [vaultFileId](VaultFileVersion.md#vaultfileid)
- [fields](VaultFileVersion.md#fields)
- [runtime](VaultFileVersion.md#runtime)
- [typeName](VaultFileVersion.md#typename)

### Methods

- [clone](VaultFileVersion.md#clone)
- [equals](VaultFileVersion.md#equals)
- [fromBinary](VaultFileVersion.md#frombinary)
- [fromJson](VaultFileVersion.md#fromjson)
- [fromJsonString](VaultFileVersion.md#fromjsonstring)
- [getType](VaultFileVersion.md#gettype)
- [toBinary](VaultFileVersion.md#tobinary)
- [toJSON](VaultFileVersion.md#tojson)
- [toJson](VaultFileVersion.md#tojson-1)
- [toJsonString](VaultFileVersion.md#tojsonstring)
- [equals](VaultFileVersion.md#equals-1)
- [fromBinary](VaultFileVersion.md#frombinary-1)
- [fromJson](VaultFileVersion.md#fromjson-1)
- [fromJsonString](VaultFileVersion.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileVersion**(`data?`): [`VaultFileVersion`](VaultFileVersion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileVersion`](VaultFileVersion.md)\> |

#### Returns

[`VaultFileVersion`](VaultFileVersion.md)

#### Overrides

Message\&lt;VaultFileVersion\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:455

## Properties

### completedAt

• **completedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the file version upload was completed

**`Generated`**

from field: uint64 completed_at = 6;

#### Defined in

src/vault_files.scailo_pb.ts:425

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:411

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vault_files.scailo_pb.ts:418

___

### name

• **name**: `string` = `""`

The name of the file

**`Generated`**

from field: string name = 11;

#### Defined in

src/vault_files.scailo_pb.ts:439

___

### size

• **size**: `bigint` = `protoInt64.zero`

The size of the file version in bytes

**`Generated`**

from field: uint64 size = 20;

#### Defined in

src/vault_files.scailo_pb.ts:453

___

### type

• **type**: `string` = `""`

The file type

**`Generated`**

from field: string type = 12;

#### Defined in

src/vault_files.scailo_pb.ts:446

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

Stores the ID of the file that the version belongs to

**`Generated`**

from field: uint64 vault_file_id = 10;

#### Defined in

src/vault_files.scailo_pb.ts:432

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:462

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:460

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileVersion"``

#### Defined in

src/vault_files.scailo_pb.ts:461

## Methods

### clone

▸ **clone**(): [`VaultFileVersion`](VaultFileVersion.md)

Create a deep copy.

#### Returns

[`VaultFileVersion`](VaultFileVersion.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileVersion`](VaultFileVersion.md) \| `PlainMessage`\<[`VaultFileVersion`](VaultFileVersion.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileVersion`](VaultFileVersion.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileVersion`](VaultFileVersion.md)\>

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
| `a` | `undefined` \| [`VaultFileVersion`](VaultFileVersion.md) \| `PlainMessage`\<[`VaultFileVersion`](VaultFileVersion.md)\> |
| `b` | `undefined` \| [`VaultFileVersion`](VaultFileVersion.md) \| `PlainMessage`\<[`VaultFileVersion`](VaultFileVersion.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:484

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileVersion`](VaultFileVersion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileVersion`](VaultFileVersion.md)

#### Defined in

src/vault_files.scailo_pb.ts:472

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileVersion`](VaultFileVersion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileVersion`](VaultFileVersion.md)

#### Defined in

src/vault_files.scailo_pb.ts:476

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileVersion`](VaultFileVersion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileVersion`](VaultFileVersion.md)

#### Defined in

src/vault_files.scailo_pb.ts:480
