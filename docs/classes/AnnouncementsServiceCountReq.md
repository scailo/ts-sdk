[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceCountReq

# Class: AnnouncementsServiceCountReq

Target filter request for counting announcement records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

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

[src/announcements.scailo_pb.ts:1543](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1543)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/announcements.scailo_pb.ts:1397](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1397)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/announcements.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1381)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/announcements.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1365)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/announcements.scailo_pb.ts:1413](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1413)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/announcements.scailo_pb.ts:1445](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1445)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/announcements.scailo_pb.ts:1429](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1429)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/announcements.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1289)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/announcements.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1273)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Filter by the announcement's main body or description text. Typically supports partial matching or substring searches.

**`Example`**

```ts
"database will be offline"
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only.

**`Generated`**

from field: optional string description = 21;

#### Defined in

[src/announcements.scailo_pb.ts:1477](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1477)

___

### endOnEnd

• `Optional` **endOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's expiration date is ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1783555200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 end_on_end = 25;

#### Defined in

[src/announcements.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1541)

___

### endOnStart

• `Optional` **endOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's expiration date is ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1783468800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 end_on_start = 24;

#### Defined in

[src/announcements.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1525)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/announcements.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1337)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/announcements.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1257)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/announcements.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1321)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/announcements.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1305)

___

### startOnEnd

• `Optional` **startOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's start publication date is ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1783468800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 start_on_end = 23;

#### Defined in

[src/announcements.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1509)

___

### startOnStart

• `Optional` **startOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records where the announcement's start publication date is ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1783382400
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer representing epoch time.

**`Generated`**

from field: optional uint64 start_on_start = 22;

#### Defined in

[src/announcements.scailo_pb.ts:1493](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1493)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/announcements.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1349)

___

### title

• `Optional` **title**: `string`

**`Optional`**

**`Description`**

Filter by the announcement's title. Typically supports partial matching or substring searches.

**`Example`**

```ts
"System Maintenance"
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only.

**`Generated`**

from field: optional string title = 20;

#### Defined in

[src/announcements.scailo_pb.ts:1461](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1461)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:1550](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1550)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1548)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceCountReq"``

#### Defined in

[src/announcements.scailo_pb.ts:1549](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1549)

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

[src/announcements.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1584)

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

[src/announcements.scailo_pb.ts:1572](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1572)

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

[src/announcements.scailo_pb.ts:1576](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1576)

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

[src/announcements.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/announcements.scailo_pb.ts#L1580)
