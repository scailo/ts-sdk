[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceFilterReq

# Class: ActivitiesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ActivitiesServiceFilterReq

## Hierarchy

- `Message`\<[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)\>

  ↳ **`ActivitiesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceFilterReq.md#constructor)

### Properties

- [actionCodeId](ActivitiesServiceFilterReq.md#actioncodeid)
- [activityGroupId](ActivitiesServiceFilterReq.md#activitygroupid)
- [activityStatusId](ActivitiesServiceFilterReq.md#activitystatusid)
- [activityTagId](ActivitiesServiceFilterReq.md#activitytagid)
- [completedOnEnd](ActivitiesServiceFilterReq.md#completedonend)
- [completedOnStart](ActivitiesServiceFilterReq.md#completedonstart)
- [count](ActivitiesServiceFilterReq.md#count)
- [creationTimestampEnd](ActivitiesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesServiceFilterReq.md#creationtimestampstart)
- [dueByEnd](ActivitiesServiceFilterReq.md#duebyend)
- [dueByStart](ActivitiesServiceFilterReq.md#duebystart)
- [entityUuid](ActivitiesServiceFilterReq.md#entityuuid)
- [goalId](ActivitiesServiceFilterReq.md#goalid)
- [internalRef](ActivitiesServiceFilterReq.md#internalref)
- [isActive](ActivitiesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ActivitiesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesServiceFilterReq.md#modificationtimestampstart)
- [offset](ActivitiesServiceFilterReq.md#offset)
- [ownerEmployeeId](ActivitiesServiceFilterReq.md#owneremployeeid)
- [projectId](ActivitiesServiceFilterReq.md#projectid)
- [sortKey](ActivitiesServiceFilterReq.md#sortkey)
- [sortOrder](ActivitiesServiceFilterReq.md#sortorder)
- [startsAtEnd](ActivitiesServiceFilterReq.md#startsatend)
- [startsAtStart](ActivitiesServiceFilterReq.md#startsatstart)
- [status](ActivitiesServiceFilterReq.md#status)
- [supervisorEmployeeId](ActivitiesServiceFilterReq.md#supervisoremployeeid)
- [title](ActivitiesServiceFilterReq.md#title)
- [fields](ActivitiesServiceFilterReq.md#fields)
- [runtime](ActivitiesServiceFilterReq.md#runtime)
- [typeName](ActivitiesServiceFilterReq.md#typename)

### Methods

- [clone](ActivitiesServiceFilterReq.md#clone)
- [equals](ActivitiesServiceFilterReq.md#equals)
- [fromBinary](ActivitiesServiceFilterReq.md#frombinary)
- [fromJson](ActivitiesServiceFilterReq.md#fromjson)
- [fromJsonString](ActivitiesServiceFilterReq.md#fromjsonstring)
- [getType](ActivitiesServiceFilterReq.md#gettype)
- [toBinary](ActivitiesServiceFilterReq.md#tobinary)
- [toJSON](ActivitiesServiceFilterReq.md#tojson)
- [toJson](ActivitiesServiceFilterReq.md#tojson-1)
- [toJsonString](ActivitiesServiceFilterReq.md#tojsonstring)
- [equals](ActivitiesServiceFilterReq.md#equals-1)
- [fromBinary](ActivitiesServiceFilterReq.md#frombinary-1)
- [fromJson](ActivitiesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ActivitiesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceFilterReq**(`data?`): [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)\> |

#### Returns

[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Overrides

Message\&lt;ActivitiesServiceFilterReq\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1197)

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Filter by the associated action code

**`Generated`**

from field: uint64 action_code_id = 60;

#### Defined in

[src/activities.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1186)

___

### activityGroupId

• **activityGroupId**: `bigint` = `protoInt64.zero`

Filter by the associated activity group ID

**`Generated`**

from field: uint64 activity_group_id = 40;

#### Defined in

[src/activities.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1143)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

Filter by the associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 41;

#### Defined in

[src/activities.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1150)

___

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Filter by the associated activity tag

------------------------------------------------

**`Generated`**

from field: uint64 activity_tag_id = 70;

#### Defined in

[src/activities.scailo_pb.ts:1195](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1195)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/activities.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1094)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/activities.scailo_pb.ts:1087](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1087)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/activities.scailo_pb.ts:1017](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1017)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/activities.scailo_pb.ts:1052](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1052)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/activities.scailo_pb.ts:1045](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1045)

___

### dueByEnd

• **dueByEnd**: `bigint` = `protoInt64.zero`

The end range of "due by"

**`Generated`**

from field: uint64 due_by_end = 27;

#### Defined in

[src/activities.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1136)

___

### dueByStart

• **dueByStart**: `bigint` = `protoInt64.zero`

The start range of "due by"

**`Generated`**

from field: uint64 due_by_start = 26;

#### Defined in

[src/activities.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1129)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/activities.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1073)

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Filter by the associated goal

**`Generated`**

from field: uint64 goal_id = 53;

#### Defined in

[src/activities.scailo_pb.ts:1179](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1179)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

[src/activities.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1101)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/activities.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1010)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/activities.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1066)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/activities.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1059)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/activities.scailo_pb.ts:1024](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1024)

___

### ownerEmployeeId

• **ownerEmployeeId**: `bigint` = `protoInt64.zero`

Filter by the associated owner employee

**`Generated`**

from field: uint64 owner_employee_id = 51;

#### Defined in

[src/activities.scailo_pb.ts:1165](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1165)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated project ID

**`Generated`**

from field: uint64 project_id = 50;

#### Defined in

[src/activities.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1158)

___

### sortKey

• **sortKey**: [`ACTIVITY_SORT_KEY`](../enums/ACTIVITY_SORT_KEY.md) = `ACTIVITY_SORT_KEY.ACTIVITY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTIVITY_SORT_KEY sort_key = 5;

#### Defined in

[src/activities.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1038)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/activities.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1031)

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 25;

#### Defined in

[src/activities.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1122)

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 24;

#### Defined in

[src/activities.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1115)

___

### status

• **status**: [`ACTIVITY_LIFECYCLE`](../enums/ACTIVITY_LIFECYCLE.md) = `ACTIVITY_LIFECYCLE.ACTIVITY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this activity

**`Generated`**

from field: Scailo.ACTIVITY_LIFECYCLE status = 10;

#### Defined in

[src/activities.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1080)

___

### supervisorEmployeeId

• **supervisorEmployeeId**: `bigint` = `protoInt64.zero`

Filter by the associated supervisor employee

**`Generated`**

from field: uint64 supervisor_employee_id = 52;

#### Defined in

[src/activities.scailo_pb.ts:1172](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1172)

___

### title

• **title**: `string` = `""`

The title of the activity

**`Generated`**

from field: string title = 20;

#### Defined in

[src/activities.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1108)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1204)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1202)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceFilterReq"``

#### Defined in

[src/activities.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1203)

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:1246](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1246)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1234)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1238)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceFilterReq`](ActivitiesServiceFilterReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1242)
