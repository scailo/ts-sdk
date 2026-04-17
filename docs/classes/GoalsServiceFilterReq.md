[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceFilterReq

# Class: GoalsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.GoalsServiceFilterReq

## Hierarchy

- `Message`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\>

  ↳ **`GoalsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](GoalsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](GoalsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](GoalsServiceFilterReq.md#approvedonend)
- [approvedOnStart](GoalsServiceFilterReq.md#approvedonstart)
- [approverRoleId](GoalsServiceFilterReq.md#approverroleid)
- [completedOnEnd](GoalsServiceFilterReq.md#completedonend)
- [completedOnStart](GoalsServiceFilterReq.md#completedonstart)
- [count](GoalsServiceFilterReq.md#count)
- [creationTimestampEnd](GoalsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](GoalsServiceFilterReq.md#creationtimestampstart)
- [endDateEnd](GoalsServiceFilterReq.md#enddateend)
- [endDateExact](GoalsServiceFilterReq.md#enddateexact)
- [endDateStart](GoalsServiceFilterReq.md#enddatestart)
- [entityUuid](GoalsServiceFilterReq.md#entityuuid)
- [finalRefNumber](GoalsServiceFilterReq.md#finalrefnumber)
- [formData](GoalsServiceFilterReq.md#formdata)
- [isActive](GoalsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](GoalsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](GoalsServiceFilterReq.md#modificationtimestampstart)
- [offset](GoalsServiceFilterReq.md#offset)
- [referenceId](GoalsServiceFilterReq.md#referenceid)
- [sortKey](GoalsServiceFilterReq.md#sortkey)
- [sortOrder](GoalsServiceFilterReq.md#sortorder)
- [startDateEnd](GoalsServiceFilterReq.md#startdateend)
- [startDateExact](GoalsServiceFilterReq.md#startdateexact)
- [startDateStart](GoalsServiceFilterReq.md#startdatestart)
- [status](GoalsServiceFilterReq.md#status)
- [userId](GoalsServiceFilterReq.md#userid)
- [fields](GoalsServiceFilterReq.md#fields)
- [runtime](GoalsServiceFilterReq.md#runtime)
- [typeName](GoalsServiceFilterReq.md#typename)

### Methods

- [clone](GoalsServiceFilterReq.md#clone)
- [equals](GoalsServiceFilterReq.md#equals)
- [fromBinary](GoalsServiceFilterReq.md#frombinary)
- [fromJson](GoalsServiceFilterReq.md#fromjson)
- [fromJsonString](GoalsServiceFilterReq.md#fromjsonstring)
- [getType](GoalsServiceFilterReq.md#gettype)
- [toBinary](GoalsServiceFilterReq.md#tobinary)
- [toJSON](GoalsServiceFilterReq.md#tojson)
- [toJson](GoalsServiceFilterReq.md#tojson-1)
- [toJsonString](GoalsServiceFilterReq.md#tojsonstring)
- [equals](GoalsServiceFilterReq.md#equals-1)
- [fromBinary](GoalsServiceFilterReq.md#frombinary-1)
- [fromJson](GoalsServiceFilterReq.md#fromjson-1)
- [fromJsonString](GoalsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceFilterReq**(`data?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Overrides

Message\&lt;GoalsServiceFilterReq\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2012)

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

[src/goals.scailo_pb.ts:1874](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1874)

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

[src/goals.scailo_pb.ts:1858](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1858)

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

[src/goals.scailo_pb.ts:1842](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1842)

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

[src/goals.scailo_pb.ts:1890](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1890)

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

[src/goals.scailo_pb.ts:1922](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1922)

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

[src/goals.scailo_pb.ts:1906](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1906)

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

[src/goals.scailo_pb.ts:1696](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1696)

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

[src/goals.scailo_pb.ts:1766](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1766)

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

[src/goals.scailo_pb.ts:1750](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1750)

___

### endDateEnd

• **endDateEnd**: `string` = `""`

The max end date of the plan (in string)

**`Generated`**

from field: string end_date_end = 37;

#### Defined in

[src/goals.scailo_pb.ts:1996](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1996)

___

### endDateExact

• **endDateExact**: `string` = `""`

The exact end date of the plan (in string)

**`Generated`**

from field: string end_date_exact = 38;

#### Defined in

[src/goals.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2003)

___

### endDateStart

• **endDateStart**: `string` = `""`

The min end date of the plan (in string)

**`Generated`**

from field: string end_date_start = 36;

#### Defined in

[src/goals.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1989)

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

[src/goals.scailo_pb.ts:1814](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1814)

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

[src/goals.scailo_pb.ts:1954](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1954)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/goals.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2010)

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

[src/goals.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1680)

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

[src/goals.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1798)

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

[src/goals.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1782)

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

[src/goals.scailo_pb.ts:1712](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1712)

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

[src/goals.scailo_pb.ts:1938](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1938)

___

### sortKey

• **sortKey**: [`GOAL_SORT_KEY`](../enums/GOAL_SORT_KEY.md) = `GOAL_SORT_KEY.GOAL_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOAL_SORT_KEY sort_key = 5;

#### Defined in

[src/goals.scailo_pb.ts:1734](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1734)

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

[src/goals.scailo_pb.ts:1724](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1724)

___

### startDateEnd

• **startDateEnd**: `string` = `""`

The max start date of the plan (in string)

**`Generated`**

from field: string start_date_end = 31;

#### Defined in

[src/goals.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1975)

___

### startDateExact

• **startDateExact**: `string` = `""`

The exact start date of the plan (in string)

**`Generated`**

from field: string start_date_exact = 32;

#### Defined in

[src/goals.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1982)

___

### startDateStart

• **startDateStart**: `string` = `""`

The min start date of the plan (in string)

**`Generated`**

from field: string start_date_start = 30;

#### Defined in

[src/goals.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1968)

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

[src/goals.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1826)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/goals.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L1961)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:2019](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2019)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2017)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceFilterReq"``

#### Defined in

[src/goals.scailo_pb.ts:2018](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2018)

## Methods

### clone

▸ **clone**(): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md) \| `PlainMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md) \| `PlainMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md) \| `PlainMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:2061](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2061)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Defined in

[src/goals.scailo_pb.ts:2049](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2049)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Defined in

[src/goals.scailo_pb.ts:2053](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2053)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Defined in

[src/goals.scailo_pb.ts:2057](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goals.scailo_pb.ts#L2057)
