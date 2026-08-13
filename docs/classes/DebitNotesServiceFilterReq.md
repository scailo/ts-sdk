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

[src/debit_notes.scailo_pb.ts:2545](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2545)

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

[src/debit_notes.scailo_pb.ts:2384](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2384)

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

[src/debit_notes.scailo_pb.ts:2368](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2368)

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

[src/debit_notes.scailo_pb.ts:2352](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2352)

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

[src/debit_notes.scailo_pb.ts:2400](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2400)

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

[src/debit_notes.scailo_pb.ts:2432](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2432)

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

[src/debit_notes.scailo_pb.ts:2416](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2416)

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

[src/debit_notes.scailo_pb.ts:2206](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2206)

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

[src/debit_notes.scailo_pb.ts:2276](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2276)

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

[src/debit_notes.scailo_pb.ts:2260](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2260)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

[src/debit_notes.scailo_pb.ts:2485](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2485)

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

[src/debit_notes.scailo_pb.ts:2324](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2324)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/debit_notes.scailo_pb.ts:2506](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2506)

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

[src/debit_notes.scailo_pb.ts:2464](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2464)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/debit_notes.scailo_pb.ts:2530](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2530)

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

[src/debit_notes.scailo_pb.ts:2543](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2543)

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

[src/debit_notes.scailo_pb.ts:2190](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2190)

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

[src/debit_notes.scailo_pb.ts:2308](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2308)

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

[src/debit_notes.scailo_pb.ts:2292](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2292)

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

[src/debit_notes.scailo_pb.ts:2222](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2222)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

[src/debit_notes.scailo_pb.ts:2499](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2499)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/debit_notes.scailo_pb.ts:2471](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2471)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/debit_notes.scailo_pb.ts:2478](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2478)

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

[src/debit_notes.scailo_pb.ts:2448](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2448)

___

### sortKey

• **sortKey**: [`DEBIT_NOTE_SORT_KEY`](../enums/DEBIT_NOTE_SORT_KEY.md) = `DEBIT_NOTE_SORT_KEY.DEBIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/debit_notes.scailo_pb.ts:2244](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2244)

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

[src/debit_notes.scailo_pb.ts:2234](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2234)

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

[src/debit_notes.scailo_pb.ts:2336](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2336)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

[src/debit_notes.scailo_pb.ts:2520](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2520)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

[src/debit_notes.scailo_pb.ts:2513](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2513)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

[src/debit_notes.scailo_pb.ts:2492](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2492)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:2552](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2552)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:2550](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2550)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceFilterReq"``

#### Defined in

[src/debit_notes.scailo_pb.ts:2551](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2551)

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

[src/debit_notes.scailo_pb.ts:2596](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2596)

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

[src/debit_notes.scailo_pb.ts:2584](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2584)

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

[src/debit_notes.scailo_pb.ts:2588](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2588)

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

[src/debit_notes.scailo_pb.ts:2592](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/debit_notes.scailo_pb.ts#L2592)
