[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceCountReq

# Class: SkillsGroupsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SkillsGroupsServiceCountReq

## Hierarchy

- `Message`\<[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)\>

  ↳ **`SkillsGroupsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SkillsGroupsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SkillsGroupsServiceCountReq.md#approvedonend)
- [approvedOnStart](SkillsGroupsServiceCountReq.md#approvedonstart)
- [approverRoleId](SkillsGroupsServiceCountReq.md#approverroleid)
- [code](SkillsGroupsServiceCountReq.md#code)
- [completedOnEnd](SkillsGroupsServiceCountReq.md#completedonend)
- [completedOnStart](SkillsGroupsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](SkillsGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SkillsGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](SkillsGroupsServiceCountReq.md#entityuuid)
- [formData](SkillsGroupsServiceCountReq.md#formdata)
- [isActive](SkillsGroupsServiceCountReq.md#isactive)
- [modificationTimestampEnd](SkillsGroupsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SkillsGroupsServiceCountReq.md#modificationtimestampstart)
- [name](SkillsGroupsServiceCountReq.md#name)
- [roleId](SkillsGroupsServiceCountReq.md#roleid)
- [status](SkillsGroupsServiceCountReq.md#status)
- [fields](SkillsGroupsServiceCountReq.md#fields)
- [runtime](SkillsGroupsServiceCountReq.md#runtime)
- [typeName](SkillsGroupsServiceCountReq.md#typename)

### Methods

- [clone](SkillsGroupsServiceCountReq.md#clone)
- [equals](SkillsGroupsServiceCountReq.md#equals)
- [fromBinary](SkillsGroupsServiceCountReq.md#frombinary)
- [fromJson](SkillsGroupsServiceCountReq.md#fromjson)
- [fromJsonString](SkillsGroupsServiceCountReq.md#fromjsonstring)
- [getType](SkillsGroupsServiceCountReq.md#gettype)
- [toBinary](SkillsGroupsServiceCountReq.md#tobinary)
- [toJSON](SkillsGroupsServiceCountReq.md#tojson)
- [toJson](SkillsGroupsServiceCountReq.md#tojson-1)
- [toJsonString](SkillsGroupsServiceCountReq.md#tojsonstring)
- [equals](SkillsGroupsServiceCountReq.md#equals-1)
- [fromBinary](SkillsGroupsServiceCountReq.md#frombinary-1)
- [fromJson](SkillsGroupsServiceCountReq.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceCountReq**(`data?`): [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)\> |

#### Returns

[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Overrides

Message\&lt;SkillsGroupsServiceCountReq\&gt;.constructor

#### Defined in

[src/skills_groups.scailo_pb.ts:1768](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1768)

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

[src/skills_groups.scailo_pb.ts:1690](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1690)

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

[src/skills_groups.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1674)

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

[src/skills_groups.scailo_pb.ts:1658](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1658)

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

[src/skills_groups.scailo_pb.ts:1706](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1706)

___

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/skills_groups.scailo_pb.ts:1752](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1752)

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

[src/skills_groups.scailo_pb.ts:1738](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1738)

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

[src/skills_groups.scailo_pb.ts:1722](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1722)

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

[src/skills_groups.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1582)

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

[src/skills_groups.scailo_pb.ts:1566](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1566)

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

[src/skills_groups.scailo_pb.ts:1630](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1630)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/skills_groups.scailo_pb.ts:1766](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1766)

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

[src/skills_groups.scailo_pb.ts:1550](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1550)

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

[src/skills_groups.scailo_pb.ts:1614](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1614)

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

[src/skills_groups.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1598)

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/skills_groups.scailo_pb.ts:1745](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1745)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: uint64 role_id = 22;

#### Defined in

[src/skills_groups.scailo_pb.ts:1759](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1759)

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

[src/skills_groups.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1642)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:1775](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1775)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1773)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceCountReq"``

#### Defined in

[src/skills_groups.scailo_pb.ts:1774](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1774)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups.scailo_pb.ts:1807](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1807)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1795](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1795)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1799](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1799)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCountReq`](SkillsGroupsServiceCountReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1803](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L1803)
