[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceFilterReq

# Class: DebitNotesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.DebitNotesServiceFilterReq

## Hierarchy

- `Message`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\>

  ↳ **`DebitNotesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](DebitNotesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](DebitNotesServiceFilterReq.md#approvedonend)
- [approvedOnStart](DebitNotesServiceFilterReq.md#approvedonstart)
- [approverRoleId](DebitNotesServiceFilterReq.md#approverroleid)
- [completedOnEnd](DebitNotesServiceFilterReq.md#completedonend)
- [completedOnStart](DebitNotesServiceFilterReq.md#completedonstart)
- [count](DebitNotesServiceFilterReq.md#count)
- [creationTimestampEnd](DebitNotesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](DebitNotesServiceFilterReq.md#creationtimestampstart)
- [currencyId](DebitNotesServiceFilterReq.md#currencyid)
- [entityUuid](DebitNotesServiceFilterReq.md#entityuuid)
- [familyId](DebitNotesServiceFilterReq.md#familyid)
- [finalRefNumber](DebitNotesServiceFilterReq.md#finalrefnumber)
- [formData](DebitNotesServiceFilterReq.md#formdata)
- [includeFormData](DebitNotesServiceFilterReq.md#includeformdata)
- [isActive](DebitNotesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](DebitNotesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](DebitNotesServiceFilterReq.md#modificationtimestampstart)
- [offset](DebitNotesServiceFilterReq.md#offset)
- [projectId](DebitNotesServiceFilterReq.md#projectid)
- [refFrom](DebitNotesServiceFilterReq.md#reffrom)
- [refId](DebitNotesServiceFilterReq.md#refid)
- [referenceId](DebitNotesServiceFilterReq.md#referenceid)
- [sortKey](DebitNotesServiceFilterReq.md#sortkey)
- [sortOrder](DebitNotesServiceFilterReq.md#sortorder)
- [status](DebitNotesServiceFilterReq.md#status)
- [totalValueMax](DebitNotesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](DebitNotesServiceFilterReq.md#totalvaluemin)
- [vendorId](DebitNotesServiceFilterReq.md#vendorid)
- [fields](DebitNotesServiceFilterReq.md#fields)
- [runtime](DebitNotesServiceFilterReq.md#runtime)
- [typeName](DebitNotesServiceFilterReq.md#typename)

### Methods

- [clone](DebitNotesServiceFilterReq.md#clone)
- [equals](DebitNotesServiceFilterReq.md#equals)
- [fromBinary](DebitNotesServiceFilterReq.md#frombinary)
- [fromJson](DebitNotesServiceFilterReq.md#fromjson)
- [fromJsonString](DebitNotesServiceFilterReq.md#fromjsonstring)
- [getType](DebitNotesServiceFilterReq.md#gettype)
- [toBinary](DebitNotesServiceFilterReq.md#tobinary)
- [toJSON](DebitNotesServiceFilterReq.md#tojson)
- [toJson](DebitNotesServiceFilterReq.md#tojson-1)
- [toJsonString](DebitNotesServiceFilterReq.md#tojsonstring)
- [equals](DebitNotesServiceFilterReq.md#equals-1)
- [fromBinary](DebitNotesServiceFilterReq.md#frombinary-1)
- [fromJson](DebitNotesServiceFilterReq.md#fromjson-1)
- [fromJsonString](DebitNotesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceFilterReq**(`data?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Overrides

Message\&lt;DebitNotesServiceFilterReq\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:2463](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2463)

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

[src/debit_notes.scailo_pb.ts:2302](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2302)

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

[src/debit_notes.scailo_pb.ts:2286](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2286)

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

[src/debit_notes.scailo_pb.ts:2270](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2270)

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

[src/debit_notes.scailo_pb.ts:2318](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2318)

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

[src/debit_notes.scailo_pb.ts:2350](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2350)

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

[src/debit_notes.scailo_pb.ts:2334](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2334)

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

[src/debit_notes.scailo_pb.ts:2124](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2124)

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

[src/debit_notes.scailo_pb.ts:2194](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2194)

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

[src/debit_notes.scailo_pb.ts:2178](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2178)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

[src/debit_notes.scailo_pb.ts:2403](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2403)

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

[src/debit_notes.scailo_pb.ts:2242](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2242)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/debit_notes.scailo_pb.ts:2424](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2424)

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

[src/debit_notes.scailo_pb.ts:2382](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2382)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/debit_notes.scailo_pb.ts:2448](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2448)

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

[src/debit_notes.scailo_pb.ts:2461](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2461)

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

[src/debit_notes.scailo_pb.ts:2108](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2108)

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

[src/debit_notes.scailo_pb.ts:2226](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2226)

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

[src/debit_notes.scailo_pb.ts:2210](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2210)

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

[src/debit_notes.scailo_pb.ts:2140](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2140)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

[src/debit_notes.scailo_pb.ts:2417](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2417)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/debit_notes.scailo_pb.ts:2389](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2389)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/debit_notes.scailo_pb.ts:2396](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2396)

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

[src/debit_notes.scailo_pb.ts:2366](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2366)

___

### sortKey

• **sortKey**: [`DEBIT_NOTE_SORT_KEY`](../enums/DEBIT_NOTE_SORT_KEY.md) = `DEBIT_NOTE_SORT_KEY.DEBIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/debit_notes.scailo_pb.ts:2162](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2162)

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

[src/debit_notes.scailo_pb.ts:2152](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2152)

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

[src/debit_notes.scailo_pb.ts:2254](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2254)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

[src/debit_notes.scailo_pb.ts:2438](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2438)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

[src/debit_notes.scailo_pb.ts:2431](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2431)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

[src/debit_notes.scailo_pb.ts:2410](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2410)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:2470](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2470)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:2468](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2468)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceFilterReq"``

#### Defined in

[src/debit_notes.scailo_pb.ts:2469](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2469)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md) \| `PlainMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md) \| `PlainMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md) \| `PlainMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:2514](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2514)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2502](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2502)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2506](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2506)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2510](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/debit_notes.scailo_pb.ts#L2510)
