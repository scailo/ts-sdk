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
- [completedOnEnd](SkillsGroupsServiceCountReq.md#completedonend)
- [completedOnStart](SkillsGroupsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](SkillsGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SkillsGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](SkillsGroupsServiceCountReq.md#entityuuid)
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

src/skills_groups.scailo_pb.ts:1377

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/skills_groups.scailo_pb.ts:1340

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/skills_groups.scailo_pb.ts:1333

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/skills_groups.scailo_pb.ts:1326

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/skills_groups.scailo_pb.ts:1347

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/skills_groups.scailo_pb.ts:1361

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/skills_groups.scailo_pb.ts:1354

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/skills_groups.scailo_pb.ts:1291

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/skills_groups.scailo_pb.ts:1284

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/skills_groups.scailo_pb.ts:1312

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/skills_groups.scailo_pb.ts:1277

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/skills_groups.scailo_pb.ts:1305

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/skills_groups.scailo_pb.ts:1298

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 20;

#### Defined in

src/skills_groups.scailo_pb.ts:1368

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: uint64 role_id = 21;

#### Defined in

src/skills_groups.scailo_pb.ts:1375

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this skill group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/skills_groups.scailo_pb.ts:1319

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_groups.scailo_pb.ts:1384

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_groups.scailo_pb.ts:1382

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceCountReq"``

#### Defined in

src/skills_groups.scailo_pb.ts:1383

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

src/skills_groups.scailo_pb.ts:1414

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

src/skills_groups.scailo_pb.ts:1402

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

src/skills_groups.scailo_pb.ts:1406

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

src/skills_groups.scailo_pb.ts:1410
