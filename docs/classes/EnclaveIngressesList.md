[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveIngressesList

# Class: EnclaveIngressesList

Describes the message consisting of the list of enclave ingresses

**`Generated`**

from message Scailo.EnclaveIngressesList

## Hierarchy

- `Message`\<[`EnclaveIngressesList`](EnclaveIngressesList.md)\>

  ↳ **`EnclaveIngressesList`**

## Table of contents

### Constructors

- [constructor](EnclaveIngressesList.md#constructor)

### Properties

- [list](EnclaveIngressesList.md#list)
- [fields](EnclaveIngressesList.md#fields)
- [runtime](EnclaveIngressesList.md#runtime)
- [typeName](EnclaveIngressesList.md#typename)

### Methods

- [clone](EnclaveIngressesList.md#clone)
- [equals](EnclaveIngressesList.md#equals)
- [fromBinary](EnclaveIngressesList.md#frombinary)
- [fromJson](EnclaveIngressesList.md#fromjson)
- [fromJsonString](EnclaveIngressesList.md#fromjsonstring)
- [getType](EnclaveIngressesList.md#gettype)
- [toBinary](EnclaveIngressesList.md#tobinary)
- [toJSON](EnclaveIngressesList.md#tojson)
- [toJson](EnclaveIngressesList.md#tojson-1)
- [toJsonString](EnclaveIngressesList.md#tojsonstring)
- [equals](EnclaveIngressesList.md#equals-1)
- [fromBinary](EnclaveIngressesList.md#frombinary-1)
- [fromJson](EnclaveIngressesList.md#fromjson-1)
- [fromJsonString](EnclaveIngressesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveIngressesList**(`data?`): [`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveIngressesList`](EnclaveIngressesList.md)\> |

#### Returns

[`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Overrides

Message\&lt;EnclaveIngressesList\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1418)

## Properties

### list

• **list**: [`EnclaveIngress`](EnclaveIngress.md)[] = `[]`

List of runs

**`Generated`**

from field: repeated Scailo.EnclaveIngress list = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1416](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1416)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1425](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1425)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1423)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveIngressesList"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1424)

## Methods

### clone

▸ **clone**(): [`EnclaveIngressesList`](EnclaveIngressesList.md)

Create a deep copy.

#### Returns

[`EnclaveIngressesList`](EnclaveIngressesList.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveIngressesList`](EnclaveIngressesList.md) \| `PlainMessage`\<[`EnclaveIngressesList`](EnclaveIngressesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveIngressesList`](EnclaveIngressesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveIngressesList`](EnclaveIngressesList.md)\>

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
| `a` | `undefined` \| [`EnclaveIngressesList`](EnclaveIngressesList.md) \| `PlainMessage`\<[`EnclaveIngressesList`](EnclaveIngressesList.md)\> |
| `b` | `undefined` \| [`EnclaveIngressesList`](EnclaveIngressesList.md) \| `PlainMessage`\<[`EnclaveIngressesList`](EnclaveIngressesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1441](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1441)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1429](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1429)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1433)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngressesList`](EnclaveIngressesList.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1437](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/vault_commons.scailo_pb.ts#L1437)
