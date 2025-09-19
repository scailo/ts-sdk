[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultFileVersionsList

# Class: VaultFileVersionsList

Describes the message consisting of the list of vault file versions

**`Generated`**

from message Scailo.VaultFileVersionsList

## Hierarchy

- `Message`\<[`VaultFileVersionsList`](VaultFileVersionsList.md)\>

  ↳ **`VaultFileVersionsList`**

## Table of contents

### Constructors

- [constructor](VaultFileVersionsList.md#constructor)

### Properties

- [list](VaultFileVersionsList.md#list)
- [fields](VaultFileVersionsList.md#fields)
- [runtime](VaultFileVersionsList.md#runtime)
- [typeName](VaultFileVersionsList.md#typename)

### Methods

- [clone](VaultFileVersionsList.md#clone)
- [equals](VaultFileVersionsList.md#equals)
- [fromBinary](VaultFileVersionsList.md#frombinary)
- [fromJson](VaultFileVersionsList.md#fromjson)
- [fromJsonString](VaultFileVersionsList.md#fromjsonstring)
- [getType](VaultFileVersionsList.md#gettype)
- [toBinary](VaultFileVersionsList.md#tobinary)
- [toJSON](VaultFileVersionsList.md#tojson)
- [toJson](VaultFileVersionsList.md#tojson-1)
- [toJsonString](VaultFileVersionsList.md#tojsonstring)
- [equals](VaultFileVersionsList.md#equals-1)
- [fromBinary](VaultFileVersionsList.md#frombinary-1)
- [fromJson](VaultFileVersionsList.md#fromjson-1)
- [fromJsonString](VaultFileVersionsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultFileVersionsList**(`data?`): [`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultFileVersionsList`](VaultFileVersionsList.md)\> |

#### Returns

[`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Overrides

Message\&lt;VaultFileVersionsList\&gt;.constructor

#### Defined in

[src/vault_files.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L503)

## Properties

### list

• **list**: [`VaultFileVersion`](VaultFileVersion.md)[] = `[]`

List of versions of the file

**`Generated`**

from field: repeated Scailo.VaultFileVersion list = 1;

#### Defined in

[src/vault_files.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L501)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_files.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L510)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_files.scailo_pb.ts:508](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L508)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultFileVersionsList"``

#### Defined in

[src/vault_files.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L509)

## Methods

### clone

▸ **clone**(): [`VaultFileVersionsList`](VaultFileVersionsList.md)

Create a deep copy.

#### Returns

[`VaultFileVersionsList`](VaultFileVersionsList.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultFileVersionsList`](VaultFileVersionsList.md) \| `PlainMessage`\<[`VaultFileVersionsList`](VaultFileVersionsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultFileVersionsList`](VaultFileVersionsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultFileVersionsList`](VaultFileVersionsList.md)\>

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
| `a` | `undefined` \| [`VaultFileVersionsList`](VaultFileVersionsList.md) \| `PlainMessage`\<[`VaultFileVersionsList`](VaultFileVersionsList.md)\> |
| `b` | `undefined` \| [`VaultFileVersionsList`](VaultFileVersionsList.md) \| `PlainMessage`\<[`VaultFileVersionsList`](VaultFileVersionsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_files.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L526)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Defined in

[src/vault_files.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L514)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Defined in

[src/vault_files.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L518)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultFileVersionsList`](VaultFileVersionsList.md)

#### Defined in

[src/vault_files.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_files.scailo_pb.ts#L522)
