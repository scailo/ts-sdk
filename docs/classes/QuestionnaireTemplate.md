[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplate

# Class: QuestionnaireTemplate

Represents a full Questionnaire Template within the system.

**`Generated`**

from message Scailo.QuestionnaireTemplate

## Hierarchy

- `Message`\<[`QuestionnaireTemplate`](QuestionnaireTemplate.md)\>

  ↳ **`QuestionnaireTemplate`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplate.md#constructor)

### Properties

- [approvalMetadata](QuestionnaireTemplate.md#approvalmetadata)
- [completedOn](QuestionnaireTemplate.md#completedon)
- [description](QuestionnaireTemplate.md#description)
- [entityUuid](QuestionnaireTemplate.md#entityuuid)
- [finalRefNumber](QuestionnaireTemplate.md#finalrefnumber)
- [formData](QuestionnaireTemplate.md#formdata)
- [logs](QuestionnaireTemplate.md#logs)
- [metadata](QuestionnaireTemplate.md#metadata)
- [referenceId](QuestionnaireTemplate.md#referenceid)
- [status](QuestionnaireTemplate.md#status)
- [validFrom](QuestionnaireTemplate.md#validfrom)
- [validTo](QuestionnaireTemplate.md#validto)
- [vaultFolderId](QuestionnaireTemplate.md#vaultfolderid)
- [fields](QuestionnaireTemplate.md#fields)
- [runtime](QuestionnaireTemplate.md#runtime)
- [typeName](QuestionnaireTemplate.md#typename)

### Methods

- [clone](QuestionnaireTemplate.md#clone)
- [equals](QuestionnaireTemplate.md#equals)
- [fromBinary](QuestionnaireTemplate.md#frombinary)
- [fromJson](QuestionnaireTemplate.md#fromjson)
- [fromJsonString](QuestionnaireTemplate.md#fromjsonstring)
- [getType](QuestionnaireTemplate.md#gettype)
- [toBinary](QuestionnaireTemplate.md#tobinary)
- [toJSON](QuestionnaireTemplate.md#tojson)
- [toJson](QuestionnaireTemplate.md#tojson-1)
- [toJsonString](QuestionnaireTemplate.md#tojsonstring)
- [equals](QuestionnaireTemplate.md#equals-1)
- [fromBinary](QuestionnaireTemplate.md#frombinary-1)
- [fromJson](QuestionnaireTemplate.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplate.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplate**(`data?`): [`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplate`](QuestionnaireTemplate.md)\> |

#### Returns

[`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Overrides

Message\&lt;QuestionnaireTemplate\&gt;.constructor

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L597)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L501)

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

[src/questionnaire_templates.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L527)

___

### description

• **description**: `string` = `""`

**`Description`**

A detailed text description outlining the purpose, target audience, and scope of the questionnaire template.

**`Example`**

```ts
"Annual compliance checklist for all internal manufacturing vendors."
```

**`Generated`**

from field: string description = 20;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L587)

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

[src/questionnaire_templates.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L485)

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

[src/questionnaire_templates.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L557)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:595](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L595)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L517)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L493)

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

[src/questionnaire_templates.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L547)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L509)

___

### validFrom

• **validFrom**: `bigint` = `protoInt64.zero`

**`Description`**

The UNIX timestamp representing the exact date and time when this questionnaire template expires and is no longer available for new submissions.

**`Example`**

```ts
1704067199
```

**`Generated`**

from field: uint64 valid_from = 12;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:567](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L567)

___

### validTo

• **validTo**: `bigint` = `protoInt64.zero`

**`Description`**

The UNIX timestamp representing the exact date and time when this questionnaire template expires and is no longer available for new submissions.

**`Example`**

```ts
1704067199
```

**`Generated`**

from field: uint64 valid_to = 13;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L577)

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

[src/questionnaire_templates.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L537)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L604)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L602)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplate"``

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L603)

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplate`](QuestionnaireTemplate.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplate`](QuestionnaireTemplate.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplate`](QuestionnaireTemplate.md) \| `PlainMessage`\<[`QuestionnaireTemplate`](QuestionnaireTemplate.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplate`](QuestionnaireTemplate.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplate`](QuestionnaireTemplate.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplate`](QuestionnaireTemplate.md) \| `PlainMessage`\<[`QuestionnaireTemplate`](QuestionnaireTemplate.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplate`](QuestionnaireTemplate.md) \| `PlainMessage`\<[`QuestionnaireTemplate`](QuestionnaireTemplate.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:632](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L632)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L620)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L624)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplate`](QuestionnaireTemplate.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L628)
