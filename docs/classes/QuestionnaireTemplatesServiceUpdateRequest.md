[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesServiceUpdateRequest

# Class: QuestionnaireTemplatesServiceUpdateRequest

Request message for updating an existing Questionnaire Template record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the naming, start and end validities and description
of an established Questionnaire Template.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.QuestionnaireTemplatesServiceUpdateRequest

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)\>

  ↳ **`QuestionnaireTemplatesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesServiceUpdateRequest.md#constructor)

### Properties

- [description](QuestionnaireTemplatesServiceUpdateRequest.md#description)
- [formData](QuestionnaireTemplatesServiceUpdateRequest.md#formdata)
- [id](QuestionnaireTemplatesServiceUpdateRequest.md#id)
- [notifyUsers](QuestionnaireTemplatesServiceUpdateRequest.md#notifyusers)
- [referenceId](QuestionnaireTemplatesServiceUpdateRequest.md#referenceid)
- [userComment](QuestionnaireTemplatesServiceUpdateRequest.md#usercomment)
- [validFrom](QuestionnaireTemplatesServiceUpdateRequest.md#validfrom)
- [validTo](QuestionnaireTemplatesServiceUpdateRequest.md#validto)
- [vaultFolderId](QuestionnaireTemplatesServiceUpdateRequest.md#vaultfolderid)
- [fields](QuestionnaireTemplatesServiceUpdateRequest.md#fields)
- [runtime](QuestionnaireTemplatesServiceUpdateRequest.md#runtime)
- [typeName](QuestionnaireTemplatesServiceUpdateRequest.md#typename)

### Methods

- [clone](QuestionnaireTemplatesServiceUpdateRequest.md#clone)
- [equals](QuestionnaireTemplatesServiceUpdateRequest.md#equals)
- [fromBinary](QuestionnaireTemplatesServiceUpdateRequest.md#frombinary)
- [fromJson](QuestionnaireTemplatesServiceUpdateRequest.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesServiceUpdateRequest.md#fromjsonstring)
- [getType](QuestionnaireTemplatesServiceUpdateRequest.md#gettype)
- [toBinary](QuestionnaireTemplatesServiceUpdateRequest.md#tobinary)
- [toJSON](QuestionnaireTemplatesServiceUpdateRequest.md#tojson)
- [toJson](QuestionnaireTemplatesServiceUpdateRequest.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesServiceUpdateRequest.md#tojsonstring)
- [equals](QuestionnaireTemplatesServiceUpdateRequest.md#equals-1)
- [fromBinary](QuestionnaireTemplatesServiceUpdateRequest.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesServiceUpdateRequest**(`data?`): [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)\> |

#### Returns

[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/questionnaire_templates.scailo_pb.ts:434

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

A detailed text description outlining the purpose, target audience, and scope of the questionnaire template.

**`Example`**

```ts
"Annual compliance checklist for all internal manufacturing vendors."
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string description = 20;

#### Defined in

src/questionnaire_templates.scailo_pb.ts:418

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

src/questionnaire_templates.scailo_pb.ts:432

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

src/questionnaire_templates.scailo_pb.ts:326

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

src/questionnaire_templates.scailo_pb.ts:338

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

src/questionnaire_templates.scailo_pb.ts:370

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

src/questionnaire_templates.scailo_pb.ts:310

___

### validFrom

• `Optional` **validFrom**: `bigint`

**`Optional`**

**`Description`**

The UNIX timestamp representing the exact date and time from which this questionnaire template becomes active and available for use.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 valid_from = 12;

#### Defined in

src/questionnaire_templates.scailo_pb.ts:386

___

### validTo

• `Optional` **validTo**: `bigint`

**`Optional`**

**`Description`**

The UNIX timestamp representing the exact date and time when this questionnaire template expires and is no longer available for new submissions.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 valid_to = 13;

#### Defined in

src/questionnaire_templates.scailo_pb.ts:402

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

src/questionnaire_templates.scailo_pb.ts:354

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_templates.scailo_pb.ts:441

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_templates.scailo_pb.ts:439

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesServiceUpdateRequest"``

#### Defined in

src/questionnaire_templates.scailo_pb.ts:440

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_templates.scailo_pb.ts:465

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Defined in

src/questionnaire_templates.scailo_pb.ts:453

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Defined in

src/questionnaire_templates.scailo_pb.ts:457

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceUpdateRequest`](QuestionnaireTemplatesServiceUpdateRequest.md)

#### Defined in

src/questionnaire_templates.scailo_pb.ts:461
