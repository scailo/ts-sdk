[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesGroupsServiceFilterReq

# Class: ActivitiesGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ActivitiesGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)\>

  ↳ **`ActivitiesGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ActivitiesGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ActivitiesGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ActivitiesGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ActivitiesGroupsServiceFilterReq.md#approverroleid)
- [code](ActivitiesGroupsServiceFilterReq.md#code)
- [count](ActivitiesGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](ActivitiesGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ActivitiesGroupsServiceFilterReq.md#entityuuid)
- [isActive](ActivitiesGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ActivitiesGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](ActivitiesGroupsServiceFilterReq.md#name)
- [offset](ActivitiesGroupsServiceFilterReq.md#offset)
- [parentActivityGroupId](ActivitiesGroupsServiceFilterReq.md#parentactivitygroupid)
- [projectId](ActivitiesGroupsServiceFilterReq.md#projectid)
- [sortKey](ActivitiesGroupsServiceFilterReq.md#sortkey)
- [sortOrder](ActivitiesGroupsServiceFilterReq.md#sortorder)
- [status](ActivitiesGroupsServiceFilterReq.md#status)
- [fields](ActivitiesGroupsServiceFilterReq.md#fields)
- [runtime](ActivitiesGroupsServiceFilterReq.md#runtime)
- [typeName](ActivitiesGroupsServiceFilterReq.md#typename)

### Methods

- [clone](ActivitiesGroupsServiceFilterReq.md#clone)
- [equals](ActivitiesGroupsServiceFilterReq.md#equals)
- [fromBinary](ActivitiesGroupsServiceFilterReq.md#frombinary)
- [fromJson](ActivitiesGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](ActivitiesGroupsServiceFilterReq.md#fromjsonstring)
- [getType](ActivitiesGroupsServiceFilterReq.md#gettype)
- [toBinary](ActivitiesGroupsServiceFilterReq.md#tobinary)
- [toJSON](ActivitiesGroupsServiceFilterReq.md#tojson)
- [toJson](ActivitiesGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](ActivitiesGroupsServiceFilterReq.md#tojsonstring)
- [equals](ActivitiesGroupsServiceFilterReq.md#equals-1)
- [fromBinary](ActivitiesGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](ActivitiesGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ActivitiesGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesGroupsServiceFilterReq**(`data?`): [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)\> |

#### Returns

[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;ActivitiesGroupsServiceFilterReq\&gt;.constructor

#### Defined in

src/activities_groups.scailo_pb.ts:759

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/activities_groups.scailo_pb.ts:722

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/activities_groups.scailo_pb.ts:715

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/activities_groups.scailo_pb.ts:708

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/activities_groups.scailo_pb.ts:729

___

### code

• **code**: `string` = `""`

The unique code by which the activity group is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/activities_groups.scailo_pb.ts:743

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/activities_groups.scailo_pb.ts:638

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/activities_groups.scailo_pb.ts:673

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/activities_groups.scailo_pb.ts:666

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/activities_groups.scailo_pb.ts:694

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/activities_groups.scailo_pb.ts:631

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/activities_groups.scailo_pb.ts:687

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/activities_groups.scailo_pb.ts:680

___

### name

• **name**: `string` = `""`

The name of the activity group

**`Generated`**

from field: string name = 20;

#### Defined in

src/activities_groups.scailo_pb.ts:736

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/activities_groups.scailo_pb.ts:645

___

### parentActivityGroupId

• **parentActivityGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)

**`Generated`**

from field: uint64 parent_activity_group_id = 22;

#### Defined in

src/activities_groups.scailo_pb.ts:750

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 30;

#### Defined in

src/activities_groups.scailo_pb.ts:757

___

### sortKey

• **sortKey**: [`ACTIVITY_GROUP_SORT_KEY`](../enums/ACTIVITY_GROUP_SORT_KEY.md) = `ACTIVITY_GROUP_SORT_KEY.ACTIVITY_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTIVITY_GROUP_SORT_KEY sort_key = 5;

#### Defined in

src/activities_groups.scailo_pb.ts:659

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/activities_groups.scailo_pb.ts:652

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/activities_groups.scailo_pb.ts:701

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_groups.scailo_pb.ts:766

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_groups.scailo_pb.ts:764

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesGroupsServiceFilterReq"``

#### Defined in

src/activities_groups.scailo_pb.ts:765

## Methods

### clone

▸ **clone**(): [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_groups.scailo_pb.ts:800

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Defined in

src/activities_groups.scailo_pb.ts:788

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Defined in

src/activities_groups.scailo_pb.ts:792

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceFilterReq`](ActivitiesGroupsServiceFilterReq.md)

#### Defined in

src/activities_groups.scailo_pb.ts:796
