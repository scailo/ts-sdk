[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceFilterReq

# Class: TeamsServiceFilterReq

Advanced filter request for searching and paginating teams using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.TeamsServiceFilterReq

## Hierarchy

- `Message`\<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\>

  ↳ **`TeamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](TeamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](TeamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](TeamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](TeamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](TeamsServiceFilterReq.md#approverroleid)
- [code](TeamsServiceFilterReq.md#code)
- [completedOnEnd](TeamsServiceFilterReq.md#completedonend)
- [completedOnStart](TeamsServiceFilterReq.md#completedonstart)
- [count](TeamsServiceFilterReq.md#count)
- [creationTimestampEnd](TeamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](TeamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](TeamsServiceFilterReq.md#entityuuid)
- [isActive](TeamsServiceFilterReq.md#isactive)
- [leadUserId](TeamsServiceFilterReq.md#leaduserid)
- [memberUserId](TeamsServiceFilterReq.md#memberuserid)
- [modificationTimestampEnd](TeamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](TeamsServiceFilterReq.md#modificationtimestampstart)
- [name](TeamsServiceFilterReq.md#name)
- [offset](TeamsServiceFilterReq.md#offset)
- [sortKey](TeamsServiceFilterReq.md#sortkey)
- [sortOrder](TeamsServiceFilterReq.md#sortorder)
- [status](TeamsServiceFilterReq.md#status)
- [fields](TeamsServiceFilterReq.md#fields)
- [runtime](TeamsServiceFilterReq.md#runtime)
- [typeName](TeamsServiceFilterReq.md#typename)

### Methods

- [clone](TeamsServiceFilterReq.md#clone)
- [equals](TeamsServiceFilterReq.md#equals)
- [fromBinary](TeamsServiceFilterReq.md#frombinary)
- [fromJson](TeamsServiceFilterReq.md#fromjson)
- [fromJsonString](TeamsServiceFilterReq.md#fromjsonstring)
- [getType](TeamsServiceFilterReq.md#gettype)
- [toBinary](TeamsServiceFilterReq.md#tobinary)
- [toJSON](TeamsServiceFilterReq.md#tojson)
- [toJson](TeamsServiceFilterReq.md#tojson-1)
- [toJsonString](TeamsServiceFilterReq.md#tojsonstring)
- [equals](TeamsServiceFilterReq.md#equals-1)
- [fromBinary](TeamsServiceFilterReq.md#frombinary-1)
- [fromJson](TeamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](TeamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceFilterReq**(`data?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Overrides

Message\&lt;TeamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:1641](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1641)

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

[src/teams.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1527)

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

[src/teams.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1511)

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

[src/teams.scailo_pb.ts:1495](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1495)

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

[src/teams.scailo_pb.ts:1543](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1543)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the team.

**`Example`**

```ts
"ENG-CORE-01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/teams.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1607)

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

[src/teams.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1575)

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

[src/teams.scailo_pb.ts:1559](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1559)

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

[src/teams.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1349)

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

[src/teams.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1419)

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

[src/teams.scailo_pb.ts:1403](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1403)

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

[src/teams.scailo_pb.ts:1467](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1467)

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

[src/teams.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1333)

___

### leadUserId

• `Optional` **leadUserId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the user designated as the team lead or manager for this group.

**`Example`**

```ts
402
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 lead_user_id = 22;

#### Defined in

[src/teams.scailo_pb.ts:1623](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1623)

___

### memberUserId

• `Optional` **memberUserId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the user designated as the team member that is part of this group.

**`Example`**

```ts
402
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 member_user_id = 23;

#### Defined in

[src/teams.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1639)

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

[src/teams.scailo_pb.ts:1451](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1451)

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

[src/teams.scailo_pb.ts:1435](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1435)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The primary, human-readable name of the team.

**`Example`**

```ts
"Core Backend Engineering"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/teams.scailo_pb.ts:1591](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1591)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/teams.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1365)

___

### sortKey

• `Optional` **sortKey**: [`TEAM_SORT_KEY`](../enums/TEAM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.TEAM_SORT_KEY sort_key = 5;

#### Defined in

[src/teams.scailo_pb.ts:1387](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1387)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/teams.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1377)

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

[src/teams.scailo_pb.ts:1479](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1479)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:1648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1648)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1646)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceFilterReq"``

#### Defined in

[src/teams.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1647)

## Methods

### clone

▸ **clone**(): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md) \| `PlainMessage`\<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md) \| `PlainMessage`\<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md) \| `PlainMessage`\<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1684)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1672](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1672)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1676)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1680)
