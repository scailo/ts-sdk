[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceCreateRequest

# Class: QuestionnaireSectionsServiceCreateRequest

Request message for defining and creating a new Section within a Questionnaire Template.
This record acts as a structural container to logically group survey questions,
dictating its presentation sequence and linking it directly to a parent template.

**Note:** This is typically utilized by Administrators or Form Designers when building
complex, multi-part assessments, inspections, or audits that require categorized steps.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceCreateRequest

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)\>

  ↳ **`QuestionnaireSectionsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceCreateRequest.md#constructor)

### Properties

- [description](QuestionnaireSectionsServiceCreateRequest.md#description)
- [entityUuid](QuestionnaireSectionsServiceCreateRequest.md#entityuuid)
- [formData](QuestionnaireSectionsServiceCreateRequest.md#formdata)
- [questionnaireTemplateId](QuestionnaireSectionsServiceCreateRequest.md#questionnairetemplateid)
- [referenceId](QuestionnaireSectionsServiceCreateRequest.md#referenceid)
- [sortOrder](QuestionnaireSectionsServiceCreateRequest.md#sortorder)
- [userComment](QuestionnaireSectionsServiceCreateRequest.md#usercomment)
- [vaultFolderId](QuestionnaireSectionsServiceCreateRequest.md#vaultfolderid)
- [fields](QuestionnaireSectionsServiceCreateRequest.md#fields)
- [runtime](QuestionnaireSectionsServiceCreateRequest.md#runtime)
- [typeName](QuestionnaireSectionsServiceCreateRequest.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceCreateRequest.md#clone)
- [equals](QuestionnaireSectionsServiceCreateRequest.md#equals)
- [fromBinary](QuestionnaireSectionsServiceCreateRequest.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceCreateRequest.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceCreateRequest.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceCreateRequest.md#gettype)
- [toBinary](QuestionnaireSectionsServiceCreateRequest.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceCreateRequest.md#tojson)
- [toJson](QuestionnaireSectionsServiceCreateRequest.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceCreateRequest.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceCreateRequest.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceCreateRequest.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceCreateRequest**(`data?`): [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)\> |

#### Returns

[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L240)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

A detailed text description outlining the purpose, context, or instructions specific to this section of the questionnaire.

**`Example`**

```ts
"Section 1: Facility Safety and Compliance Guidelines"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string description = 20;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L224)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:128](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L128)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L238)

___

### questionnaireTemplateId

• **questionnaireTemplateId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

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

from field: uint64 questionnaire_template_id = 12;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:192](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L192)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:176](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L176)

___

### sortOrder

• **sortOrder**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The numerical sequence determining the display order of this section relative to other sections within the same template.

**`Example`**

```ts
1
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sort_order = 13;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L208)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L144)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:160](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L160)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:247](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L247)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L245)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceCreateRequest"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L246)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L270)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:258](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L258)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L262)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceCreateRequest`](QuestionnaireSectionsServiceCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:266](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L266)
