[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFilesList

# Class: VaultFilesList

Describes the message consisting of the list of vault files

**`Generated`**

from message Scailo.VaultFilesList

## Hierarchy

- `Message`\<[`VaultFilesList`](VaultFilesList.md)\>

  ↳ **`VaultFilesList`**

## Table of contents

### Constructors

- [constructor](VaultFilesList.md#constructor)

### Properties

- [list](VaultFilesList.md#list)
- [fields](VaultFilesList.md#fields)
- [runtime](VaultFilesList.md#runtime)
- [typeName](VaultFilesList.md#typename)

### Methods

- [clone](VaultFilesList.md#clone)
- [equals](VaultFilesList.md#equals)
- [fromBinary](VaultFilesList.md#frombinary)
- [fromJson](VaultFilesList.md#fromjson)
- [fromJsonString](VaultFilesList.md#fromjsonstring)
- [getType](VaultFilesList.md#gettype)
- [toBinary](VaultFilesList.md#tobinary)
- [toJSON](VaultFilesList.md#tojson)
- [toJson](VaultFilesList.md#tojson-1)
- [toJsonString](VaultFilesList.md#tojsonstring)
- [equals](VaultFilesList.md#equals-1)
- [fromBinary](VaultFilesList.md#frombinary-1)
- [fromJson](VaultFilesList.md#fromjson-1)
- [fromJsonString](VaultFilesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFilesList**(`data?`): [`VaultFilesList`](VaultFilesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFilesList`](VaultFilesList.md)\> |

#### Returns

[`VaultFilesList`](VaultFilesList.md)

#### Overrides

Message\&lt;VaultFilesList\&gt;.constructor

#### Defined in

[src/vault_files.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L371)

## Properties

### list

• **list**: [`VaultFile`](VaultFile.md)[] = `[]`

List of files

**`Generated`**

from field: repeated Scailo.VaultFile list = 1;

#### Defined in

[src/vault_files.scailo_pb.ts:369](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L369)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_files.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L378)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_files.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L376)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFilesList"``

#### Defined in

[src/vault_files.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L377)

## Methods

### clone

▸ **clone**(): [`VaultFilesList`](VaultFilesList.md)

Create a deep copy.

#### Returns

[`VaultFilesList`](VaultFilesList.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFilesList`](VaultFilesList.md) \| `PlainMessage`\<[`VaultFilesList`](VaultFilesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFilesList`](VaultFilesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFilesList`](VaultFilesList.md)\>

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
| `a` | `undefined` \| [`VaultFilesList`](VaultFilesList.md) \| `PlainMessage`\<[`VaultFilesList`](VaultFilesList.md)\> |
| `b` | `undefined` \| [`VaultFilesList`](VaultFilesList.md) \| `PlainMessage`\<[`VaultFilesList`](VaultFilesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_files.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L394)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFilesList`](VaultFilesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFilesList`](VaultFilesList.md)

#### Defined in

[src/vault_files.scailo_pb.ts:382](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L382)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFilesList`](VaultFilesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFilesList`](VaultFilesList.md)

#### Defined in

[src/vault_files.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L386)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFilesList`](VaultFilesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFilesList`](VaultFilesList.md)

#### Defined in

[src/vault_files.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L390)
