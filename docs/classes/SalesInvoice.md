[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoice

# Class: SalesInvoice

Describes the parameters that are part of a standard response

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

[src/sales_invoices.scailo_pb.ts:909](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L909)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

The number of times that the sales invoice has been amended

**`Generated`**

from field: uint64 amendment_count = 22;

#### Defined in

[src/sales_invoices.scailo_pb.ts:893](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L893)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L760)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L844)

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

[src/sales_invoices.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L786)

___

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

The excess tax amount

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 20;

#### Defined in

[src/sales_invoices.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L879)

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

The excess tax group

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

[src/sales_invoices.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L872)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L837)

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

[src/sales_invoices.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L744)

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

[src/sales_invoices.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L816)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/sales_invoices.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L907)

___

### list

• **list**: [`SalesInvoiceItem`](SalesInvoiceItem.md)[] = `[]`

The list of associated sales invoice items

**`Generated`**

from field: repeated Scailo.SalesInvoiceItem list = 30;

#### Defined in

[src/sales_invoices.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L900)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:776](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L776)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L752)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

[src/sales_invoices.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L851)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

[src/sales_invoices.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L858)

___

### refFrom

• **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md) = `SALES_INVOICE_REF_FROM.SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 12;

#### Defined in

[src/sales_invoices.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L823)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/sales_invoices.scailo_pb.ts:830](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L830)

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

[src/sales_invoices.scailo_pb.ts:806](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L806)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/sales_invoices.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L865)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_invoices.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L768)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the sales invoice (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 21;

#### Defined in

[src/sales_invoices.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L886)

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

[src/sales_invoices.scailo_pb.ts:796](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L796)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L916)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L914)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoice"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L915)

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

[src/sales_invoices.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L953)

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

[src/sales_invoices.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L941)

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

[src/sales_invoices.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L945)

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

[src/sales_invoices.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_invoices.scailo_pb.ts#L949)
