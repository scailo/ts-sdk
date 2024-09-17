[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsItemsList

# Class: PurchasesReturnsItemsList

Describes the message consisting of the list of purchase return items

**`Generated`**

from message Scailo.PurchasesReturnsItemsList

## Hierarchy

- `Message`\<[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)\>

  ↳ **`PurchasesReturnsItemsList`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsItemsList.md#constructor)

### Properties

- [list](PurchasesReturnsItemsList.md#list)
- [fields](PurchasesReturnsItemsList.md#fields)
- [runtime](PurchasesReturnsItemsList.md#runtime)
- [typeName](PurchasesReturnsItemsList.md#typename)

### Methods

- [clone](PurchasesReturnsItemsList.md#clone)
- [equals](PurchasesReturnsItemsList.md#equals)
- [fromBinary](PurchasesReturnsItemsList.md#frombinary)
- [fromJson](PurchasesReturnsItemsList.md#fromjson)
- [fromJsonString](PurchasesReturnsItemsList.md#fromjsonstring)
- [getType](PurchasesReturnsItemsList.md#gettype)
- [toBinary](PurchasesReturnsItemsList.md#tobinary)
- [toJSON](PurchasesReturnsItemsList.md#tojson)
- [toJson](PurchasesReturnsItemsList.md#tojson-1)
- [toJsonString](PurchasesReturnsItemsList.md#tojsonstring)
- [equals](PurchasesReturnsItemsList.md#equals-1)
- [fromBinary](PurchasesReturnsItemsList.md#frombinary-1)
- [fromJson](PurchasesReturnsItemsList.md#fromjson-1)
- [fromJsonString](PurchasesReturnsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsItemsList**(`data?`): [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)\> |

#### Returns

[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Overrides

Message\&lt;PurchasesReturnsItemsList\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:931

## Properties

### list

• **list**: [`PurchaseReturnItem`](PurchaseReturnItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseReturnItem list = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:929

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:938

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:936

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsItemsList"``

#### Defined in

src/purchases_returns.scailo_pb.ts:937

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md) \| `PlainMessage`\<[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md) \| `PlainMessage`\<[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md) \| `PlainMessage`\<[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:954

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:942

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:946

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsItemsList`](PurchasesReturnsItemsList.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:950
