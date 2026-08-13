[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceCountReq

# Class: QuestionnaireSectionsServiceCountReq

Target filter request for counting questionnaire section records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceCountReq

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)\>

  ↳ **`QuestionnaireSectionsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QuestionnaireSectionsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QuestionnaireSectionsServiceCountReq.md#approvedonend)
- [approvedOnStart](QuestionnaireSectionsServiceCountReq.md#approvedonstart)
- [approverRoleId](QuestionnaireSectionsServiceCountReq.md#approverroleid)
- [completedOnEnd](QuestionnaireSectionsServiceCountReq.md#completedonend)
- [completedOnStart](QuestionnaireSectionsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](QuestionnaireSectionsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QuestionnaireSectionsServiceCountReq.md#creationtimestampstart)
- [entityUuid](QuestionnaireSectionsServiceCountReq.md#entityuuid)
- [finalRefNumber](QuestionnaireSectionsServiceCountReq.md#finalrefnumber)
- [formData](QuestionnaireSectionsServiceCountReq.md#formdata)
- [isActive](QuestionnaireSectionsServiceCountReq.md#isactive)
- [modificationTimestampEnd](QuestionnaireSectionsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QuestionnaireSectionsServiceCountReq.md#modificationtimestampstart)
- [questionnaireTemplateId](QuestionnaireSectionsServiceCountReq.md#questionnairetemplateid)
- [referenceId](QuestionnaireSectionsServiceCountReq.md#referenceid)
- [status](QuestionnaireSectionsServiceCountReq.md#status)
- [fields](QuestionnaireSectionsServiceCountReq.md#fields)
- [runtime](QuestionnaireSectionsServiceCountReq.md#runtime)
- [typeName](QuestionnaireSectionsServiceCountReq.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceCountReq.md#clone)
- [equals](QuestionnaireSectionsServiceCountReq.md#equals)
- [fromBinary](QuestionnaireSectionsServiceCountReq.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceCountReq.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceCountReq.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceCountReq.md#gettype)
- [toBinary](QuestionnaireSectionsServiceCountReq.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceCountReq.md#tojson)
- [toJson](QuestionnaireSectionsServiceCountReq.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceCountReq.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceCountReq.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceCountReq.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceCountReq.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceCountReq**(`data?`): [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)\> |

#### Returns

[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceCountReq\&gt;.constructor

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1522

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

src/questionnaire_sections.scailo_pb.ts:1414

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

src/questionnaire_sections.scailo_pb.ts:1398

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

src/questionnaire_sections.scailo_pb.ts:1382

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

src/questionnaire_sections.scailo_pb.ts:1430

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

src/questionnaire_sections.scailo_pb.ts:1462

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

src/questionnaire_sections.scailo_pb.ts:1446

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

src/questionnaire_sections.scailo_pb.ts:1306

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

src/questionnaire_sections.scailo_pb.ts:1290

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

src/questionnaire_sections.scailo_pb.ts:1354

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

src/questionnaire_sections.scailo_pb.ts:1494

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1520

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

src/questionnaire_sections.scailo_pb.ts:1274

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

src/questionnaire_sections.scailo_pb.ts:1338

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

src/questionnaire_sections.scailo_pb.ts:1322

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

src/questionnaire_sections.scailo_pb.ts:1510

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

src/questionnaire_sections.scailo_pb.ts:1478

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

src/questionnaire_sections.scailo_pb.ts:1366

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1529

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1527

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceCountReq"``

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1528

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1561

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1549

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1553

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceCountReq`](QuestionnaireSectionsServiceCountReq.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:1557
