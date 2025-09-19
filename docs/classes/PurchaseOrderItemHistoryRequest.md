[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderItemHistoryRequest

# Class: PurchaseOrderItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.PurchaseOrderItemHistoryRequest

## Hierarchy

- `Message`\<[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)\>

  ↳ **`PurchaseOrderItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderItemHistoryRequest.md#constructor)

### Properties

- [familyId](PurchaseOrderItemHistoryRequest.md#familyid)
- [purchaseOrderId](PurchaseOrderItemHistoryRequest.md#purchaseorderid)
- [fields](PurchaseOrderItemHistoryRequest.md#fields)
- [runtime](PurchaseOrderItemHistoryRequest.md#runtime)
- [typeName](PurchaseOrderItemHistoryRequest.md#typename)

### Methods

- [clone](PurchaseOrderItemHistoryRequest.md#clone)
- [equals](PurchaseOrderItemHistoryRequest.md#equals)
- [fromBinary](PurchaseOrderItemHistoryRequest.md#frombinary)
- [fromJson](PurchaseOrderItemHistoryRequest.md#fromjson)
- [fromJsonString](PurchaseOrderItemHistoryRequest.md#fromjsonstring)
- [getType](PurchaseOrderItemHistoryRequest.md#gettype)
- [toBinary](PurchaseOrderItemHistoryRequest.md#tobinary)
- [toJSON](PurchaseOrderItemHistoryRequest.md#tojson)
- [toJson](PurchaseOrderItemHistoryRequest.md#tojson-1)
- [toJsonString](PurchaseOrderItemHistoryRequest.md#tojsonstring)
- [equals](PurchaseOrderItemHistoryRequest.md#equals-1)
- [fromBinary](PurchaseOrderItemHistoryRequest.md#frombinary-1)
- [fromJson](PurchaseOrderItemHistoryRequest.md#fromjson-1)
- [fromJsonString](PurchaseOrderItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderItemHistoryRequest**(`data?`): [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)\> |

#### Returns

[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Overrides

Message\&lt;PurchaseOrderItemHistoryRequest\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1598)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1596)

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1589)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1605)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1603)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderItemHistoryRequest"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:1604](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1604)

## Methods

### clone

▸ **clone**(): [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1622)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1610)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1614](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1614)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemHistoryRequest`](PurchaseOrderItemHistoryRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1618)
