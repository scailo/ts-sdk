[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsList

# Class: PurchasesIndentsList

Describes the message consisting of the list of purchases indents

**`Generated`**

from message Scailo.PurchasesIndentsList

## Hierarchy

- `Message`\<[`PurchasesIndentsList`](PurchasesIndentsList.md)\>

  ↳ **`PurchasesIndentsList`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsList.md#constructor)

### Properties

- [list](PurchasesIndentsList.md#list)
- [fields](PurchasesIndentsList.md#fields)
- [runtime](PurchasesIndentsList.md#runtime)
- [typeName](PurchasesIndentsList.md#typename)

### Methods

- [clone](PurchasesIndentsList.md#clone)
- [equals](PurchasesIndentsList.md#equals)
- [fromBinary](PurchasesIndentsList.md#frombinary)
- [fromJson](PurchasesIndentsList.md#fromjson)
- [fromJsonString](PurchasesIndentsList.md#fromjsonstring)
- [getType](PurchasesIndentsList.md#gettype)
- [toBinary](PurchasesIndentsList.md#tobinary)
- [toJSON](PurchasesIndentsList.md#tojson)
- [toJson](PurchasesIndentsList.md#tojson-1)
- [toJsonString](PurchasesIndentsList.md#tojsonstring)
- [equals](PurchasesIndentsList.md#equals-1)
- [fromBinary](PurchasesIndentsList.md#frombinary-1)
- [fromJson](PurchasesIndentsList.md#fromjson-1)
- [fromJsonString](PurchasesIndentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsList**(`data?`): [`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsList`](PurchasesIndentsList.md)\> |

#### Returns

[`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Overrides

Message\&lt;PurchasesIndentsList\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:972

## Properties

### list

• **list**: [`PurchaseIndent`](PurchaseIndent.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseIndent list = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:970

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:979

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:977

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsList"``

#### Defined in

src/purchases_indents.scailo_pb.ts:978

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsList`](PurchasesIndentsList.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsList`](PurchasesIndentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsList`](PurchasesIndentsList.md) \| `PlainMessage`\<[`PurchasesIndentsList`](PurchasesIndentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsList`](PurchasesIndentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsList`](PurchasesIndentsList.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsList`](PurchasesIndentsList.md) \| `PlainMessage`\<[`PurchasesIndentsList`](PurchasesIndentsList.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsList`](PurchasesIndentsList.md) \| `PlainMessage`\<[`PurchasesIndentsList`](PurchasesIndentsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:995

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:983

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:987

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsList`](PurchasesIndentsList.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:991
