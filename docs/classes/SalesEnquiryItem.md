[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryItem

# Class: SalesEnquiryItem

Represents a complete, finalized Sales Enquiry Item entity within the system.
This message encapsulates the comprehensive state of a single product or service requested by a prospect,
including its relationship to the parent enquiry, requested quantities, proposed commercial terms (pricing, taxes, discounts),
delivery expectations, and derived financial calculations.

**Note:** This payload is utilized in read operations to provide clients and downstream systems
with the exact, immutable state of an individual line item during the lead qualification phase,
prior to its formal conversion into a quotation or order.

**`Generated`**

from message Scailo.SalesEnquiryItem

## Hierarchy

- `Message`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

  ↳ **`SalesEnquiryItem`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryItem.md#constructor)

### Properties

- [approvalMetadata](SalesEnquiryItem.md#approvalmetadata)
- [deliveryDate](SalesEnquiryItem.md#deliverydate)
- [discount](SalesEnquiryItem.md#discount)
- [discountedUnitPrice](SalesEnquiryItem.md#discountedunitprice)
- [entityUuid](SalesEnquiryItem.md#entityuuid)
- [internalQuantity](SalesEnquiryItem.md#internalquantity)
- [metadata](SalesEnquiryItem.md#metadata)
- [name](SalesEnquiryItem.md#name)
- [needApproval](SalesEnquiryItem.md#needapproval)
- [roundOff](SalesEnquiryItem.md#roundoff)
- [salesEnquiryId](SalesEnquiryItem.md#salesenquiryid)
- [specifications](SalesEnquiryItem.md#specifications)
- [taxGroupId](SalesEnquiryItem.md#taxgroupid)
- [unitPrice](SalesEnquiryItem.md#unitprice)
- [uomId](SalesEnquiryItem.md#uomid)
- [userComment](SalesEnquiryItem.md#usercomment)
- [fields](SalesEnquiryItem.md#fields)
- [runtime](SalesEnquiryItem.md#runtime)
- [typeName](SalesEnquiryItem.md#typename)

### Methods

- [clone](SalesEnquiryItem.md#clone)
- [equals](SalesEnquiryItem.md#equals)
- [fromBinary](SalesEnquiryItem.md#frombinary)
- [fromJson](SalesEnquiryItem.md#fromjson)
- [fromJsonString](SalesEnquiryItem.md#fromjsonstring)
- [getType](SalesEnquiryItem.md#gettype)
- [toBinary](SalesEnquiryItem.md#tobinary)
- [toJSON](SalesEnquiryItem.md#tojson)
- [toJson](SalesEnquiryItem.md#tojson-1)
- [toJsonString](SalesEnquiryItem.md#tojsonstring)
- [equals](SalesEnquiryItem.md#equals-1)
- [fromBinary](SalesEnquiryItem.md#frombinary-1)
- [fromJson](SalesEnquiryItem.md#fromjson-1)
- [fromJsonString](SalesEnquiryItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryItem**(`data?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Overrides

Message\&lt;SalesEnquiryItem\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1702](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1702)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1568](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1568)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Description`**

The specific prospective target delivery date requested or proposed for this line item.

**`Example`**

```ts
"2023-11-15"
```

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1680)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Description`**

The proposed discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

**`Example`**

```ts
1500
```

**`Generated`**

from field: uint64 discount = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1650)

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The system-calculated net proposed price per unit after the applied discount has been subtracted from the base unit price. Represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2125
```

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1700)

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

[src/sales_enquiries.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1552)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The prospective quantity requested, represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1620](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1620)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1560](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1560)

___

### name

• **name**: `string` = `""`

**`Description`**

The descriptive name of the requested product or service. Free-text is used here as the exact catalog item may not be definitively identified during the initial lead phase.

**`Example`**

```ts
"Industrial Copper Wiring - 12 AWG"
```

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1610](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1610)

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

[src/sales_enquiries.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1580)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

**`Description`**

The applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1670)

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent sales enquiry to which this requested item will be attached.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1600](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1600)

___

### specifications

• **specifications**: `string` = `""`

**`Description`**

Additional custom textual requirements, notes, or specifications requested by the prospect for this item.

**`Example`**

```ts
"Requires double-reinforced packaging for international transit."
```

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1690](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1690)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the tax group or tax bracket tentatively applicable to this specific line item.

**`Example`**

```ts
4
```

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1660)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The proposed or target price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Generated`**

from field: uint64 unit_price = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1640](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1640)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) applicable to this requested item.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1630](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1630)

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

[src/sales_enquiries.scailo_pb.ts:1590](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1590)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1709](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1709)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1707](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1707)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryItem"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1708](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1708)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryItem`](SalesEnquiryItem.md)

Create a deep copy.

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |
| `b` | `undefined` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1740](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1740)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1728](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1728)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1732)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1736](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1736)
