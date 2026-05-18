[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsServiceFilterReq

# Class: PayrollGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PayrollGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)\>

  ↳ **`PayrollGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PayrollGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PayrollGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](PayrollGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](PayrollGroupsServiceFilterReq.md#approverroleid)
- [code](PayrollGroupsServiceFilterReq.md#code)
- [completedOnEnd](PayrollGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](PayrollGroupsServiceFilterReq.md#completedonstart)
- [count](PayrollGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](PayrollGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PayrollGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PayrollGroupsServiceFilterReq.md#entityuuid)
- [isActive](PayrollGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PayrollGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PayrollGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](PayrollGroupsServiceFilterReq.md#name)
- [offset](PayrollGroupsServiceFilterReq.md#offset)
- [sortKey](PayrollGroupsServiceFilterReq.md#sortkey)
- [sortOrder](PayrollGroupsServiceFilterReq.md#sortorder)
- [status](PayrollGroupsServiceFilterReq.md#status)
- [fields](PayrollGroupsServiceFilterReq.md#fields)
- [runtime](PayrollGroupsServiceFilterReq.md#runtime)
- [typeName](PayrollGroupsServiceFilterReq.md#typename)

### Methods

- [clone](PayrollGroupsServiceFilterReq.md#clone)
- [equals](PayrollGroupsServiceFilterReq.md#equals)
- [fromBinary](PayrollGroupsServiceFilterReq.md#frombinary)
- [fromJson](PayrollGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](PayrollGroupsServiceFilterReq.md#fromjsonstring)
- [getType](PayrollGroupsServiceFilterReq.md#gettype)
- [toBinary](PayrollGroupsServiceFilterReq.md#tobinary)
- [toJSON](PayrollGroupsServiceFilterReq.md#tojson)
- [toJson](PayrollGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](PayrollGroupsServiceFilterReq.md#tojsonstring)
- [equals](PayrollGroupsServiceFilterReq.md#equals-1)
- [fromBinary](PayrollGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](PayrollGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PayrollGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsServiceFilterReq**(`data?`): [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)\> |

#### Returns

[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;PayrollGroupsServiceFilterReq\&gt;.constructor

#### Defined in

[src/payroll_groups.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1384)

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

[src/payroll_groups.scailo_pb.ts:1320](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1320)

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

[src/payroll_groups.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1304)

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

[src/payroll_groups.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1288)

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

[src/payroll_groups.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1336)

___

### code

• **code**: `string` = `""`

The payroll param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/payroll_groups.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1382)

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

[src/payroll_groups.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1368)

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

[src/payroll_groups.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1352)

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

[src/payroll_groups.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1142)

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

[src/payroll_groups.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1212)

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

[src/payroll_groups.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1196)

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

[src/payroll_groups.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1260)

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

[src/payroll_groups.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1126)

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

[src/payroll_groups.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1244)

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

[src/payroll_groups.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1228)

___

### name

• **name**: `string` = `""`

The name of the payroll group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/payroll_groups.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1375)

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

[src/payroll_groups.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1158)

___

### sortKey

• **sortKey**: [`PAYROLL_GROUP_SORT_KEY`](../enums/PAYROLL_GROUP_SORT_KEY.md) = `PAYROLL_GROUP_SORT_KEY.PAYROLL_GROUP_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PAYROLL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/payroll_groups.scailo_pb.ts:1180](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1180)

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

[src/payroll_groups.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1170)

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

[src/payroll_groups.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1272)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1391)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1389)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsServiceFilterReq"``

#### Defined in

[src/payroll_groups.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1390)

## Methods

### clone

▸ **clone**(): [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md) \| `PlainMessage`\<[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md) \| `PlainMessage`\<[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md) \| `PlainMessage`\<[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1425](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1425)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1413](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1413)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1417](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1417)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceFilterReq`](PayrollGroupsServiceFilterReq.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1421](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1421)
