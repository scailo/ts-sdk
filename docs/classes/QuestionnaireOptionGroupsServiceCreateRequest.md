[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServiceCreateRequest

# Class: QuestionnaireOptionGroupsServiceCreateRequest

Request message for defining and creating a new Questionnaire Option Group.
This record serves as a reusable container or dictionary for predefined answer choices
(e.g., "Yes/No/N/A", "1-5 Satisfaction Scale", "Department List") that can be mapped
to specific questions within a Questionnaire Template.

**Note:** This is typically utilized by Administrators or Form Designers to standardize
and centralize response sets, ensuring data consistency across multiple assessments,
audits, or surveys.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServiceCreateRequest

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)\>

  ↳ **`QuestionnaireOptionGroupsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServiceCreateRequest.md#constructor)

### Properties

- [code](QuestionnaireOptionGroupsServiceCreateRequest.md#code)
- [description](QuestionnaireOptionGroupsServiceCreateRequest.md#description)
- [entityUuid](QuestionnaireOptionGroupsServiceCreateRequest.md#entityuuid)
- [formData](QuestionnaireOptionGroupsServiceCreateRequest.md#formdata)
- [name](QuestionnaireOptionGroupsServiceCreateRequest.md#name)
- [userComment](QuestionnaireOptionGroupsServiceCreateRequest.md#usercomment)
- [vaultFolderId](QuestionnaireOptionGroupsServiceCreateRequest.md#vaultfolderid)
- [fields](QuestionnaireOptionGroupsServiceCreateRequest.md#fields)
- [runtime](QuestionnaireOptionGroupsServiceCreateRequest.md#runtime)
- [typeName](QuestionnaireOptionGroupsServiceCreateRequest.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServiceCreateRequest.md#clone)
- [equals](QuestionnaireOptionGroupsServiceCreateRequest.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServiceCreateRequest.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServiceCreateRequest.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServiceCreateRequest.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServiceCreateRequest.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServiceCreateRequest.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServiceCreateRequest.md#tojson)
- [toJson](QuestionnaireOptionGroupsServiceCreateRequest.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServiceCreateRequest.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServiceCreateRequest.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServiceCreateRequest.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServiceCreateRequest**(`data?`): [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:320](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L320)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the option group.

**`Example`**

```ts
"OPT-SAT-1-5"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L288)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

A detailed text description outlining the purpose and context of this option group.

**`Example`**

```ts
"A standard 1-to-5 rating scale used for general employee satisfaction surveys."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 13;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L304)

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

[src/questionnaire_option_groups.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L224)

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

[src/questionnaire_option_groups.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L318)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary, human-readable name of the questionnaire option group.

**`Example`**

```ts
"Standard Satisfaction Rating"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L272)

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

[src/questionnaire_option_groups.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L240)

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

[src/questionnaire_option_groups.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L256)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:327](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L327)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L325)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServiceCreateRequest"``

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L326)

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L349)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L337)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:341](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L341)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceCreateRequest`](QuestionnaireOptionGroupsServiceCreateRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L345)
