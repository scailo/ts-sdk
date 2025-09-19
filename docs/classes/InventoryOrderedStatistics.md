[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryOrderedStatistics

# Class: InventoryOrderedStatistics

Describes the message consisting of the ordered inventory statistics for the given family ID

**`Generated`**

from message Scailo.InventoryOrderedStatistics

## Hierarchy

- `Message`\<[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)\>

  ↳ **`InventoryOrderedStatistics`**

## Table of contents

### Constructors

- [constructor](InventoryOrderedStatistics.md#constructor)

### Properties

- [goodsReceipts](InventoryOrderedStatistics.md#goodsreceipts)
- [purchaseOrders](InventoryOrderedStatistics.md#purchaseorders)
- [purchaseReturns](InventoryOrderedStatistics.md#purchasereturns)
- [fields](InventoryOrderedStatistics.md#fields)
- [runtime](InventoryOrderedStatistics.md#runtime)
- [typeName](InventoryOrderedStatistics.md#typename)

### Methods

- [clone](InventoryOrderedStatistics.md#clone)
- [equals](InventoryOrderedStatistics.md#equals)
- [fromBinary](InventoryOrderedStatistics.md#frombinary)
- [fromJson](InventoryOrderedStatistics.md#fromjson)
- [fromJsonString](InventoryOrderedStatistics.md#fromjsonstring)
- [getType](InventoryOrderedStatistics.md#gettype)
- [toBinary](InventoryOrderedStatistics.md#tobinary)
- [toJSON](InventoryOrderedStatistics.md#tojson)
- [toJson](InventoryOrderedStatistics.md#tojson-1)
- [toJsonString](InventoryOrderedStatistics.md#tojsonstring)
- [equals](InventoryOrderedStatistics.md#equals-1)
- [fromBinary](InventoryOrderedStatistics.md#frombinary-1)
- [fromJson](InventoryOrderedStatistics.md#fromjson-1)
- [fromJsonString](InventoryOrderedStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryOrderedStatistics**(`data?`): [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)\> |

#### Returns

[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Overrides

Message\&lt;InventoryOrderedStatistics\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:1957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1957)

## Properties

### goodsReceipts

• **goodsReceipts**: [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)[] = `[]`

List of abridged goods receipt items

**`Generated`**

from field: repeated Scailo.AbridgedGoodsReceiptItem goods_receipts = 20;

#### Defined in

[src/inventory.scailo_pb.ts:1948](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1948)

___

### purchaseOrders

• **purchaseOrders**: [`AbridgedPurchaseOrderItem`](AbridgedPurchaseOrderItem.md)[] = `[]`

List of abridged purchase order items

**`Generated`**

from field: repeated Scailo.AbridgedPurchaseOrderItem purchase_orders = 10;

#### Defined in

[src/inventory.scailo_pb.ts:1941](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1941)

___

### purchaseReturns

• **purchaseReturns**: [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)[] = `[]`

List of abridged purchase return items

**`Generated`**

from field: repeated Scailo.AbridgedPurchaseReturnItem purchase_returns = 30;

#### Defined in

[src/inventory.scailo_pb.ts:1955](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1955)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:1964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1964)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:1962](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1962)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryOrderedStatistics"``

#### Defined in

[src/inventory.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1963)

## Methods

### clone

▸ **clone**(): [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

Create a deep copy.

#### Returns

[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md) \| `PlainMessage`\<[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)\>

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
| `a` | `undefined` \| [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md) \| `PlainMessage`\<[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)\> |
| `b` | `undefined` \| [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md) \| `PlainMessage`\<[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1982)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Defined in

[src/inventory.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1970)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Defined in

[src/inventory.scailo_pb.ts:1974](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1974)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryOrderedStatistics`](InventoryOrderedStatistics.md)

#### Defined in

[src/inventory.scailo_pb.ts:1978](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1978)
