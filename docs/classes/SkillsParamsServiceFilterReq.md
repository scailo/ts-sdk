[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServiceFilterReq

# Class: SkillsParamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SkillsParamsServiceFilterReq

## Hierarchy

- `Message`\<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\>

  ↳ **`SkillsParamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SkillsParamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SkillsParamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SkillsParamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SkillsParamsServiceFilterReq.md#approverroleid)
- [code](SkillsParamsServiceFilterReq.md#code)
- [completedOnEnd](SkillsParamsServiceFilterReq.md#completedonend)
- [completedOnStart](SkillsParamsServiceFilterReq.md#completedonstart)
- [count](SkillsParamsServiceFilterReq.md#count)
- [creationTimestampEnd](SkillsParamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SkillsParamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](SkillsParamsServiceFilterReq.md#entityuuid)
- [formData](SkillsParamsServiceFilterReq.md#formdata)
- [isActive](SkillsParamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SkillsParamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SkillsParamsServiceFilterReq.md#modificationtimestampstart)
- [name](SkillsParamsServiceFilterReq.md#name)
- [offset](SkillsParamsServiceFilterReq.md#offset)
- [sortKey](SkillsParamsServiceFilterReq.md#sortkey)
- [sortOrder](SkillsParamsServiceFilterReq.md#sortorder)
- [status](SkillsParamsServiceFilterReq.md#status)
- [fields](SkillsParamsServiceFilterReq.md#fields)
- [runtime](SkillsParamsServiceFilterReq.md#runtime)
- [typeName](SkillsParamsServiceFilterReq.md#typename)

### Methods

- [clone](SkillsParamsServiceFilterReq.md#clone)
- [equals](SkillsParamsServiceFilterReq.md#equals)
- [fromBinary](SkillsParamsServiceFilterReq.md#frombinary)
- [fromJson](SkillsParamsServiceFilterReq.md#fromjson)
- [fromJsonString](SkillsParamsServiceFilterReq.md#fromjsonstring)
- [getType](SkillsParamsServiceFilterReq.md#gettype)
- [toBinary](SkillsParamsServiceFilterReq.md#tobinary)
- [toJSON](SkillsParamsServiceFilterReq.md#tojson)
- [toJson](SkillsParamsServiceFilterReq.md#tojson-1)
- [toJsonString](SkillsParamsServiceFilterReq.md#tojsonstring)
- [equals](SkillsParamsServiceFilterReq.md#equals-1)
- [fromBinary](SkillsParamsServiceFilterReq.md#frombinary-1)
- [fromJson](SkillsParamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SkillsParamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServiceFilterReq**(`data?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Overrides

Message\&lt;SkillsParamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/skills_params.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L962)

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

[src/skills_params.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L891)

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

[src/skills_params.scailo_pb.ts:875](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L875)

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

[src/skills_params.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L859)

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

[src/skills_params.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L907)

___

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/skills_params.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L953)

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

[src/skills_params.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L939)

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

[src/skills_params.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L923)

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

[src/skills_params.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L713)

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

[src/skills_params.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L783)

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

[src/skills_params.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L767)

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

[src/skills_params.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L831)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/skills_params.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L960)

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

[src/skills_params.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L697)

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

[src/skills_params.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L815)

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

[src/skills_params.scailo_pb.ts:799](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L799)

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/skills_params.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L946)

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

[src/skills_params.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L729)

___

### sortKey

• **sortKey**: [`SKILL_PARAM_SORT_KEY`](../enums/SKILL_PARAM_SORT_KEY.md) = `SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SKILL_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_params.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L751)

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

[src/skills_params.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L741)

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

[src/skills_params.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L843)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params.scailo_pb.ts:969](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L969)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params.scailo_pb.ts:967](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L967)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsParamsServiceFilterReq"``

#### Defined in

[src/skills_params.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L968)

## Methods

### clone

▸ **clone**(): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md) \| `PlainMessage`\<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md) \| `PlainMessage`\<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md) \| `PlainMessage`\<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L1004)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L992)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L996)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:1000](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/skills_params.scailo_pb.ts#L1000)
