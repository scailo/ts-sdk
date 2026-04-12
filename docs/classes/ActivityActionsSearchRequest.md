[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityActionsSearchRequest

# Class: ActivityActionsSearchRequest

Describes the request payload to retrieve actions.

**`Generated`**

from message Scailo.ActivityActionsSearchRequest

## Hierarchy

- `Message`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\>

  ↳ **`ActivityActionsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ActivityActionsSearchRequest.md#constructor)

### Properties

- [actionCodeId](ActivityActionsSearchRequest.md#actioncodeid)
- [activityId](ActivityActionsSearchRequest.md#activityid)
- [count](ActivityActionsSearchRequest.md#count)
- [employeeId](ActivityActionsSearchRequest.md#employeeid)
- [entityUuid](ActivityActionsSearchRequest.md#entityuuid)
- [isActive](ActivityActionsSearchRequest.md#isactive)
- [offset](ActivityActionsSearchRequest.md#offset)
- [searchKey](ActivityActionsSearchRequest.md#searchkey)
- [sortKey](ActivityActionsSearchRequest.md#sortkey)
- [sortOrder](ActivityActionsSearchRequest.md#sortorder)
- [fields](ActivityActionsSearchRequest.md#fields)
- [runtime](ActivityActionsSearchRequest.md#runtime)
- [typeName](ActivityActionsSearchRequest.md#typename)

### Methods

- [clone](ActivityActionsSearchRequest.md#clone)
- [equals](ActivityActionsSearchRequest.md#equals)
- [fromBinary](ActivityActionsSearchRequest.md#frombinary)
- [fromJson](ActivityActionsSearchRequest.md#fromjson)
- [fromJsonString](ActivityActionsSearchRequest.md#fromjsonstring)
- [getType](ActivityActionsSearchRequest.md#gettype)
- [toBinary](ActivityActionsSearchRequest.md#tobinary)
- [toJSON](ActivityActionsSearchRequest.md#tojson)
- [toJson](ActivityActionsSearchRequest.md#tojson-1)
- [toJsonString](ActivityActionsSearchRequest.md#tojsonstring)
- [equals](ActivityActionsSearchRequest.md#equals-1)
- [fromBinary](ActivityActionsSearchRequest.md#frombinary-1)
- [fromJson](ActivityActionsSearchRequest.md#fromjson-1)
- [fromJsonString](ActivityActionsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityActionsSearchRequest**(`data?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Overrides

Message\&lt;ActivityActionsSearchRequest\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:2426](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2426)

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Stores the action code ID

**`Generated`**

from field: uint64 action_code_id = 23;

#### Defined in

[src/activities.scailo_pb.ts:2417](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2417)

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

The ID of the activity

**`Generated`**

from field: uint64 activity_id = 20;

#### Defined in

[src/activities.scailo_pb.ts:2410](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2410)

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

[src/activities.scailo_pb.ts:2342](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2342)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the optional employee ID

**`Generated`**

from field: uint64 employee_id = 9;

#### Defined in

[src/activities.scailo_pb.ts:2403](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2403)

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

[src/activities.scailo_pb.ts:2396](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2396)

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

[src/activities.scailo_pb.ts:2326](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2326)

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

[src/activities.scailo_pb.ts:2358](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2358)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/activities.scailo_pb.ts:2424](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2424)

___

### sortKey

• **sortKey**: [`ACTIVITY_ACTION_SORT_KEY`](../enums/ACTIVITY_ACTION_SORT_KEY.md) = `ACTIVITY_ACTION_SORT_KEY.ACTIVITY_ACTION_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ACTIVITY_ACTION_SORT_KEY sort_key = 5;

#### Defined in

[src/activities.scailo_pb.ts:2380](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2380)

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

[src/activities.scailo_pb.ts:2370](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2370)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:2433](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2433)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:2431](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2431)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityActionsSearchRequest"``

#### Defined in

[src/activities.scailo_pb.ts:2432](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2432)

## Methods

### clone

▸ **clone**(): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

Create a deep copy.

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md) \| `PlainMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md) \| `PlainMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |
| `b` | `undefined` \| [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md) \| `PlainMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:2458](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2458)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:2446](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2446)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:2450](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2450)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:2454](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/activities.scailo_pb.ts#L2454)
