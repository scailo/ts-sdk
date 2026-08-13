[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiry

# Class: SalesEnquiry

Represents a complete Sales Enquiry entity within the system.
This message encapsulates the comprehensive state of an inbound lead or prospective customer request,
including identity metadata, prospective client mapping, preliminary financial aggregates,
approval lifecycle, audit history, and the complete collection of requested line items.

**Note:** This payload is typically returned in read operations (e.g., View, Search)
and provides frontend clients or external CRMs with the entire context needed to review,
analyze, and ultimately convert the lead into a formal Sales Quotation or Sales Order.

**`Generated`**

from message Scailo.SalesEnquiry

## Hierarchy

- `Message`\<[`SalesEnquiry`](SalesEnquiry.md)\>

  ↳ **`SalesEnquiry`**

## Table of contents

### Constructors

- [constructor](SalesEnquiry.md#constructor)

### Properties

- [amendmentCount](SalesEnquiry.md#amendmentcount)
- [approvalMetadata](SalesEnquiry.md#approvalmetadata)
- [buyerClientId](SalesEnquiry.md#buyerclientid)
- [completedOn](SalesEnquiry.md#completedon)
- [consigneeClientId](SalesEnquiry.md#consigneeclientid)
- [currencyId](SalesEnquiry.md#currencyid)
- [description](SalesEnquiry.md#description)
- [entityUuid](SalesEnquiry.md#entityuuid)
- [finalRefNumber](SalesEnquiry.md#finalrefnumber)
- [formData](SalesEnquiry.md#formdata)
- [list](SalesEnquiry.md#list)
- [logs](SalesEnquiry.md#logs)
- [metadata](SalesEnquiry.md#metadata)
- [miscellaneousCost](SalesEnquiry.md#miscellaneouscost)
- [overallDiscount](SalesEnquiry.md#overalldiscount)
- [referenceId](SalesEnquiry.md#referenceid)
- [roundOff](SalesEnquiry.md#roundoff)
- [status](SalesEnquiry.md#status)
- [totalPrice](SalesEnquiry.md#totalprice)
- [vaultFolderId](SalesEnquiry.md#vaultfolderid)
- [fields](SalesEnquiry.md#fields)
- [runtime](SalesEnquiry.md#runtime)
- [typeName](SalesEnquiry.md#typename)

### Methods

- [clone](SalesEnquiry.md#clone)
- [equals](SalesEnquiry.md#equals)
- [fromBinary](SalesEnquiry.md#frombinary)
- [fromJson](SalesEnquiry.md#fromjson)
- [fromJsonString](SalesEnquiry.md#fromjsonstring)
- [getType](SalesEnquiry.md#gettype)
- [toBinary](SalesEnquiry.md#tobinary)
- [toJSON](SalesEnquiry.md#tojson)
- [toJson](SalesEnquiry.md#tojson-1)
- [toJsonString](SalesEnquiry.md#tojsonstring)
- [equals](SalesEnquiry.md#equals-1)
- [fromBinary](SalesEnquiry.md#frombinary-1)
- [fromJson](SalesEnquiry.md#fromjson-1)
- [fromJsonString](SalesEnquiry.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiry**(`data?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Overrides

Message\&lt;SalesEnquiry\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1034](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1034)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

**`Description`**

The number of times that this record has been amended after approval.

**`Example`**

```ts
5
```

**`Generated`**

from field: uint64 amendment_count = 20;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1000](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1000)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L864)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).

**`Example`**

```ts
1051
```

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L940)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L890)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).

**`Example`**

```ts
1050
```

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L930)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.

**`Example`**

```ts
3
```

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L950)

___

### description

• **description**: `string` = `""`

**`Description`**

A textual summary detailing the specific products, services, or information the lead is requesting.

**`Example`**

```ts
"Looking for bulk pricing on industrial copper wiring"
```

**`Generated`**

from field: string description = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L960)

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

[src/sales_enquiries.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L848)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:920](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L920)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1020](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1020)

___

### list

• **list**: [`SalesEnquiryItem`](SalesEnquiryItem.md)[] = `[]`

**`Description`**

The complete, aggregated list of individual line items, products, or services that constitute this sales enquiry.

**`Example`**

```ts
[]
```

**`Format`**

Repeated array of SalesEnquiryItem message blocks.

**`Generated`**

from field: repeated Scailo.SalesEnquiryItem list = 30;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1012)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L880)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L856)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

**`Description`**

Any additional miscellaneous costs (e.g., estimated handling or freight charges) tentatively associated with the enquiry, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L970)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

**`Description`**

A flat target discount amount associated with the enquiry, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L980)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:910](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L910)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

**`Description`**

The applicable rounding adjustment amount for prospective financial totals. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L990)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L872)

___

### totalPrice

• **totalPrice**: `number` = `0`

**`Description`**

The calculated grand total value of the sales enquiry, including all items, discounts, costs, and round-offs. Represented as a standard decimal value.

**`Example`**

```ts
15250.75
```

**`Format`**

Double-precision floating-point number.

**`Generated`**

from field: double total_price = 50;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1032)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L900)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1041)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1039)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiry"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1040)

## Methods

### clone

▸ **clone**(): [`SalesEnquiry`](SalesEnquiry.md)

Create a deep copy.

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiry`](SalesEnquiry.md) \| `PlainMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiry`](SalesEnquiry.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiry`](SalesEnquiry.md)\>

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
| `a` | `undefined` \| [`SalesEnquiry`](SalesEnquiry.md) \| `PlainMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |
| `b` | `undefined` \| [`SalesEnquiry`](SalesEnquiry.md) \| `PlainMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1076](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1076)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1064)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1068](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1068)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1072)
