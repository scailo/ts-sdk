[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItem

# Class: SalesOrderItem

Represents a complete, finalized Sales Order Item entity within the system.
This message encapsulates the comprehensive state of a single ordered product or service,
including its relationship to the parent order, mapped quantities across internal and client units,
commercial terms (pricing, taxes, discounts), delivery schedules, and derived financial calculations.

**Note:** This payload is utilized in read operations to provide clients and downstream systems
(like billing or fulfillment) with the exact, immutable state of an individual line item.

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

[src/sales_orders.scailo_pb.ts:2680](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2680)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:2516](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2516)

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal sequence identifier of another sales order line item that this item is bundled or packaged with.

**`Example`**

```ts
1025
```

**`Generated`**

from field: uint64 bundled_with_id = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:2558](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2558)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:2608](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2608)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents).

**`Example`**

```ts
5000
```

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:2598](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2598)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:2588](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2588)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Description`**

The specific target delivery date for this line item.

**`Example`**

```ts
"2023-11-15"
```

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:2648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2648)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Description`**

The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

**`Example`**

```ts
1500
```

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_orders.scailo_pb.ts:2638](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2638)

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The system-calculated net price per unit after the applied discount has been subtracted from the base unit price. Represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2125
```

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

[src/sales_orders.scailo_pb.ts:2678](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2678)

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

[src/sales_orders.scailo_pb.ts:2500](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2500)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the family or catalog item being ordered.

**`Example`**

```ts
505
```

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:2568](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2568)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents).

**`Example`**

```ts
10000
```

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:2578](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2578)

___

### isInvoiceable

• **isInvoiceable**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_invoiceable = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:2668](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2668)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:2508](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2508)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_orders.scailo_pb.ts:2528](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2528)

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent sales order to which this line item belongs.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:2548](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2548)

___

### specifications

• **specifications**: `string` = `""`

**`Description`**

Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Requires double-reinforced packaging for international transit."
```

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:2658](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2658)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the tax group or tax bracket applicable to this specific line item.

**`Example`**

```ts
4
```

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:2628](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2628)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The agreed-upon price per unit for this item before discounts, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:2618](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2618)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_orders.scailo_pb.ts:2538](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2538)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:2687](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2687)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:2685](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2685)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItem"``

#### Defined in

[src/sales_orders.scailo_pb.ts:2686](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2686)

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

[src/sales_orders.scailo_pb.ts:2721](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2721)

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

[src/sales_orders.scailo_pb.ts:2709](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2709)

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

[src/sales_orders.scailo_pb.ts:2713](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2713)

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

[src/sales_orders.scailo_pb.ts:2717](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L2717)
