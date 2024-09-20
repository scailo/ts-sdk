[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoice

# Class: VendorInvoice

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.VendorInvoice

## Hierarchy

- `Message`\<[`VendorInvoice`](VendorInvoice.md)\>

  ↳ **`VendorInvoice`**

## Table of contents

### Constructors

- [constructor](VendorInvoice.md#constructor)

### Properties

- [approvalMetadata](VendorInvoice.md#approvalmetadata)
- [completedOn](VendorInvoice.md#completedon)
- [cumulativeExcessTaxAmount](VendorInvoice.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](VendorInvoice.md#cumulativeexcesstaxgroupid)
- [currencyId](VendorInvoice.md#currencyid)
- [entityUuid](VendorInvoice.md#entityuuid)
- [finalRefNumber](VendorInvoice.md#finalrefnumber)
- [formData](VendorInvoice.md#formdata)
- [list](VendorInvoice.md#list)
- [logs](VendorInvoice.md#logs)
- [metadata](VendorInvoice.md#metadata)
- [miscellaneousCost](VendorInvoice.md#miscellaneouscost)
- [overallDiscount](VendorInvoice.md#overalldiscount)
- [refFrom](VendorInvoice.md#reffrom)
- [refId](VendorInvoice.md#refid)
- [referenceId](VendorInvoice.md#referenceid)
- [roundOff](VendorInvoice.md#roundoff)
- [status](VendorInvoice.md#status)
- [totalValue](VendorInvoice.md#totalvalue)
- [vaultFolderId](VendorInvoice.md#vaultfolderid)
- [vendorBillDate](VendorInvoice.md#vendorbilldate)
- [vendorBillNo](VendorInvoice.md#vendorbillno)
- [fields](VendorInvoice.md#fields)
- [runtime](VendorInvoice.md#runtime)
- [typeName](VendorInvoice.md#typename)

### Methods

- [clone](VendorInvoice.md#clone)
- [equals](VendorInvoice.md#equals)
- [fromBinary](VendorInvoice.md#frombinary)
- [fromJson](VendorInvoice.md#fromjson)
- [fromJsonString](VendorInvoice.md#fromjsonstring)
- [getType](VendorInvoice.md#gettype)
- [toBinary](VendorInvoice.md#tobinary)
- [toJSON](VendorInvoice.md#tojson)
- [toJson](VendorInvoice.md#tojson-1)
- [toJsonString](VendorInvoice.md#tojsonstring)
- [equals](VendorInvoice.md#equals-1)
- [fromBinary](VendorInvoice.md#frombinary-1)
- [fromJson](VendorInvoice.md#fromjson-1)
- [fromJsonString](VendorInvoice.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoice**(`data?`): [`VendorInvoice`](VendorInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoice`](VendorInvoice.md)\> |

#### Returns

[`VendorInvoice`](VendorInvoice.md)

#### Overrides

Message\&lt;VendorInvoice\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:813

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/vendor_invoices.scailo_pb.ts:678

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this vendor invoice was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/vendor_invoices.scailo_pb.ts:699

___

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

The excess tax amount

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 21;

#### Defined in

src/vendor_invoices.scailo_pb.ts:790

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

The excess tax group

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 20;

#### Defined in

src/vendor_invoices.scailo_pb.ts:783

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/vendor_invoices.scailo_pb.ts:741

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:664

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/vendor_invoices.scailo_pb.ts:720

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

src/vendor_invoices.scailo_pb.ts:811

___

### list

• **list**: [`VendorInvoiceItem`](VendorInvoiceItem.md)[] = `[]`

The list of associated vendor invoice items

**`Generated`**

from field: repeated Scailo.VendorInvoiceItem list = 40;

#### Defined in

src/vendor_invoices.scailo_pb.ts:804

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this vendor invoice

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/vendor_invoices.scailo_pb.ts:692

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this vendor invoice

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:671

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

src/vendor_invoices.scailo_pb.ts:762

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

src/vendor_invoices.scailo_pb.ts:769

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/vendor_invoices.scailo_pb.ts:727

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/vendor_invoices.scailo_pb.ts:734

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the vendor invoice

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/vendor_invoices.scailo_pb.ts:713

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

src/vendor_invoices.scailo_pb.ts:776

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this vendor invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/vendor_invoices.scailo_pb.ts:685

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the vendor invoice (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 30;

#### Defined in

src/vendor_invoices.scailo_pb.ts:797

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/vendor_invoices.scailo_pb.ts:706

___

### vendorBillDate

• **vendorBillDate**: `string` = `""`

The date on which the bill was raised by the vendor

**`Generated`**

from field: string vendor_bill_date = 16;

#### Defined in

src/vendor_invoices.scailo_pb.ts:755

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 15;

#### Defined in

src/vendor_invoices.scailo_pb.ts:748

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:820

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:818

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoice"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:819

## Methods

### clone

▸ **clone**(): [`VendorInvoice`](VendorInvoice.md)

Create a deep copy.

#### Returns

[`VendorInvoice`](VendorInvoice.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoice`](VendorInvoice.md) \| `PlainMessage`\<[`VendorInvoice`](VendorInvoice.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoice`](VendorInvoice.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoice`](VendorInvoice.md)\>

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
| `a` | `undefined` \| [`VendorInvoice`](VendorInvoice.md) \| `PlainMessage`\<[`VendorInvoice`](VendorInvoice.md)\> |
| `b` | `undefined` \| [`VendorInvoice`](VendorInvoice.md) \| `PlainMessage`\<[`VendorInvoice`](VendorInvoice.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:857

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoice`](VendorInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoice`](VendorInvoice.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:845

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoice`](VendorInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoice`](VendorInvoice.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:849

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoice`](VendorInvoice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoice`](VendorInvoice.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:853
