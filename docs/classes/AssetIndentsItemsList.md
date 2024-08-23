[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsItemsList

# Class: AssetIndentsItemsList

Describes the message consisting of the list of asset indent items

**`Generated`**

from message Scailo.AssetIndentsItemsList

## Hierarchy

- `Message`\<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\>

  ↳ **`AssetIndentsItemsList`**

## Table of contents

### Constructors

- [constructor](AssetIndentsItemsList.md#constructor)

### Properties

- [list](AssetIndentsItemsList.md#list)
- [fields](AssetIndentsItemsList.md#fields)
- [runtime](AssetIndentsItemsList.md#runtime)
- [typeName](AssetIndentsItemsList.md#typename)

### Methods

- [clone](AssetIndentsItemsList.md#clone)
- [equals](AssetIndentsItemsList.md#equals)
- [fromBinary](AssetIndentsItemsList.md#frombinary)
- [fromJson](AssetIndentsItemsList.md#fromjson)
- [fromJsonString](AssetIndentsItemsList.md#fromjsonstring)
- [getType](AssetIndentsItemsList.md#gettype)
- [toBinary](AssetIndentsItemsList.md#tobinary)
- [toJSON](AssetIndentsItemsList.md#tojson)
- [toJson](AssetIndentsItemsList.md#tojson-1)
- [toJsonString](AssetIndentsItemsList.md#tojsonstring)
- [equals](AssetIndentsItemsList.md#equals-1)
- [fromBinary](AssetIndentsItemsList.md#frombinary-1)
- [fromJson](AssetIndentsItemsList.md#fromjson-1)
- [fromJsonString](AssetIndentsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsItemsList**(`data?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Overrides

Message\&lt;AssetIndentsItemsList\&gt;.constructor

#### Defined in

src/asset_indents.scailo_pb.ts:832

## Properties

### list

• **list**: [`AssetIndentItem`](AssetIndentItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.AssetIndentItem list = 1;

#### Defined in

src/asset_indents.scailo_pb.ts:830

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:839

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:837

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsItemsList"``

#### Defined in

src/asset_indents.scailo_pb.ts:838

## Methods

### clone

▸ **clone**(): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

Create a deep copy.

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsItemsList`](AssetIndentsItemsList.md) \| `PlainMessage`\<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\>

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
| `a` | `undefined` \| [`AssetIndentsItemsList`](AssetIndentsItemsList.md) \| `PlainMessage`\<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |
| `b` | `undefined` \| [`AssetIndentsItemsList`](AssetIndentsItemsList.md) \| `PlainMessage`\<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/asset_indents.scailo_pb.ts:855

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:843

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:847

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Defined in

src/asset_indents.scailo_pb.ts:851
