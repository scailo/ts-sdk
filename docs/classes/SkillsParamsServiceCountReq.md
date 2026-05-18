[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServiceCountReq

# Class: SkillsParamsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SkillsParamsServiceCountReq

## Hierarchy

- `Message`\<[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)\>

  ↳ **`SkillsParamsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SkillsParamsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SkillsParamsServiceCountReq.md#approvedonend)
- [approvedOnStart](SkillsParamsServiceCountReq.md#approvedonstart)
- [approverRoleId](SkillsParamsServiceCountReq.md#approverroleid)
- [code](SkillsParamsServiceCountReq.md#code)
- [completedOnEnd](SkillsParamsServiceCountReq.md#completedonend)
- [completedOnStart](SkillsParamsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](SkillsParamsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SkillsParamsServiceCountReq.md#creationtimestampstart)
- [entityUuid](SkillsParamsServiceCountReq.md#entityuuid)
- [formData](SkillsParamsServiceCountReq.md#formdata)
- [isActive](SkillsParamsServiceCountReq.md#isactive)
- [modificationTimestampEnd](SkillsParamsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SkillsParamsServiceCountReq.md#modificationtimestampstart)
- [name](SkillsParamsServiceCountReq.md#name)
- [status](SkillsParamsServiceCountReq.md#status)
- [fields](SkillsParamsServiceCountReq.md#fields)
- [runtime](SkillsParamsServiceCountReq.md#runtime)
- [typeName](SkillsParamsServiceCountReq.md#typename)

### Methods

- [clone](SkillsParamsServiceCountReq.md#clone)
- [equals](SkillsParamsServiceCountReq.md#equals)
- [fromBinary](SkillsParamsServiceCountReq.md#frombinary)
- [fromJson](SkillsParamsServiceCountReq.md#fromjson)
- [fromJsonString](SkillsParamsServiceCountReq.md#fromjsonstring)
- [getType](SkillsParamsServiceCountReq.md#gettype)
- [toBinary](SkillsParamsServiceCountReq.md#tobinary)
- [toJSON](SkillsParamsServiceCountReq.md#tojson)
- [toJson](SkillsParamsServiceCountReq.md#tojson-1)
- [toJsonString](SkillsParamsServiceCountReq.md#tojsonstring)
- [equals](SkillsParamsServiceCountReq.md#equals-1)
- [fromBinary](SkillsParamsServiceCountReq.md#frombinary-1)
- [fromJson](SkillsParamsServiceCountReq.md#fromjson-1)
- [fromJsonString](SkillsParamsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServiceCountReq**(`data?`): [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)\> |

#### Returns

[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Overrides

Message\&lt;SkillsParamsServiceCountReq\&gt;.constructor

#### Defined in

[src/skills_params.scailo_pb.ts:1254](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1254)

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

[src/skills_params.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1183)

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

[src/skills_params.scailo_pb.ts:1167](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1167)

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

[src/skills_params.scailo_pb.ts:1151](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1151)

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

[src/skills_params.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1199)

___

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/skills_params.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1245)

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

[src/skills_params.scailo_pb.ts:1231](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1231)

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

[src/skills_params.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1215)

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

[src/skills_params.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1075)

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

[src/skills_params.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1059)

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

[src/skills_params.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1123)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/skills_params.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1252)

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

[src/skills_params.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1043)

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

[src/skills_params.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1107)

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

[src/skills_params.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1091)

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/skills_params.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1238)

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

[src/skills_params.scailo_pb.ts:1135](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1135)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsParamsServiceCountReq"``

#### Defined in

[src/skills_params.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1260)

## Methods

### clone

▸ **clone**(): [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

Create a deep copy.

#### Returns

[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md) \| `PlainMessage`\<[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md) \| `PlainMessage`\<[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)\> |
| `b` | `undefined` \| [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md) \| `PlainMessage`\<[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params.scailo_pb.ts:1292](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1292)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:1280](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1280)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1284)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCountReq`](SkillsParamsServiceCountReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L1288)
