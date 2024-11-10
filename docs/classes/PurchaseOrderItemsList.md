[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderItemsList

# Class: PurchaseOrderItemsList

Describes the message consisting of the list of purchase order items

**`Generated`**

from message Scailo.PurchaseOrderItemsList

## Hierarchy

- `Message`\<[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)\>

  ↳ **`PurchaseOrderItemsList`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderItemsList.md#constructor)

### Properties

- [list](PurchaseOrderItemsList.md#list)
- [fields](PurchaseOrderItemsList.md#fields)
- [runtime](PurchaseOrderItemsList.md#runtime)
- [typeName](PurchaseOrderItemsList.md#typename)

### Methods

- [clone](PurchaseOrderItemsList.md#clone)
- [equals](PurchaseOrderItemsList.md#equals)
- [fromBinary](PurchaseOrderItemsList.md#frombinary)
- [fromJson](PurchaseOrderItemsList.md#fromjson)
- [fromJsonString](PurchaseOrderItemsList.md#fromjsonstring)
- [getType](PurchaseOrderItemsList.md#gettype)
- [toBinary](PurchaseOrderItemsList.md#tobinary)
- [toJSON](PurchaseOrderItemsList.md#tojson)
- [toJson](PurchaseOrderItemsList.md#tojson-1)
- [toJsonString](PurchaseOrderItemsList.md#tojsonstring)
- [equals](PurchaseOrderItemsList.md#equals-1)
- [fromBinary](PurchaseOrderItemsList.md#frombinary-1)
- [fromJson](PurchaseOrderItemsList.md#fromjson-1)
- [fromJsonString](PurchaseOrderItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderItemsList**(`data?`): [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)\> |

#### Returns

[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Overrides

Message\&lt;PurchaseOrderItemsList\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:1549

## Properties

### list

• **list**: [`PurchaseOrderItem`](PurchaseOrderItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseOrderItem list = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:1547

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:1556

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:1554

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderItemsList"``

#### Defined in

src/purchases_orders.scailo_pb.ts:1555

## Methods

### clone

▸ **clone**(): [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

Create a deep copy.

#### Returns

[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md) \| `PlainMessage`\<[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md) \| `PlainMessage`\<[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)\> |
| `b` | `undefined` \| [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md) \| `PlainMessage`\<[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:1572

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1560

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1564

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemsList`](PurchaseOrderItemsList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1568
