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
- [includeFormData](SalesEnquiriesServiceFilterReq.md#includeformdata)
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

[src/sales_enquiries.scailo_pb.ts:2267](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2267)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2113)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2097](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2097)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2081](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2081)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2129)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2207](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2207)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2161](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2161)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2145)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2200](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2200)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1935](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L1935)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2005](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2005)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L1989)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2221](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2221)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2242](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2242)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2228](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2228)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2235](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2235)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2053](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2053)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2193](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2193)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2252](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2252)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2265](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2265)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1919](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L1919)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2037)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2021)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1951](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L1951)

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2214](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2214)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2177)

___

### sortKey

• **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md) = `SALES_ENQUIRY_SORT_KEY.SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L1973)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L1963)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2065)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2274](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2274)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2272](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2272)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceFilterReq"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2273](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2273)

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

[src/sales_enquiries.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2317)

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

[src/sales_enquiries.scailo_pb.ts:2305](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2305)

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

[src/sales_enquiries.scailo_pb.ts:2309](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2309)

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

[src/sales_enquiries.scailo_pb.ts:2313](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_enquiries.scailo_pb.ts#L2313)
