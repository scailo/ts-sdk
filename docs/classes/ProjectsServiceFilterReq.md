[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceFilterReq

# Class: ProjectsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ProjectsServiceFilterReq

## Hierarchy

- `Message`\<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\>

  ↳ **`ProjectsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProjectsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProjectsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProjectsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProjectsServiceFilterReq.md#approverroleid)
- [clientId](ProjectsServiceFilterReq.md#clientid)
- [completedOnEnd](ProjectsServiceFilterReq.md#completedonend)
- [completedOnStart](ProjectsServiceFilterReq.md#completedonstart)
- [count](ProjectsServiceFilterReq.md#count)
- [creationTimestampEnd](ProjectsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProjectsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ProjectsServiceFilterReq.md#entityuuid)
- [finalRefNumber](ProjectsServiceFilterReq.md#finalrefnumber)
- [formData](ProjectsServiceFilterReq.md#formdata)
- [inwardJobId](ProjectsServiceFilterReq.md#inwardjobid)
- [isActive](ProjectsServiceFilterReq.md#isactive)
- [meetingId](ProjectsServiceFilterReq.md#meetingid)
- [modificationTimestampEnd](ProjectsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ProjectsServiceFilterReq.md#modificationtimestampstart)
- [offset](ProjectsServiceFilterReq.md#offset)
- [outwardJobId](ProjectsServiceFilterReq.md#outwardjobid)
- [productionPlanId](ProjectsServiceFilterReq.md#productionplanid)
- [purchaseOrderId](ProjectsServiceFilterReq.md#purchaseorderid)
- [referenceId](ProjectsServiceFilterReq.md#referenceid)
- [salesOrderId](ProjectsServiceFilterReq.md#salesorderid)
- [sortKey](ProjectsServiceFilterReq.md#sortkey)
- [sortOrder](ProjectsServiceFilterReq.md#sortorder)
- [status](ProjectsServiceFilterReq.md#status)
- [fields](ProjectsServiceFilterReq.md#fields)
- [runtime](ProjectsServiceFilterReq.md#runtime)
- [typeName](ProjectsServiceFilterReq.md#typename)

### Methods

- [clone](ProjectsServiceFilterReq.md#clone)
- [equals](ProjectsServiceFilterReq.md#equals)
- [fromBinary](ProjectsServiceFilterReq.md#frombinary)
- [fromJson](ProjectsServiceFilterReq.md#fromjson)
- [fromJsonString](ProjectsServiceFilterReq.md#fromjsonstring)
- [getType](ProjectsServiceFilterReq.md#gettype)
- [toBinary](ProjectsServiceFilterReq.md#tobinary)
- [toJSON](ProjectsServiceFilterReq.md#tojson)
- [toJson](ProjectsServiceFilterReq.md#tojson-1)
- [toJsonString](ProjectsServiceFilterReq.md#tojsonstring)
- [equals](ProjectsServiceFilterReq.md#equals-1)
- [fromBinary](ProjectsServiceFilterReq.md#frombinary-1)
- [fromJson](ProjectsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProjectsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceFilterReq**(`data?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Overrides

Message\&lt;ProjectsServiceFilterReq\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:1119](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1119)

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

[src/projects.scailo_pb.ts:981](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L981)

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

[src/projects.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L965)

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

[src/projects.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L949)

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

[src/projects.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L997)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client. Returns all record if it is set to -1. 0 is a valid filter too.

**`Generated`**

from field: int64 client_id = 22;

#### Defined in

[src/projects.scailo_pb.ts:1068](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1068)

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

[src/projects.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1029)

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

[src/projects.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1013)

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

[src/projects.scailo_pb.ts:803](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L803)

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

[src/projects.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L873)

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

[src/projects.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L857)

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

[src/projects.scailo_pb.ts:921](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L921)

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

[src/projects.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1061)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/projects.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1117)

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

The ID of the associated inward job (ignored if 0)

**`Generated`**

from field: uint64 inward_job_id = 43;

#### Defined in

[src/projects.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1096)

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

[src/projects.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L787)

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

The ID of the associated meeting (ignored if 0)

**`Generated`**

from field: uint64 meeting_id = 45;

#### Defined in

[src/projects.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1110)

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

[src/projects.scailo_pb.ts:905](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L905)

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

[src/projects.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L889)

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

[src/projects.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L819)

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

The ID of the associated outward job (ignored if 0)

**`Generated`**

from field: uint64 outward_job_id = 42;

#### Defined in

[src/projects.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1089)

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

The ID of the associated production plan (ignored if 0)

**`Generated`**

from field: uint64 production_plan_id = 44;

#### Defined in

[src/projects.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1103)

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

The ID of the associated purchase order (ignored if 0)

**`Generated`**

from field: uint64 purchase_order_id = 41;

#### Defined in

[src/projects.scailo_pb.ts:1082](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1082)

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

[src/projects.scailo_pb.ts:1045](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1045)

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

The ID of the associated sales order (ignored if 0)

**`Generated`**

from field: uint64 sales_order_id = 40;

#### Defined in

[src/projects.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1075)

___

### sortKey

• **sortKey**: [`PROJECT_SORT_KEY`](../enums/PROJECT_SORT_KEY.md) = `PROJECT_SORT_KEY.PROJECT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PROJECT_SORT_KEY sort_key = 5;

#### Defined in

[src/projects.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L841)

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

[src/projects.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L831)

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

[src/projects.scailo_pb.ts:933](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L933)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1126)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:1124](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1124)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServiceFilterReq"``

#### Defined in

[src/projects.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1125)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md) \| `PlainMessage`\<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md) \| `PlainMessage`\<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md) \| `PlainMessage`\<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:1168](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1168)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Defined in

[src/projects.scailo_pb.ts:1156](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1156)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Defined in

[src/projects.scailo_pb.ts:1160](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1160)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Defined in

[src/projects.scailo_pb.ts:1164](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/projects.scailo_pb.ts#L1164)
