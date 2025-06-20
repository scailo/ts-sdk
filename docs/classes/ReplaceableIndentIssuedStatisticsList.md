[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentIssuedStatisticsList

# Class: ReplaceableIndentIssuedStatisticsList

Describes the list of issued statistics of the replaceable indent

**`Generated`**

from message Scailo.ReplaceableIndentIssuedStatisticsList

## Hierarchy

- `Message`\<[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)\>

  ↳ **`ReplaceableIndentIssuedStatisticsList`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentIssuedStatisticsList.md#constructor)

### Properties

- [list](ReplaceableIndentIssuedStatisticsList.md#list)
- [fields](ReplaceableIndentIssuedStatisticsList.md#fields)
- [runtime](ReplaceableIndentIssuedStatisticsList.md#runtime)
- [typeName](ReplaceableIndentIssuedStatisticsList.md#typename)

### Methods

- [clone](ReplaceableIndentIssuedStatisticsList.md#clone)
- [equals](ReplaceableIndentIssuedStatisticsList.md#equals)
- [fromBinary](ReplaceableIndentIssuedStatisticsList.md#frombinary)
- [fromJson](ReplaceableIndentIssuedStatisticsList.md#fromjson)
- [fromJsonString](ReplaceableIndentIssuedStatisticsList.md#fromjsonstring)
- [getType](ReplaceableIndentIssuedStatisticsList.md#gettype)
- [toBinary](ReplaceableIndentIssuedStatisticsList.md#tobinary)
- [toJSON](ReplaceableIndentIssuedStatisticsList.md#tojson)
- [toJson](ReplaceableIndentIssuedStatisticsList.md#tojson-1)
- [toJsonString](ReplaceableIndentIssuedStatisticsList.md#tojsonstring)
- [equals](ReplaceableIndentIssuedStatisticsList.md#equals-1)
- [fromBinary](ReplaceableIndentIssuedStatisticsList.md#frombinary-1)
- [fromJson](ReplaceableIndentIssuedStatisticsList.md#fromjson-1)
- [fromJsonString](ReplaceableIndentIssuedStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentIssuedStatisticsList**(`data?`): [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)\> |

#### Returns

[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Overrides

Message\&lt;ReplaceableIndentIssuedStatisticsList\&gt;.constructor

#### Defined in

src/replaceable_indents.scailo_pb.ts:2054

## Properties

### list

• **list**: [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)[] = `[]`

**`Generated`**

from field: repeated Scailo.ReplaceableIndentIssuedStatistics list = 1;

#### Defined in

src/replaceable_indents.scailo_pb.ts:2052

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/replaceable_indents.scailo_pb.ts:2061

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/replaceable_indents.scailo_pb.ts:2059

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentIssuedStatisticsList"``

#### Defined in

src/replaceable_indents.scailo_pb.ts:2060

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md) \| `PlainMessage`\<[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md) \| `PlainMessage`\<[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md) \| `PlainMessage`\<[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/replaceable_indents.scailo_pb.ts:2077

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:2065

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:2069

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentIssuedStatisticsList`](ReplaceableIndentIssuedStatisticsList.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:2073
