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

[src/absences.scailo_pb.ts:1923](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1923)

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

[src/absences.scailo_pb.ts:1687](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1687)

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

[src/absences.scailo_pb.ts:1671](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1671)

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

[src/absences.scailo_pb.ts:1655](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1655)

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

[src/absences.scailo_pb.ts:1703](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1703)

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

[src/absences.scailo_pb.ts:1735](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1735)

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

[src/absences.scailo_pb.ts:1719](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1719)

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

[src/absences.scailo_pb.ts:1579](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1579)

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

[src/absences.scailo_pb.ts:1563](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1563)

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

[src/absences.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1627)

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

[src/absences.scailo_pb.ts:1767](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1767)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Custom field filters.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/absences.scailo_pb.ts:1921](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1921)

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

[src/absences.scailo_pb.ts:1831](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1831)

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

[src/absences.scailo_pb.ts:1815](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1815)

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

[src/absences.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1547)

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

[src/absences.scailo_pb.ts:1799](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1799)

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

[src/absences.scailo_pb.ts:1611](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1611)

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

[src/absences.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1595)

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

[src/absences.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1911)

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

[src/absences.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1895)

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

[src/absences.scailo_pb.ts:1751](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1751)

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

[src/absences.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1639)

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

[src/absences.scailo_pb.ts:1863](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1863)

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

[src/absences.scailo_pb.ts:1847](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1847)

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

[src/absences.scailo_pb.ts:1879](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1879)

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

[src/absences.scailo_pb.ts:1783](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1783)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:1930](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1930)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:1928](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1928)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceCountReq"``

#### Defined in

[src/absences.scailo_pb.ts:1929](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1929)

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

[src/absences.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1970)

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

[src/absences.scailo_pb.ts:1958](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1958)

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

[src/absences.scailo_pb.ts:1962](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1962)

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

[src/absences.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/absences.scailo_pb.ts#L1966)
