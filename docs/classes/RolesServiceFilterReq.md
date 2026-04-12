[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceFilterReq

# Class: RolesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.RolesServiceFilterReq

## Hierarchy

- `Message`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

  ↳ **`RolesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](RolesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](RolesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](RolesServiceFilterReq.md#approvedonend)
- [approvedOnStart](RolesServiceFilterReq.md#approvedonstart)
- [approverRoleId](RolesServiceFilterReq.md#approverroleid)
- [code](RolesServiceFilterReq.md#code)
- [completedOnEnd](RolesServiceFilterReq.md#completedonend)
- [completedOnStart](RolesServiceFilterReq.md#completedonstart)
- [count](RolesServiceFilterReq.md#count)
- [creationTimestampEnd](RolesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](RolesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](RolesServiceFilterReq.md#entityuuid)
- [isActive](RolesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](RolesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](RolesServiceFilterReq.md#modificationtimestampstart)
- [name](RolesServiceFilterReq.md#name)
- [offset](RolesServiceFilterReq.md#offset)
- [sortKey](RolesServiceFilterReq.md#sortkey)
- [sortOrder](RolesServiceFilterReq.md#sortorder)
- [status](RolesServiceFilterReq.md#status)
- [fields](RolesServiceFilterReq.md#fields)
- [runtime](RolesServiceFilterReq.md#runtime)
- [typeName](RolesServiceFilterReq.md#typename)

### Methods

- [clone](RolesServiceFilterReq.md#clone)
- [equals](RolesServiceFilterReq.md#equals)
- [fromBinary](RolesServiceFilterReq.md#frombinary)
- [fromJson](RolesServiceFilterReq.md#fromjson)
- [fromJsonString](RolesServiceFilterReq.md#fromjsonstring)
- [getType](RolesServiceFilterReq.md#gettype)
- [toBinary](RolesServiceFilterReq.md#tobinary)
- [toJSON](RolesServiceFilterReq.md#tojson)
- [toJson](RolesServiceFilterReq.md#tojson-1)
- [toJsonString](RolesServiceFilterReq.md#tojsonstring)
- [equals](RolesServiceFilterReq.md#equals-1)
- [fromBinary](RolesServiceFilterReq.md#frombinary-1)
- [fromJson](RolesServiceFilterReq.md#fromjson-1)
- [fromJsonString](RolesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceFilterReq**(`data?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Overrides

Message\&lt;RolesServiceFilterReq\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1209)

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

[src/roles.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1145)

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

[src/roles.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1129)

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

[src/roles.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1113)

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

[src/roles.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1161)

___

### code

• **code**: `string` = `""`

The name of the code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/roles.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1207)

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

[src/roles.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1193)

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

[src/roles.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1177)

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

[src/roles.scailo_pb.ts:967](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L967)

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

[src/roles.scailo_pb.ts:1037](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1037)

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

[src/roles.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1021)

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

[src/roles.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1085)

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

[src/roles.scailo_pb.ts:951](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L951)

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

[src/roles.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1069)

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

[src/roles.scailo_pb.ts:1053](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1053)

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 20;

#### Defined in

[src/roles.scailo_pb.ts:1200](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1200)

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

[src/roles.scailo_pb.ts:983](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L983)

___

### sortKey

• **sortKey**: [`ROLE_SORT_KEY`](../enums/ROLE_SORT_KEY.md) = `ROLE_SORT_KEY.ROLE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ROLE_SORT_KEY sort_key = 5;

#### Defined in

[src/roles.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1005)

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

[src/roles.scailo_pb.ts:995](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L995)

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

[src/roles.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1097)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:1216](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1216)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:1214](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1214)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceFilterReq"``

#### Defined in

[src/roles.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1215)

## Methods

### clone

▸ **clone**(): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1250)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1238)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1242)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1246](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/roles.scailo_pb.ts#L1246)
