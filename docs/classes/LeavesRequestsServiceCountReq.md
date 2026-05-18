[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceCountReq

# Class: LeavesRequestsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LeavesRequestsServiceCountReq

## Hierarchy

- `Message`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\>

  ↳ **`LeavesRequestsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LeavesRequestsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesRequestsServiceCountReq.md#approvedonend)
- [approvedOnStart](LeavesRequestsServiceCountReq.md#approvedonstart)
- [approverRoleId](LeavesRequestsServiceCountReq.md#approverroleid)
- [completedOnEnd](LeavesRequestsServiceCountReq.md#completedonend)
- [completedOnStart](LeavesRequestsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](LeavesRequestsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LeavesRequestsServiceCountReq.md#creationtimestampstart)
- [entityUuid](LeavesRequestsServiceCountReq.md#entityuuid)
- [finalRefNumber](LeavesRequestsServiceCountReq.md#finalrefnumber)
- [formData](LeavesRequestsServiceCountReq.md#formdata)
- [fromTimestampEnd](LeavesRequestsServiceCountReq.md#fromtimestampend)
- [fromTimestampStart](LeavesRequestsServiceCountReq.md#fromtimestampstart)
- [isActive](LeavesRequestsServiceCountReq.md#isactive)
- [leaveTypeId](LeavesRequestsServiceCountReq.md#leavetypeid)
- [modificationTimestampEnd](LeavesRequestsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesRequestsServiceCountReq.md#modificationtimestampstart)
- [referenceId](LeavesRequestsServiceCountReq.md#referenceid)
- [status](LeavesRequestsServiceCountReq.md#status)
- [toTimestampEnd](LeavesRequestsServiceCountReq.md#totimestampend)
- [toTimestampStart](LeavesRequestsServiceCountReq.md#totimestampstart)
- [userId](LeavesRequestsServiceCountReq.md#userid)
- [fields](LeavesRequestsServiceCountReq.md#fields)
- [runtime](LeavesRequestsServiceCountReq.md#runtime)
- [typeName](LeavesRequestsServiceCountReq.md#typename)

### Methods

- [clone](LeavesRequestsServiceCountReq.md#clone)
- [equals](LeavesRequestsServiceCountReq.md#equals)
- [fromBinary](LeavesRequestsServiceCountReq.md#frombinary)
- [fromJson](LeavesRequestsServiceCountReq.md#fromjson)
- [fromJsonString](LeavesRequestsServiceCountReq.md#fromjsonstring)
- [getType](LeavesRequestsServiceCountReq.md#gettype)
- [toBinary](LeavesRequestsServiceCountReq.md#tobinary)
- [toJSON](LeavesRequestsServiceCountReq.md#tojson)
- [toJson](LeavesRequestsServiceCountReq.md#tojson-1)
- [toJsonString](LeavesRequestsServiceCountReq.md#tojsonstring)
- [equals](LeavesRequestsServiceCountReq.md#equals-1)
- [fromBinary](LeavesRequestsServiceCountReq.md#frombinary-1)
- [fromJson](LeavesRequestsServiceCountReq.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceCountReq**(`data?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Overrides

Message\&lt;LeavesRequestsServiceCountReq\&gt;.constructor

#### Defined in

[src/leaves_requests.scailo_pb.ts:1508](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1508)

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

[src/leaves_requests.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1377)

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

[src/leaves_requests.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1361)

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

[src/leaves_requests.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1345)

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

[src/leaves_requests.scailo_pb.ts:1393](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1393)

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

[src/leaves_requests.scailo_pb.ts:1425](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1425)

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

[src/leaves_requests.scailo_pb.ts:1409](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1409)

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

[src/leaves_requests.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1269)

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

[src/leaves_requests.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1253)

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

[src/leaves_requests.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1317)

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

[src/leaves_requests.scailo_pb.ts:1457](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1457)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1506](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1506)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1485](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1485)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1478](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1478)

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

[src/leaves_requests.scailo_pb.ts:1237](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1237)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: uint64 leave_type_id = 23;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1471](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1471)

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

[src/leaves_requests.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1301)

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

[src/leaves_requests.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1285)

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

[src/leaves_requests.scailo_pb.ts:1441](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1441)

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

[src/leaves_requests.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1329)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1499](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1499)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1492](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1492)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1464](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1464)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1515](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1515)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1513](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1513)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsServiceCountReq"``

#### Defined in

[src/leaves_requests.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1514)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1552)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1540)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1544)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_requests.scailo_pb.ts#L1548)
