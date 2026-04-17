[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesGroupsServiceCountReq

# Class: ActivitiesGroupsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ActivitiesGroupsServiceCountReq

## Hierarchy

- `Message`\<[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)\>

  ↳ **`ActivitiesGroupsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesGroupsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ActivitiesGroupsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ActivitiesGroupsServiceCountReq.md#approvedonend)
- [approvedOnStart](ActivitiesGroupsServiceCountReq.md#approvedonstart)
- [approverRoleId](ActivitiesGroupsServiceCountReq.md#approverroleid)
- [code](ActivitiesGroupsServiceCountReq.md#code)
- [creationTimestampEnd](ActivitiesGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ActivitiesGroupsServiceCountReq.md#entityuuid)
- [isActive](ActivitiesGroupsServiceCountReq.md#isactive)
- [modificationTimestampEnd](ActivitiesGroupsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesGroupsServiceCountReq.md#modificationtimestampstart)
- [name](ActivitiesGroupsServiceCountReq.md#name)
- [parentActivityGroupId](ActivitiesGroupsServiceCountReq.md#parentactivitygroupid)
- [projectId](ActivitiesGroupsServiceCountReq.md#projectid)
- [status](ActivitiesGroupsServiceCountReq.md#status)
- [fields](ActivitiesGroupsServiceCountReq.md#fields)
- [runtime](ActivitiesGroupsServiceCountReq.md#runtime)
- [typeName](ActivitiesGroupsServiceCountReq.md#typename)

### Methods

- [clone](ActivitiesGroupsServiceCountReq.md#clone)
- [equals](ActivitiesGroupsServiceCountReq.md#equals)
- [fromBinary](ActivitiesGroupsServiceCountReq.md#frombinary)
- [fromJson](ActivitiesGroupsServiceCountReq.md#fromjson)
- [fromJsonString](ActivitiesGroupsServiceCountReq.md#fromjsonstring)
- [getType](ActivitiesGroupsServiceCountReq.md#gettype)
- [toBinary](ActivitiesGroupsServiceCountReq.md#tobinary)
- [toJSON](ActivitiesGroupsServiceCountReq.md#tojson)
- [toJson](ActivitiesGroupsServiceCountReq.md#tojson-1)
- [toJsonString](ActivitiesGroupsServiceCountReq.md#tojsonstring)
- [equals](ActivitiesGroupsServiceCountReq.md#equals-1)
- [fromBinary](ActivitiesGroupsServiceCountReq.md#frombinary-1)
- [fromJson](ActivitiesGroupsServiceCountReq.md#fromjson-1)
- [fromJsonString](ActivitiesGroupsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesGroupsServiceCountReq**(`data?`): [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)\> |

#### Returns

[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Overrides

Message\&lt;ActivitiesGroupsServiceCountReq\&gt;.constructor

#### Defined in

[src/activities_groups.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1178)

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

[src/activities_groups.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1132)

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

[src/activities_groups.scailo_pb.ts:1116](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1116)

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

[src/activities_groups.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1100)

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

[src/activities_groups.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1148)

___

### code

• **code**: `string` = `""`

The unique code by which the activity group is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/activities_groups.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1162)

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

[src/activities_groups.scailo_pb.ts:1024](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1024)

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

[src/activities_groups.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1008)

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

[src/activities_groups.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1072)

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

[src/activities_groups.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L992)

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

[src/activities_groups.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1056)

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

[src/activities_groups.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1040)

___

### name

• **name**: `string` = `""`

The name of the activity group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/activities_groups.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1155)

___

### parentActivityGroupId

• **parentActivityGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)

**`Generated`**

from field: uint64 parent_activity_group_id = 22;

#### Defined in

[src/activities_groups.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1169)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 30;

#### Defined in

[src/activities_groups.scailo_pb.ts:1176](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1176)

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

[src/activities_groups.scailo_pb.ts:1084](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1084)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_groups.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1185)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_groups.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1183)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesGroupsServiceCountReq"``

#### Defined in

[src/activities_groups.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1184)

## Methods

### clone

▸ **clone**(): [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_groups.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1215)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1203)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1207)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceCountReq`](ActivitiesGroupsServiceCountReq.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L1211)
