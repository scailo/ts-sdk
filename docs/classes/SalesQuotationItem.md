[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationItem

# Class: SalesQuotationItem

Represents a complete, finalized Sales Quotation Item entity within the system.
This message encapsulates the comprehensive state of a single proposed product or service,
including its relationship to the parent quotation, mapped quantities across internal and client units,
commercial terms (pricing, taxes, discounts), delivery schedules, and derived financial calculations.

**Note:** This payload is utilized in read operations to provide clients and downstream systems
with the exact, immutable state of an individual line item prior to conversion to a formal order.

**`Generated`**

from message Scailo.SalesQuotationItem

## Hierarchy

- `Message`\<[`SalesQuotationItem`](SalesQuotationItem.md)\>

  ↳ **`SalesQuotationItem`**

## Table of contents

### Constructors

- [constructor](SalesQuotationItem.md#constructor)

### Properties

- [approvalMetadata](SalesQuotationItem.md#approvalmetadata)
- [bundledWithId](SalesQuotationItem.md#bundledwithid)
- [clientFamilyCode](SalesQuotationItem.md#clientfamilycode)
- [clientQuantity](SalesQuotationItem.md#clientquantity)
- [clientUomId](SalesQuotationItem.md#clientuomid)
- [deliveryDate](SalesQuotationItem.md#deliverydate)
- [discount](SalesQuotationItem.md#discount)
- [discountedUnitPrice](SalesQuotationItem.md#discountedunitprice)
- [entityUuid](SalesQuotationItem.md#entityuuid)
- [familyId](SalesQuotationItem.md#familyid)
- [internalQuantity](SalesQuotationItem.md#internalquantity)
- [metadata](SalesQuotationItem.md#metadata)
- [needApproval](SalesQuotationItem.md#needapproval)
- [salesQuotationId](SalesQuotationItem.md#salesquotationid)
- [specifications](SalesQuotationItem.md#specifications)
- [taxGroupId](SalesQuotationItem.md#taxgroupid)
- [unitPrice](SalesQuotationItem.md#unitprice)
- [userComment](SalesQuotationItem.md#usercomment)
- [fields](SalesQuotationItem.md#fields)
- [runtime](SalesQuotationItem.md#runtime)
- [typeName](SalesQuotationItem.md#typename)

### Methods

- [clone](SalesQuotationItem.md#clone)
- [equals](SalesQuotationItem.md#equals)
- [fromBinary](SalesQuotationItem.md#frombinary)
- [fromJson](SalesQuotationItem.md#fromjson)
- [fromJsonString](SalesQuotationItem.md#fromjsonstring)
- [getType](SalesQuotationItem.md#gettype)
- [toBinary](SalesQuotationItem.md#tobinary)
- [toJSON](SalesQuotationItem.md#tojson)
- [toJson](SalesQuotationItem.md#tojson-1)
- [toJsonString](SalesQuotationItem.md#tojsonstring)
- [equals](SalesQuotationItem.md#equals-1)
- [fromBinary](SalesQuotationItem.md#frombinary-1)
- [fromJson](SalesQuotationItem.md#fromjson-1)
- [fromJsonString](SalesQuotationItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationItem**(`data?`): [`SalesQuotationItem`](SalesQuotationItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationItem`](SalesQuotationItem.md)\> |

#### Returns

[`SalesQuotationItem`](SalesQuotationItem.md)

#### Overrides

Message\&lt;SalesQuotationItem\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:2349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2349)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2195](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2195)

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal sequence identifier of another sales quotation line item that this item is bundled or packaged with.

**`Example`**

```ts
1025
```

**`Generated`**

from field: uint64 bundled_with_id = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2237](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2237)

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

[src/sales_quotations.scailo_pb.ts:2287](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2287)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The quoted quantity represented in the client's specific unit of measure. Stored in subunits (cents).

**`Example`**

```ts
5000
```

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2277](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2277)

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

[src/sales_quotations.scailo_pb.ts:2267](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2267)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Description`**

The specific proposed target delivery date for this line item.

**`Example`**

```ts
"2023-11-15"
```

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2327](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2327)

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

[src/sales_quotations.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2317)

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

[src/sales_quotations.scailo_pb.ts:2347](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2347)

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

[src/sales_quotations.scailo_pb.ts:2179](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2179)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the family or catalog item being quoted.

**`Example`**

```ts
505
```

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2247](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2247)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The quoted quantity represented in the system's internal base unit of measure. Stored in subunits (cents).

**`Example`**

```ts
10000
```

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2257](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2257)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2187](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2187)

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

[src/sales_quotations.scailo_pb.ts:2207](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2207)

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent sales quotation to which this line item belongs.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2227](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2227)

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

[src/sales_quotations.scailo_pb.ts:2337](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2337)

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

[src/sales_quotations.scailo_pb.ts:2307](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2307)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The proposed price per unit for this item before discounts, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2297](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2297)

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

[src/sales_quotations.scailo_pb.ts:2217](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2217)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2356](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2356)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2354](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2354)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationItem"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:2355](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2355)

## Methods

### clone

▸ **clone**(): [`SalesQuotationItem`](SalesQuotationItem.md)

Create a deep copy.

#### Returns

[`SalesQuotationItem`](SalesQuotationItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationItem`](SalesQuotationItem.md) \| `PlainMessage`\<[`SalesQuotationItem`](SalesQuotationItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationItem`](SalesQuotationItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationItem`](SalesQuotationItem.md)\>

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
| `a` | `undefined` \| [`SalesQuotationItem`](SalesQuotationItem.md) \| `PlainMessage`\<[`SalesQuotationItem`](SalesQuotationItem.md)\> |
| `b` | `undefined` \| [`SalesQuotationItem`](SalesQuotationItem.md) \| `PlainMessage`\<[`SalesQuotationItem`](SalesQuotationItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2389](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2389)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationItem`](SalesQuotationItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationItem`](SalesQuotationItem.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2377](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2377)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationItem`](SalesQuotationItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItem`](SalesQuotationItem.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2381](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2381)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationItem`](SalesQuotationItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItem`](SalesQuotationItem.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2385](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2385)
