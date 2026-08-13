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
- [formData](SkillsGroupsServiceFilterReq.md#formdata)
- [includeFormData](SkillsGroupsServiceFilterReq.md#includeformdata)
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

[src/skills_groups.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1548)

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

[src/skills_groups.scailo_pb.ts:1454](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1454)

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

[src/skills_groups.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1438)

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

[src/skills_groups.scailo_pb.ts:1422](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1422)

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

[src/skills_groups.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1470)

___

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/skills_groups.scailo_pb.ts:1516](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1516)

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

[src/skills_groups.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1502)

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

[src/skills_groups.scailo_pb.ts:1486](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1486)

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

[src/skills_groups.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1276)

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

[src/skills_groups.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1346)

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

[src/skills_groups.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1330)

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

[src/skills_groups.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1394)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/skills_groups.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1533)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/skills_groups.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1546)

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

[src/skills_groups.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1260)

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

[src/skills_groups.scailo_pb.ts:1378](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1378)

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

[src/skills_groups.scailo_pb.ts:1362](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1362)

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/skills_groups.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1509)

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

[src/skills_groups.scailo_pb.ts:1292](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1292)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: uint64 role_id = 22;

#### Defined in

[src/skills_groups.scailo_pb.ts:1523](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1523)

___

### sortKey

• **sortKey**: [`SKILL_GROUP_SORT_KEY`](../enums/SKILL_GROUP_SORT_KEY.md) = `SKILL_GROUP_SORT_KEY.SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SKILL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_groups.scailo_pb.ts:1314](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1314)

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

[src/skills_groups.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1304)

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

[src/skills_groups.scailo_pb.ts:1406](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1406)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:1555](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1555)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:1553](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1553)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceFilterReq"``

#### Defined in

[src/skills_groups.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1554)

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

[src/skills_groups.scailo_pb.ts:1592](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1592)

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

[src/skills_groups.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1580)

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

[src/skills_groups.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1584)

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

[src/skills_groups.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_groups.scailo_pb.ts#L1588)
