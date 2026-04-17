[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesGroupsServiceFilterReq

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

[src/activities_groups.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L929)

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

[src/activities_groups.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L883)

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

[src/activities_groups.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L867)

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

[src/activities_groups.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L851)

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

[src/activities_groups.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L899)

___

### code

• **code**: `string` = `""`

The unique code by which the activity group is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/activities_groups.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L913)

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

[src/activities_groups.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L705)

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

[src/activities_groups.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L775)

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

[src/activities_groups.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L759)

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

[src/activities_groups.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L823)

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

[src/activities_groups.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L689)

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

[src/activities_groups.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L807)

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

[src/activities_groups.scailo_pb.ts:791](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L791)

___

### name

• **name**: `string` = `""`

The name of the activity group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/activities_groups.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L906)

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

[src/activities_groups.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L721)

___

### parentActivityGroupId

• **parentActivityGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)

**`Generated`**

from field: uint64 parent_activity_group_id = 22;

#### Defined in

[src/activities_groups.scailo_pb.ts:920](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L920)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 30;

#### Defined in

[src/activities_groups.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L927)

___

### sortKey

• **sortKey**: [`ACTIVITY_GROUP_SORT_KEY`](../enums/ACTIVITY_GROUP_SORT_KEY.md) = `ACTIVITY_GROUP_SORT_KEY.ACTIVITY_GROUP_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ACTIVITY_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/activities_groups.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L743)

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

[src/activities_groups.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L733)

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

[src/activities_groups.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L835)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_groups.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L936)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_groups.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L934)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesGroupsServiceFilterReq"``

#### Defined in

[src/activities_groups.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L935)

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

[src/activities_groups.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L970)

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

[src/activities_groups.scailo_pb.ts:958](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L958)

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

[src/activities_groups.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L962)

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

[src/activities_groups.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L966)
