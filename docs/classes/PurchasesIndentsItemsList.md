[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsItemsList

# Class: PurchasesIndentsItemsList

Describes the message consisting of the list of purchase indent items

**`Generated`**

from message Scailo.PurchasesIndentsItemsList

## Hierarchy

- `Message`\<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\>

  ↳ **`PurchasesIndentsItemsList`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsItemsList.md#constructor)

### Properties

- [list](PurchasesIndentsItemsList.md#list)
- [fields](PurchasesIndentsItemsList.md#fields)
- [runtime](PurchasesIndentsItemsList.md#runtime)
- [typeName](PurchasesIndentsItemsList.md#typename)

### Methods

- [clone](PurchasesIndentsItemsList.md#clone)
- [equals](PurchasesIndentsItemsList.md#equals)
- [fromBinary](PurchasesIndentsItemsList.md#frombinary)
- [fromJson](PurchasesIndentsItemsList.md#fromjson)
- [fromJsonString](PurchasesIndentsItemsList.md#fromjsonstring)
- [getType](PurchasesIndentsItemsList.md#gettype)
- [toBinary](PurchasesIndentsItemsList.md#tobinary)
- [toJSON](PurchasesIndentsItemsList.md#tojson)
- [toJson](PurchasesIndentsItemsList.md#tojson-1)
- [toJsonString](PurchasesIndentsItemsList.md#tojsonstring)
- [equals](PurchasesIndentsItemsList.md#equals-1)
- [fromBinary](PurchasesIndentsItemsList.md#frombinary-1)
- [fromJson](PurchasesIndentsItemsList.md#fromjson-1)
- [fromJsonString](PurchasesIndentsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsItemsList**(`data?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Overrides

Message\&lt;PurchasesIndentsItemsList\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:1014

## Properties

### list

• **list**: [`PurchaseIndentItem`](PurchaseIndentItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseIndentItem list = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:1012

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:1021

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:1019

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsItemsList"``

#### Defined in

src/purchases_indents.scailo_pb.ts:1020

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md) \| `PlainMessage`\<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md) \| `PlainMessage`\<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md) \| `PlainMessage`\<[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:1037

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1025

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1029

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsItemsList`](PurchasesIndentsItemsList.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1033
