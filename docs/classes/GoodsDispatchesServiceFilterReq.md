[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceFilterReq

# Class: GoodsDispatchesServiceFilterReq

Describes the base request payload of a filter search

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

[src/goods_dispatches.scailo_pb.ts:2331](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2331)

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

[src/goods_dispatches.scailo_pb.ts:2185](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2185)

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

[src/goods_dispatches.scailo_pb.ts:2169](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2169)

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

[src/goods_dispatches.scailo_pb.ts:2153](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2153)

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

[src/goods_dispatches.scailo_pb.ts:2201](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2201)

___

### billingStatus

• **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md) = `GOODS_DISPATCH_BILLING_STATUS.GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods dispatch bill

**`Generated`**

from field: Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2300](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2300)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2315](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2315)

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

[src/goods_dispatches.scailo_pb.ts:2233](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2233)

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

[src/goods_dispatches.scailo_pb.ts:2217](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2217)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2308](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2308)

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

[src/goods_dispatches.scailo_pb.ts:2007](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2007)

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

[src/goods_dispatches.scailo_pb.ts:2077](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2077)

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

[src/goods_dispatches.scailo_pb.ts:2061](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2061)

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

[src/goods_dispatches.scailo_pb.ts:2125](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2125)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2293](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2293)

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

[src/goods_dispatches.scailo_pb.ts:2265](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2265)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2329](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2329)

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

[src/goods_dispatches.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L1991)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2286](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2286)

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

[src/goods_dispatches.scailo_pb.ts:2109](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2109)

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

[src/goods_dispatches.scailo_pb.ts:2093](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2093)

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

[src/goods_dispatches.scailo_pb.ts:2023](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2023)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2322](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2322)

___

### refFrom

• **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md) = `GOODS_DISPATCH_REF_FROM.GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2272](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2272)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2279](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2279)

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

[src/goods_dispatches.scailo_pb.ts:2249](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2249)

___

### sortKey

• **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md) = `GOODS_DISPATCH_SORT_KEY.GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2045)

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

[src/goods_dispatches.scailo_pb.ts:2035](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2035)

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

[src/goods_dispatches.scailo_pb.ts:2137](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2137)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2338](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2338)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2336](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2336)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceFilterReq"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2337](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2337)

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

[src/goods_dispatches.scailo_pb.ts:2381](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2381)

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

[src/goods_dispatches.scailo_pb.ts:2369](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2369)

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

[src/goods_dispatches.scailo_pb.ts:2373](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2373)

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

[src/goods_dispatches.scailo_pb.ts:2377](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2377)
