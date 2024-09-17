[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsList

# Class: AssetIndentsList

Describes the message consisting of the list of asset indents

**`Generated`**

from message Scailo.AssetIndentsList

## Hierarchy

- `Message`\<[`AssetIndentsList`](AssetIndentsList.md)\>

  ↳ **`AssetIndentsList`**

## Table of contents

### Constructors

- [constructor](AssetIndentsList.md#constructor)

### Properties

- [list](AssetIndentsList.md#list)
- [fields](AssetIndentsList.md#fields)
- [runtime](AssetIndentsList.md#runtime)
- [typeName](AssetIndentsList.md#typename)

### Methods

- [clone](AssetIndentsList.md#clone)
- [equals](AssetIndentsList.md#equals)
- [fromBinary](AssetIndentsList.md#frombinary)
- [fromJson](AssetIndentsList.md#fromjson)
- [fromJsonString](AssetIndentsList.md#fromjsonstring)
- [getType](AssetIndentsList.md#gettype)
- [toBinary](AssetIndentsList.md#tobinary)
- [toJSON](AssetIndentsList.md#tojson)
- [toJson](AssetIndentsList.md#tojson-1)
- [toJsonString](AssetIndentsList.md#tojsonstring)
- [equals](AssetIndentsList.md#equals-1)
- [fromBinary](AssetIndentsList.md#frombinary-1)
- [fromJson](AssetIndentsList.md#fromjson-1)
- [fromJsonString](AssetIndentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsList**(`data?`): [`AssetIndentsList`](AssetIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsList`](AssetIndentsList.md)\> |

#### Returns

[`AssetIndentsList`](AssetIndentsList.md)

#### Overrides

Message\&lt;AssetIndentsList\&gt;.constructor

#### Defined in

src/asset_indents.scailo_pb.ts:790

## Properties

### list

• **list**: [`AssetIndent`](AssetIndent.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.AssetIndent list = 1;

#### Defined in

src/asset_indents.scailo_pb.ts:788

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:797

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:795

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsList"``

#### Defined in

src/asset_indents.scailo_pb.ts:796

## Methods

### clone

▸ **clone**(): [`AssetIndentsList`](AssetIndentsList.md)

Create a deep copy.

#### Returns

[`AssetIndentsList`](AssetIndentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsList`](AssetIndentsList.md) \| `PlainMessage`\<[`AssetIndentsList`](AssetIndentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsList`](AssetIndentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsList`](AssetIndentsList.md)\>

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
| `a` | `undefined` \| [`AssetIndentsList`](AssetIndentsList.md) \| `PlainMessage`\<[`AssetIndentsList`](AssetIndentsList.md)\> |
| `b` | `undefined` \| [`AssetIndentsList`](AssetIndentsList.md) \| `PlainMessage`\<[`AssetIndentsList`](AssetIndentsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/asset_indents.scailo_pb.ts:813

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsList`](AssetIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsList`](AssetIndentsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:801

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsList`](AssetIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsList`](AssetIndentsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:805

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsList`](AssetIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsList`](AssetIndentsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:809
