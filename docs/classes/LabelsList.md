[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelsList

# Class: LabelsList

Describes the data structure that stores a list of labels

**`Generated`**

from message Scailo.LabelsList

## Hierarchy

- `Message`\<[`LabelsList`](LabelsList.md)\>

  ↳ **`LabelsList`**

## Table of contents

### Constructors

- [constructor](LabelsList.md#constructor)

### Properties

- [list](LabelsList.md#list)
- [fields](LabelsList.md#fields)
- [runtime](LabelsList.md#runtime)
- [typeName](LabelsList.md#typename)

### Methods

- [clone](LabelsList.md#clone)
- [equals](LabelsList.md#equals)
- [fromBinary](LabelsList.md#frombinary)
- [fromJson](LabelsList.md#fromjson)
- [fromJsonString](LabelsList.md#fromjsonstring)
- [getType](LabelsList.md#gettype)
- [toBinary](LabelsList.md#tobinary)
- [toJSON](LabelsList.md#tojson)
- [toJson](LabelsList.md#tojson-1)
- [toJsonString](LabelsList.md#tojsonstring)
- [equals](LabelsList.md#equals-1)
- [fromBinary](LabelsList.md#frombinary-1)
- [fromJson](LabelsList.md#fromjson-1)
- [fromJsonString](LabelsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelsList**(`data?`): [`LabelsList`](LabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelsList`](LabelsList.md)\> |

#### Returns

[`LabelsList`](LabelsList.md)

#### Overrides

Message\&lt;LabelsList\&gt;.constructor

#### Defined in

[src/labels.scailo_pb.ts:149](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L149)

## Properties

### list

• **list**: [`Label`](Label.md)[] = `[]`

List of labels

**`Generated`**

from field: repeated Scailo.Label list = 1;

#### Defined in

[src/labels.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L147)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/labels.scailo_pb.ts:156](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L156)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/labels.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L154)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelsList"``

#### Defined in

[src/labels.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L155)

## Methods

### clone

▸ **clone**(): [`LabelsList`](LabelsList.md)

Create a deep copy.

#### Returns

[`LabelsList`](LabelsList.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelsList`](LabelsList.md) \| `PlainMessage`\<[`LabelsList`](LabelsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelsList`](LabelsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelsList`](LabelsList.md)\>

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
| `a` | `undefined` \| [`LabelsList`](LabelsList.md) \| `PlainMessage`\<[`LabelsList`](LabelsList.md)\> |
| `b` | `undefined` \| [`LabelsList`](LabelsList.md) \| `PlainMessage`\<[`LabelsList`](LabelsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/labels.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L172)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelsList`](LabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelsList`](LabelsList.md)

#### Defined in

[src/labels.scailo_pb.ts:160](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L160)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelsList`](LabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsList`](LabelsList.md)

#### Defined in

[src/labels.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L164)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelsList`](LabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsList`](LabelsList.md)

#### Defined in

[src/labels.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L168)
