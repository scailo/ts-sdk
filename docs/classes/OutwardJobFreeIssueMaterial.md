[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterial

# Class: OutwardJobFreeIssueMaterial

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterial

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)\>

  ↳ **`OutwardJobFreeIssueMaterial`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterial.md#constructor)

### Properties

- [approvalMetadata](OutwardJobFreeIssueMaterial.md#approvalmetadata)
- [completedOn](OutwardJobFreeIssueMaterial.md#completedon)
- [entityUuid](OutwardJobFreeIssueMaterial.md#entityuuid)
- [finalRefNumber](OutwardJobFreeIssueMaterial.md#finalrefnumber)
- [formData](OutwardJobFreeIssueMaterial.md#formdata)
- [list](OutwardJobFreeIssueMaterial.md#list)
- [locationId](OutwardJobFreeIssueMaterial.md#locationid)
- [logs](OutwardJobFreeIssueMaterial.md#logs)
- [metadata](OutwardJobFreeIssueMaterial.md#metadata)
- [refFrom](OutwardJobFreeIssueMaterial.md#reffrom)
- [refId](OutwardJobFreeIssueMaterial.md#refid)
- [referenceId](OutwardJobFreeIssueMaterial.md#referenceid)
- [status](OutwardJobFreeIssueMaterial.md#status)
- [vaultFolderId](OutwardJobFreeIssueMaterial.md#vaultfolderid)
- [fields](OutwardJobFreeIssueMaterial.md#fields)
- [runtime](OutwardJobFreeIssueMaterial.md#runtime)
- [typeName](OutwardJobFreeIssueMaterial.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterial.md#clone)
- [equals](OutwardJobFreeIssueMaterial.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterial.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterial.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterial.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterial.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterial.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterial.md#tojson)
- [toJson](OutwardJobFreeIssueMaterial.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterial.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterial.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterial.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterial.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterial.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterial**(`data?`): [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterial\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:621

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:542

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this outward job free issue material was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:563

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:528

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:584

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:619

___

### list

• **list**: [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)[] = `[]`

The list of associated outward job free issue material items

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialItem list = 20;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:612

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:605

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this outward job free issue material

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:556

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this outward job free issue material

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:535

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:591

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:598

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:577

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job free issue material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:549

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:570

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:628

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:626

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterial"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:627

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:657

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:645

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:649

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:653
