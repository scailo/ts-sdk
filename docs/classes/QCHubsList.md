[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCHubsList

# Class: QCHubsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.QCHubsList

## Hierarchy

- `Message`\<[`QCHubsList`](QCHubsList.md)\>

  ↳ **`QCHubsList`**

## Table of contents

### Constructors

- [constructor](QCHubsList.md#constructor)

### Properties

- [list](QCHubsList.md#list)
- [fields](QCHubsList.md#fields)
- [runtime](QCHubsList.md#runtime)
- [typeName](QCHubsList.md#typename)

### Methods

- [clone](QCHubsList.md#clone)
- [equals](QCHubsList.md#equals)
- [fromBinary](QCHubsList.md#frombinary)
- [fromJson](QCHubsList.md#fromjson)
- [fromJsonString](QCHubsList.md#fromjsonstring)
- [getType](QCHubsList.md#gettype)
- [toBinary](QCHubsList.md#tobinary)
- [toJSON](QCHubsList.md#tojson)
- [toJson](QCHubsList.md#tojson-1)
- [toJsonString](QCHubsList.md#tojsonstring)
- [equals](QCHubsList.md#equals-1)
- [fromBinary](QCHubsList.md#frombinary-1)
- [fromJson](QCHubsList.md#fromjson-1)
- [fromJsonString](QCHubsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCHubsList**(`data?`): [`QCHubsList`](QCHubsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCHubsList`](QCHubsList.md)\> |

#### Returns

[`QCHubsList`](QCHubsList.md)

#### Overrides

Message\&lt;QCHubsList\&gt;.constructor

#### Defined in

[src/qc_hubs.scailo_pb.ts:417](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L417)

## Properties

### list

• **list**: [`QCHub`](QCHub.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QCHub list = 1;

#### Defined in

[src/qc_hubs.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L415)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_hubs.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L424)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_hubs.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L422)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCHubsList"``

#### Defined in

[src/qc_hubs.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L423)

## Methods

### clone

▸ **clone**(): [`QCHubsList`](QCHubsList.md)

Create a deep copy.

#### Returns

[`QCHubsList`](QCHubsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCHubsList`](QCHubsList.md) \| `PlainMessage`\<[`QCHubsList`](QCHubsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCHubsList`](QCHubsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCHubsList`](QCHubsList.md)\>

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
| `a` | `undefined` \| [`QCHubsList`](QCHubsList.md) \| `PlainMessage`\<[`QCHubsList`](QCHubsList.md)\> |
| `b` | `undefined` \| [`QCHubsList`](QCHubsList.md) \| `PlainMessage`\<[`QCHubsList`](QCHubsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_hubs.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L440)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCHubsList`](QCHubsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCHubsList`](QCHubsList.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L428)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCHubsList`](QCHubsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsList`](QCHubsList.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L432)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCHubsList`](QCHubsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsList`](QCHubsList.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L436)
