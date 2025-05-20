[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialReturn

# Class: OutwardJobFreeIssueMaterialReturn

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialReturn

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)\>

  ↳ **`OutwardJobFreeIssueMaterialReturn`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialReturn.md#constructor)

### Properties

- [approvalMetadata](OutwardJobFreeIssueMaterialReturn.md#approvalmetadata)
- [completedOn](OutwardJobFreeIssueMaterialReturn.md#completedon)
- [entityUuid](OutwardJobFreeIssueMaterialReturn.md#entityuuid)
- [finalRefNumber](OutwardJobFreeIssueMaterialReturn.md#finalrefnumber)
- [formData](OutwardJobFreeIssueMaterialReturn.md#formdata)
- [list](OutwardJobFreeIssueMaterialReturn.md#list)
- [locationId](OutwardJobFreeIssueMaterialReturn.md#locationid)
- [logs](OutwardJobFreeIssueMaterialReturn.md#logs)
- [metadata](OutwardJobFreeIssueMaterialReturn.md#metadata)
- [refFrom](OutwardJobFreeIssueMaterialReturn.md#reffrom)
- [refId](OutwardJobFreeIssueMaterialReturn.md#refid)
- [referenceId](OutwardJobFreeIssueMaterialReturn.md#referenceid)
- [status](OutwardJobFreeIssueMaterialReturn.md#status)
- [vaultFolderId](OutwardJobFreeIssueMaterialReturn.md#vaultfolderid)
- [fields](OutwardJobFreeIssueMaterialReturn.md#fields)
- [runtime](OutwardJobFreeIssueMaterialReturn.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialReturn.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialReturn.md#clone)
- [equals](OutwardJobFreeIssueMaterialReturn.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialReturn.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialReturn.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialReturn.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialReturn.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialReturn.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialReturn.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialReturn.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialReturn.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialReturn.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialReturn.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialReturn.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialReturn.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialReturn**(`data?`): [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialReturn\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:582

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:503

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this outward job free issue material return was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:524

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:489

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:545

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:580

___

### list

• **list**: [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)[] = `[]`

The list of associated outward job free issue material return items

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialReturnItem list = 20;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:573

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:566

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this outward job free issue material return

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:517

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this outward job free issue material return

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:496

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:552

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:559

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:538

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job free issue material return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:510

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:531

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:589

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:587

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialReturn"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:588

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:618

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:606

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:610

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:614
