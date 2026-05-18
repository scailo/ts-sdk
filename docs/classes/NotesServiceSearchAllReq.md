[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesServiceSearchAllReq

# Class: NotesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.NotesServiceSearchAllReq

## Hierarchy

- `Message`\<[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)\>

  ↳ **`NotesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](NotesServiceSearchAllReq.md#constructor)

### Properties

- [activityId](NotesServiceSearchAllReq.md#activityid)
- [activityStatusId](NotesServiceSearchAllReq.md#activitystatusid)
- [count](NotesServiceSearchAllReq.md#count)
- [employeeId](NotesServiceSearchAllReq.md#employeeid)
- [entityUuid](NotesServiceSearchAllReq.md#entityuuid)
- [isActive](NotesServiceSearchAllReq.md#isactive)
- [offset](NotesServiceSearchAllReq.md#offset)
- [projectId](NotesServiceSearchAllReq.md#projectid)
- [searchKey](NotesServiceSearchAllReq.md#searchkey)
- [sortKey](NotesServiceSearchAllReq.md#sortkey)
- [sortOrder](NotesServiceSearchAllReq.md#sortorder)
- [status](NotesServiceSearchAllReq.md#status)
- [fields](NotesServiceSearchAllReq.md#fields)
- [runtime](NotesServiceSearchAllReq.md#runtime)
- [typeName](NotesServiceSearchAllReq.md#typename)

### Methods

- [clone](NotesServiceSearchAllReq.md#clone)
- [equals](NotesServiceSearchAllReq.md#equals)
- [fromBinary](NotesServiceSearchAllReq.md#frombinary)
- [fromJson](NotesServiceSearchAllReq.md#fromjson)
- [fromJsonString](NotesServiceSearchAllReq.md#fromjsonstring)
- [getType](NotesServiceSearchAllReq.md#gettype)
- [toBinary](NotesServiceSearchAllReq.md#tobinary)
- [toJSON](NotesServiceSearchAllReq.md#tojson)
- [toJson](NotesServiceSearchAllReq.md#tojson-1)
- [toJsonString](NotesServiceSearchAllReq.md#tojsonstring)
- [equals](NotesServiceSearchAllReq.md#equals-1)
- [fromBinary](NotesServiceSearchAllReq.md#frombinary-1)
- [fromJson](NotesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](NotesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesServiceSearchAllReq**(`data?`): [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)\> |

#### Returns

[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Overrides

Message\&lt;NotesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/notes.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1398)

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Filter by the associated activity ID

**`Generated`**

from field: uint64 activity_id = 27;

#### Defined in

[src/notes.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1389)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

Filter by the associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 28;

#### Defined in

[src/notes.scailo_pb.ts:1396](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1396)

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

[src/notes.scailo_pb.ts:1291](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1291)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The ID of the employee

**`Generated`**

from field: uint64 employee_id = 26;

#### Defined in

[src/notes.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1382)

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

[src/notes.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1345)

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

[src/notes.scailo_pb.ts:1275](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1275)

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

[src/notes.scailo_pb.ts:1307](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1307)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 25;

#### Defined in

[src/notes.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1375)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/notes.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1368)

___

### sortKey

• **sortKey**: [`NOTE_SORT_KEY`](../enums/NOTE_SORT_KEY.md) = `NOTE_SORT_KEY.NOTE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/notes.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1329)

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

[src/notes.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1319)

___

### status

• **status**: [`NOTE_LIFECYCLE`](../enums/NOTE_LIFECYCLE.md) = `NOTE_LIFECYCLE.NOTE_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.NOTE_LIFECYCLE status = 10;

#### Defined in

[src/notes.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1352)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/notes.scailo_pb.ts:1405](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1405)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/notes.scailo_pb.ts:1403](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1403)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesServiceSearchAllReq"``

#### Defined in

[src/notes.scailo_pb.ts:1404](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1404)

## Methods

### clone

▸ **clone**(): [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md) \| `PlainMessage`\<[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md) \| `PlainMessage`\<[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md) \| `PlainMessage`\<[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/notes.scailo_pb.ts:1432](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1432)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Defined in

[src/notes.scailo_pb.ts:1420](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1420)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Defined in

[src/notes.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1424)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceSearchAllReq`](NotesServiceSearchAllReq.md)

#### Defined in

[src/notes.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/notes.scailo_pb.ts#L1428)
