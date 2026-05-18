[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceCountReq

# Class: AbsencesServiceCountReq

Request message to count records matching specific criteria.

**`Generated`**

from message Scailo.AbsencesServiceCountReq

## Hierarchy

- `Message`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\>

  ↳ **`AbsencesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](AbsencesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](AbsencesServiceCountReq.md#approvedonend)
- [approvedOnStart](AbsencesServiceCountReq.md#approvedonstart)
- [approverRoleId](AbsencesServiceCountReq.md#approverroleid)
- [completedOnEnd](AbsencesServiceCountReq.md#completedonend)
- [completedOnStart](AbsencesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](AbsencesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AbsencesServiceCountReq.md#creationtimestampstart)
- [entityUuid](AbsencesServiceCountReq.md#entityuuid)
- [finalRefNumber](AbsencesServiceCountReq.md#finalrefnumber)
- [formData](AbsencesServiceCountReq.md#formdata)
- [fromTimestampEnd](AbsencesServiceCountReq.md#fromtimestampend)
- [fromTimestampStart](AbsencesServiceCountReq.md#fromtimestampstart)
- [isActive](AbsencesServiceCountReq.md#isactive)
- [leaveRequestId](AbsencesServiceCountReq.md#leaverequestid)
- [modificationTimestampEnd](AbsencesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AbsencesServiceCountReq.md#modificationtimestampstart)
- [quantityMax](AbsencesServiceCountReq.md#quantitymax)
- [quantityMin](AbsencesServiceCountReq.md#quantitymin)
- [referenceId](AbsencesServiceCountReq.md#referenceid)
- [status](AbsencesServiceCountReq.md#status)
- [toTimestampEnd](AbsencesServiceCountReq.md#totimestampend)
- [toTimestampStart](AbsencesServiceCountReq.md#totimestampstart)
- [uomId](AbsencesServiceCountReq.md#uomid)
- [userId](AbsencesServiceCountReq.md#userid)
- [fields](AbsencesServiceCountReq.md#fields)
- [runtime](AbsencesServiceCountReq.md#runtime)
- [typeName](AbsencesServiceCountReq.md#typename)

### Methods

- [clone](AbsencesServiceCountReq.md#clone)
- [equals](AbsencesServiceCountReq.md#equals)
- [fromBinary](AbsencesServiceCountReq.md#frombinary)
- [fromJson](AbsencesServiceCountReq.md#fromjson)
- [fromJsonString](AbsencesServiceCountReq.md#fromjsonstring)
- [getType](AbsencesServiceCountReq.md#gettype)
- [toBinary](AbsencesServiceCountReq.md#tobinary)
- [toJSON](AbsencesServiceCountReq.md#tojson)
- [toJson](AbsencesServiceCountReq.md#tojson-1)
- [toJsonString](AbsencesServiceCountReq.md#tojsonstring)
- [equals](AbsencesServiceCountReq.md#equals-1)
- [fromBinary](AbsencesServiceCountReq.md#frombinary-1)
- [fromJson](AbsencesServiceCountReq.md#fromjson-1)
- [fromJsonString](AbsencesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceCountReq**(`data?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Overrides

Message\&lt;AbsencesServiceCountReq\&gt;.constructor

#### Defined in

[src/absences.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1937)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by specific user who approved the records.

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

[src/absences.scailo_pb.ts:1701](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1701)

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

[src/absences.scailo_pb.ts:1685](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1685)

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

[src/absences.scailo_pb.ts:1669](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1669)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role used during approval.

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

[src/absences.scailo_pb.ts:1717](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1717)

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

[src/absences.scailo_pb.ts:1749](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1749)

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

[src/absences.scailo_pb.ts:1733](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1733)

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

[src/absences.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1593)

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

[src/absences.scailo_pb.ts:1577](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1577)

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

[src/absences.scailo_pb.ts:1641](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1641)

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

[src/absences.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1781)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Custom field filters.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/absences.scailo_pb.ts:1935](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1935)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences starting ON or BEFORE this timestamp.

**`Example`**

```ts
1698307200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

[src/absences.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1845)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences starting ON or AFTER this timestamp.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

[src/absences.scailo_pb.ts:1829](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1829)

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

[src/absences.scailo_pb.ts:1561](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1561)

___

### leaveRequestId

• **leaveRequestId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by linked leave request ID.

**`Example`**

```ts
552
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 leave_request_id = 23;

#### Defined in

[src/absences.scailo_pb.ts:1813](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1813)

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

[src/absences.scailo_pb.ts:1625](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1625)

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

[src/absences.scailo_pb.ts:1609](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1609)

___

### quantityMax

• **quantityMax**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Maximum quantity filter (in cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 quantity_max = 30;

#### Defined in

[src/absences.scailo_pb.ts:1925](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1925)

___

### quantityMin

• **quantityMin**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Minimum quantity filter (in cents).

**`Example`**

```ts
100
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 quantity_min = 29;

#### Defined in

[src/absences.scailo_pb.ts:1909](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1909)

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

[src/absences.scailo_pb.ts:1765](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1765)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/absences.scailo_pb.ts:1653](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1653)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences ending ON or BEFORE this timestamp.

**`Example`**

```ts
1698307200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

[src/absences.scailo_pb.ts:1877](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1877)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter absences ending ON or AFTER this timestamp.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

[src/absences.scailo_pb.ts:1861](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1861)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by specific Unit of Measure.

**`Example`**

```ts
1
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 uom_id = 28;

#### Defined in

[src/absences.scailo_pb.ts:1893](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1893)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by specific employee ID.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/absences.scailo_pb.ts:1797](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1797)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:1944](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1944)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:1942](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1942)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceCountReq"``

#### Defined in

[src/absences.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1943)

## Methods

### clone

▸ **clone**(): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

Create a deep copy.

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md) \| `PlainMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md) \| `PlainMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |
| `b` | `undefined` \| [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md) \| `PlainMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences.scailo_pb.ts:1984](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1984)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1972)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1976](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1976)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1980](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/absences.scailo_pb.ts#L1980)
