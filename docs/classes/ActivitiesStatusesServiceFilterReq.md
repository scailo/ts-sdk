[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesStatusesServiceFilterReq

# Class: ActivitiesStatusesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ActivitiesStatusesServiceFilterReq

## Hierarchy

- `Message`\<[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)\>

  ↳ **`ActivitiesStatusesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesStatusesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ActivitiesStatusesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ActivitiesStatusesServiceFilterReq.md#approvedonend)
- [approvedOnStart](ActivitiesStatusesServiceFilterReq.md#approvedonstart)
- [approverRoleId](ActivitiesStatusesServiceFilterReq.md#approverroleid)
- [bgColor](ActivitiesStatusesServiceFilterReq.md#bgcolor)
- [code](ActivitiesStatusesServiceFilterReq.md#code)
- [count](ActivitiesStatusesServiceFilterReq.md#count)
- [creationTimestampEnd](ActivitiesStatusesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesStatusesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ActivitiesStatusesServiceFilterReq.md#entityuuid)
- [fgColor](ActivitiesStatusesServiceFilterReq.md#fgcolor)
- [isActive](ActivitiesStatusesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ActivitiesStatusesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesStatusesServiceFilterReq.md#modificationtimestampstart)
- [name](ActivitiesStatusesServiceFilterReq.md#name)
- [offset](ActivitiesStatusesServiceFilterReq.md#offset)
- [sortKey](ActivitiesStatusesServiceFilterReq.md#sortkey)
- [sortOrder](ActivitiesStatusesServiceFilterReq.md#sortorder)
- [status](ActivitiesStatusesServiceFilterReq.md#status)
- [fields](ActivitiesStatusesServiceFilterReq.md#fields)
- [runtime](ActivitiesStatusesServiceFilterReq.md#runtime)
- [typeName](ActivitiesStatusesServiceFilterReq.md#typename)

### Methods

- [clone](ActivitiesStatusesServiceFilterReq.md#clone)
- [equals](ActivitiesStatusesServiceFilterReq.md#equals)
- [fromBinary](ActivitiesStatusesServiceFilterReq.md#frombinary)
- [fromJson](ActivitiesStatusesServiceFilterReq.md#fromjson)
- [fromJsonString](ActivitiesStatusesServiceFilterReq.md#fromjsonstring)
- [getType](ActivitiesStatusesServiceFilterReq.md#gettype)
- [toBinary](ActivitiesStatusesServiceFilterReq.md#tobinary)
- [toJSON](ActivitiesStatusesServiceFilterReq.md#tojson)
- [toJson](ActivitiesStatusesServiceFilterReq.md#tojson-1)
- [toJsonString](ActivitiesStatusesServiceFilterReq.md#tojsonstring)
- [equals](ActivitiesStatusesServiceFilterReq.md#equals-1)
- [fromBinary](ActivitiesStatusesServiceFilterReq.md#frombinary-1)
- [fromJson](ActivitiesStatusesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ActivitiesStatusesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesStatusesServiceFilterReq**(`data?`): [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)\> |

#### Returns

[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Overrides

Message\&lt;ActivitiesStatusesServiceFilterReq\&gt;.constructor

#### Defined in

[src/activities_statuses.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L879)

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

[src/activities_statuses.scailo_pb.ts:833](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L833)

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

[src/activities_statuses.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L817)

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

[src/activities_statuses.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L801)

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

[src/activities_statuses.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L849)

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 23;

#### Defined in

[src/activities_statuses.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L877)

___

### code

• **code**: `string` = `""`

The unique code by which the activity status is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/activities_statuses.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L863)

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

[src/activities_statuses.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L655)

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

[src/activities_statuses.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L725)

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

[src/activities_statuses.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L709)

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

[src/activities_statuses.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L773)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 22;

#### Defined in

[src/activities_statuses.scailo_pb.ts:870](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L870)

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

[src/activities_statuses.scailo_pb.ts:639](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L639)

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

[src/activities_statuses.scailo_pb.ts:757](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L757)

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

[src/activities_statuses.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L741)

___

### name

• **name**: `string` = `""`

The name of the activity status

**`Generated`**

from field: string name = 20;

#### Defined in

[src/activities_statuses.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L856)

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

[src/activities_statuses.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L671)

___

### sortKey

• **sortKey**: [`ACTIVITY_STATUS_SORT_KEY`](../enums/ACTIVITY_STATUS_SORT_KEY.md) = `ACTIVITY_STATUS_SORT_KEY.ACTIVITY_STATUS_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ACTIVITY_STATUS_SORT_KEY sort_key = 5;

#### Defined in

[src/activities_statuses.scailo_pb.ts:693](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L693)

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

[src/activities_statuses.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L683)

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

[src/activities_statuses.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L785)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_statuses.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L886)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_statuses.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L884)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesStatusesServiceFilterReq"``

#### Defined in

[src/activities_statuses.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L885)

## Methods

### clone

▸ **clone**(): [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_statuses.scailo_pb.ts:920](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L920)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L908)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L912)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceFilterReq`](ActivitiesStatusesServiceFilterReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L916)
