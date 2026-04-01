[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationItem

# Class: SalesQuotationItem

Describes the parameters that constitute an item associated to a sales quotation

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

[src/sales_quotations.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1638)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1530](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1530)

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

Stores the ID of the sales squotation item with which this item is bundled with

**`Generated`**

from field: uint64 bundled_with_id = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1559](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1559)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1594](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1594)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being quotationed in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1587](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1587)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1580)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1622)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1615](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1615)

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

Stores the unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1636](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1636)

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

[src/sales_quotations.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1514)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1566](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1566)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being quotationed in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1573](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1573)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1522](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1522)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1538](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1538)

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

Stores the sales quotation ID

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1552)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1629](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1629)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1608](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1608)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1601)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1545](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1545)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1645](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1645)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1643)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationItem"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:1644](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1644)

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

[src/sales_quotations.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1678)

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

[src/sales_quotations.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1666)

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

[src/sales_quotations.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1670)

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

[src/sales_quotations.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_quotations.scailo_pb.ts#L1674)
