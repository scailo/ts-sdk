[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceCountReq

# Class: ActivitiesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ActivitiesServiceCountReq

## Hierarchy

- `Message`\<[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)\>

  ↳ **`ActivitiesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceCountReq.md#constructor)

### Properties

- [actionCodeId](ActivitiesServiceCountReq.md#actioncodeid)
- [activityGroupId](ActivitiesServiceCountReq.md#activitygroupid)
- [activityStatusId](ActivitiesServiceCountReq.md#activitystatusid)
- [activityTagId](ActivitiesServiceCountReq.md#activitytagid)
- [completedOnEnd](ActivitiesServiceCountReq.md#completedonend)
- [completedOnStart](ActivitiesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ActivitiesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesServiceCountReq.md#creationtimestampstart)
- [dueByEnd](ActivitiesServiceCountReq.md#duebyend)
- [dueByStart](ActivitiesServiceCountReq.md#duebystart)
- [entityUuid](ActivitiesServiceCountReq.md#entityuuid)
- [goalId](ActivitiesServiceCountReq.md#goalid)
- [internalRef](ActivitiesServiceCountReq.md#internalref)
- [isActive](ActivitiesServiceCountReq.md#isactive)
- [modificationTimestampEnd](ActivitiesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesServiceCountReq.md#modificationtimestampstart)
- [ownerEmployeeId](ActivitiesServiceCountReq.md#owneremployeeid)
- [projectId](ActivitiesServiceCountReq.md#projectid)
- [startsAtEnd](ActivitiesServiceCountReq.md#startsatend)
- [startsAtStart](ActivitiesServiceCountReq.md#startsatstart)
- [status](ActivitiesServiceCountReq.md#status)
- [supervisorEmployeeId](ActivitiesServiceCountReq.md#supervisoremployeeid)
- [title](ActivitiesServiceCountReq.md#title)
- [fields](ActivitiesServiceCountReq.md#fields)
- [runtime](ActivitiesServiceCountReq.md#runtime)
- [typeName](ActivitiesServiceCountReq.md#typename)

### Methods

- [clone](ActivitiesServiceCountReq.md#clone)
- [equals](ActivitiesServiceCountReq.md#equals)
- [fromBinary](ActivitiesServiceCountReq.md#frombinary)
- [fromJson](ActivitiesServiceCountReq.md#fromjson)
- [fromJsonString](ActivitiesServiceCountReq.md#fromjsonstring)
- [getType](ActivitiesServiceCountReq.md#gettype)
- [toBinary](ActivitiesServiceCountReq.md#tobinary)
- [toJSON](ActivitiesServiceCountReq.md#tojson)
- [toJson](ActivitiesServiceCountReq.md#tojson-1)
- [toJsonString](ActivitiesServiceCountReq.md#tojsonstring)
- [equals](ActivitiesServiceCountReq.md#equals-1)
- [fromBinary](ActivitiesServiceCountReq.md#frombinary-1)
- [fromJson](ActivitiesServiceCountReq.md#fromjson-1)
- [fromJsonString](ActivitiesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceCountReq**(`data?`): [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)\> |

#### Returns

[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Overrides

Message\&lt;ActivitiesServiceCountReq\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:1633](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1633)

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Filter by the associated action code

**`Generated`**

from field: uint64 action_code_id = 60;

#### Defined in

[src/activities.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1622)

___

### activityGroupId

• **activityGroupId**: `bigint` = `protoInt64.zero`

Filter by the associated activity group ID

**`Generated`**

from field: uint64 activity_group_id = 40;

#### Defined in

[src/activities.scailo_pb.ts:1579](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1579)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

Filter by the associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 41;

#### Defined in

[src/activities.scailo_pb.ts:1586](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1586)

___

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Filter by the associated activity tag

------------------------------------------------

**`Generated`**

from field: uint64 activity_tag_id = 70;

#### Defined in

[src/activities.scailo_pb.ts:1631](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1631)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/activities.scailo_pb.ts:1530](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1530)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/activities.scailo_pb.ts:1523](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1523)

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

[src/activities.scailo_pb.ts:1461](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1461)

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

[src/activities.scailo_pb.ts:1445](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1445)

___

### dueByEnd

• **dueByEnd**: `bigint` = `protoInt64.zero`

The end range of "due by"

**`Generated`**

from field: uint64 due_by_end = 27;

#### Defined in

[src/activities.scailo_pb.ts:1572](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1572)

___

### dueByStart

• **dueByStart**: `bigint` = `protoInt64.zero`

The start range of "due by"

**`Generated`**

from field: uint64 due_by_start = 26;

#### Defined in

[src/activities.scailo_pb.ts:1565](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1565)

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

[src/activities.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1509)

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Filter by the associated goal

**`Generated`**

from field: uint64 goal_id = 53;

#### Defined in

[src/activities.scailo_pb.ts:1615](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1615)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

[src/activities.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1537)

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

[src/activities.scailo_pb.ts:1429](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1429)

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

[src/activities.scailo_pb.ts:1493](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1493)

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

[src/activities.scailo_pb.ts:1477](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1477)

___

### ownerEmployeeId

• **ownerEmployeeId**: `bigint` = `protoInt64.zero`

Filter by the associated owner employee

**`Generated`**

from field: uint64 owner_employee_id = 51;

#### Defined in

[src/activities.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1601)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated project ID

**`Generated`**

from field: uint64 project_id = 50;

#### Defined in

[src/activities.scailo_pb.ts:1594](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1594)

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 25;

#### Defined in

[src/activities.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1558)

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 24;

#### Defined in

[src/activities.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1551)

___

### status

• **status**: [`ACTIVITY_LIFECYCLE`](../enums/ACTIVITY_LIFECYCLE.md) = `ACTIVITY_LIFECYCLE.ACTIVITY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this activity

**`Generated`**

from field: Scailo.ACTIVITY_LIFECYCLE status = 10;

#### Defined in

[src/activities.scailo_pb.ts:1516](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1516)

___

### supervisorEmployeeId

• **supervisorEmployeeId**: `bigint` = `protoInt64.zero`

Filter by the associated supervisor employee

**`Generated`**

from field: uint64 supervisor_employee_id = 52;

#### Defined in

[src/activities.scailo_pb.ts:1608](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1608)

___

### title

• **title**: `string` = `""`

The title of the activity

**`Generated`**

from field: string title = 20;

#### Defined in

[src/activities.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1544)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:1640](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1640)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1638)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceCountReq"``

#### Defined in

[src/activities.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1639)

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1678)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1666)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1670)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceCountReq`](ActivitiesServiceCountReq.md)

#### Defined in

[src/activities.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L1674)
