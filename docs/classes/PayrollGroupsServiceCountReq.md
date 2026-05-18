[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsServiceCountReq

# Class: PayrollGroupsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PayrollGroupsServiceCountReq

## Hierarchy

- `Message`\<[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)\>

  ↳ **`PayrollGroupsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PayrollGroupsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PayrollGroupsServiceCountReq.md#approvedonend)
- [approvedOnStart](PayrollGroupsServiceCountReq.md#approvedonstart)
- [approverRoleId](PayrollGroupsServiceCountReq.md#approverroleid)
- [code](PayrollGroupsServiceCountReq.md#code)
- [completedOnEnd](PayrollGroupsServiceCountReq.md#completedonend)
- [completedOnStart](PayrollGroupsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](PayrollGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PayrollGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](PayrollGroupsServiceCountReq.md#entityuuid)
- [isActive](PayrollGroupsServiceCountReq.md#isactive)
- [modificationTimestampEnd](PayrollGroupsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PayrollGroupsServiceCountReq.md#modificationtimestampstart)
- [name](PayrollGroupsServiceCountReq.md#name)
- [status](PayrollGroupsServiceCountReq.md#status)
- [fields](PayrollGroupsServiceCountReq.md#fields)
- [runtime](PayrollGroupsServiceCountReq.md#runtime)
- [typeName](PayrollGroupsServiceCountReq.md#typename)

### Methods

- [clone](PayrollGroupsServiceCountReq.md#clone)
- [equals](PayrollGroupsServiceCountReq.md#equals)
- [fromBinary](PayrollGroupsServiceCountReq.md#frombinary)
- [fromJson](PayrollGroupsServiceCountReq.md#fromjson)
- [fromJsonString](PayrollGroupsServiceCountReq.md#fromjsonstring)
- [getType](PayrollGroupsServiceCountReq.md#gettype)
- [toBinary](PayrollGroupsServiceCountReq.md#tobinary)
- [toJSON](PayrollGroupsServiceCountReq.md#tojson)
- [toJson](PayrollGroupsServiceCountReq.md#tojson-1)
- [toJsonString](PayrollGroupsServiceCountReq.md#tojsonstring)
- [equals](PayrollGroupsServiceCountReq.md#equals-1)
- [fromBinary](PayrollGroupsServiceCountReq.md#frombinary-1)
- [fromJson](PayrollGroupsServiceCountReq.md#fromjson-1)
- [fromJsonString](PayrollGroupsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsServiceCountReq**(`data?`): [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)\> |

#### Returns

[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Overrides

Message\&lt;PayrollGroupsServiceCountReq\&gt;.constructor

#### Defined in

[src/payroll_groups.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1651)

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

[src/payroll_groups.scailo_pb.ts:1587](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1587)

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

[src/payroll_groups.scailo_pb.ts:1571](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1571)

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

[src/payroll_groups.scailo_pb.ts:1555](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1555)

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

[src/payroll_groups.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1603)

___

### code

• **code**: `string` = `""`

The payroll param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/payroll_groups.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1649)

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

[src/payroll_groups.scailo_pb.ts:1635](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1635)

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

[src/payroll_groups.scailo_pb.ts:1619](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1619)

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

[src/payroll_groups.scailo_pb.ts:1479](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1479)

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

[src/payroll_groups.scailo_pb.ts:1463](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1463)

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

[src/payroll_groups.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1527)

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

[src/payroll_groups.scailo_pb.ts:1447](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1447)

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

[src/payroll_groups.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1511)

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

[src/payroll_groups.scailo_pb.ts:1495](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1495)

___

### name

• **name**: `string` = `""`

The name of the payroll group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/payroll_groups.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1642)

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

[src/payroll_groups.scailo_pb.ts:1539](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1539)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1658](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1658)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1656)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsServiceCountReq"``

#### Defined in

[src/payroll_groups.scailo_pb.ts:1657](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1657)

## Methods

### clone

▸ **clone**(): [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

Create a deep copy.

#### Returns

[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md) \| `PlainMessage`\<[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md) \| `PlainMessage`\<[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)\> |
| `b` | `undefined` \| [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md) \| `PlainMessage`\<[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1688](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1688)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1676)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1680)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceCountReq`](PayrollGroupsServiceCountReq.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/payroll_groups.scailo_pb.ts#L1684)
