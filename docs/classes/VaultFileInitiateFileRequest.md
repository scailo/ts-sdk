[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileInitiateFileRequest

# Class: VaultFileInitiateFileRequest

Describes the parameters necessary to initiate a vault file

**`Generated`**

from message Scailo.VaultFileInitiateFileRequest

## Hierarchy

- `Message`\<[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)\>

  ↳ **`VaultFileInitiateFileRequest`**

## Table of contents

### Constructors

- [constructor](VaultFileInitiateFileRequest.md#constructor)

### Properties

- [entityUuid](VaultFileInitiateFileRequest.md#entityuuid)
- [folderUuid](VaultFileInitiateFileRequest.md#folderuuid)
- [name](VaultFileInitiateFileRequest.md#name)
- [type](VaultFileInitiateFileRequest.md#type)
- [userComment](VaultFileInitiateFileRequest.md#usercomment)
- [fields](VaultFileInitiateFileRequest.md#fields)
- [runtime](VaultFileInitiateFileRequest.md#runtime)
- [typeName](VaultFileInitiateFileRequest.md#typename)

### Methods

- [clone](VaultFileInitiateFileRequest.md#clone)
- [equals](VaultFileInitiateFileRequest.md#equals)
- [fromBinary](VaultFileInitiateFileRequest.md#frombinary)
- [fromJson](VaultFileInitiateFileRequest.md#fromjson)
- [fromJsonString](VaultFileInitiateFileRequest.md#fromjsonstring)
- [getType](VaultFileInitiateFileRequest.md#gettype)
- [toBinary](VaultFileInitiateFileRequest.md#tobinary)
- [toJSON](VaultFileInitiateFileRequest.md#tojson)
- [toJson](VaultFileInitiateFileRequest.md#tojson-1)
- [toJsonString](VaultFileInitiateFileRequest.md#tojsonstring)
- [equals](VaultFileInitiateFileRequest.md#equals-1)
- [fromBinary](VaultFileInitiateFileRequest.md#frombinary-1)
- [fromJson](VaultFileInitiateFileRequest.md#fromjson-1)
- [fromJsonString](VaultFileInitiateFileRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileInitiateFileRequest**(`data?`): [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)\> |

#### Returns

[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Overrides

Message\&lt;VaultFileInitiateFileRequest\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:53

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:23

___

### folderUuid

• **folderUuid**: `string` = `""`

The UUID of the folder that the file is present in

**`Generated`**

from field: string folder_uuid = 13;

#### Defined in

src/vault_files.scailo_pb.ts:51

___

### name

• **name**: `string` = `""`

The name of the file

**`Generated`**

from field: string name = 10;

#### Defined in

src/vault_files.scailo_pb.ts:37

___

### type

• **type**: `string` = `""`

The file type

**`Generated`**

from field: string type = 11;

#### Defined in

src/vault_files.scailo_pb.ts:44

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/vault_files.scailo_pb.ts:30

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:60

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:58

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileInitiateFileRequest"``

#### Defined in

src/vault_files.scailo_pb.ts:59

## Methods

### clone

▸ **clone**(): [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

Create a deep copy.

#### Returns

[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md) \| `PlainMessage`\<[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)\>

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
| `a` | `undefined` \| [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md) \| `PlainMessage`\<[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)\> |
| `b` | `undefined` \| [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md) \| `PlainMessage`\<[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:80

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:68

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:72

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileInitiateFileRequest`](VaultFileInitiateFileRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:76
