[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesServiceCreateRequest

# Class: QuestionnaireTemplatesServiceCreateRequest

Request message for defining and creating a new Questionnaire Template within the system.
This record serves as the foundational blueprint for generating dynamic surveys, forms,
or checklists, tracking its validity period, external reference mappings, and custom descriptive metadata.

**Note:** This is the primary entry point for Administrators, Auditors, and Compliance Managers
to design reusable questionnaire structures utilized in assessments, inspections, or general data collection.

**`Generated`**

from message Scailo.QuestionnaireTemplatesServiceCreateRequest

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)\>

  ↳ **`QuestionnaireTemplatesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesServiceCreateRequest.md#constructor)

### Properties

- [description](QuestionnaireTemplatesServiceCreateRequest.md#description)
- [entityUuid](QuestionnaireTemplatesServiceCreateRequest.md#entityuuid)
- [formData](QuestionnaireTemplatesServiceCreateRequest.md#formdata)
- [referenceId](QuestionnaireTemplatesServiceCreateRequest.md#referenceid)
- [userComment](QuestionnaireTemplatesServiceCreateRequest.md#usercomment)
- [validFrom](QuestionnaireTemplatesServiceCreateRequest.md#validfrom)
- [validTo](QuestionnaireTemplatesServiceCreateRequest.md#validto)
- [vaultFolderId](QuestionnaireTemplatesServiceCreateRequest.md#vaultfolderid)
- [fields](QuestionnaireTemplatesServiceCreateRequest.md#fields)
- [runtime](QuestionnaireTemplatesServiceCreateRequest.md#runtime)
- [typeName](QuestionnaireTemplatesServiceCreateRequest.md#typename)

### Methods

- [clone](QuestionnaireTemplatesServiceCreateRequest.md#clone)
- [equals](QuestionnaireTemplatesServiceCreateRequest.md#equals)
- [fromBinary](QuestionnaireTemplatesServiceCreateRequest.md#frombinary)
- [fromJson](QuestionnaireTemplatesServiceCreateRequest.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesServiceCreateRequest.md#fromjsonstring)
- [getType](QuestionnaireTemplatesServiceCreateRequest.md#gettype)
- [toBinary](QuestionnaireTemplatesServiceCreateRequest.md#tobinary)
- [toJSON](QuestionnaireTemplatesServiceCreateRequest.md#tojson)
- [toJson](QuestionnaireTemplatesServiceCreateRequest.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesServiceCreateRequest.md#tojsonstring)
- [equals](QuestionnaireTemplatesServiceCreateRequest.md#equals-1)
- [fromBinary](QuestionnaireTemplatesServiceCreateRequest.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesServiceCreateRequest**(`data?`): [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)\> |

#### Returns

[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:248](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L248)

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

[src/questionnaire_templates.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L232)

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

[src/questionnaire_templates.scailo_pb.ts:136](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L136)

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

[src/questionnaire_templates.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L246)

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

[src/questionnaire_templates.scailo_pb.ts:184](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L184)

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

[src/questionnaire_templates.scailo_pb.ts:152](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L152)

___

### validFrom

• **validFrom**: `bigint` = `protoInt64.zero`

**`Mandatory`**

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

from field: uint64 valid_from = 12;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L200)

___

### validTo

• **validTo**: `bigint` = `protoInt64.zero`

**`Mandatory`**

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

from field: uint64 valid_to = 13;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L216)

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

[src/questionnaire_templates.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L168)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L255)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L253)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesServiceCreateRequest"``

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L254)

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:278](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L278)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:266](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L266)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L270)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceCreateRequest`](QuestionnaireTemplatesServiceCreateRequest.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L274)
