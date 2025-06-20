[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceCountReq

# Class: ProformaInvoicesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ProformaInvoicesServiceCountReq

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\>

  ↳ **`ProformaInvoicesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ProformaInvoicesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ProformaInvoicesServiceCountReq.md#approvedonend)
- [approvedOnStart](ProformaInvoicesServiceCountReq.md#approvedonstart)
- [approverRoleId](ProformaInvoicesServiceCountReq.md#approverroleid)
- [bankAccountId](ProformaInvoicesServiceCountReq.md#bankaccountid)
- [billingStatus](ProformaInvoicesServiceCountReq.md#billingstatus)
- [buyerClientId](ProformaInvoicesServiceCountReq.md#buyerclientid)
- [completedOnEnd](ProformaInvoicesServiceCountReq.md#completedonend)
- [completedOnStart](ProformaInvoicesServiceCountReq.md#completedonstart)
- [consigneeClientId](ProformaInvoicesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](ProformaInvoicesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ProformaInvoicesServiceCountReq.md#creationtimestampstart)
- [currencyId](ProformaInvoicesServiceCountReq.md#currencyid)
- [entityUuid](ProformaInvoicesServiceCountReq.md#entityuuid)
- [familyId](ProformaInvoicesServiceCountReq.md#familyid)
- [finalRefNumber](ProformaInvoicesServiceCountReq.md#finalrefnumber)
- [formData](ProformaInvoicesServiceCountReq.md#formdata)
- [isActive](ProformaInvoicesServiceCountReq.md#isactive)
- [modificationTimestampEnd](ProformaInvoicesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ProformaInvoicesServiceCountReq.md#modificationtimestampstart)
- [projectId](ProformaInvoicesServiceCountReq.md#projectid)
- [refFrom](ProformaInvoicesServiceCountReq.md#reffrom)
- [refId](ProformaInvoicesServiceCountReq.md#refid)
- [referenceId](ProformaInvoicesServiceCountReq.md#referenceid)
- [status](ProformaInvoicesServiceCountReq.md#status)
- [totalValueMax](ProformaInvoicesServiceCountReq.md#totalvaluemax)
- [totalValueMin](ProformaInvoicesServiceCountReq.md#totalvaluemin)
- [fields](ProformaInvoicesServiceCountReq.md#fields)
- [runtime](ProformaInvoicesServiceCountReq.md#runtime)
- [typeName](ProformaInvoicesServiceCountReq.md#typename)

### Methods

- [clone](ProformaInvoicesServiceCountReq.md#clone)
- [equals](ProformaInvoicesServiceCountReq.md#equals)
- [fromBinary](ProformaInvoicesServiceCountReq.md#frombinary)
- [fromJson](ProformaInvoicesServiceCountReq.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceCountReq.md#fromjsonstring)
- [getType](ProformaInvoicesServiceCountReq.md#gettype)
- [toBinary](ProformaInvoicesServiceCountReq.md#tobinary)
- [toJSON](ProformaInvoicesServiceCountReq.md#tojson)
- [toJson](ProformaInvoicesServiceCountReq.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceCountReq.md#tojsonstring)
- [equals](ProformaInvoicesServiceCountReq.md#equals-1)
- [fromBinary](ProformaInvoicesServiceCountReq.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceCountReq.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceCountReq**(`data?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceCountReq\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:2184

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2062

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2055

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2048

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2069

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2125

___

### billingStatus

• **billingStatus**: [`PROFORMA_INVOICE_BILLING_STATUS`](../enums/PROFORMA_INVOICE_BILLING_STATUS.md) = `PROFORMA_INVOICE_BILLING_STATUS.PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the proforma invoice bill

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2139

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 61;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2154

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2083

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2076

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 60;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2147

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2013

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2006

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2118

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2034

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2132

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2097

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2182

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1999

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2027

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2020

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 62;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2161

___

### refFrom

• **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md) = `PROFORMA_INVOICE_REF_FROM.PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2104

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2111

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the proforma invoice

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2090

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this proforma invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2041

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the proforma invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 81;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2175

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the proforma invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 80;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2168

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2191

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2189

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceCountReq"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:2190

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2233

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2221

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2225

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2229
