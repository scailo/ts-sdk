[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesServiceCountReq

# Class: AttendancesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.AttendancesServiceCountReq

## Hierarchy

- `Message`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\>

  ↳ **`AttendancesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AttendancesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](AttendancesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](AttendancesServiceCountReq.md#approvedonend)
- [approvedOnStart](AttendancesServiceCountReq.md#approvedonstart)
- [approverRoleId](AttendancesServiceCountReq.md#approverroleid)
- [completedOnEnd](AttendancesServiceCountReq.md#completedonend)
- [completedOnStart](AttendancesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](AttendancesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AttendancesServiceCountReq.md#creationtimestampstart)
- [entityUuid](AttendancesServiceCountReq.md#entityuuid)
- [entryTimestampEnd](AttendancesServiceCountReq.md#entrytimestampend)
- [entryTimestampStart](AttendancesServiceCountReq.md#entrytimestampstart)
- [exitTimestampEnd](AttendancesServiceCountReq.md#exittimestampend)
- [exitTimestampStart](AttendancesServiceCountReq.md#exittimestampstart)
- [finalRefNumber](AttendancesServiceCountReq.md#finalrefnumber)
- [formData](AttendancesServiceCountReq.md#formdata)
- [isActive](AttendancesServiceCountReq.md#isactive)
- [modificationTimestampEnd](AttendancesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AttendancesServiceCountReq.md#modificationtimestampstart)
- [referenceId](AttendancesServiceCountReq.md#referenceid)
- [status](AttendancesServiceCountReq.md#status)
- [userId](AttendancesServiceCountReq.md#userid)
- [fields](AttendancesServiceCountReq.md#fields)
- [runtime](AttendancesServiceCountReq.md#runtime)
- [typeName](AttendancesServiceCountReq.md#typename)

### Methods

- [clone](AttendancesServiceCountReq.md#clone)
- [equals](AttendancesServiceCountReq.md#equals)
- [fromBinary](AttendancesServiceCountReq.md#frombinary)
- [fromJson](AttendancesServiceCountReq.md#fromjson)
- [fromJsonString](AttendancesServiceCountReq.md#fromjsonstring)
- [getType](AttendancesServiceCountReq.md#gettype)
- [toBinary](AttendancesServiceCountReq.md#tobinary)
- [toJSON](AttendancesServiceCountReq.md#tojson)
- [toJson](AttendancesServiceCountReq.md#tojson-1)
- [toJsonString](AttendancesServiceCountReq.md#tojsonstring)
- [equals](AttendancesServiceCountReq.md#equals-1)
- [fromBinary](AttendancesServiceCountReq.md#frombinary-1)
- [fromJson](AttendancesServiceCountReq.md#fromjson-1)
- [fromJsonString](AttendancesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesServiceCountReq**(`data?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Overrides

Message\&lt;AttendancesServiceCountReq\&gt;.constructor

#### Defined in

[src/attendances.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1607)

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

[src/attendances.scailo_pb.ts:1483](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1483)

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

[src/attendances.scailo_pb.ts:1467](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1467)

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

[src/attendances.scailo_pb.ts:1451](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1451)

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

[src/attendances.scailo_pb.ts:1499](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1499)

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

[src/attendances.scailo_pb.ts:1531](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1531)

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

[src/attendances.scailo_pb.ts:1515](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1515)

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

[src/attendances.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1375)

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

[src/attendances.scailo_pb.ts:1359](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1359)

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

[src/attendances.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1423)

___

### entryTimestampEnd

• **entryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 entry_timestamp_end = 25;

#### Defined in

[src/attendances.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1584)

___

### entryTimestampStart

• **entryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 entry_timestamp_start = 24;

#### Defined in

[src/attendances.scailo_pb.ts:1577](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1577)

___

### exitTimestampEnd

• **exitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 exit_timestamp_end = 27;

#### Defined in

[src/attendances.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1598)

___

### exitTimestampStart

• **exitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 exit_timestamp_start = 26;

#### Defined in

[src/attendances.scailo_pb.ts:1591](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1591)

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

[src/attendances.scailo_pb.ts:1563](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1563)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/attendances.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1605)

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

[src/attendances.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1343)

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

[src/attendances.scailo_pb.ts:1407](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1407)

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

[src/attendances.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1391)

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

[src/attendances.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1547)

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

[src/attendances.scailo_pb.ts:1435](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1435)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user that this attendance belongs to

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/attendances.scailo_pb.ts:1570](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1570)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances.scailo_pb.ts:1614](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1614)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1612)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesServiceCountReq"``

#### Defined in

[src/attendances.scailo_pb.ts:1613](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1613)

## Methods

### clone

▸ **clone**(): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

Create a deep copy.

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md) \| `PlainMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md) \| `PlainMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |
| `b` | `undefined` \| [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md) \| `PlainMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1650)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Defined in

[src/attendances.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1638)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Defined in

[src/attendances.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1642)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Defined in

[src/attendances.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/attendances.scailo_pb.ts#L1646)
