[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoice

# Class: ProformaInvoice

Represents a complete, finalized Proforma Invoice entity within the system.
This message encapsulates the comprehensive state of a preliminary billing document
issued to a buyer prior to physical fulfillment or final delivery. It includes the
document's identity metadata, operational linkages to a source record (e.g., Sales Order),
designated bank accounts for advance payments, financial estimations (taxes, discounts, and round-offs),
approval lifecycle, audit history, and the complete collection of estimated line items.

**Note:** This payload is typically utilized in read operations (e.g., View, Search)
and provides frontend clients, financial dashboards, and external systems with the
entire context needed to render the proforma document for customs declarations,
secure advance payments, or facilitate internal purchasing approvals on the buyer's end.

**`Generated`**

from message Scailo.ProformaInvoice

## Hierarchy

- `Message`\<[`ProformaInvoice`](ProformaInvoice.md)\>

  ↳ **`ProformaInvoice`**

## Table of contents

### Constructors

- [constructor](ProformaInvoice.md#constructor)

### Properties

- [amendmentCount](ProformaInvoice.md#amendmentcount)
- [approvalMetadata](ProformaInvoice.md#approvalmetadata)
- [bankAccountId](ProformaInvoice.md#bankaccountid)
- [completedOn](ProformaInvoice.md#completedon)
- [cumulativeExcessTaxAmount](ProformaInvoice.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](ProformaInvoice.md#cumulativeexcesstaxgroupid)
- [currencyId](ProformaInvoice.md#currencyid)
- [entityUuid](ProformaInvoice.md#entityuuid)
- [finalRefNumber](ProformaInvoice.md#finalrefnumber)
- [formData](ProformaInvoice.md#formdata)
- [list](ProformaInvoice.md#list)
- [logs](ProformaInvoice.md#logs)
- [metadata](ProformaInvoice.md#metadata)
- [miscellaneousCost](ProformaInvoice.md#miscellaneouscost)
- [overallDiscount](ProformaInvoice.md#overalldiscount)
- [refFrom](ProformaInvoice.md#reffrom)
- [refId](ProformaInvoice.md#refid)
- [referenceId](ProformaInvoice.md#referenceid)
- [roundOff](ProformaInvoice.md#roundoff)
- [status](ProformaInvoice.md#status)
- [totalValue](ProformaInvoice.md#totalvalue)
- [vaultFolderId](ProformaInvoice.md#vaultfolderid)
- [fields](ProformaInvoice.md#fields)
- [runtime](ProformaInvoice.md#runtime)
- [typeName](ProformaInvoice.md#typename)

### Methods

- [clone](ProformaInvoice.md#clone)
- [equals](ProformaInvoice.md#equals)
- [fromBinary](ProformaInvoice.md#frombinary)
- [fromJson](ProformaInvoice.md#fromjson)
- [fromJsonString](ProformaInvoice.md#fromjsonstring)
- [getType](ProformaInvoice.md#gettype)
- [toBinary](ProformaInvoice.md#tobinary)
- [toJSON](ProformaInvoice.md#tojson)
- [toJson](ProformaInvoice.md#tojson-1)
- [toJsonString](ProformaInvoice.md#tojsonstring)
- [equals](ProformaInvoice.md#equals-1)
- [fromBinary](ProformaInvoice.md#frombinary-1)
- [fromJson](ProformaInvoice.md#fromjson-1)
- [fromJsonString](ProformaInvoice.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoice**(`data?`): [`ProformaInvoice`](ProformaInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoice`](ProformaInvoice.md)\> |

#### Returns

[`ProformaInvoice`](ProformaInvoice.md)

#### Overrides

Message\&lt;ProformaInvoice\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1245)

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

[src/proforma_invoices.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1223)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1055)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.

**`Example`**

```ts
15
```

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1151](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1151)

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

[src/proforma_invoices.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1081)

___

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

**`Description`**

The anticipated monetary amount of the cumulative excess tax applied to the proforma invoice, represented in the base currency subunit.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 20;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1201)

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of an excess tax group anticipated at the cumulative/invoice level (e.g., for specialized regional surcharges).

**`Example`**

```ts
6
```

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1191)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the currency used for all financial estimations within this proforma invoice.

**`Example`**

```ts
3
```

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1141)

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

[src/proforma_invoices.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1039)

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

[src/proforma_invoices.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1111)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1243)

___

### list

• **list**: [`ProformaInvoiceItem`](ProformaInvoiceItem.md)[] = `[]`

**`Description`**

The complete, aggregated list of individual line items, products, or services that constitute this proforma invoice.

**`Example`**

```ts
[]
```

**`Format`**

Repeated array of ProformaInvoiceItem message blocks.

**`Generated`**

from field: repeated Scailo.ProformaInvoiceItem list = 30;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1235)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1071)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1047)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

**`Description`**

Any estimated additional miscellaneous costs (e.g., anticipated freight charges) applied to the proforma invoice, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1161)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

**`Description`**

A flat estimated discount amount applied across the entire proforma invoice total, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1171)

___

### refFrom

• **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md) = `PROFORMA_INVOICE_REF_FROM.PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED`

**`Description`**

The specific module or record type from which this preliminary invoice originates (e.g., Sales Order).

**`Example`**

```ts
"PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
```

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1121)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being estimated).

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1131](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1131)

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

[src/proforma_invoices.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1101)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

**`Description`**

The estimated rounding adjustment amount to align the anticipated final invoice total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1181](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1181)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1063)

___

### totalValue

• **totalValue**: `number` = `0`

**`Description`**

The calculated grand total value of the proforma invoice, including all items, discounts, costs, and round-offs. Represented as a standard decimal value.

**`Example`**

```ts
15250.75
```

**`Format`**

Double-precision floating-point number.

**`Generated`**

from field: double total_value = 21;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1213)

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

[src/proforma_invoices.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1091)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1252)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1250)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoice"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1251)

## Methods

### clone

▸ **clone**(): [`ProformaInvoice`](ProformaInvoice.md)

Create a deep copy.

#### Returns

[`ProformaInvoice`](ProformaInvoice.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoice`](ProformaInvoice.md) \| `PlainMessage`\<[`ProformaInvoice`](ProformaInvoice.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoice`](ProformaInvoice.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoice`](ProformaInvoice.md)\>

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
| `a` | `undefined` \| [`ProformaInvoice`](ProformaInvoice.md) \| `PlainMessage`\<[`ProformaInvoice`](ProformaInvoice.md)\> |
| `b` | `undefined` \| [`ProformaInvoice`](ProformaInvoice.md) \| `PlainMessage`\<[`ProformaInvoice`](ProformaInvoice.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1289)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoice`](ProformaInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoice`](ProformaInvoice.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1277)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoice`](ProformaInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoice`](ProformaInvoice.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1281)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoice`](ProformaInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoice`](ProformaInvoice.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1285)
