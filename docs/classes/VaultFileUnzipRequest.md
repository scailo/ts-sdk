[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileUnzipRequest

# Class: VaultFileUnzipRequest

Stores the request to unzip a zipped file

**`Generated`**

from message Scailo.VaultFileUnzipRequest

## Hierarchy

- `Message`\<[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)\>

  ↳ **`VaultFileUnzipRequest`**

## Table of contents

### Constructors

- [constructor](VaultFileUnzipRequest.md#constructor)

### Properties

- [deleteAfterUnzip](VaultFileUnzipRequest.md#deleteafterunzip)
- [uuid](VaultFileUnzipRequest.md#uuid)
- [fields](VaultFileUnzipRequest.md#fields)
- [runtime](VaultFileUnzipRequest.md#runtime)
- [typeName](VaultFileUnzipRequest.md#typename)

### Methods

- [clone](VaultFileUnzipRequest.md#clone)
- [equals](VaultFileUnzipRequest.md#equals)
- [fromBinary](VaultFileUnzipRequest.md#frombinary)
- [fromJson](VaultFileUnzipRequest.md#fromjson)
- [fromJsonString](VaultFileUnzipRequest.md#fromjsonstring)
- [getType](VaultFileUnzipRequest.md#gettype)
- [toBinary](VaultFileUnzipRequest.md#tobinary)
- [toJSON](VaultFileUnzipRequest.md#tojson)
- [toJson](VaultFileUnzipRequest.md#tojson-1)
- [toJsonString](VaultFileUnzipRequest.md#tojsonstring)
- [equals](VaultFileUnzipRequest.md#equals-1)
- [fromBinary](VaultFileUnzipRequest.md#frombinary-1)
- [fromJson](VaultFileUnzipRequest.md#fromjson-1)
- [fromJsonString](VaultFileUnzipRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileUnzipRequest**(`data?`): [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)\> |

#### Returns

[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Overrides

Message\&lt;VaultFileUnzipRequest\&gt;.constructor

#### Defined in

src/vault_files.scailo_pb.ts:692

## Properties

### deleteAfterUnzip

• **deleteAfterUnzip**: `boolean` = `false`

Stores if the file needs to be deleted after unzipping

**`Generated`**

from field: bool delete_after_unzip = 2;

#### Defined in

src/vault_files.scailo_pb.ts:690

___

### uuid

• **uuid**: `string` = `""`

The UUID of the file that needs to be unzipped

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault_files.scailo_pb.ts:683

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_files.scailo_pb.ts:699

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_files.scailo_pb.ts:697

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileUnzipRequest"``

#### Defined in

src/vault_files.scailo_pb.ts:698

## Methods

### clone

▸ **clone**(): [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

Create a deep copy.

#### Returns

[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md) \| `PlainMessage`\<[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)\>

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
| `a` | `undefined` \| [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md) \| `PlainMessage`\<[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)\> |
| `b` | `undefined` \| [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md) \| `PlainMessage`\<[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_files.scailo_pb.ts:716

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:704

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:708

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileUnzipRequest`](VaultFileUnzipRequest.md)

#### Defined in

src/vault_files.scailo_pb.ts:712
