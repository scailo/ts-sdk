[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceFilterReq

# Class: VendorInvoicesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.VendorInvoicesServiceFilterReq

## Hierarchy

- `Message`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\>

  ↳ **`VendorInvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](VendorInvoicesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](VendorInvoicesServiceFilterReq.md#approvedonend)
- [approvedOnStart](VendorInvoicesServiceFilterReq.md#approvedonstart)
- [approverRoleId](VendorInvoicesServiceFilterReq.md#approverroleid)
- [completedOnEnd](VendorInvoicesServiceFilterReq.md#completedonend)
- [completedOnStart](VendorInvoicesServiceFilterReq.md#completedonstart)
- [count](VendorInvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](VendorInvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VendorInvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyId](VendorInvoicesServiceFilterReq.md#currencyid)
- [entityUuid](VendorInvoicesServiceFilterReq.md#entityuuid)
- [familyId](VendorInvoicesServiceFilterReq.md#familyid)
- [finalRefNumber](VendorInvoicesServiceFilterReq.md#finalrefnumber)
- [formData](VendorInvoicesServiceFilterReq.md#formdata)
- [isActive](VendorInvoicesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VendorInvoicesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorInvoicesServiceFilterReq.md#modificationtimestampstart)
- [offset](VendorInvoicesServiceFilterReq.md#offset)
- [projectId](VendorInvoicesServiceFilterReq.md#projectid)
- [refFrom](VendorInvoicesServiceFilterReq.md#reffrom)
- [refId](VendorInvoicesServiceFilterReq.md#refid)
- [referenceId](VendorInvoicesServiceFilterReq.md#referenceid)
- [sortKey](VendorInvoicesServiceFilterReq.md#sortkey)
- [sortOrder](VendorInvoicesServiceFilterReq.md#sortorder)
- [status](VendorInvoicesServiceFilterReq.md#status)
- [totalValueMax](VendorInvoicesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](VendorInvoicesServiceFilterReq.md#totalvaluemin)
- [vendorBillDateEnd](VendorInvoicesServiceFilterReq.md#vendorbilldateend)
- [vendorBillDateExact](VendorInvoicesServiceFilterReq.md#vendorbilldateexact)
- [vendorBillDateStart](VendorInvoicesServiceFilterReq.md#vendorbilldatestart)
- [vendorBillNo](VendorInvoicesServiceFilterReq.md#vendorbillno)
- [vendorId](VendorInvoicesServiceFilterReq.md#vendorid)
- [fields](VendorInvoicesServiceFilterReq.md#fields)
- [runtime](VendorInvoicesServiceFilterReq.md#runtime)
- [typeName](VendorInvoicesServiceFilterReq.md#typename)

### Methods

- [clone](VendorInvoicesServiceFilterReq.md#clone)
- [equals](VendorInvoicesServiceFilterReq.md#equals)
- [fromBinary](VendorInvoicesServiceFilterReq.md#frombinary)
- [fromJson](VendorInvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](VendorInvoicesServiceFilterReq.md#fromjsonstring)
- [getType](VendorInvoicesServiceFilterReq.md#gettype)
- [toBinary](VendorInvoicesServiceFilterReq.md#tobinary)
- [toJSON](VendorInvoicesServiceFilterReq.md#tojson)
- [toJson](VendorInvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](VendorInvoicesServiceFilterReq.md#tojsonstring)
- [equals](VendorInvoicesServiceFilterReq.md#equals-1)
- [fromBinary](VendorInvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](VendorInvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceFilterReq**(`data?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Overrides

Message\&lt;VendorInvoicesServiceFilterReq\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2109](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2109)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1981](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1981)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1974](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1974)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1967](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1967)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1988](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1988)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2002](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2002)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1995](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1995)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1897](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1897)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1932)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1925](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1925)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2065)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1953](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1953)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2086](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2086)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2016](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2016)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2107](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2107)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1890](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1890)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1946](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1946)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1939](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1939)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1904](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1904)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2079](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2079)

___

### refFrom

• **refFrom**: [`VENDOR_INVOICE_REF_FROM`](../enums/VENDOR_INVOICE_REF_FROM.md) = `VENDOR_INVOICE_REF_FROM.VENDOR_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2023](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2023)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2030](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2030)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the vendor invoice

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2009](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2009)

___

### sortKey

• **sortKey**: [`VENDOR_INVOICE_SORT_KEY`](../enums/VENDOR_INVOICE_SORT_KEY.md) = `VENDOR_INVOICE_SORT_KEY.VENDOR_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1918](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1918)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1911)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this vendor invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1960](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L1960)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2100](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2100)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2093](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2093)

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The maximum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2051](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2051)

___

### vendorBillDateExact

• **vendorBillDateExact**: `string` = `""`

The exact vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_exact = 27;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2058](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2058)

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The minimum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2044](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2044)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2037)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2072](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2072)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2116](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2116)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2114](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2114)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceFilterReq"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2115](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2115)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2163](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2163)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2151](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2151)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2155](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2155)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceFilterReq`](VendorInvoicesServiceFilterReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2159](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/vendor_invoices.scailo_pb.ts#L2159)
