[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceFilterReq

# Class: ProformaInvoicesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ProformaInvoicesServiceFilterReq

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

  ↳ **`ProformaInvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProformaInvoicesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProformaInvoicesServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProformaInvoicesServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProformaInvoicesServiceFilterReq.md#approverroleid)
- [bankAccountId](ProformaInvoicesServiceFilterReq.md#bankaccountid)
- [billingStatus](ProformaInvoicesServiceFilterReq.md#billingstatus)
- [buyerClientId](ProformaInvoicesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](ProformaInvoicesServiceFilterReq.md#completedonend)
- [completedOnStart](ProformaInvoicesServiceFilterReq.md#completedonstart)
- [consigneeClientId](ProformaInvoicesServiceFilterReq.md#consigneeclientid)
- [count](ProformaInvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](ProformaInvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProformaInvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyId](ProformaInvoicesServiceFilterReq.md#currencyid)
- [entityUuid](ProformaInvoicesServiceFilterReq.md#entityuuid)
- [familyId](ProformaInvoicesServiceFilterReq.md#familyid)
- [finalRefNumber](ProformaInvoicesServiceFilterReq.md#finalrefnumber)
- [isActive](ProformaInvoicesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ProformaInvoicesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ProformaInvoicesServiceFilterReq.md#modificationtimestampstart)
- [offset](ProformaInvoicesServiceFilterReq.md#offset)
- [projectId](ProformaInvoicesServiceFilterReq.md#projectid)
- [refFrom](ProformaInvoicesServiceFilterReq.md#reffrom)
- [refId](ProformaInvoicesServiceFilterReq.md#refid)
- [referenceId](ProformaInvoicesServiceFilterReq.md#referenceid)
- [sortKey](ProformaInvoicesServiceFilterReq.md#sortkey)
- [sortOrder](ProformaInvoicesServiceFilterReq.md#sortorder)
- [status](ProformaInvoicesServiceFilterReq.md#status)
- [totalValueMax](ProformaInvoicesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](ProformaInvoicesServiceFilterReq.md#totalvaluemin)
- [fields](ProformaInvoicesServiceFilterReq.md#fields)
- [runtime](ProformaInvoicesServiceFilterReq.md#runtime)
- [typeName](ProformaInvoicesServiceFilterReq.md#typename)

### Methods

- [clone](ProformaInvoicesServiceFilterReq.md#clone)
- [equals](ProformaInvoicesServiceFilterReq.md#equals)
- [fromBinary](ProformaInvoicesServiceFilterReq.md#frombinary)
- [fromJson](ProformaInvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceFilterReq.md#fromjsonstring)
- [getType](ProformaInvoicesServiceFilterReq.md#gettype)
- [toBinary](ProformaInvoicesServiceFilterReq.md#tobinary)
- [toJSON](ProformaInvoicesServiceFilterReq.md#tojson)
- [toJson](ProformaInvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceFilterReq.md#tojsonstring)
- [equals](ProformaInvoicesServiceFilterReq.md#equals-1)
- [fromBinary](ProformaInvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceFilterReq**(`data?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceFilterReq\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:1895

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1780

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1773

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1766

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1787

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1843

___

### billingStatus

• **billingStatus**: [`PROFORMA_INVOICE_BILLING_STATUS`](../enums/PROFORMA_INVOICE_BILLING_STATUS.md) = `PROFORMA_INVOICE_BILLING_STATUS.PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the proforma invoice bill

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1857

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 61;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1872

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1801

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1794

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 60;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1865

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1696

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1731

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1724

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1836

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1752

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1850

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1815

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1689

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1745

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1738

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1703

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 62;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1879

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1822

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1829

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the proforma invoice

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1808

___

### sortKey

• **sortKey**: [`PROFORMA_INVOICE_SORT_KEY`](../enums/PROFORMA_INVOICE_SORT_KEY.md) = `PROFORMA_INVOICE_SORT_KEY.PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1717

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1710

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this proforma invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1759

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the proforma invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 81;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1893

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the proforma invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 80;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1886

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1902

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1900

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceFilterReq"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:1901

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1947

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1935

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1939

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1943
