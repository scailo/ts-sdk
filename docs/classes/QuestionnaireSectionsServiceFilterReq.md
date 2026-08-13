[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceFilterReq

# Class: QuestionnaireSectionsServiceFilterReq

Advanced filter request for searching and paginating questionnaire sections using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceFilterReq

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)\>

  ↳ **`QuestionnaireSectionsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuestionnaireSectionsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuestionnaireSectionsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QuestionnaireSectionsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QuestionnaireSectionsServiceFilterReq.md#approverroleid)
- [completedOnEnd](QuestionnaireSectionsServiceFilterReq.md#completedonend)
- [completedOnStart](QuestionnaireSectionsServiceFilterReq.md#completedonstart)
- [count](QuestionnaireSectionsServiceFilterReq.md#count)
- [creationTimestampEnd](QuestionnaireSectionsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuestionnaireSectionsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QuestionnaireSectionsServiceFilterReq.md#entityuuid)
- [finalRefNumber](QuestionnaireSectionsServiceFilterReq.md#finalrefnumber)
- [formData](QuestionnaireSectionsServiceFilterReq.md#formdata)
- [includeFormData](QuestionnaireSectionsServiceFilterReq.md#includeformdata)
- [isActive](QuestionnaireSectionsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QuestionnaireSectionsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QuestionnaireSectionsServiceFilterReq.md#modificationtimestampstart)
- [offset](QuestionnaireSectionsServiceFilterReq.md#offset)
- [questionnaireTemplateId](QuestionnaireSectionsServiceFilterReq.md#questionnairetemplateid)
- [referenceId](QuestionnaireSectionsServiceFilterReq.md#referenceid)
- [sortKey](QuestionnaireSectionsServiceFilterReq.md#sortkey)
- [sortOrder](QuestionnaireSectionsServiceFilterReq.md#sortorder)
- [status](QuestionnaireSectionsServiceFilterReq.md#status)
- [fields](QuestionnaireSectionsServiceFilterReq.md#fields)
- [runtime](QuestionnaireSectionsServiceFilterReq.md#runtime)
- [typeName](QuestionnaireSectionsServiceFilterReq.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceFilterReq.md#clone)
- [equals](QuestionnaireSectionsServiceFilterReq.md#equals)
- [fromBinary](QuestionnaireSectionsServiceFilterReq.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceFilterReq.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceFilterReq.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceFilterReq.md#gettype)
- [toBinary](QuestionnaireSectionsServiceFilterReq.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceFilterReq.md#tojson)
- [toJson](QuestionnaireSectionsServiceFilterReq.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceFilterReq.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceFilterReq.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceFilterReq.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceFilterReq**(`data?`): [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)\> |

#### Returns

[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceFilterReq\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1202)

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

[src/questionnaire_sections.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1081)

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

[src/questionnaire_sections.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1065)

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

[src/questionnaire_sections.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1049)

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

[src/questionnaire_sections.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1097)

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

[src/questionnaire_sections.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1129)

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

[src/questionnaire_sections.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1113)

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

[src/questionnaire_sections.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L903)

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

[src/questionnaire_sections.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L973)

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

[src/questionnaire_sections.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L957)

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

[src/questionnaire_sections.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1021)

___

### finalRefNumber

• `Optional` **finalRefNumber**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string final_ref_number = 21;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1161)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1187)

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

[src/questionnaire_sections.scailo_pb.ts:1200](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1200)

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

[src/questionnaire_sections.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L887)

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

[src/questionnaire_sections.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1005)

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

[src/questionnaire_sections.scailo_pb.ts:989](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L989)

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

[src/questionnaire_sections.scailo_pb.ts:919](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L919)

___

### questionnaireTemplateId

• `Optional` **questionnaireTemplateId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent questionnaire template to which this section belongs.

**`Example`**

```ts
105
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 questionnaire_template_id = 30;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1177)

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string reference_id = 20;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1145)

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_SECTION_SORT_KEY`](../enums/QUESTIONNAIRE_SECTION_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_SECTION_SORT_KEY sort_key = 5;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L941)

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

[src/questionnaire_sections.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L931)

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

[src/questionnaire_sections.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1033)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1209)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1207)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceFilterReq"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1208)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1246](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1246)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1234)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1238)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceFilterReq`](QuestionnaireSectionsServiceFilterReq.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L1242)
