[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSection

# Class: QuestionnaireSection

Represents a full Questionnaire Section within the system.

**`Generated`**

from message Scailo.QuestionnaireSection

## Hierarchy

- `Message`\<[`QuestionnaireSection`](QuestionnaireSection.md)\>

  ↳ **`QuestionnaireSection`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSection.md#constructor)

### Properties

- [approvalMetadata](QuestionnaireSection.md#approvalmetadata)
- [completedOn](QuestionnaireSection.md#completedon)
- [description](QuestionnaireSection.md#description)
- [entityUuid](QuestionnaireSection.md#entityuuid)
- [finalRefNumber](QuestionnaireSection.md#finalrefnumber)
- [formData](QuestionnaireSection.md#formdata)
- [logs](QuestionnaireSection.md#logs)
- [metadata](QuestionnaireSection.md#metadata)
- [questionnaireTemplateId](QuestionnaireSection.md#questionnairetemplateid)
- [referenceId](QuestionnaireSection.md#referenceid)
- [sortOrder](QuestionnaireSection.md#sortorder)
- [status](QuestionnaireSection.md#status)
- [vaultFolderId](QuestionnaireSection.md#vaultfolderid)
- [fields](QuestionnaireSection.md#fields)
- [runtime](QuestionnaireSection.md#runtime)
- [typeName](QuestionnaireSection.md#typename)

### Methods

- [clone](QuestionnaireSection.md#clone)
- [equals](QuestionnaireSection.md#equals)
- [fromBinary](QuestionnaireSection.md#frombinary)
- [fromJson](QuestionnaireSection.md#fromjson)
- [fromJsonString](QuestionnaireSection.md#fromjsonstring)
- [getType](QuestionnaireSection.md#gettype)
- [toBinary](QuestionnaireSection.md#tobinary)
- [toJSON](QuestionnaireSection.md#tojson)
- [toJson](QuestionnaireSection.md#tojson-1)
- [toJsonString](QuestionnaireSection.md#tojsonstring)
- [equals](QuestionnaireSection.md#equals-1)
- [fromBinary](QuestionnaireSection.md#frombinary-1)
- [fromJson](QuestionnaireSection.md#fromjson-1)
- [fromJsonString](QuestionnaireSection.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSection**(`data?`): [`QuestionnaireSection`](QuestionnaireSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSection`](QuestionnaireSection.md)\> |

#### Returns

[`QuestionnaireSection`](QuestionnaireSection.md)

#### Overrides

Message\&lt;QuestionnaireSection\&gt;.constructor

#### Defined in

src/questionnaire_sections.scailo_pb.ts:589

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:493

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:519

___

### description

• **description**: `string` = `""`

**`Description`**

A detailed text description outlining the purpose, context, or instructions specific to this section of the questionnaire.

**`Example`**

```ts
"Section 1: Facility Safety and Compliance Guidelines"
```

**`Generated`**

from field: string description = 20;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:579

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:477

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:549

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:587

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:509

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:485

___

### questionnaireTemplateId

• **questionnaireTemplateId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent questionnaire template to which this section belongs.

**`Example`**

```ts
105
```

**`Generated`**

from field: uint64 questionnaire_template_id = 12;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:559

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:539

___

### sortOrder

• **sortOrder**: `bigint` = `protoInt64.zero`

**`Description`**

The numerical sequence determining the display order of this section relative to other sections within the same template.

**`Example`**

```ts
1
```

**`Generated`**

from field: uint64 sort_order = 13;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:569

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:501

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:529

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:596

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:594

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSection"``

#### Defined in

src/questionnaire_sections.scailo_pb.ts:595

## Methods

### clone

▸ **clone**(): [`QuestionnaireSection`](QuestionnaireSection.md)

Create a deep copy.

#### Returns

[`QuestionnaireSection`](QuestionnaireSection.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSection`](QuestionnaireSection.md) \| `PlainMessage`\<[`QuestionnaireSection`](QuestionnaireSection.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSection`](QuestionnaireSection.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSection`](QuestionnaireSection.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSection`](QuestionnaireSection.md) \| `PlainMessage`\<[`QuestionnaireSection`](QuestionnaireSection.md)\> |
| `b` | `undefined` \| [`QuestionnaireSection`](QuestionnaireSection.md) \| `PlainMessage`\<[`QuestionnaireSection`](QuestionnaireSection.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:624

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSection`](QuestionnaireSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSection`](QuestionnaireSection.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:612

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSection`](QuestionnaireSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSection`](QuestionnaireSection.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:616

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSection`](QuestionnaireSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSection`](QuestionnaireSection.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:620
