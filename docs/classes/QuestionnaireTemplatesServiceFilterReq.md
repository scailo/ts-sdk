[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesServiceFilterReq

# Class: QuestionnaireTemplatesServiceFilterReq

Advanced filter request for searching and paginating questionnaire templates using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.QuestionnaireTemplatesServiceFilterReq

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)\>

  ↳ **`QuestionnaireTemplatesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuestionnaireTemplatesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuestionnaireTemplatesServiceFilterReq.md#approvedonend)
- [approvedOnStart](QuestionnaireTemplatesServiceFilterReq.md#approvedonstart)
- [approverRoleId](QuestionnaireTemplatesServiceFilterReq.md#approverroleid)
- [completedOnEnd](QuestionnaireTemplatesServiceFilterReq.md#completedonend)
- [completedOnStart](QuestionnaireTemplatesServiceFilterReq.md#completedonstart)
- [count](QuestionnaireTemplatesServiceFilterReq.md#count)
- [creationTimestampEnd](QuestionnaireTemplatesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuestionnaireTemplatesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QuestionnaireTemplatesServiceFilterReq.md#entityuuid)
- [finalRefNumber](QuestionnaireTemplatesServiceFilterReq.md#finalrefnumber)
- [formData](QuestionnaireTemplatesServiceFilterReq.md#formdata)
- [includeFormData](QuestionnaireTemplatesServiceFilterReq.md#includeformdata)
- [isActive](QuestionnaireTemplatesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QuestionnaireTemplatesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QuestionnaireTemplatesServiceFilterReq.md#modificationtimestampstart)
- [offset](QuestionnaireTemplatesServiceFilterReq.md#offset)
- [referenceId](QuestionnaireTemplatesServiceFilterReq.md#referenceid)
- [sortKey](QuestionnaireTemplatesServiceFilterReq.md#sortkey)
- [sortOrder](QuestionnaireTemplatesServiceFilterReq.md#sortorder)
- [status](QuestionnaireTemplatesServiceFilterReq.md#status)
- [validFromEnd](QuestionnaireTemplatesServiceFilterReq.md#validfromend)
- [validFromStart](QuestionnaireTemplatesServiceFilterReq.md#validfromstart)
- [validToEnd](QuestionnaireTemplatesServiceFilterReq.md#validtoend)
- [validToStart](QuestionnaireTemplatesServiceFilterReq.md#validtostart)
- [fields](QuestionnaireTemplatesServiceFilterReq.md#fields)
- [runtime](QuestionnaireTemplatesServiceFilterReq.md#runtime)
- [typeName](QuestionnaireTemplatesServiceFilterReq.md#typename)

### Methods

- [clone](QuestionnaireTemplatesServiceFilterReq.md#clone)
- [equals](QuestionnaireTemplatesServiceFilterReq.md#equals)
- [fromBinary](QuestionnaireTemplatesServiceFilterReq.md#frombinary)
- [fromJson](QuestionnaireTemplatesServiceFilterReq.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesServiceFilterReq.md#fromjsonstring)
- [getType](QuestionnaireTemplatesServiceFilterReq.md#gettype)
- [toBinary](QuestionnaireTemplatesServiceFilterReq.md#tobinary)
- [toJSON](QuestionnaireTemplatesServiceFilterReq.md#tojson)
- [toJson](QuestionnaireTemplatesServiceFilterReq.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesServiceFilterReq.md#tojsonstring)
- [equals](QuestionnaireTemplatesServiceFilterReq.md#equals-1)
- [fromBinary](QuestionnaireTemplatesServiceFilterReq.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesServiceFilterReq.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesServiceFilterReq**(`data?`): [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)\> |

#### Returns

[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesServiceFilterReq\&gt;.constructor

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1258](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1258)

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

[src/questionnaire_templates.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1089)

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

[src/questionnaire_templates.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1073)

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

[src/questionnaire_templates.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1057)

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

[src/questionnaire_templates.scailo_pb.ts:1105](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1105)

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

[src/questionnaire_templates.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1137)

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

[src/questionnaire_templates.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1121)

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

[src/questionnaire_templates.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L911)

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

[src/questionnaire_templates.scailo_pb.ts:981](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L981)

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

[src/questionnaire_templates.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L965)

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

[src/questionnaire_templates.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1029)

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

[src/questionnaire_templates.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1169)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1243)

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

[src/questionnaire_templates.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1256)

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

[src/questionnaire_templates.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L895)

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

[src/questionnaire_templates.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1013)

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

[src/questionnaire_templates.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L997)

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

[src/questionnaire_templates.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L927)

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

[src/questionnaire_templates.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1153)

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_TEMPLATE_SORT_KEY`](../enums/QUESTIONNAIRE_TEMPLATE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_TEMPLATE_SORT_KEY sort_key = 5;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L949)

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

[src/questionnaire_templates.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L939)

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

[src/questionnaire_templates.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1041)

___

### validFromEnd

• `Optional` **validFromEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records that become active (valid from) ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_from_end = 31;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1201)

___

### validFromStart

• `Optional` **validFromStart**: `bigint`

**`Optional`**

**`Description`**

Filter records that become active (valid from) ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_from_start = 30;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1185)

___

### validToEnd

• `Optional` **validToEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records that expire (valid to) ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_to_end = 34;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1233)

___

### validToStart

• `Optional` **validToStart**: `bigint`

**`Optional`**

**`Description`**

Filter records that expire (valid to) ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_to_start = 33;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1217)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1265)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1263)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesServiceFilterReq"``

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1264](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1264)

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1305)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1293)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1297)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceFilterReq`](QuestionnaireTemplatesServiceFilterReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1301)
