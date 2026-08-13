[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroup

# Class: QuestionnaireOptionGroup

Represents a full Questionnaire Option Group within the system.

**`Generated`**

from message Scailo.QuestionnaireOptionGroup

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)\>

  ↳ **`QuestionnaireOptionGroup`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroup.md#constructor)

### Properties

- [approvalMetadata](QuestionnaireOptionGroup.md#approvalmetadata)
- [code](QuestionnaireOptionGroup.md#code)
- [completedOn](QuestionnaireOptionGroup.md#completedon)
- [description](QuestionnaireOptionGroup.md#description)
- [entityUuid](QuestionnaireOptionGroup.md#entityuuid)
- [formData](QuestionnaireOptionGroup.md#formdata)
- [list](QuestionnaireOptionGroup.md#list)
- [logs](QuestionnaireOptionGroup.md#logs)
- [metadata](QuestionnaireOptionGroup.md#metadata)
- [name](QuestionnaireOptionGroup.md#name)
- [status](QuestionnaireOptionGroup.md#status)
- [vaultFolderId](QuestionnaireOptionGroup.md#vaultfolderid)
- [fields](QuestionnaireOptionGroup.md#fields)
- [runtime](QuestionnaireOptionGroup.md#runtime)
- [typeName](QuestionnaireOptionGroup.md#typename)

### Methods

- [clone](QuestionnaireOptionGroup.md#clone)
- [equals](QuestionnaireOptionGroup.md#equals)
- [fromBinary](QuestionnaireOptionGroup.md#frombinary)
- [fromJson](QuestionnaireOptionGroup.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroup.md#fromjsonstring)
- [getType](QuestionnaireOptionGroup.md#gettype)
- [toBinary](QuestionnaireOptionGroup.md#tobinary)
- [toJSON](QuestionnaireOptionGroup.md#tojson)
- [toJson](QuestionnaireOptionGroup.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroup.md#tojsonstring)
- [equals](QuestionnaireOptionGroup.md#equals-1)
- [fromBinary](QuestionnaireOptionGroup.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroup.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroup**(`data?`): [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)\> |

#### Returns

[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroup\&gt;.constructor

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:639

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:555

___

### code

• **code**: `string` = `""`

**`Description`**

The unique alphanumeric code used to internally classify and represent the option group.

**`Example`**

```ts
"OPT-SAT-1-5"
```

**`Generated`**

from field: string code = 11;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:611

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

src/questionnaire_option_groups.scailo_pb.ts:581

___

### description

• **description**: `string` = `""`

**`Description`**

A detailed text description outlining the purpose and context of this option group.

**`Example`**

```ts
"A standard 1-to-5 rating scale used for general employee satisfaction surveys."
```

**`Generated`**

from field: string description = 13;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:621

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

src/questionnaire_option_groups.scailo_pb.ts:539

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:637

___

### list

• **list**: [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)[] = `[]`

**`Description`**

The aggregated collection of individual predefined answer choices (values) that belong to this option group. For example, if this group is a "Yes/No" scale, this list contains the actual "Yes" and "No" entity records.

**`Generated`**

from field: repeated Scailo.QuestionnaireOptionGroupValue list = 20;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:629

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:571

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:547

___

### name

• **name**: `string` = `""`

**`Description`**

The primary, human-readable name of the questionnaire option group.

**`Example`**

```ts
"Standard Satisfaction Rating"
```

**`Generated`**

from field: string name = 10;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:601

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:563

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

src/questionnaire_option_groups.scailo_pb.ts:591

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:646

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:644

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroup"``

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:645

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md) \| `PlainMessage`\<[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md) \| `PlainMessage`\<[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md) \| `PlainMessage`\<[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:673

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:661

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:665

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:669
