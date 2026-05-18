[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceMultipleItemsSingleton

# Class: SalesOrdersServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a sales order

**`Generated`**

from message Scailo.SalesOrdersServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)\>

  ↳ **`SalesOrdersServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](SalesOrdersServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](SalesOrdersServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](SalesOrdersServiceMultipleItemsSingleton.md#clientuomid)
- [deliveryDate](SalesOrdersServiceMultipleItemsSingleton.md#deliverydate)
- [discount](SalesOrdersServiceMultipleItemsSingleton.md#discount)
- [familyId](SalesOrdersServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](SalesOrdersServiceMultipleItemsSingleton.md#internalquantity)
- [isInvoiceable](SalesOrdersServiceMultipleItemsSingleton.md#isinvoiceable)
- [specifications](SalesOrdersServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](SalesOrdersServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](SalesOrdersServiceMultipleItemsSingleton.md#unitprice)
- [fields](SalesOrdersServiceMultipleItemsSingleton.md#fields)
- [runtime](SalesOrdersServiceMultipleItemsSingleton.md#runtime)
- [typeName](SalesOrdersServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](SalesOrdersServiceMultipleItemsSingleton.md#clone)
- [equals](SalesOrdersServiceMultipleItemsSingleton.md#equals)
- [fromBinary](SalesOrdersServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](SalesOrdersServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](SalesOrdersServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](SalesOrdersServiceMultipleItemsSingleton.md#gettype)
- [toBinary](SalesOrdersServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](SalesOrdersServiceMultipleItemsSingleton.md#tojson)
- [toJson](SalesOrdersServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](SalesOrdersServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](SalesOrdersServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](SalesOrdersServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](SalesOrdersServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceMultipleItemsSingleton**(`data?`): [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)\> |

#### Returns

[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;SalesOrdersServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:1327](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1327)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1283)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1276)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1269)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:1311](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1311)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_orders.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1304)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1255)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1262)

___

### isInvoiceable

• **isInvoiceable**: `boolean` = `false`

Stores if the item can be invoiced

**`Generated`**

from field: bool is_invoiceable = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:1325](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1325)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:1318](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1318)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1297)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:1290](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1290)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1334)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:1332](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1332)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceMultipleItemsSingleton"``

#### Defined in

[src/sales_orders.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1333)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1360)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1348)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1352)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_orders.scailo_pb.ts#L1356)
