[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItem

# Class: SalesOrderItem

Describes the parameters that constitute an item associated to a sales order

**`Generated`**

from message Scailo.SalesOrderItem

## Hierarchy

- `Message`\<[`SalesOrderItem`](SalesOrderItem.md)\>

  ↳ **`SalesOrderItem`**

## Table of contents

### Constructors

- [constructor](SalesOrderItem.md#constructor)

### Properties

- [approvalMetadata](SalesOrderItem.md#approvalmetadata)
- [bundledWithId](SalesOrderItem.md#bundledwithid)
- [clientFamilyCode](SalesOrderItem.md#clientfamilycode)
- [clientQuantity](SalesOrderItem.md#clientquantity)
- [clientUomId](SalesOrderItem.md#clientuomid)
- [deliveryDate](SalesOrderItem.md#deliverydate)
- [discount](SalesOrderItem.md#discount)
- [discountedUnitPrice](SalesOrderItem.md#discountedunitprice)
- [entityUuid](SalesOrderItem.md#entityuuid)
- [familyId](SalesOrderItem.md#familyid)
- [internalQuantity](SalesOrderItem.md#internalquantity)
- [isInvoiceable](SalesOrderItem.md#isinvoiceable)
- [metadata](SalesOrderItem.md#metadata)
- [needApproval](SalesOrderItem.md#needapproval)
- [salesOrderId](SalesOrderItem.md#salesorderid)
- [specifications](SalesOrderItem.md#specifications)
- [taxGroupId](SalesOrderItem.md#taxgroupid)
- [unitPrice](SalesOrderItem.md#unitprice)
- [userComment](SalesOrderItem.md#usercomment)
- [fields](SalesOrderItem.md#fields)
- [runtime](SalesOrderItem.md#runtime)
- [typeName](SalesOrderItem.md#typename)

### Methods

- [clone](SalesOrderItem.md#clone)
- [equals](SalesOrderItem.md#equals)
- [fromBinary](SalesOrderItem.md#frombinary)
- [fromJson](SalesOrderItem.md#fromjson)
- [fromJsonString](SalesOrderItem.md#fromjsonstring)
- [getType](SalesOrderItem.md#gettype)
- [toBinary](SalesOrderItem.md#tobinary)
- [toJSON](SalesOrderItem.md#tojson)
- [toJson](SalesOrderItem.md#tojson-1)
- [toJsonString](SalesOrderItem.md#tojsonstring)
- [equals](SalesOrderItem.md#equals-1)
- [fromBinary](SalesOrderItem.md#frombinary-1)
- [fromJson](SalesOrderItem.md#fromjson-1)
- [fromJsonString](SalesOrderItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderItem**(`data?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Overrides

Message\&lt;SalesOrderItem\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1844)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:1729](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1729)

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

Stores the ID of the sales orderder item with which this item is bundled with

**`Generated`**

from field: uint64 bundled_with_id = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:1758](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1758)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:1793](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1793)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:1786](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1786)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:1779](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1779)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:1821](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1821)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_orders.scailo_pb.ts:1814](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1814)

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

Stores the unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

[src/sales_orders.scailo_pb.ts:1842](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1842)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:1713](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1713)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:1765](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1765)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:1772](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1772)

___

### isInvoiceable

• **isInvoiceable**: `boolean` = `false`

Stores if the item can be invoiced

**`Generated`**

from field: bool is_invoiceable = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:1835](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1835)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:1721](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1721)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_orders.scailo_pb.ts:1737](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1737)

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:1751](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1751)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1828)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:1807](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1807)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:1800](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1800)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_orders.scailo_pb.ts:1744](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1744)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1851)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:1849](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1849)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItem"``

#### Defined in

[src/sales_orders.scailo_pb.ts:1850](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1850)

## Methods

### clone

▸ **clone**(): [`SalesOrderItem`](SalesOrderItem.md)

Create a deep copy.

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderItem`](SalesOrderItem.md) \| `PlainMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderItem`](SalesOrderItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderItem`](SalesOrderItem.md)\>

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
| `a` | `undefined` \| [`SalesOrderItem`](SalesOrderItem.md) \| `PlainMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |
| `b` | `undefined` \| [`SalesOrderItem`](SalesOrderItem.md) \| `PlainMessage`\<[`SalesOrderItem`](SalesOrderItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:1885](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1885)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1873](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1873)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1877](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1877)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderItem`](SalesOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItem`](SalesOrderItem.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_orders.scailo_pb.ts#L1881)
