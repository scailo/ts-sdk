[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServiceFilterReq

# Class: QuestionnaireOptionGroupsServiceFilterReq

Advanced filter request for searching and paginating questionnaire option groups using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)\>

  ↳ **`QuestionnaireOptionGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuestionnaireOptionGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuestionnaireOptionGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QuestionnaireOptionGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QuestionnaireOptionGroupsServiceFilterReq.md#approverroleid)
- [code](QuestionnaireOptionGroupsServiceFilterReq.md#code)
- [completedOnEnd](QuestionnaireOptionGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](QuestionnaireOptionGroupsServiceFilterReq.md#completedonstart)
- [count](QuestionnaireOptionGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](QuestionnaireOptionGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuestionnaireOptionGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QuestionnaireOptionGroupsServiceFilterReq.md#entityuuid)
- [formData](QuestionnaireOptionGroupsServiceFilterReq.md#formdata)
- [includeFormData](QuestionnaireOptionGroupsServiceFilterReq.md#includeformdata)
- [isActive](QuestionnaireOptionGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QuestionnaireOptionGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QuestionnaireOptionGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](QuestionnaireOptionGroupsServiceFilterReq.md#name)
- [offset](QuestionnaireOptionGroupsServiceFilterReq.md#offset)
- [sortKey](QuestionnaireOptionGroupsServiceFilterReq.md#sortkey)
- [sortOrder](QuestionnaireOptionGroupsServiceFilterReq.md#sortorder)
- [status](QuestionnaireOptionGroupsServiceFilterReq.md#status)
- [fields](QuestionnaireOptionGroupsServiceFilterReq.md#fields)
- [runtime](QuestionnaireOptionGroupsServiceFilterReq.md#runtime)
- [typeName](QuestionnaireOptionGroupsServiceFilterReq.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServiceFilterReq.md#clone)
- [equals](QuestionnaireOptionGroupsServiceFilterReq.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServiceFilterReq.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServiceFilterReq.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServiceFilterReq.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServiceFilterReq.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServiceFilterReq.md#tojson)
- [toJson](QuestionnaireOptionGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServiceFilterReq.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServiceFilterReq.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServiceFilterReq**(`data?`): [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServiceFilterReq\&gt;.constructor

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1994](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1994)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1889](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1889)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1873](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1873)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1857](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1857)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1905](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1905)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the option group.

**`Example`**

```ts
"OPT-SAT-1-5"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1969](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1969)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1937)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1921](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1921)

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

[src/questionnaire_option_groups.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1711)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1781)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1765](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1765)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1829](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1829)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1979](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1979)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1992](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1992)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1695)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1813](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1813)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1797](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1797)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The primary, human-readable name of the questionnaire option group.

**`Example`**

```ts
"Standard Satisfaction Rating"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1953](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1953)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1727](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1727)

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_OPTION_GROUP_SORT_KEY`](../enums/QUESTIONNAIRE_OPTION_GROUP_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1749](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1749)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1739)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1841](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1841)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L2001)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1999)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServiceFilterReq"``

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:2000](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L2000)

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L2037)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:2025](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L2025)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:2029](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L2029)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceFilterReq`](QuestionnaireOptionGroupsServiceFilterReq.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L2033)
