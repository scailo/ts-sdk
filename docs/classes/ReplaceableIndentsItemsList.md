[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsItemsList

# Class: ReplaceableIndentsItemsList

Describes the message consisting of the list of replaceable indent items

**`Generated`**

from message Scailo.ReplaceableIndentsItemsList

## Hierarchy

- `Message`\<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\>

  ↳ **`ReplaceableIndentsItemsList`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsItemsList.md#constructor)

### Properties

- [list](ReplaceableIndentsItemsList.md#list)
- [fields](ReplaceableIndentsItemsList.md#fields)
- [runtime](ReplaceableIndentsItemsList.md#runtime)
- [typeName](ReplaceableIndentsItemsList.md#typename)

### Methods

- [clone](ReplaceableIndentsItemsList.md#clone)
- [equals](ReplaceableIndentsItemsList.md#equals)
- [fromBinary](ReplaceableIndentsItemsList.md#frombinary)
- [fromJson](ReplaceableIndentsItemsList.md#fromjson)
- [fromJsonString](ReplaceableIndentsItemsList.md#fromjsonstring)
- [getType](ReplaceableIndentsItemsList.md#gettype)
- [toBinary](ReplaceableIndentsItemsList.md#tobinary)
- [toJSON](ReplaceableIndentsItemsList.md#tojson)
- [toJson](ReplaceableIndentsItemsList.md#tojson-1)
- [toJsonString](ReplaceableIndentsItemsList.md#tojsonstring)
- [equals](ReplaceableIndentsItemsList.md#equals-1)
- [fromBinary](ReplaceableIndentsItemsList.md#frombinary-1)
- [fromJson](ReplaceableIndentsItemsList.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsItemsList**(`data?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Overrides

Message\&lt;ReplaceableIndentsItemsList\&gt;.constructor

#### Defined in

src/replaceable_indents.scailo_pb.ts:922

## Properties

### list

• **list**: [`ReplaceableIndentItem`](ReplaceableIndentItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ReplaceableIndentItem list = 1;

#### Defined in

src/replaceable_indents.scailo_pb.ts:920

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/replaceable_indents.scailo_pb.ts:929

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/replaceable_indents.scailo_pb.ts:927

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsItemsList"``

#### Defined in

src/replaceable_indents.scailo_pb.ts:928

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md) \| `PlainMessage`\<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md) \| `PlainMessage`\<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md) \| `PlainMessage`\<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/replaceable_indents.scailo_pb.ts:945

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:933

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:937

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:941
