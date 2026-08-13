[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupValuesSearchRequest

# Class: QuestionnaireOptionGroupValuesSearchRequest

Request payload structure used to search and filter Questionnaire Option Group Value records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupValuesSearchRequest

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)\>

  ↳ **`QuestionnaireOptionGroupValuesSearchRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupValuesSearchRequest.md#constructor)

### Properties

- [approvedByUserId](QuestionnaireOptionGroupValuesSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](QuestionnaireOptionGroupValuesSearchRequest.md#approvedonend)
- [approvedOnStart](QuestionnaireOptionGroupValuesSearchRequest.md#approvedonstart)
- [approverRoleId](QuestionnaireOptionGroupValuesSearchRequest.md#approverroleid)
- [count](QuestionnaireOptionGroupValuesSearchRequest.md#count)
- [entityUuid](QuestionnaireOptionGroupValuesSearchRequest.md#entityuuid)
- [isActive](QuestionnaireOptionGroupValuesSearchRequest.md#isactive)
- [offset](QuestionnaireOptionGroupValuesSearchRequest.md#offset)
- [questionnaireOptionGroupId](QuestionnaireOptionGroupValuesSearchRequest.md#questionnaireoptiongroupid)
- [searchKey](QuestionnaireOptionGroupValuesSearchRequest.md#searchkey)
- [sortKey](QuestionnaireOptionGroupValuesSearchRequest.md#sortkey)
- [sortOrder](QuestionnaireOptionGroupValuesSearchRequest.md#sortorder)
- [status](QuestionnaireOptionGroupValuesSearchRequest.md#status)
- [fields](QuestionnaireOptionGroupValuesSearchRequest.md#fields)
- [runtime](QuestionnaireOptionGroupValuesSearchRequest.md#runtime)
- [typeName](QuestionnaireOptionGroupValuesSearchRequest.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupValuesSearchRequest.md#clone)
- [equals](QuestionnaireOptionGroupValuesSearchRequest.md#equals)
- [fromBinary](QuestionnaireOptionGroupValuesSearchRequest.md#frombinary)
- [fromJson](QuestionnaireOptionGroupValuesSearchRequest.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupValuesSearchRequest.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupValuesSearchRequest.md#gettype)
- [toBinary](QuestionnaireOptionGroupValuesSearchRequest.md#tobinary)
- [toJSON](QuestionnaireOptionGroupValuesSearchRequest.md#tojson)
- [toJson](QuestionnaireOptionGroupValuesSearchRequest.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupValuesSearchRequest.md#tojsonstring)
- [equals](QuestionnaireOptionGroupValuesSearchRequest.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupValuesSearchRequest.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupValuesSearchRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupValuesSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupValuesSearchRequest**(`data?`): [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)\> |

#### Returns

[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupValuesSearchRequest\&gt;.constructor

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1362

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

from field: optional uint64 approved_by_user_id = 12;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1312

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

from field: optional uint64 approved_on_end = 11;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1296

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

from field: optional uint64 approved_on_start = 10;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1280

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

from field: optional uint64 approver_role_id = 13;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1328

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

src/questionnaire_option_groups.scailo_pb.ts:1198

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

from field: optional string entity_uuid = 6;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1252

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

src/questionnaire_option_groups.scailo_pb.ts:1182

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

src/questionnaire_option_groups.scailo_pb.ts:1214

___

### questionnaireOptionGroupId

• `Optional` **questionnaireOptionGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent questionnaire option group to which this specific value belongs.

**`Example`**

```ts
105
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 questionnaire_option_group_id = 20;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1344

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

Alphanumeric key phrase or keyword token used to perform lookup matches across searchable fields.

**`Example`**

```ts
"Item A"
```

**`Regex`**

.*

**`Format`**

String value, can be empty.

**`Generated`**

from field: optional string search_key = 40;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1360

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY`](../enums/QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY sort_key = 5;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1236

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

src/questionnaire_option_groups.scailo_pb.ts:1226

___

### status

• `Optional` **status**: [`QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS`](../enums/QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS.md)

**`Optional`**

**`Description`**

Filter records by their verification lifecycle state (e.g., Approved, Unapproved). Defaults to unspecified/any.

**`Example`**

```ts
QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_APPROVED
```

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS status = 7;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1264

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1369

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1367

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupValuesSearchRequest"``

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1368

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1397

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1385

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1389

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValuesSearchRequest`](QuestionnaireOptionGroupValuesSearchRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1393
