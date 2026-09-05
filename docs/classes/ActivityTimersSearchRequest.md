[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityTimersSearchRequest

# Class: ActivityTimersSearchRequest

Describes the request payload to retrieve timers.

**`Generated`**

from message Scailo.ActivityTimersSearchRequest

## Hierarchy

- `Message`\<[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)\>

  ↳ **`ActivityTimersSearchRequest`**

## Table of contents

### Constructors

- [constructor](ActivityTimersSearchRequest.md#constructor)

### Properties

- [activityActionId](ActivityTimersSearchRequest.md#activityactionid)
- [activityId](ActivityTimersSearchRequest.md#activityid)
- [count](ActivityTimersSearchRequest.md#count)
- [employeeId](ActivityTimersSearchRequest.md#employeeid)
- [endsAtEnd](ActivityTimersSearchRequest.md#endsatend)
- [endsAtStart](ActivityTimersSearchRequest.md#endsatstart)
- [entityUuid](ActivityTimersSearchRequest.md#entityuuid)
- [goalId](ActivityTimersSearchRequest.md#goalid)
- [isActive](ActivityTimersSearchRequest.md#isactive)
- [offset](ActivityTimersSearchRequest.md#offset)
- [searchKey](ActivityTimersSearchRequest.md#searchkey)
- [sortKey](ActivityTimersSearchRequest.md#sortkey)
- [sortOrder](ActivityTimersSearchRequest.md#sortorder)
- [startsAtEnd](ActivityTimersSearchRequest.md#startsatend)
- [startsAtStart](ActivityTimersSearchRequest.md#startsatstart)
- [fields](ActivityTimersSearchRequest.md#fields)
- [runtime](ActivityTimersSearchRequest.md#runtime)
- [typeName](ActivityTimersSearchRequest.md#typename)

### Methods

- [clone](ActivityTimersSearchRequest.md#clone)
- [equals](ActivityTimersSearchRequest.md#equals)
- [fromBinary](ActivityTimersSearchRequest.md#frombinary)
- [fromJson](ActivityTimersSearchRequest.md#fromjson)
- [fromJsonString](ActivityTimersSearchRequest.md#fromjsonstring)
- [getType](ActivityTimersSearchRequest.md#gettype)
- [toBinary](ActivityTimersSearchRequest.md#tobinary)
- [toJSON](ActivityTimersSearchRequest.md#tojson)
- [toJson](ActivityTimersSearchRequest.md#tojson-1)
- [toJsonString](ActivityTimersSearchRequest.md#tojsonstring)
- [equals](ActivityTimersSearchRequest.md#equals-1)
- [fromBinary](ActivityTimersSearchRequest.md#frombinary-1)
- [fromJson](ActivityTimersSearchRequest.md#fromjson-1)
- [fromJsonString](ActivityTimersSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityTimersSearchRequest**(`data?`): [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)\> |

#### Returns

[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Overrides

Message\&lt;ActivityTimersSearchRequest\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:3865](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3865)

## Properties

### activityActionId

• **activityActionId**: `bigint` = `protoInt64.zero`

Stores the activity action ID

**`Generated`**

from field: uint64 activity_action_id = 21;

#### Defined in

[src/activities.scailo_pb.ts:3814](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3814)

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

The ID of the activity

**`Generated`**

from field: uint64 activity_id = 20;

#### Defined in

[src/activities.scailo_pb.ts:3807](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3807)

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

[src/activities.scailo_pb.ts:3746](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3746)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 23;

#### Defined in

[src/activities.scailo_pb.ts:3828](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3828)

___

### endsAtEnd

• **endsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "ends at"

**`Generated`**

from field: uint64 ends_at_end = 27;

#### Defined in

[src/activities.scailo_pb.ts:3856](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3856)

___

### endsAtStart

• **endsAtStart**: `bigint` = `protoInt64.zero`

The start range of "ends at"

**`Generated`**

from field: uint64 ends_at_start = 26;

#### Defined in

[src/activities.scailo_pb.ts:3849](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3849)

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

from field: string entity_uuid = 6;

#### Defined in

[src/activities.scailo_pb.ts:3800](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3800)

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the optional goal ID

**`Generated`**

from field: uint64 goal_id = 22;

#### Defined in

[src/activities.scailo_pb.ts:3821](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3821)

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

[src/activities.scailo_pb.ts:3730](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3730)

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

[src/activities.scailo_pb.ts:3762](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3762)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/activities.scailo_pb.ts:3863](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3863)

___

### sortKey

• **sortKey**: [`ACTIVITY_TIMER_SORT_KEY`](../enums/ACTIVITY_TIMER_SORT_KEY.md) = `ACTIVITY_TIMER_SORT_KEY.ACTIVITY_TIMER_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ACTIVITY_TIMER_SORT_KEY sort_key = 5;

#### Defined in

[src/activities.scailo_pb.ts:3784](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3784)

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

[src/activities.scailo_pb.ts:3774](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3774)

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 25;

#### Defined in

[src/activities.scailo_pb.ts:3842](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3842)

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 24;

#### Defined in

[src/activities.scailo_pb.ts:3835](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3835)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:3872](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3872)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:3870](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3870)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityTimersSearchRequest"``

#### Defined in

[src/activities.scailo_pb.ts:3871](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3871)

## Methods

### clone

▸ **clone**(): [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

Create a deep copy.

#### Returns

[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md) \| `PlainMessage`\<[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)\>

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
| `a` | `undefined` \| [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md) \| `PlainMessage`\<[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)\> |
| `b` | `undefined` \| [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md) \| `PlainMessage`\<[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:3902](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3902)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:3890](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3890)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:3894](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3894)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTimersSearchRequest`](ActivityTimersSearchRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:3898](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities.scailo_pb.ts#L3898)
