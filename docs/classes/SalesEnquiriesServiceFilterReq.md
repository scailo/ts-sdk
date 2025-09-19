[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceFilterReq

# Class: SalesEnquiriesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SalesEnquiriesServiceFilterReq

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

  ↳ **`SalesEnquiriesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesEnquiriesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesEnquiriesServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesEnquiriesServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesEnquiriesServiceFilterReq.md#approverroleid)
- [buyerClientId](SalesEnquiriesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesEnquiriesServiceFilterReq.md#completedonend)
- [completedOnStart](SalesEnquiriesServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesEnquiriesServiceFilterReq.md#consigneeclientid)
- [count](SalesEnquiriesServiceFilterReq.md#count)
- [creationTimestampEnd](SalesEnquiriesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesEnquiriesServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesEnquiriesServiceFilterReq.md#currencyid)
- [deliveryDateEnd](SalesEnquiriesServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](SalesEnquiriesServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](SalesEnquiriesServiceFilterReq.md#deliverydatestart)
- [entityUuid](SalesEnquiriesServiceFilterReq.md#entityuuid)
- [finalRefNumber](SalesEnquiriesServiceFilterReq.md#finalrefnumber)
- [formData](SalesEnquiriesServiceFilterReq.md#formdata)
- [isActive](SalesEnquiriesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SalesEnquiriesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesEnquiriesServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesEnquiriesServiceFilterReq.md#offset)
- [priority](SalesEnquiriesServiceFilterReq.md#priority)
- [referenceId](SalesEnquiriesServiceFilterReq.md#referenceid)
- [sortKey](SalesEnquiriesServiceFilterReq.md#sortkey)
- [sortOrder](SalesEnquiriesServiceFilterReq.md#sortorder)
- [status](SalesEnquiriesServiceFilterReq.md#status)
- [fields](SalesEnquiriesServiceFilterReq.md#fields)
- [runtime](SalesEnquiriesServiceFilterReq.md#runtime)
- [typeName](SalesEnquiriesServiceFilterReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceFilterReq.md#clone)
- [equals](SalesEnquiriesServiceFilterReq.md#equals)
- [fromBinary](SalesEnquiriesServiceFilterReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceFilterReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceFilterReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceFilterReq.md#gettype)
- [toBinary](SalesEnquiriesServiceFilterReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceFilterReq.md#tojson)
- [toJson](SalesEnquiriesServiceFilterReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceFilterReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceFilterReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceFilterReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceFilterReq**(`data?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1932)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1839](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1839)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1832](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1832)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1825](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1825)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1846](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1846)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1888)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1860](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1860)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1853](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1853)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1881)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1755](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1755)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1790](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1790)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1783](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1783)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1902](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1902)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1923](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1923)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1909](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1909)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1916)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1811](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1811)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1874](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1874)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1930](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1930)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1748](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1748)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1804](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1804)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1797](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1797)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1762)

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1895)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales enquiry

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1867)

___

### sortKey

• **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md) = `SALES_ENQUIRY_SORT_KEY.SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1776](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1776)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1769](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1769)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales enquiry

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1818](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1818)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1939](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1939)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1937)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceFilterReq"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1938](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1938)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1981](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1981)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1969](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1969)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1973)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1977](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1977)
