[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultResourcesList

# Class: VaultResourcesList

Describes the message consisting of the list of vault resources

**`Generated`**

from message Scailo.VaultResourcesList

## Hierarchy

- `Message`\<[`VaultResourcesList`](VaultResourcesList.md)\>

  ↳ **`VaultResourcesList`**

## Table of contents

### Constructors

- [constructor](VaultResourcesList.md#constructor)

### Properties

- [files](VaultResourcesList.md#files)
- [folders](VaultResourcesList.md#folders)
- [fields](VaultResourcesList.md#fields)
- [runtime](VaultResourcesList.md#runtime)
- [typeName](VaultResourcesList.md#typename)

### Methods

- [clone](VaultResourcesList.md#clone)
- [equals](VaultResourcesList.md#equals)
- [fromBinary](VaultResourcesList.md#frombinary)
- [fromJson](VaultResourcesList.md#fromjson)
- [fromJsonString](VaultResourcesList.md#fromjsonstring)
- [getType](VaultResourcesList.md#gettype)
- [toBinary](VaultResourcesList.md#tobinary)
- [toJSON](VaultResourcesList.md#tojson)
- [toJson](VaultResourcesList.md#tojson-1)
- [toJsonString](VaultResourcesList.md#tojsonstring)
- [equals](VaultResourcesList.md#equals-1)
- [fromBinary](VaultResourcesList.md#frombinary-1)
- [fromJson](VaultResourcesList.md#fromjson-1)
- [fromJsonString](VaultResourcesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultResourcesList**(`data?`): [`VaultResourcesList`](VaultResourcesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultResourcesList`](VaultResourcesList.md)\> |

#### Returns

[`VaultResourcesList`](VaultResourcesList.md)

#### Overrides

Message\&lt;VaultResourcesList\&gt;.constructor

#### Defined in

[src/vault.scailo_pb.ts:32](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L32)

## Properties

### files

• **files**: [`VaultFile`](VaultFile.md)[] = `[]`

List of files

**`Generated`**

from field: repeated Scailo.VaultFile files = 1;

#### Defined in

[src/vault.scailo_pb.ts:23](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L23)

___

### folders

• **folders**: [`VaultFolder`](VaultFolder.md)[] = `[]`

List of folders

**`Generated`**

from field: repeated Scailo.VaultFolder folders = 2;

#### Defined in

[src/vault.scailo_pb.ts:30](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L30)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault.scailo_pb.ts:39](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L39)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault.scailo_pb.ts:37](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L37)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultResourcesList"``

#### Defined in

[src/vault.scailo_pb.ts:38](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L38)

## Methods

### clone

▸ **clone**(): [`VaultResourcesList`](VaultResourcesList.md)

Create a deep copy.

#### Returns

[`VaultResourcesList`](VaultResourcesList.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultResourcesList`](VaultResourcesList.md) \| `PlainMessage`\<[`VaultResourcesList`](VaultResourcesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultResourcesList`](VaultResourcesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultResourcesList`](VaultResourcesList.md)\>

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
| `a` | `undefined` \| [`VaultResourcesList`](VaultResourcesList.md) \| `PlainMessage`\<[`VaultResourcesList`](VaultResourcesList.md)\> |
| `b` | `undefined` \| [`VaultResourcesList`](VaultResourcesList.md) \| `PlainMessage`\<[`VaultResourcesList`](VaultResourcesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault.scailo_pb.ts:56](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L56)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultResourcesList`](VaultResourcesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultResourcesList`](VaultResourcesList.md)

#### Defined in

[src/vault.scailo_pb.ts:44](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L44)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultResourcesList`](VaultResourcesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultResourcesList`](VaultResourcesList.md)

#### Defined in

[src/vault.scailo_pb.ts:48](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L48)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultResourcesList`](VaultResourcesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultResourcesList`](VaultResourcesList.md)

#### Defined in

[src/vault.scailo_pb.ts:52](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault.scailo_pb.ts#L52)
