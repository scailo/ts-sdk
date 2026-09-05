[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoice

# Class: SalesInvoice

Represents a complete, finalized Sales Invoice entity within the system.
This message encapsulates the comprehensive state of a formal billing document issued to a buyer,
including its identity metadata, strict linkage to the originating operational record (e.g., Sales Order),
designated payment destination (bank account), financial aggregates (taxes, discounts, and round-offs),
approval lifecycle, audit history, and the complete collection of billed line items.

**Note:** This payload is typically utilized in read operations (e.g., View, Search)
and provides frontend clients, financial dashboards, and external accounting systems with the
entire context needed to render, process, collect payment, and reconcile the invoice.

**`Generated`**

from message Scailo.SalesInvoice

## Hierarchy

- `Message`\<[`SalesInvoice`](SalesInvoice.md)\>

  ↳ **`SalesInvoice`**

## Table of contents

### Constructors

- [constructor](SalesInvoice.md#constructor)

### Properties

- [amendmentCount](SalesInvoice.md#amendmentcount)
- [approvalMetadata](SalesInvoice.md#approvalmetadata)
- [bankAccountId](SalesInvoice.md#bankaccountid)
- [completedOn](SalesInvoice.md#completedon)
- [cumulativeExcessTaxAmount](SalesInvoice.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](SalesInvoice.md#cumulativeexcesstaxgroupid)
- [currencyId](SalesInvoice.md#currencyid)
- [entityUuid](SalesInvoice.md#entityuuid)
- [finalRefNumber](SalesInvoice.md#finalrefnumber)
- [formData](SalesInvoice.md#formdata)
- [list](SalesInvoice.md#list)
- [logs](SalesInvoice.md#logs)
- [metadata](SalesInvoice.md#metadata)
- [miscellaneousCost](SalesInvoice.md#miscellaneouscost)
- [overallDiscount](SalesInvoice.md#overalldiscount)
- [refFrom](SalesInvoice.md#reffrom)
- [refId](SalesInvoice.md#refid)
- [referenceId](SalesInvoice.md#referenceid)
- [roundOff](SalesInvoice.md#roundoff)
- [status](SalesInvoice.md#status)
- [totalValue](SalesInvoice.md#totalvalue)
- [vaultFolderId](SalesInvoice.md#vaultfolderid)
- [fields](SalesInvoice.md#fields)
- [runtime](SalesInvoice.md#runtime)
- [typeName](SalesInvoice.md#typename)

### Methods

- [clone](SalesInvoice.md#clone)
- [equals](SalesInvoice.md#equals)
- [fromBinary](SalesInvoice.md#frombinary)
- [fromJson](SalesInvoice.md#fromjson)
- [fromJsonString](SalesInvoice.md#fromjsonstring)
- [getType](SalesInvoice.md#gettype)
- [toBinary](SalesInvoice.md#tobinary)
- [toJSON](SalesInvoice.md#tojson)
- [toJson](SalesInvoice.md#tojson-1)
- [toJsonString](SalesInvoice.md#tojsonstring)
- [equals](SalesInvoice.md#equals-1)
- [fromBinary](SalesInvoice.md#frombinary-1)
- [fromJson](SalesInvoice.md#fromjson-1)
- [fromJsonString](SalesInvoice.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoice**(`data?`): [`SalesInvoice`](SalesInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoice`](SalesInvoice.md)\> |

#### Returns

[`SalesInvoice`](SalesInvoice.md)

#### Overrides

Message\&lt;SalesInvoice\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1206)

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

from field: uint64 amendment_count = 22;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1184)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1016](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1016)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.

**`Example`**

```ts
15
```

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1112)

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

[src/sales_invoices.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1042)

___

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

**`Description`**

The monetary amount of the cumulative excess tax applied to the invoice, represented in the base currency subunit.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 20;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1162)

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of an excess tax group applied at the cumulative/invoice level (e.g., for specialized regional surcharges or cumulative tax brackets).

**`Example`**

```ts
6
```

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1152](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1152)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the currency used for all financial calculations and billing within this invoice.

**`Example`**

```ts
3
```

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1102](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1102)

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

[src/sales_invoices.scailo_pb.ts:1000](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1000)

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

[src/sales_invoices.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1072)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1204)

___

### list

• **list**: [`SalesInvoiceItem`](SalesInvoiceItem.md)[] = `[]`

**`Description`**

The complete, aggregated list of individual line items, products, or services that constitute this sales invoice.

**`Example`**

```ts
[]
```

**`Format`**

Repeated array of SalesOrderItem message blocks.

**`Generated`**

from field: repeated Scailo.SalesInvoiceItem list = 30;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1196)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1032)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1008)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

**`Description`**

Any additional miscellaneous costs (e.g., late fees, freight charges) applied to the invoice, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1122)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

**`Description`**

A flat discount amount applied across the entire invoice total, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1132)

___

### refFrom

• **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md) = `SALES_INVOICE_REF_FROM.SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED`

**`Description`**

The specific module or record type from which this invoice originates (e.g., Sales Order).

**`Example`**

```ts
"SALES_INVOICE_REF_FROM_SALES_ORDER"
```

**`Generated`**

from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 12;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1082](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1082)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1092)

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

[src/sales_invoices.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1062)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

**`Description`**

The applicable rounding adjustment amount to align the final invoice total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1142)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1024](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1024)

___

### totalValue

• **totalValue**: `number` = `0`

**`Description`**

The calculated grand total value of the sales invoice, including all items, discounts, costs, and round-offs. Represented as a standard decimal value.

**`Example`**

```ts
15250.75
```

**`Format`**

Double-precision floating-point number.

**`Generated`**

from field: double total_value = 21;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1174)

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

[src/sales_invoices.scailo_pb.ts:1052](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1052)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1213)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1211)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoice"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1212)

## Methods

### clone

▸ **clone**(): [`SalesInvoice`](SalesInvoice.md)

Create a deep copy.

#### Returns

[`SalesInvoice`](SalesInvoice.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoice`](SalesInvoice.md) \| `PlainMessage`\<[`SalesInvoice`](SalesInvoice.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoice`](SalesInvoice.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoice`](SalesInvoice.md)\>

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
| `a` | `undefined` \| [`SalesInvoice`](SalesInvoice.md) \| `PlainMessage`\<[`SalesInvoice`](SalesInvoice.md)\> |
| `b` | `undefined` \| [`SalesInvoice`](SalesInvoice.md) \| `PlainMessage`\<[`SalesInvoice`](SalesInvoice.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1250)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoice`](SalesInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoice`](SalesInvoice.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1238)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoice`](SalesInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoice`](SalesInvoice.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1242)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoice`](SalesInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoice`](SalesInvoice.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1246](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1246)
