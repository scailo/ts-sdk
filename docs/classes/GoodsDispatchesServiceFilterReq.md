[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceFilterReq

# Class: GoodsDispatchesServiceFilterReq

Advanced filter request for searching and paginating goods dispatches using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.GoodsDispatchesServiceFilterReq

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\>

  ↳ **`GoodsDispatchesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](GoodsDispatchesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](GoodsDispatchesServiceFilterReq.md#approvedonend)
- [approvedOnStart](GoodsDispatchesServiceFilterReq.md#approvedonstart)
- [approverRoleId](GoodsDispatchesServiceFilterReq.md#approverroleid)
- [billingStatus](GoodsDispatchesServiceFilterReq.md#billingstatus)
- [buyerClientId](GoodsDispatchesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](GoodsDispatchesServiceFilterReq.md#completedonend)
- [completedOnStart](GoodsDispatchesServiceFilterReq.md#completedonstart)
- [consigneeClientId](GoodsDispatchesServiceFilterReq.md#consigneeclientid)
- [count](GoodsDispatchesServiceFilterReq.md#count)
- [creationTimestampEnd](GoodsDispatchesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](GoodsDispatchesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](GoodsDispatchesServiceFilterReq.md#entityuuid)
- [familyId](GoodsDispatchesServiceFilterReq.md#familyid)
- [finalRefNumber](GoodsDispatchesServiceFilterReq.md#finalrefnumber)
- [formData](GoodsDispatchesServiceFilterReq.md#formdata)
- [includeFormData](GoodsDispatchesServiceFilterReq.md#includeformdata)
- [isActive](GoodsDispatchesServiceFilterReq.md#isactive)
- [locationId](GoodsDispatchesServiceFilterReq.md#locationid)
- [modificationTimestampEnd](GoodsDispatchesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](GoodsDispatchesServiceFilterReq.md#modificationtimestampstart)
- [offset](GoodsDispatchesServiceFilterReq.md#offset)
- [projectId](GoodsDispatchesServiceFilterReq.md#projectid)
- [refFrom](GoodsDispatchesServiceFilterReq.md#reffrom)
- [refId](GoodsDispatchesServiceFilterReq.md#refid)
- [referenceId](GoodsDispatchesServiceFilterReq.md#referenceid)
- [sortKey](GoodsDispatchesServiceFilterReq.md#sortkey)
- [sortOrder](GoodsDispatchesServiceFilterReq.md#sortorder)
- [status](GoodsDispatchesServiceFilterReq.md#status)
- [fields](GoodsDispatchesServiceFilterReq.md#fields)
- [runtime](GoodsDispatchesServiceFilterReq.md#runtime)
- [typeName](GoodsDispatchesServiceFilterReq.md#typename)

### Methods

- [clone](GoodsDispatchesServiceFilterReq.md#clone)
- [equals](GoodsDispatchesServiceFilterReq.md#equals)
- [fromBinary](GoodsDispatchesServiceFilterReq.md#frombinary)
- [fromJson](GoodsDispatchesServiceFilterReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceFilterReq.md#fromjsonstring)
- [getType](GoodsDispatchesServiceFilterReq.md#gettype)
- [toBinary](GoodsDispatchesServiceFilterReq.md#tobinary)
- [toJSON](GoodsDispatchesServiceFilterReq.md#tojson)
- [toJson](GoodsDispatchesServiceFilterReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceFilterReq.md#tojsonstring)
- [equals](GoodsDispatchesServiceFilterReq.md#equals-1)
- [fromBinary](GoodsDispatchesServiceFilterReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceFilterReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceFilterReq**(`data?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceFilterReq\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3050](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3050)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2817](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2817)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2801](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2801)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2785](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2785)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2833](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2833)

___

### billingStatus

• `Optional` **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md)

**`Optional`**

**`Description`**

Filter goods dispatches based on their financial conversion lifecycle state—specifically, whether the physical shipment remains unbilled or has been successfully converted into a finalized Sales Invoice.

**`Example`**

```ts
GOODS_DISPATCH_BILLING_STATUS_UNBILLED
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid GOODS_DISPATCH_BILLING_STATUS enum value.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2977](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2977)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 buyer_client_id = 51;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3009](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3009)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2865](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2865)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2849](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2849)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1050
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 consignee_client_id = 50;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2993](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2993)

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

[src/goods_dispatches.scailo_pb.ts:2639](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2639)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2709](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2709)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2693](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2693)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2757](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2757)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches that contain at least one line item belonging to this specific family ID.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 30;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2961](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2961)

___

### finalRefNumber

• `Optional` **finalRefNumber**: `string`

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

from field: optional string final_ref_number = 21;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2897](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2897)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3035](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3035)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3048](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3048)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2623](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2623)

___

### locationId

• `Optional` **locationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the physical location, warehouse, or fulfillment center from which these goods are being picked, packed, and dispatched.

**`Example`**

```ts
42
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 location_id = 25;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2945](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2945)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2741](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2741)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2725](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2725)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2655](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2655)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 52;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3025](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3025)

___

### refFrom

• `Optional` **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md)

**`Optional`**

**`Description`**

Filter goods dispatches based on the specific module or record type from which the logistical fulfillment originated (e.g., Sales Order).

**`Example`**

```ts
GOODS_DISPATCH_REF_FROM_SALES_ORDER
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid GOODS_DISPATCH_REF_FROM enum value.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2913](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2913)

___

### refId

• `Optional` **refId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 ref_id = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2929](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2929)

___

### referenceId

• `Optional` **referenceId**: `string`

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

from field: optional string reference_id = 20;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2881](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2881)

___

### sortKey

• `Optional` **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2677](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2677)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2667](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2667)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2769](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L2769)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3057](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3057)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3055](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3055)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceFilterReq"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3056](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3056)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3101](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3101)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3089](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3089)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3093](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3093)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3097](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3097)
