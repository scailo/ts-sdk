[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultDuplicateCheckReq

# Class: VaultDuplicateCheckReq

Describes the message to test if the file or folder already exists in the given folder UUID

**`Generated`**

from message Scailo.VaultDuplicateCheckReq

## Hierarchy

- `Message`\<[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)\>

  ↳ **`VaultDuplicateCheckReq`**

## Table of contents

### Constructors

- [constructor](VaultDuplicateCheckReq.md#constructor)

### Properties

- [folderUuid](VaultDuplicateCheckReq.md#folderuuid)
- [name](VaultDuplicateCheckReq.md#name)
- [fields](VaultDuplicateCheckReq.md#fields)
- [runtime](VaultDuplicateCheckReq.md#runtime)
- [typeName](VaultDuplicateCheckReq.md#typename)

### Methods

- [clone](VaultDuplicateCheckReq.md#clone)
- [equals](VaultDuplicateCheckReq.md#equals)
- [fromBinary](VaultDuplicateCheckReq.md#frombinary)
- [fromJson](VaultDuplicateCheckReq.md#fromjson)
- [fromJsonString](VaultDuplicateCheckReq.md#fromjsonstring)
- [getType](VaultDuplicateCheckReq.md#gettype)
- [toBinary](VaultDuplicateCheckReq.md#tobinary)
- [toJSON](VaultDuplicateCheckReq.md#tojson)
- [toJson](VaultDuplicateCheckReq.md#tojson-1)
- [toJsonString](VaultDuplicateCheckReq.md#tojsonstring)
- [equals](VaultDuplicateCheckReq.md#equals-1)
- [fromBinary](VaultDuplicateCheckReq.md#frombinary-1)
- [fromJson](VaultDuplicateCheckReq.md#fromjson-1)
- [fromJsonString](VaultDuplicateCheckReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultDuplicateCheckReq**(`data?`): [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)\> |

#### Returns

[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Overrides

Message\&lt;VaultDuplicateCheckReq\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:1289

## Properties

### folderUuid

• **folderUuid**: `string` = `""`

The UUID of the folder that the file/folder will reside in

**`Generated`**

from field: string folder_uuid = 13;

#### Defined in

src/vault_commons.scailo_pb.ts:1287

___

### name

• **name**: `string` = `""`

The name of the file/folder

**`Generated`**

from field: string name = 10;

#### Defined in

src/vault_commons.scailo_pb.ts:1280

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:1296

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:1294

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultDuplicateCheckReq"``

#### Defined in

src/vault_commons.scailo_pb.ts:1295

## Methods

### clone

▸ **clone**(): [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

Create a deep copy.

#### Returns

[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md) \| `PlainMessage`\<[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)\>

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
| `a` | `undefined` \| [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md) \| `PlainMessage`\<[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)\> |
| `b` | `undefined` \| [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md) \| `PlainMessage`\<[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:1313

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1301

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1305

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultDuplicateCheckReq`](VaultDuplicateCheckReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1309
