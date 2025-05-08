[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentIssuedStatisticsList

# Class: AssetIndentIssuedStatisticsList

Describes the list of issued statistics of the asset indent

**`Generated`**

from message Scailo.AssetIndentIssuedStatisticsList

## Hierarchy

- `Message`\<[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)\>

  ↳ **`AssetIndentIssuedStatisticsList`**

## Table of contents

### Constructors

- [constructor](AssetIndentIssuedStatisticsList.md#constructor)

### Properties

- [list](AssetIndentIssuedStatisticsList.md#list)
- [fields](AssetIndentIssuedStatisticsList.md#fields)
- [runtime](AssetIndentIssuedStatisticsList.md#runtime)
- [typeName](AssetIndentIssuedStatisticsList.md#typename)

### Methods

- [clone](AssetIndentIssuedStatisticsList.md#clone)
- [equals](AssetIndentIssuedStatisticsList.md#equals)
- [fromBinary](AssetIndentIssuedStatisticsList.md#frombinary)
- [fromJson](AssetIndentIssuedStatisticsList.md#fromjson)
- [fromJsonString](AssetIndentIssuedStatisticsList.md#fromjsonstring)
- [getType](AssetIndentIssuedStatisticsList.md#gettype)
- [toBinary](AssetIndentIssuedStatisticsList.md#tobinary)
- [toJSON](AssetIndentIssuedStatisticsList.md#tojson)
- [toJson](AssetIndentIssuedStatisticsList.md#tojson-1)
- [toJsonString](AssetIndentIssuedStatisticsList.md#tojsonstring)
- [equals](AssetIndentIssuedStatisticsList.md#equals-1)
- [fromBinary](AssetIndentIssuedStatisticsList.md#frombinary-1)
- [fromJson](AssetIndentIssuedStatisticsList.md#fromjson-1)
- [fromJsonString](AssetIndentIssuedStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentIssuedStatisticsList**(`data?`): [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)\> |

#### Returns

[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Overrides

Message\&lt;AssetIndentIssuedStatisticsList\&gt;.constructor

#### Defined in

src/asset_indents.scailo_pb.ts:1916

## Properties

### list

• **list**: [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)[] = `[]`

**`Generated`**

from field: repeated Scailo.AssetIndentIssuedStatistics list = 1;

#### Defined in

src/asset_indents.scailo_pb.ts:1914

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:1923

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:1921

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentIssuedStatisticsList"``

#### Defined in

src/asset_indents.scailo_pb.ts:1922

## Methods

### clone

▸ **clone**(): [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

Create a deep copy.

#### Returns

[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md) \| `PlainMessage`\<[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)\>

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
| `a` | `undefined` \| [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md) \| `PlainMessage`\<[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)\> |
| `b` | `undefined` \| [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md) \| `PlainMessage`\<[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/asset_indents.scailo_pb.ts:1939

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1927

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1931

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentIssuedStatisticsList`](AssetIndentIssuedStatisticsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1935
