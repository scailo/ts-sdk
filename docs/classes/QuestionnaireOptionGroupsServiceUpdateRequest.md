[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServiceUpdateRequest

# Class: QuestionnaireOptionGroupsServiceUpdateRequest

Request message for updating an existing Questionnaire Option Group record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the naming, start and end validities and description
of an established Questionnaire Option Group.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServiceUpdateRequest

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)\>

  ↳ **`QuestionnaireOptionGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServiceUpdateRequest.md#constructor)

### Properties

- [code](QuestionnaireOptionGroupsServiceUpdateRequest.md#code)
- [description](QuestionnaireOptionGroupsServiceUpdateRequest.md#description)
- [formData](QuestionnaireOptionGroupsServiceUpdateRequest.md#formdata)
- [id](QuestionnaireOptionGroupsServiceUpdateRequest.md#id)
- [name](QuestionnaireOptionGroupsServiceUpdateRequest.md#name)
- [notifyUsers](QuestionnaireOptionGroupsServiceUpdateRequest.md#notifyusers)
- [userComment](QuestionnaireOptionGroupsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](QuestionnaireOptionGroupsServiceUpdateRequest.md#vaultfolderid)
- [fields](QuestionnaireOptionGroupsServiceUpdateRequest.md#fields)
- [runtime](QuestionnaireOptionGroupsServiceUpdateRequest.md#runtime)
- [typeName](QuestionnaireOptionGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServiceUpdateRequest.md#clone)
- [equals](QuestionnaireOptionGroupsServiceUpdateRequest.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServiceUpdateRequest.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServiceUpdateRequest.md#tojson)
- [toJson](QuestionnaireOptionGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServiceUpdateRequest**(`data?`): [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:489

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the option group.

**`Example`**

```ts
"OPT-SAT-1-5"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:457

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

src/questionnaire_option_groups.scailo_pb.ts:473

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

src/questionnaire_option_groups.scailo_pb.ts:487

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

src/questionnaire_option_groups.scailo_pb.ts:397

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The primary, human-readable name of the questionnaire option group.

**`Example`**

```ts
"Standard Satisfaction Rating"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:441

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

src/questionnaire_option_groups.scailo_pb.ts:409

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

src/questionnaire_option_groups.scailo_pb.ts:381

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

src/questionnaire_option_groups.scailo_pb.ts:425

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:496

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:494

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServiceUpdateRequest"``

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:495

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:519

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:507

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:511

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceUpdateRequest`](QuestionnaireOptionGroupsServiceUpdateRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:515
