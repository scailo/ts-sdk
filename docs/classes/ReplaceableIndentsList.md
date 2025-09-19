[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsList

# Class: ReplaceableIndentsList

Describes the message consisting of the list of replaceable indents

**`Generated`**

from message Scailo.ReplaceableIndentsList

## Hierarchy

- `Message`\<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\>

  ↳ **`ReplaceableIndentsList`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsList.md#constructor)

### Properties

- [list](ReplaceableIndentsList.md#list)
- [fields](ReplaceableIndentsList.md#fields)
- [runtime](ReplaceableIndentsList.md#runtime)
- [typeName](ReplaceableIndentsList.md#typename)

### Methods

- [clone](ReplaceableIndentsList.md#clone)
- [equals](ReplaceableIndentsList.md#equals)
- [fromBinary](ReplaceableIndentsList.md#frombinary)
- [fromJson](ReplaceableIndentsList.md#fromjson)
- [fromJsonString](ReplaceableIndentsList.md#fromjsonstring)
- [getType](ReplaceableIndentsList.md#gettype)
- [toBinary](ReplaceableIndentsList.md#tobinary)
- [toJSON](ReplaceableIndentsList.md#tojson)
- [toJson](ReplaceableIndentsList.md#tojson-1)
- [toJsonString](ReplaceableIndentsList.md#tojsonstring)
- [equals](ReplaceableIndentsList.md#equals-1)
- [fromBinary](ReplaceableIndentsList.md#frombinary-1)
- [fromJson](ReplaceableIndentsList.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsList**(`data?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Overrides

Message\&lt;ReplaceableIndentsList\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L880)

## Properties

### list

• **list**: [`ReplaceableIndent`](ReplaceableIndent.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ReplaceableIndent list = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L878)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L887)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L885)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsList"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L886)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsList`](ReplaceableIndentsList.md) \| `PlainMessage`\<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsList`](ReplaceableIndentsList.md) \| `PlainMessage`\<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsList`](ReplaceableIndentsList.md) \| `PlainMessage`\<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L903)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L891)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L895)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L899)
