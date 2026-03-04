[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveFrameSetupList

# Class: EnclaveFrameSetupList

Describes the list of enclave frames that have been setup

**`Generated`**

from message Scailo.EnclaveFrameSetupList

## Hierarchy

- `Message`\<[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)\>

  ↳ **`EnclaveFrameSetupList`**

## Table of contents

### Constructors

- [constructor](EnclaveFrameSetupList.md#constructor)

### Properties

- [list](EnclaveFrameSetupList.md#list)
- [fields](EnclaveFrameSetupList.md#fields)
- [runtime](EnclaveFrameSetupList.md#runtime)
- [typeName](EnclaveFrameSetupList.md#typename)

### Methods

- [clone](EnclaveFrameSetupList.md#clone)
- [equals](EnclaveFrameSetupList.md#equals)
- [fromBinary](EnclaveFrameSetupList.md#frombinary)
- [fromJson](EnclaveFrameSetupList.md#fromjson)
- [fromJsonString](EnclaveFrameSetupList.md#fromjsonstring)
- [getType](EnclaveFrameSetupList.md#gettype)
- [toBinary](EnclaveFrameSetupList.md#tobinary)
- [toJSON](EnclaveFrameSetupList.md#tojson)
- [toJson](EnclaveFrameSetupList.md#tojson-1)
- [toJsonString](EnclaveFrameSetupList.md#tojsonstring)
- [equals](EnclaveFrameSetupList.md#equals-1)
- [fromBinary](EnclaveFrameSetupList.md#frombinary-1)
- [fromJson](EnclaveFrameSetupList.md#fromjson-1)
- [fromJsonString](EnclaveFrameSetupList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveFrameSetupList**(`data?`): [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)\> |

#### Returns

[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Overrides

Message\&lt;EnclaveFrameSetupList\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2767](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2767)

## Properties

### list

• **list**: [`EnclaveFrameSetup`](EnclaveFrameSetup.md)[] = `[]`

List of setup frames

**`Generated`**

from field: repeated Scailo.EnclaveFrameSetup list = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2765](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2765)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2774](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2774)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2772](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2772)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveFrameSetupList"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2773](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2773)

## Methods

### clone

▸ **clone**(): [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

Create a deep copy.

#### Returns

[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md) \| `PlainMessage`\<[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)\>

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
| `a` | `undefined` \| [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md) \| `PlainMessage`\<[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)\> |
| `b` | `undefined` \| [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md) \| `PlainMessage`\<[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2790](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2790)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2778](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2778)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2782](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2782)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameSetupList`](EnclaveFrameSetupList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2786](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L2786)
