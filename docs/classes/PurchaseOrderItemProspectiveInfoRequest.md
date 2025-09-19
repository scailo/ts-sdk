[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderItemProspectiveInfoRequest

# Class: PurchaseOrderItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective purchase order item

**`Generated`**

from message Scailo.PurchaseOrderItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)\>

  ↳ **`PurchaseOrderItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](PurchaseOrderItemProspectiveInfoRequest.md#familyid)
- [purchaseOrderId](PurchaseOrderItemProspectiveInfoRequest.md#purchaseorderid)
- [vendorUomId](PurchaseOrderItemProspectiveInfoRequest.md#vendoruomid)
- [fields](PurchaseOrderItemProspectiveInfoRequest.md#fields)
- [runtime](PurchaseOrderItemProspectiveInfoRequest.md#runtime)
- [typeName](PurchaseOrderItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](PurchaseOrderItemProspectiveInfoRequest.md#clone)
- [equals](PurchaseOrderItemProspectiveInfoRequest.md#equals)
- [fromBinary](PurchaseOrderItemProspectiveInfoRequest.md#frombinary)
- [fromJson](PurchaseOrderItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](PurchaseOrderItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](PurchaseOrderItemProspectiveInfoRequest.md#gettype)
- [toBinary](PurchaseOrderItemProspectiveInfoRequest.md#tobinary)
- [toJSON](PurchaseOrderItemProspectiveInfoRequest.md#tojson)
- [toJson](PurchaseOrderItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](PurchaseOrderItemProspectiveInfoRequest.md#tojsonstring)
- [equals](PurchaseOrderItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](PurchaseOrderItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](PurchaseOrderItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](PurchaseOrderItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderItemProspectiveInfoRequest**(`data?`): [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)\> |

#### Returns

[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;PurchaseOrderItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:1655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1655)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1646)

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1639)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material (if 0, the value is ignored while retrieving records)

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1653](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1653)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1662](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1662)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1660)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderItemProspectiveInfoRequest"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:1661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1661)

## Methods

### clone

▸ **clone**(): [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1680)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1668)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1672](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1672)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderItemProspectiveInfoRequest`](PurchaseOrderItemProspectiveInfoRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1676)
