[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceFilterReq

# Class: WorkOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.WorkOrdersServiceFilterReq

## Hierarchy

- `Message`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

  ↳ **`WorkOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](WorkOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](WorkOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](WorkOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](WorkOrdersServiceFilterReq.md#approverroleid)
- [buyerClientId](WorkOrdersServiceFilterReq.md#buyerclientid)
- [completedOnEnd](WorkOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](WorkOrdersServiceFilterReq.md#completedonstart)
- [consigneeClientId](WorkOrdersServiceFilterReq.md#consigneeclientid)
- [count](WorkOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](WorkOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](WorkOrdersServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](WorkOrdersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](WorkOrdersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](WorkOrdersServiceFilterReq.md#deliverydatestart)
- [entityUuid](WorkOrdersServiceFilterReq.md#entityuuid)
- [familyId](WorkOrdersServiceFilterReq.md#familyid)
- [finalRefNumber](WorkOrdersServiceFilterReq.md#finalrefnumber)
- [formData](WorkOrdersServiceFilterReq.md#formdata)
- [includeFormData](WorkOrdersServiceFilterReq.md#includeformdata)
- [isActive](WorkOrdersServiceFilterReq.md#isactive)
- [locationId](WorkOrdersServiceFilterReq.md#locationid)
- [modificationTimestampEnd](WorkOrdersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](WorkOrdersServiceFilterReq.md#modificationtimestampstart)
- [offset](WorkOrdersServiceFilterReq.md#offset)
- [projectId](WorkOrdersServiceFilterReq.md#projectid)
- [refFrom](WorkOrdersServiceFilterReq.md#reffrom)
- [refId](WorkOrdersServiceFilterReq.md#refid)
- [referenceId](WorkOrdersServiceFilterReq.md#referenceid)
- [sortKey](WorkOrdersServiceFilterReq.md#sortkey)
- [sortOrder](WorkOrdersServiceFilterReq.md#sortorder)
- [status](WorkOrdersServiceFilterReq.md#status)
- [fields](WorkOrdersServiceFilterReq.md#fields)
- [runtime](WorkOrdersServiceFilterReq.md#runtime)
- [typeName](WorkOrdersServiceFilterReq.md#typename)

### Methods

- [clone](WorkOrdersServiceFilterReq.md#clone)
- [equals](WorkOrdersServiceFilterReq.md#equals)
- [fromBinary](WorkOrdersServiceFilterReq.md#frombinary)
- [fromJson](WorkOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](WorkOrdersServiceFilterReq.md#fromjsonstring)
- [getType](WorkOrdersServiceFilterReq.md#gettype)
- [toBinary](WorkOrdersServiceFilterReq.md#tobinary)
- [toJSON](WorkOrdersServiceFilterReq.md#tojson)
- [toJson](WorkOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](WorkOrdersServiceFilterReq.md#tojsonstring)
- [equals](WorkOrdersServiceFilterReq.md#equals-1)
- [fromBinary](WorkOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](WorkOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceFilterReq**(`data?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Overrides

Message\&lt;WorkOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:1778](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1778)

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

[src/work_orders.scailo_pb.ts:1602](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1602)

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

[src/work_orders.scailo_pb.ts:1586](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1586)

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

[src/work_orders.scailo_pb.ts:1570](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1570)

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

[src/work_orders.scailo_pb.ts:1618](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1618)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/work_orders.scailo_pb.ts:1746](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1746)

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

[src/work_orders.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1650)

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

[src/work_orders.scailo_pb.ts:1634](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1634)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/work_orders.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1739)

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

[src/work_orders.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1424)

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

[src/work_orders.scailo_pb.ts:1494](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1494)

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

[src/work_orders.scailo_pb.ts:1478](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1478)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

[src/work_orders.scailo_pb.ts:1671](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1671)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

[src/work_orders.scailo_pb.ts:1657](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1657)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

[src/work_orders.scailo_pb.ts:1664](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1664)

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

[src/work_orders.scailo_pb.ts:1542](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1542)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/work_orders.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1731)

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

[src/work_orders.scailo_pb.ts:1703](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1703)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/work_orders.scailo_pb.ts:1763](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1763)

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

[src/work_orders.scailo_pb.ts:1776](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1776)

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

[src/work_orders.scailo_pb.ts:1408](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1408)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/work_orders.scailo_pb.ts:1724](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1724)

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

[src/work_orders.scailo_pb.ts:1526](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1526)

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

[src/work_orders.scailo_pb.ts:1510](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1510)

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

[src/work_orders.scailo_pb.ts:1440](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1440)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/work_orders.scailo_pb.ts:1753](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1753)

___

### refFrom

• **refFrom**: [`WORK_ORDER_REF_FROM`](../enums/WORK_ORDER_REF_FROM.md) = `WORK_ORDER_REF_FROM.WORK_ORDER_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.WORK_ORDER_REF_FROM ref_from = 22;

#### Defined in

[src/work_orders.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1710)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/work_orders.scailo_pb.ts:1717](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1717)

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

[src/work_orders.scailo_pb.ts:1687](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1687)

___

### sortKey

• **sortKey**: [`WORK_ORDER_SORT_KEY`](../enums/WORK_ORDER_SORT_KEY.md) = `WORK_ORDER_SORT_KEY.WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/work_orders.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1462)

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

[src/work_orders.scailo_pb.ts:1452](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1452)

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

[src/work_orders.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1554)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:1785](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1785)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:1783](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1783)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceFilterReq"``

#### Defined in

[src/work_orders.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1784)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:1831](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1831)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1819](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1819)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1823](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1823)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1827](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/work_orders.scailo_pb.ts#L1827)
