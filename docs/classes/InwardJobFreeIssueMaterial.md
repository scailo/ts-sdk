[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterial

# Class: InwardJobFreeIssueMaterial

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterial

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)\>

  ↳ **`InwardJobFreeIssueMaterial`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterial.md#constructor)

### Properties

- [approvalMetadata](InwardJobFreeIssueMaterial.md#approvalmetadata)
- [completedOn](InwardJobFreeIssueMaterial.md#completedon)
- [entityUuid](InwardJobFreeIssueMaterial.md#entityuuid)
- [finalRefNumber](InwardJobFreeIssueMaterial.md#finalrefnumber)
- [formData](InwardJobFreeIssueMaterial.md#formdata)
- [list](InwardJobFreeIssueMaterial.md#list)
- [logs](InwardJobFreeIssueMaterial.md#logs)
- [metadata](InwardJobFreeIssueMaterial.md#metadata)
- [refFrom](InwardJobFreeIssueMaterial.md#reffrom)
- [refId](InwardJobFreeIssueMaterial.md#refid)
- [referenceId](InwardJobFreeIssueMaterial.md#referenceid)
- [status](InwardJobFreeIssueMaterial.md#status)
- [vaultFolderId](InwardJobFreeIssueMaterial.md#vaultfolderid)
- [fields](InwardJobFreeIssueMaterial.md#fields)
- [runtime](InwardJobFreeIssueMaterial.md#runtime)
- [typeName](InwardJobFreeIssueMaterial.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterial.md#clone)
- [equals](InwardJobFreeIssueMaterial.md#equals)
- [fromBinary](InwardJobFreeIssueMaterial.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterial.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterial.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterial.md#gettype)
- [toBinary](InwardJobFreeIssueMaterial.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterial.md#tojson)
- [toJson](InwardJobFreeIssueMaterial.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterial.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterial.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterial.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterial.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterial.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterial**(`data?`): [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)\> |

#### Returns

[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterial\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:617

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:545

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this inward job free issue material was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:566

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:531

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:587

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:615

___

### list

• **list**: [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)[] = `[]`

The list of associated inward job free issue material items

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterialItem list = 20;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:608

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this inward job free issue material

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:559

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this inward job free issue material

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:538

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 12;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:594

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:601

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:580

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this inward job free issue material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:552

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:573

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:624

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:622

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterial"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:623

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:652

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:640

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:644

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:648
