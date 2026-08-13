[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoiceItem

# Class: ProformaInvoiceItem

Represents a complete Proforma Invoice Item entity within the system.
This message encapsulates the comprehensive state of a single product or service being preliminarily estimated
for a buyer. It includes its relationship to the parent proforma invoice, mapped estimated quantities across
internal and client units, anticipated commercial terms (pricing, taxes, round-offs), and custom specifications.

**Note:** This payload is utilized in read operations to provide frontend clients, downstream financial systems,
and approval workflows with the exact state of an individual estimated line item during the pre-billing,
customs declaration, negotiation, or advance payment phases.

**`Generated`**

from message Scailo.ProformaInvoiceItem

## Hierarchy

- `Message`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\>

  ↳ **`ProformaInvoiceItem`**

## Table of contents

### Constructors

- [constructor](ProformaInvoiceItem.md#constructor)

### Properties

- [approvalMetadata](ProformaInvoiceItem.md#approvalmetadata)
- [clientFamilyCode](ProformaInvoiceItem.md#clientfamilycode)
- [clientQuantity](ProformaInvoiceItem.md#clientquantity)
- [clientUomId](ProformaInvoiceItem.md#clientuomid)
- [entityUuid](ProformaInvoiceItem.md#entityuuid)
- [familyId](ProformaInvoiceItem.md#familyid)
- [internalQuantity](ProformaInvoiceItem.md#internalquantity)
- [metadata](ProformaInvoiceItem.md#metadata)
- [needApproval](ProformaInvoiceItem.md#needapproval)
- [proformaInvoiceId](ProformaInvoiceItem.md#proformainvoiceid)
- [roundOff](ProformaInvoiceItem.md#roundoff)
- [specifications](ProformaInvoiceItem.md#specifications)
- [taxGroupId](ProformaInvoiceItem.md#taxgroupid)
- [unitPrice](ProformaInvoiceItem.md#unitprice)
- [userComment](ProformaInvoiceItem.md#usercomment)
- [fields](ProformaInvoiceItem.md#fields)
- [runtime](ProformaInvoiceItem.md#runtime)
- [typeName](ProformaInvoiceItem.md#typename)

### Methods

- [clone](ProformaInvoiceItem.md#clone)
- [equals](ProformaInvoiceItem.md#equals)
- [fromBinary](ProformaInvoiceItem.md#frombinary)
- [fromJson](ProformaInvoiceItem.md#fromjson)
- [fromJsonString](ProformaInvoiceItem.md#fromjsonstring)
- [getType](ProformaInvoiceItem.md#gettype)
- [toBinary](ProformaInvoiceItem.md#tobinary)
- [toJSON](ProformaInvoiceItem.md#tojson)
- [toJson](ProformaInvoiceItem.md#tojson-1)
- [toJsonString](ProformaInvoiceItem.md#tojsonstring)
- [equals](ProformaInvoiceItem.md#equals-1)
- [fromBinary](ProformaInvoiceItem.md#frombinary-1)
- [fromJson](ProformaInvoiceItem.md#fromjson-1)
- [fromJsonString](ProformaInvoiceItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoiceItem**(`data?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Overrides

Message\&lt;ProformaInvoiceItem\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2252](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2252)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2128](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2128)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing of this item.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2210](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2210)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
5000
```

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2200](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2200)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2190](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2190)

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

[src/proforma_invoices.scailo_pb.ts:2112](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2112)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the family or catalog item being estimated in this proforma invoice.

**`Example`**

```ts
505
```

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2170](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2170)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2180](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2180)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2120](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2120)

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

[src/proforma_invoices.scailo_pb.ts:2140](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2140)

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent proforma invoice to which this preliminary item will be attached.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 proforma_invoice_id = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2160](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2160)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

**`Description`**

The applicable rounding adjustment amount for this specific item's estimated financial total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2240](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2240)

___

### specifications

• **specifications**: `string` = `""`

**`Description`**

Additional custom textual requirements, notes, or specifications associated with this preliminary item.

**`Example`**

```ts
"Estimated based on current freight rates."
```

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2250](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2250)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the tax group or tax bracket anticipated for this specific line item.

**`Example`**

```ts
4
```

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2230](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2230)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The estimated price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2220](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2220)

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

[src/proforma_invoices.scailo_pb.ts:2150](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2150)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2259](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2259)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2257](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2257)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoiceItem"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2258](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2258)

## Methods

### clone

▸ **clone**(): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

Create a deep copy.

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoiceItem`](ProformaInvoiceItem.md) \| `PlainMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\>

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
| `a` | `undefined` \| [`ProformaInvoiceItem`](ProformaInvoiceItem.md) \| `PlainMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |
| `b` | `undefined` \| [`ProformaInvoiceItem`](ProformaInvoiceItem.md) \| `PlainMessage`\<[`ProformaInvoiceItem`](ProformaInvoiceItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2289](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2289)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2277](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2277)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2281](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2281)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItem`](ProformaInvoiceItem.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2285](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2285)
