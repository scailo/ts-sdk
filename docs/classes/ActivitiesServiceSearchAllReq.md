[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceSearchAllReq

# Class: ActivitiesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ActivitiesServiceSearchAllReq

## Hierarchy

- `Message`\<[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)\>

  ↳ **`ActivitiesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceSearchAllReq.md#constructor)

### Properties

- [actionCodeId](ActivitiesServiceSearchAllReq.md#actioncodeid)
- [activityGroupId](ActivitiesServiceSearchAllReq.md#activitygroupid)
- [activityStatusId](ActivitiesServiceSearchAllReq.md#activitystatusid)
- [activityTagId](ActivitiesServiceSearchAllReq.md#activitytagid)
- [count](ActivitiesServiceSearchAllReq.md#count)
- [entityUuid](ActivitiesServiceSearchAllReq.md#entityuuid)
- [goalId](ActivitiesServiceSearchAllReq.md#goalid)
- [isActive](ActivitiesServiceSearchAllReq.md#isactive)
- [offset](ActivitiesServiceSearchAllReq.md#offset)
- [ownerEmployeeId](ActivitiesServiceSearchAllReq.md#owneremployeeid)
- [projectId](ActivitiesServiceSearchAllReq.md#projectid)
- [searchKey](ActivitiesServiceSearchAllReq.md#searchkey)
- [sortKey](ActivitiesServiceSearchAllReq.md#sortkey)
- [sortOrder](ActivitiesServiceSearchAllReq.md#sortorder)
- [status](ActivitiesServiceSearchAllReq.md#status)
- [supervisorEmployeeId](ActivitiesServiceSearchAllReq.md#supervisoremployeeid)
- [fields](ActivitiesServiceSearchAllReq.md#fields)
- [runtime](ActivitiesServiceSearchAllReq.md#runtime)
- [typeName](ActivitiesServiceSearchAllReq.md#typename)

### Methods

- [clone](ActivitiesServiceSearchAllReq.md#clone)
- [equals](ActivitiesServiceSearchAllReq.md#equals)
- [fromBinary](ActivitiesServiceSearchAllReq.md#frombinary)
- [fromJson](ActivitiesServiceSearchAllReq.md#fromjson)
- [fromJsonString](ActivitiesServiceSearchAllReq.md#fromjsonstring)
- [getType](ActivitiesServiceSearchAllReq.md#gettype)
- [toBinary](ActivitiesServiceSearchAllReq.md#tobinary)
- [toJSON](ActivitiesServiceSearchAllReq.md#tojson)
- [toJson](ActivitiesServiceSearchAllReq.md#tojson-1)
- [toJsonString](ActivitiesServiceSearchAllReq.md#tojsonstring)
- [equals](ActivitiesServiceSearchAllReq.md#equals-1)
- [fromBinary](ActivitiesServiceSearchAllReq.md#frombinary-1)
- [fromJson](ActivitiesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ActivitiesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceSearchAllReq**(`data?`): [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)\> |

#### Returns

[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Overrides

Message\&lt;ActivitiesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:1594](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1594)

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Filter by the associated action code

**`Generated`**

from field: uint64 action_code_id = 60;

#### Defined in

[src/activities.scailo_pb.ts:1583](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1583)

___

### activityGroupId

• **activityGroupId**: `bigint` = `protoInt64.zero`

Filter by the associated activity group ID

**`Generated`**

from field: uint64 activity_group_id = 40;

#### Defined in

[src/activities.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1540)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

Filter by the associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 41;

#### Defined in

[src/activities.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1547)

___

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Filter by the associated activity tag

------------------------------------------------

**`Generated`**

from field: uint64 activity_tag_id = 70;

#### Defined in

[src/activities.scailo_pb.ts:1592](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1592)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/activities.scailo_pb.ts:1491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1491)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/activities.scailo_pb.ts:1519](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1519)

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Filter by the associated goal

**`Generated`**

from field: uint64 goal_id = 53;

#### Defined in

[src/activities.scailo_pb.ts:1576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1576)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/activities.scailo_pb.ts:1484](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1484)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/activities.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1498)

___

### ownerEmployeeId

• **ownerEmployeeId**: `bigint` = `protoInt64.zero`

Filter by the associated owner employee

**`Generated`**

from field: uint64 owner_employee_id = 51;

#### Defined in

[src/activities.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1562)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated project ID

**`Generated`**

from field: uint64 project_id = 50;

#### Defined in

[src/activities.scailo_pb.ts:1555](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1555)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/activities.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1533)

___

### sortKey

• **sortKey**: [`ACTIVITY_SORT_KEY`](../enums/ACTIVITY_SORT_KEY.md) = `ACTIVITY_SORT_KEY.ACTIVITY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTIVITY_SORT_KEY sort_key = 5;

#### Defined in

[src/activities.scailo_pb.ts:1512](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1512)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/activities.scailo_pb.ts:1505](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1505)

___

### status

• **status**: [`ACTIVITY_LIFECYCLE`](../enums/ACTIVITY_LIFECYCLE.md) = `ACTIVITY_LIFECYCLE.ACTIVITY_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.ACTIVITY_LIFECYCLE status = 10;

#### Defined in

[src/activities.scailo_pb.ts:1526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1526)

___

### supervisorEmployeeId

• **supervisorEmployeeId**: `bigint` = `protoInt64.zero`

Filter by the associated supervisor employee

**`Generated`**

from field: uint64 supervisor_employee_id = 52;

#### Defined in

[src/activities.scailo_pb.ts:1569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1569)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1601)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:1599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1599)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceSearchAllReq"``

#### Defined in

[src/activities.scailo_pb.ts:1600](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1600)

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:1632](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1632)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1620)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1624](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1624)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceSearchAllReq`](ActivitiesServiceSearchAllReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1628)
