[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceFilterReq

# Class: SkillsGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SkillsGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)\>

  ↳ **`SkillsGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SkillsGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SkillsGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SkillsGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SkillsGroupsServiceFilterReq.md#approverroleid)
- [code](SkillsGroupsServiceFilterReq.md#code)
- [completedOnEnd](SkillsGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](SkillsGroupsServiceFilterReq.md#completedonstart)
- [count](SkillsGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](SkillsGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SkillsGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](SkillsGroupsServiceFilterReq.md#entityuuid)
- [isActive](SkillsGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SkillsGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SkillsGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](SkillsGroupsServiceFilterReq.md#name)
- [offset](SkillsGroupsServiceFilterReq.md#offset)
- [roleId](SkillsGroupsServiceFilterReq.md#roleid)
- [sortKey](SkillsGroupsServiceFilterReq.md#sortkey)
- [sortOrder](SkillsGroupsServiceFilterReq.md#sortorder)
- [status](SkillsGroupsServiceFilterReq.md#status)
- [fields](SkillsGroupsServiceFilterReq.md#fields)
- [runtime](SkillsGroupsServiceFilterReq.md#runtime)
- [typeName](SkillsGroupsServiceFilterReq.md#typename)

### Methods

- [clone](SkillsGroupsServiceFilterReq.md#clone)
- [equals](SkillsGroupsServiceFilterReq.md#equals)
- [fromBinary](SkillsGroupsServiceFilterReq.md#frombinary)
- [fromJson](SkillsGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](SkillsGroupsServiceFilterReq.md#fromjsonstring)
- [getType](SkillsGroupsServiceFilterReq.md#gettype)
- [toBinary](SkillsGroupsServiceFilterReq.md#tobinary)
- [toJSON](SkillsGroupsServiceFilterReq.md#tojson)
- [toJson](SkillsGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](SkillsGroupsServiceFilterReq.md#tojsonstring)
- [equals](SkillsGroupsServiceFilterReq.md#equals-1)
- [fromBinary](SkillsGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](SkillsGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceFilterReq**(`data?`): [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)\> |

#### Returns

[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;SkillsGroupsServiceFilterReq\&gt;.constructor

#### Defined in

src/skills_groups.scailo_pb.ts:1226

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/skills_groups.scailo_pb.ts:1182

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/skills_groups.scailo_pb.ts:1175

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/skills_groups.scailo_pb.ts:1168

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/skills_groups.scailo_pb.ts:1189

___

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 21;

#### Defined in

src/skills_groups.scailo_pb.ts:1217

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/skills_groups.scailo_pb.ts:1203

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/skills_groups.scailo_pb.ts:1196

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/skills_groups.scailo_pb.ts:1098

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/skills_groups.scailo_pb.ts:1133

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/skills_groups.scailo_pb.ts:1126

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/skills_groups.scailo_pb.ts:1154

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/skills_groups.scailo_pb.ts:1091

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/skills_groups.scailo_pb.ts:1147

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/skills_groups.scailo_pb.ts:1140

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 20;

#### Defined in

src/skills_groups.scailo_pb.ts:1210

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/skills_groups.scailo_pb.ts:1105

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: uint64 role_id = 22;

#### Defined in

src/skills_groups.scailo_pb.ts:1224

___

### sortKey

• **sortKey**: [`SKILL_GROUP_SORT_KEY`](../enums/SKILL_GROUP_SORT_KEY.md) = `SKILL_GROUP_SORT_KEY.SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SKILL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

src/skills_groups.scailo_pb.ts:1119

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/skills_groups.scailo_pb.ts:1112

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this skill group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/skills_groups.scailo_pb.ts:1161

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_groups.scailo_pb.ts:1233

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_groups.scailo_pb.ts:1231

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceFilterReq"``

#### Defined in

src/skills_groups.scailo_pb.ts:1232

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/skills_groups.scailo_pb.ts:1268

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Defined in

src/skills_groups.scailo_pb.ts:1256

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Defined in

src/skills_groups.scailo_pb.ts:1260

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceFilterReq`](SkillsGroupsServiceFilterReq.md)

#### Defined in

src/skills_groups.scailo_pb.ts:1264
