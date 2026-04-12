[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceFilterReq

# Class: AnnouncementsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.AnnouncementsServiceFilterReq

## Hierarchy

- `Message`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

  ↳ **`AnnouncementsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AnnouncementsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AnnouncementsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AnnouncementsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AnnouncementsServiceFilterReq.md#approverroleid)
- [completedOnEnd](AnnouncementsServiceFilterReq.md#completedonend)
- [completedOnStart](AnnouncementsServiceFilterReq.md#completedonstart)
- [count](AnnouncementsServiceFilterReq.md#count)
- [creationTimestampEnd](AnnouncementsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AnnouncementsServiceFilterReq.md#creationtimestampstart)
- [description](AnnouncementsServiceFilterReq.md#description)
- [endOnEnd](AnnouncementsServiceFilterReq.md#endonend)
- [endOnStart](AnnouncementsServiceFilterReq.md#endonstart)
- [entityUuid](AnnouncementsServiceFilterReq.md#entityuuid)
- [isActive](AnnouncementsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](AnnouncementsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AnnouncementsServiceFilterReq.md#modificationtimestampstart)
- [offset](AnnouncementsServiceFilterReq.md#offset)
- [sortKey](AnnouncementsServiceFilterReq.md#sortkey)
- [sortOrder](AnnouncementsServiceFilterReq.md#sortorder)
- [startOnEnd](AnnouncementsServiceFilterReq.md#startonend)
- [startOnStart](AnnouncementsServiceFilterReq.md#startonstart)
- [status](AnnouncementsServiceFilterReq.md#status)
- [title](AnnouncementsServiceFilterReq.md#title)
- [fields](AnnouncementsServiceFilterReq.md#fields)
- [runtime](AnnouncementsServiceFilterReq.md#runtime)
- [typeName](AnnouncementsServiceFilterReq.md#typename)

### Methods

- [clone](AnnouncementsServiceFilterReq.md#clone)
- [equals](AnnouncementsServiceFilterReq.md#equals)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring)
- [getType](AnnouncementsServiceFilterReq.md#gettype)
- [toBinary](AnnouncementsServiceFilterReq.md#tobinary)
- [toJSON](AnnouncementsServiceFilterReq.md#tojson)
- [toJson](AnnouncementsServiceFilterReq.md#tojson-1)
- [toJsonString](AnnouncementsServiceFilterReq.md#tojsonstring)
- [equals](AnnouncementsServiceFilterReq.md#equals-1)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary-1)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceFilterReq**(`data?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Overrides

Message\&lt;AnnouncementsServiceFilterReq\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L998)

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

[src/announcements.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L906)

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

[src/announcements.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L890)

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

[src/announcements.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L874)

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

[src/announcements.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L922)

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

[src/announcements.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L954)

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

[src/announcements.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L938)

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

[src/announcements.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L728)

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

[src/announcements.scailo_pb.ts:798](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L798)

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

[src/announcements.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L782)

___

### description

• **description**: `string` = `""`

The description of the announcement

**`Generated`**

from field: string description = 21;

#### Defined in

[src/announcements.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L968)

___

### endOnEnd

• **endOnEnd**: `bigint` = `protoInt64.zero`

The end range of end timestamp

**`Generated`**

from field: uint64 end_on_end = 25;

#### Defined in

[src/announcements.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L996)

___

### endOnStart

• **endOnStart**: `bigint` = `protoInt64.zero`

The start range of end timestamp

**`Generated`**

from field: uint64 end_on_start = 24;

#### Defined in

[src/announcements.scailo_pb.ts:989](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L989)

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

[src/announcements.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L846)

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

[src/announcements.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L712)

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

[src/announcements.scailo_pb.ts:830](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L830)

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

[src/announcements.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L814)

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

[src/announcements.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L744)

___

### sortKey

• **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md) = `ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L766)

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

[src/announcements.scailo_pb.ts:756](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L756)

___

### startOnEnd

• **startOnEnd**: `bigint` = `protoInt64.zero`

The end range of start timestamp

**`Generated`**

from field: uint64 start_on_end = 23;

#### Defined in

[src/announcements.scailo_pb.ts:982](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L982)

___

### startOnStart

• **startOnStart**: `bigint` = `protoInt64.zero`

The start range of start timestamp

**`Generated`**

from field: uint64 start_on_start = 22;

#### Defined in

[src/announcements.scailo_pb.ts:975](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L975)

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

[src/announcements.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L858)

___

### title

• **title**: `string` = `""`

The title of the announcement

**`Generated`**

from field: string title = 20;

#### Defined in

[src/announcements.scailo_pb.ts:961](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L961)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1005)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:1003](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1003)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceFilterReq"``

#### Defined in

[src/announcements.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1004)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1043)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1031)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1035)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1039)
