[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderPriceMatch

# Class: SalesOrderPriceMatch

Describes the parameters that are part of a sales order's price match

**`Generated`**

from message Scailo.SalesOrderPriceMatch

## Hierarchy

- `Message`\<[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)\>

  ↳ **`SalesOrderPriceMatch`**

## Table of contents

### Constructors

- [constructor](SalesOrderPriceMatch.md#constructor)

### Properties

- [clientUomId](SalesOrderPriceMatch.md#clientuomid)
- [creditedPrimary](SalesOrderPriceMatch.md#creditedprimary)
- [creditedSecondary](SalesOrderPriceMatch.md#creditedsecondary)
- [creditedTotalValue](SalesOrderPriceMatch.md#creditedtotalvalue)
- [familyId](SalesOrderPriceMatch.md#familyid)
- [invoicedPrimary](SalesOrderPriceMatch.md#invoicedprimary)
- [invoicedSecondary](SalesOrderPriceMatch.md#invoicedsecondary)
- [invoicedTotalValue](SalesOrderPriceMatch.md#invoicedtotalvalue)
- [orderedPrimary](SalesOrderPriceMatch.md#orderedprimary)
- [orderedSecondary](SalesOrderPriceMatch.md#orderedsecondary)
- [orderedTotalValue](SalesOrderPriceMatch.md#orderedtotalvalue)
- [fields](SalesOrderPriceMatch.md#fields)
- [runtime](SalesOrderPriceMatch.md#runtime)
- [typeName](SalesOrderPriceMatch.md#typename)

### Methods

- [clone](SalesOrderPriceMatch.md#clone)
- [equals](SalesOrderPriceMatch.md#equals)
- [fromBinary](SalesOrderPriceMatch.md#frombinary)
- [fromJson](SalesOrderPriceMatch.md#fromjson)
- [fromJsonString](SalesOrderPriceMatch.md#fromjsonstring)
- [getType](SalesOrderPriceMatch.md#gettype)
- [toBinary](SalesOrderPriceMatch.md#tobinary)
- [toJSON](SalesOrderPriceMatch.md#tojson)
- [toJson](SalesOrderPriceMatch.md#tojson-1)
- [toJsonString](SalesOrderPriceMatch.md#tojsonstring)
- [equals](SalesOrderPriceMatch.md#equals-1)
- [fromBinary](SalesOrderPriceMatch.md#frombinary-1)
- [fromJson](SalesOrderPriceMatch.md#fromjson-1)
- [fromJsonString](SalesOrderPriceMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderPriceMatch**(`data?`): [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)\> |

#### Returns

[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Overrides

Message\&lt;SalesOrderPriceMatch\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:3560](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3560)

## Properties

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the client unit of material ID

**`Generated`**

from field: uint64 client_uom_id = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:3495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3495)

___

### creditedPrimary

• **creditedPrimary**: `bigint` = `protoInt64.zero`

Stores the credited quantity in primary unit of material

**`Generated`**

from field: uint64 credited_primary = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:3544](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3544)

___

### creditedSecondary

• **creditedSecondary**: `bigint` = `protoInt64.zero`

Stores the credited quantity in secondary unit of material

**`Generated`**

from field: uint64 credited_secondary = 24;

#### Defined in

[src/sales_orders.scailo_pb.ts:3551](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3551)

___

### creditedTotalValue

• **creditedTotalValue**: `bigint` = `protoInt64.zero`

Stores the total credit note value (at the family level) in primary unit of material

**`Generated`**

from field: uint64 credited_total_value = 34;

#### Defined in

[src/sales_orders.scailo_pb.ts:3558](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3558)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:3488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3488)

___

### invoicedPrimary

• **invoicedPrimary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in primary unit of material

**`Generated`**

from field: uint64 invoiced_primary = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:3523](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3523)

___

### invoicedSecondary

• **invoicedSecondary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in secondary unit of material

**`Generated`**

from field: uint64 invoiced_secondary = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:3530](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3530)

___

### invoicedTotalValue

• **invoicedTotalValue**: `bigint` = `protoInt64.zero`

Stores the total invoiced value (at the family level) in primary unit of material

**`Generated`**

from field: uint64 invoiced_total_value = 32;

#### Defined in

[src/sales_orders.scailo_pb.ts:3537](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3537)

___

### orderedPrimary

• **orderedPrimary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in primary unit of material

**`Generated`**

from field: uint64 ordered_primary = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:3502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3502)

___

### orderedSecondary

• **orderedSecondary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in secondary unit of material

**`Generated`**

from field: uint64 ordered_secondary = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:3509](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3509)

___

### orderedTotalValue

• **orderedTotalValue**: `bigint` = `protoInt64.zero`

Stores the total ordered value (at the family level) in primary unit of material

**`Generated`**

from field: uint64 ordered_total_value = 30;

#### Defined in

[src/sales_orders.scailo_pb.ts:3516](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3516)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:3567](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3567)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:3565](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3565)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderPriceMatch"``

#### Defined in

[src/sales_orders.scailo_pb.ts:3566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3566)

## Methods

### clone

▸ **clone**(): [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

Create a deep copy.

#### Returns

[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md) \| `PlainMessage`\<[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)\>

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
| `a` | `undefined` \| [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md) \| `PlainMessage`\<[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)\> |
| `b` | `undefined` \| [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md) \| `PlainMessage`\<[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:3593](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3593)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3581](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3581)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3585](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3585)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderPriceMatch`](SalesOrderPriceMatch.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3589)
