[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderPriceMatch

# Class: PurchaseOrderPriceMatch

Describes the parameters that are part of a purchase order's price match

**`Generated`**

from message Scailo.PurchaseOrderPriceMatch

## Hierarchy

- `Message`\<[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)\>

  ↳ **`PurchaseOrderPriceMatch`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderPriceMatch.md#constructor)

### Properties

- [debitedPrimary](PurchaseOrderPriceMatch.md#debitedprimary)
- [debitedSecondary](PurchaseOrderPriceMatch.md#debitedsecondary)
- [debitedTotalValue](PurchaseOrderPriceMatch.md#debitedtotalvalue)
- [familyId](PurchaseOrderPriceMatch.md#familyid)
- [invoicedPrimary](PurchaseOrderPriceMatch.md#invoicedprimary)
- [invoicedSecondary](PurchaseOrderPriceMatch.md#invoicedsecondary)
- [invoicedTotalValue](PurchaseOrderPriceMatch.md#invoicedtotalvalue)
- [orderedPrimary](PurchaseOrderPriceMatch.md#orderedprimary)
- [orderedSecondary](PurchaseOrderPriceMatch.md#orderedsecondary)
- [orderedTotalValue](PurchaseOrderPriceMatch.md#orderedtotalvalue)
- [vendorUomId](PurchaseOrderPriceMatch.md#vendoruomid)
- [fields](PurchaseOrderPriceMatch.md#fields)
- [runtime](PurchaseOrderPriceMatch.md#runtime)
- [typeName](PurchaseOrderPriceMatch.md#typename)

### Methods

- [clone](PurchaseOrderPriceMatch.md#clone)
- [equals](PurchaseOrderPriceMatch.md#equals)
- [fromBinary](PurchaseOrderPriceMatch.md#frombinary)
- [fromJson](PurchaseOrderPriceMatch.md#fromjson)
- [fromJsonString](PurchaseOrderPriceMatch.md#fromjsonstring)
- [getType](PurchaseOrderPriceMatch.md#gettype)
- [toBinary](PurchaseOrderPriceMatch.md#tobinary)
- [toJSON](PurchaseOrderPriceMatch.md#tojson)
- [toJson](PurchaseOrderPriceMatch.md#tojson-1)
- [toJsonString](PurchaseOrderPriceMatch.md#tojsonstring)
- [equals](PurchaseOrderPriceMatch.md#equals-1)
- [fromBinary](PurchaseOrderPriceMatch.md#frombinary-1)
- [fromJson](PurchaseOrderPriceMatch.md#fromjson-1)
- [fromJsonString](PurchaseOrderPriceMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderPriceMatch**(`data?`): [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)\> |

#### Returns

[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Overrides

Message\&lt;PurchaseOrderPriceMatch\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:3559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3559)

## Properties

### debitedPrimary

• **debitedPrimary**: `bigint` = `protoInt64.zero`

Stores the debited quantity in primary unit of material

**`Generated`**

from field: uint64 debited_primary = 14;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3543)

___

### debitedSecondary

• **debitedSecondary**: `bigint` = `protoInt64.zero`

Stores the debited quantity in secondary unit of material

**`Generated`**

from field: uint64 debited_secondary = 24;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3550](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3550)

___

### debitedTotalValue

• **debitedTotalValue**: `bigint` = `protoInt64.zero`

Stores the total debit note value (at the family level) in primary unit of material

**`Generated`**

from field: uint64 debited_total_value = 34;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3557](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3557)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3487](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3487)

___

### invoicedPrimary

• **invoicedPrimary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in primary unit of material

**`Generated`**

from field: uint64 invoiced_primary = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3522)

___

### invoicedSecondary

• **invoicedSecondary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in secondary unit of material

**`Generated`**

from field: uint64 invoiced_secondary = 22;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3529)

___

### invoicedTotalValue

• **invoicedTotalValue**: `bigint` = `protoInt64.zero`

Stores the total invoiced value (at the family level) in primary unit of material

**`Generated`**

from field: uint64 invoiced_total_value = 32;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3536](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3536)

___

### orderedPrimary

• **orderedPrimary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in primary unit of material

**`Generated`**

from field: uint64 ordered_primary = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3501](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3501)

___

### orderedSecondary

• **orderedSecondary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in secondary unit of material

**`Generated`**

from field: uint64 ordered_secondary = 20;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3508](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3508)

___

### orderedTotalValue

• **orderedTotalValue**: `bigint` = `protoInt64.zero`

Stores the total ordered value (at the family level) in primary unit of material

**`Generated`**

from field: uint64 ordered_total_value = 30;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3515](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3515)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the vendor unit of material ID

**`Generated`**

from field: uint64 vendor_uom_id = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3494)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3566)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3564](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3564)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderPriceMatch"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:3565](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3565)

## Methods

### clone

▸ **clone**(): [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

Create a deep copy.

#### Returns

[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md) \| `PlainMessage`\<[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md) \| `PlainMessage`\<[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)\> |
| `b` | `undefined` \| [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md) \| `PlainMessage`\<[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3592](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3592)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3580)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3584)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3588)
