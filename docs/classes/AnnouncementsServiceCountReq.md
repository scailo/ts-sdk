[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceCountReq

# Class: AnnouncementsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.AnnouncementsServiceCountReq

## Hierarchy

- `Message`\<[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)\>

  ↳ **`AnnouncementsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](AnnouncementsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](AnnouncementsServiceCountReq.md#approvedonend)
- [approvedOnStart](AnnouncementsServiceCountReq.md#approvedonstart)
- [approverRoleId](AnnouncementsServiceCountReq.md#approverroleid)
- [completedOnEnd](AnnouncementsServiceCountReq.md#completedonend)
- [completedOnStart](AnnouncementsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](AnnouncementsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AnnouncementsServiceCountReq.md#creationtimestampstart)
- [description](AnnouncementsServiceCountReq.md#description)
- [endOnEnd](AnnouncementsServiceCountReq.md#endonend)
- [endOnStart](AnnouncementsServiceCountReq.md#endonstart)
- [entityUuid](AnnouncementsServiceCountReq.md#entityuuid)
- [isActive](AnnouncementsServiceCountReq.md#isactive)
- [modificationTimestampEnd](AnnouncementsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AnnouncementsServiceCountReq.md#modificationtimestampstart)
- [startOnEnd](AnnouncementsServiceCountReq.md#startonend)
- [startOnStart](AnnouncementsServiceCountReq.md#startonstart)
- [status](AnnouncementsServiceCountReq.md#status)
- [title](AnnouncementsServiceCountReq.md#title)
- [fields](AnnouncementsServiceCountReq.md#fields)
- [runtime](AnnouncementsServiceCountReq.md#runtime)
- [typeName](AnnouncementsServiceCountReq.md#typename)

### Methods

- [clone](AnnouncementsServiceCountReq.md#clone)
- [equals](AnnouncementsServiceCountReq.md#equals)
- [fromBinary](AnnouncementsServiceCountReq.md#frombinary)
- [fromJson](AnnouncementsServiceCountReq.md#fromjson)
- [fromJsonString](AnnouncementsServiceCountReq.md#fromjsonstring)
- [getType](AnnouncementsServiceCountReq.md#gettype)
- [toBinary](AnnouncementsServiceCountReq.md#tobinary)
- [toJSON](AnnouncementsServiceCountReq.md#tojson)
- [toJson](AnnouncementsServiceCountReq.md#tojson-1)
- [toJsonString](AnnouncementsServiceCountReq.md#tojsonstring)
- [equals](AnnouncementsServiceCountReq.md#equals-1)
- [fromBinary](AnnouncementsServiceCountReq.md#frombinary-1)
- [fromJson](AnnouncementsServiceCountReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceCountReq**(`data?`): [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)\> |

#### Returns

[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Overrides

Message\&lt;AnnouncementsServiceCountReq\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1297)

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

[src/announcements.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1205)

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

[src/announcements.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1189)

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

[src/announcements.scailo_pb.ts:1173](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1173)

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

[src/announcements.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1221)

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

[src/announcements.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1253)

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

[src/announcements.scailo_pb.ts:1237](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1237)

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

[src/announcements.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1097)

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

[src/announcements.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1081)

___

### description

• **description**: `string` = `""`

The description of the announcement

**`Generated`**

from field: string description = 21;

#### Defined in

[src/announcements.scailo_pb.ts:1267](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1267)

___

### endOnEnd

• **endOnEnd**: `bigint` = `protoInt64.zero`

The end range of end timestamp

**`Generated`**

from field: uint64 end_on_end = 25;

#### Defined in

[src/announcements.scailo_pb.ts:1295](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1295)

___

### endOnStart

• **endOnStart**: `bigint` = `protoInt64.zero`

The start range of end timestamp

**`Generated`**

from field: uint64 end_on_start = 24;

#### Defined in

[src/announcements.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1288)

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

[src/announcements.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1145)

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

[src/announcements.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1065)

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

[src/announcements.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1129)

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

[src/announcements.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1113)

___

### startOnEnd

• **startOnEnd**: `bigint` = `protoInt64.zero`

The end range of start timestamp

**`Generated`**

from field: uint64 start_on_end = 23;

#### Defined in

[src/announcements.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1281)

___

### startOnStart

• **startOnStart**: `bigint` = `protoInt64.zero`

The start range of start timestamp

**`Generated`**

from field: uint64 start_on_start = 22;

#### Defined in

[src/announcements.scailo_pb.ts:1274](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1274)

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

[src/announcements.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1157)

___

### title

• **title**: `string` = `""`

The title of the announcement

**`Generated`**

from field: string title = 20;

#### Defined in

[src/announcements.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1260)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1304)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:1302](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1302)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceCountReq"``

#### Defined in

[src/announcements.scailo_pb.ts:1303](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1303)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md) \| `PlainMessage`\<[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md) \| `PlainMessage`\<[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md) \| `PlainMessage`\<[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:1338](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1338)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1326)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1330)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceCountReq`](AnnouncementsServiceCountReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/announcements.scailo_pb.ts#L1334)
