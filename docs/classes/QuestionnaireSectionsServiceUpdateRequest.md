[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceUpdateRequest

# Class: QuestionnaireSectionsServiceUpdateRequest

Request message for updating an existing Questionnaire Section record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the naming, start and end validities and description
of an established Questionnaire Section.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceUpdateRequest

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)\>

  ↳ **`QuestionnaireSectionsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceUpdateRequest.md#constructor)

### Properties

- [description](QuestionnaireSectionsServiceUpdateRequest.md#description)
- [formData](QuestionnaireSectionsServiceUpdateRequest.md#formdata)
- [id](QuestionnaireSectionsServiceUpdateRequest.md#id)
- [notifyUsers](QuestionnaireSectionsServiceUpdateRequest.md#notifyusers)
- [questionnaireTemplateId](QuestionnaireSectionsServiceUpdateRequest.md#questionnairetemplateid)
- [referenceId](QuestionnaireSectionsServiceUpdateRequest.md#referenceid)
- [sortOrder](QuestionnaireSectionsServiceUpdateRequest.md#sortorder)
- [userComment](QuestionnaireSectionsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](QuestionnaireSectionsServiceUpdateRequest.md#vaultfolderid)
- [fields](QuestionnaireSectionsServiceUpdateRequest.md#fields)
- [runtime](QuestionnaireSectionsServiceUpdateRequest.md#runtime)
- [typeName](QuestionnaireSectionsServiceUpdateRequest.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceUpdateRequest.md#clone)
- [equals](QuestionnaireSectionsServiceUpdateRequest.md#equals)
- [fromBinary](QuestionnaireSectionsServiceUpdateRequest.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceUpdateRequest.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceUpdateRequest.md#gettype)
- [toBinary](QuestionnaireSectionsServiceUpdateRequest.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceUpdateRequest.md#tojson)
- [toJson](QuestionnaireSectionsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceUpdateRequest.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceUpdateRequest.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceUpdateRequest**(`data?`): [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)\> |

#### Returns

[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/questionnaire_sections.scailo_pb.ts:426

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

src/questionnaire_sections.scailo_pb.ts:410

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

src/questionnaire_sections.scailo_pb.ts:424

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:318

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:330

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

from field: optional uint64 questionnaire_template_id = 12;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:378

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: optional string reference_id = 10;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:362

___

### sortOrder

• `Optional` **sortOrder**: `bigint`

**`Optional`**

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

from field: optional uint64 sort_order = 13;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:394

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

from field: optional string user_comment = 1;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:302

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:346

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:433

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:431

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceUpdateRequest"``

#### Defined in

src/questionnaire_sections.scailo_pb.ts:432

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:457

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:445

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:449

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceUpdateRequest`](QuestionnaireSectionsServiceUpdateRequest.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:453
