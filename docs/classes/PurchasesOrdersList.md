[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersList

# Class: PurchasesOrdersList

Describes the message consisting of the list of purchase orders

**`Generated`**

from message Scailo.PurchasesOrdersList

## Hierarchy

- `Message`\<[`PurchasesOrdersList`](PurchasesOrdersList.md)\>

  ↳ **`PurchasesOrdersList`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersList.md#constructor)

### Properties

- [list](PurchasesOrdersList.md#list)
- [fields](PurchasesOrdersList.md#fields)
- [runtime](PurchasesOrdersList.md#runtime)
- [typeName](PurchasesOrdersList.md#typename)

### Methods

- [clone](PurchasesOrdersList.md#clone)
- [equals](PurchasesOrdersList.md#equals)
- [fromBinary](PurchasesOrdersList.md#frombinary)
- [fromJson](PurchasesOrdersList.md#fromjson)
- [fromJsonString](PurchasesOrdersList.md#fromjsonstring)
- [getType](PurchasesOrdersList.md#gettype)
- [toBinary](PurchasesOrdersList.md#tobinary)
- [toJSON](PurchasesOrdersList.md#tojson)
- [toJson](PurchasesOrdersList.md#tojson-1)
- [toJsonString](PurchasesOrdersList.md#tojsonstring)
- [equals](PurchasesOrdersList.md#equals-1)
- [fromBinary](PurchasesOrdersList.md#frombinary-1)
- [fromJson](PurchasesOrdersList.md#fromjson-1)
- [fromJsonString](PurchasesOrdersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersList**(`data?`): [`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersList`](PurchasesOrdersList.md)\> |

#### Returns

[`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Overrides

Message\&lt;PurchasesOrdersList\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:1507

## Properties

### list

• **list**: [`PurchaseOrder`](PurchaseOrder.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseOrder list = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:1505

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:1514

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:1512

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersList"``

#### Defined in

src/purchases_orders.scailo_pb.ts:1513

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersList`](PurchasesOrdersList.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersList`](PurchasesOrdersList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersList`](PurchasesOrdersList.md) \| `PlainMessage`\<[`PurchasesOrdersList`](PurchasesOrdersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersList`](PurchasesOrdersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersList`](PurchasesOrdersList.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersList`](PurchasesOrdersList.md) \| `PlainMessage`\<[`PurchasesOrdersList`](PurchasesOrdersList.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersList`](PurchasesOrdersList.md) \| `PlainMessage`\<[`PurchasesOrdersList`](PurchasesOrdersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:1530

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1518

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1522

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersList`](PurchasesOrdersList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1526
