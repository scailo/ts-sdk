[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveResources

# Class: EnclaveResources

Describes the resources section of an Enclave

**`Generated`**

from message Scailo.EnclaveResources

## Hierarchy

- `Message`\<[`EnclaveResources`](EnclaveResources.md)\>

  ↳ **`EnclaveResources`**

## Table of contents

### Constructors

- [constructor](EnclaveResources.md#constructor)

### Properties

- [files](EnclaveResources.md#files)
- [folders](EnclaveResources.md#folders)
- [logos](EnclaveResources.md#logos)
- [fields](EnclaveResources.md#fields)
- [runtime](EnclaveResources.md#runtime)
- [typeName](EnclaveResources.md#typename)

### Methods

- [clone](EnclaveResources.md#clone)
- [equals](EnclaveResources.md#equals)
- [fromBinary](EnclaveResources.md#frombinary)
- [fromJson](EnclaveResources.md#fromjson)
- [fromJsonString](EnclaveResources.md#fromjsonstring)
- [getType](EnclaveResources.md#gettype)
- [toBinary](EnclaveResources.md#tobinary)
- [toJSON](EnclaveResources.md#tojson)
- [toJson](EnclaveResources.md#tojson-1)
- [toJsonString](EnclaveResources.md#tojsonstring)
- [equals](EnclaveResources.md#equals-1)
- [fromBinary](EnclaveResources.md#frombinary-1)
- [fromJson](EnclaveResources.md#fromjson-1)
- [fromJsonString](EnclaveResources.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveResources**(`data?`): [`EnclaveResources`](EnclaveResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveResources`](EnclaveResources.md)\> |

#### Returns

[`EnclaveResources`](EnclaveResources.md)

#### Overrides

Message\&lt;EnclaveResources\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1080)

## Properties

### files

• **files**: `string`[] = `[]`

Stores the list of files that need to be accessible by the Enclave

**`Generated`**

from field: repeated string files = 3;

#### Defined in

[src/vault_commons.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1078)

___

### folders

• **folders**: `string`[] = `[]`

Stores the list of folders that need to be accessible by the Enclave

**`Generated`**

from field: repeated string folders = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1071)

___

### logos

• **logos**: `string`[] = `[]`

Stores the list of logos that are available

**`Generated`**

from field: repeated string logos = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1064)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1087](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1087)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1085)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveResources"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1086)

## Methods

### clone

▸ **clone**(): [`EnclaveResources`](EnclaveResources.md)

Create a deep copy.

#### Returns

[`EnclaveResources`](EnclaveResources.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveResources`](EnclaveResources.md) \| `PlainMessage`\<[`EnclaveResources`](EnclaveResources.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveResources`](EnclaveResources.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveResources`](EnclaveResources.md)\>

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
| `a` | `undefined` \| [`EnclaveResources`](EnclaveResources.md) \| `PlainMessage`\<[`EnclaveResources`](EnclaveResources.md)\> |
| `b` | `undefined` \| [`EnclaveResources`](EnclaveResources.md) \| `PlainMessage`\<[`EnclaveResources`](EnclaveResources.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1105](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1105)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveResources`](EnclaveResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveResources`](EnclaveResources.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1093](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1093)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveResources`](EnclaveResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveResources`](EnclaveResources.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1097)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveResources`](EnclaveResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveResources`](EnclaveResources.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/vault_commons.scailo_pb.ts#L1101)
