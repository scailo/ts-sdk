[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceFilterReq

# Class: SalesInvoicesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SalesInvoicesServiceFilterReq

## Hierarchy

- `Message`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\>

  ↳ **`SalesInvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesInvoicesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesInvoicesServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesInvoicesServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesInvoicesServiceFilterReq.md#approverroleid)
- [bankAccountId](SalesInvoicesServiceFilterReq.md#bankaccountid)
- [buyerClientId](SalesInvoicesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesInvoicesServiceFilterReq.md#completedonend)
- [completedOnStart](SalesInvoicesServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesInvoicesServiceFilterReq.md#consigneeclientid)
- [count](SalesInvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](SalesInvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesInvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesInvoicesServiceFilterReq.md#currencyid)
- [entityUuid](SalesInvoicesServiceFilterReq.md#entityuuid)
- [familyId](SalesInvoicesServiceFilterReq.md#familyid)
- [finalRefNumber](SalesInvoicesServiceFilterReq.md#finalrefnumber)
- [isActive](SalesInvoicesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SalesInvoicesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesInvoicesServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesInvoicesServiceFilterReq.md#offset)
- [projectId](SalesInvoicesServiceFilterReq.md#projectid)
- [refFrom](SalesInvoicesServiceFilterReq.md#reffrom)
- [refId](SalesInvoicesServiceFilterReq.md#refid)
- [referenceId](SalesInvoicesServiceFilterReq.md#referenceid)
- [sortKey](SalesInvoicesServiceFilterReq.md#sortkey)
- [sortOrder](SalesInvoicesServiceFilterReq.md#sortorder)
- [status](SalesInvoicesServiceFilterReq.md#status)
- [totalValueMax](SalesInvoicesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](SalesInvoicesServiceFilterReq.md#totalvaluemin)
- [fields](SalesInvoicesServiceFilterReq.md#fields)
- [runtime](SalesInvoicesServiceFilterReq.md#runtime)
- [typeName](SalesInvoicesServiceFilterReq.md#typename)

### Methods

- [clone](SalesInvoicesServiceFilterReq.md#clone)
- [equals](SalesInvoicesServiceFilterReq.md#equals)
- [fromBinary](SalesInvoicesServiceFilterReq.md#frombinary)
- [fromJson](SalesInvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](SalesInvoicesServiceFilterReq.md#fromjsonstring)
- [getType](SalesInvoicesServiceFilterReq.md#gettype)
- [toBinary](SalesInvoicesServiceFilterReq.md#tobinary)
- [toJSON](SalesInvoicesServiceFilterReq.md#tojson)
- [toJson](SalesInvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](SalesInvoicesServiceFilterReq.md#tojsonstring)
- [equals](SalesInvoicesServiceFilterReq.md#equals-1)
- [fromBinary](SalesInvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](SalesInvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceFilterReq**(`data?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Overrides

Message\&lt;SalesInvoicesServiceFilterReq\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1880

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/sales_invoices.scailo_pb.ts:1772

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/sales_invoices.scailo_pb.ts:1765

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:1758

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/sales_invoices.scailo_pb.ts:1779

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

src/sales_invoices.scailo_pb.ts:1835

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/sales_invoices.scailo_pb.ts:1857

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/sales_invoices.scailo_pb.ts:1793

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/sales_invoices.scailo_pb.ts:1786

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/sales_invoices.scailo_pb.ts:1850

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:1688

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/sales_invoices.scailo_pb.ts:1723

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/sales_invoices.scailo_pb.ts:1716

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

src/sales_invoices.scailo_pb.ts:1828

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/sales_invoices.scailo_pb.ts:1744

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/sales_invoices.scailo_pb.ts:1842

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/sales_invoices.scailo_pb.ts:1807

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:1681

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/sales_invoices.scailo_pb.ts:1737

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/sales_invoices.scailo_pb.ts:1730

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_invoices.scailo_pb.ts:1695

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/sales_invoices.scailo_pb.ts:1864

___

### refFrom

• **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md) = `SALES_INVOICE_REF_FROM.SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 22;

#### Defined in

src/sales_invoices.scailo_pb.ts:1814

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/sales_invoices.scailo_pb.ts:1821

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales invoice

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/sales_invoices.scailo_pb.ts:1800

___

### sortKey

• **sortKey**: [`SALES_INVOICE_SORT_KEY`](../enums/SALES_INVOICE_SORT_KEY.md) = `SALES_INVOICE_SORT_KEY.SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/sales_invoices.scailo_pb.ts:1709

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_invoices.scailo_pb.ts:1702

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:1751

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the sales invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

src/sales_invoices.scailo_pb.ts:1878

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the sales invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

src/sales_invoices.scailo_pb.ts:1871

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1887

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1885

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceFilterReq"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1886

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1931

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1919

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1923

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1927
