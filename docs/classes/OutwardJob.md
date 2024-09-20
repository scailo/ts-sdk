[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJob

# Class: OutwardJob

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.OutwardJob

## Hierarchy

- `Message`\<[`OutwardJob`](OutwardJob.md)\>

  ↳ **`OutwardJob`**

## Table of contents

### Constructors

- [constructor](OutwardJob.md#constructor)

### Properties

- [approvalMetadata](OutwardJob.md#approvalmetadata)
- [completedOn](OutwardJob.md#completedon)
- [consigneeLocationId](OutwardJob.md#consigneelocationid)
- [entityUuid](OutwardJob.md#entityuuid)
- [finalRefNumber](OutwardJob.md#finalrefnumber)
- [formData](OutwardJob.md#formdata)
- [inwardItemsList](OutwardJob.md#inwarditemslist)
- [logs](OutwardJob.md#logs)
- [metadata](OutwardJob.md#metadata)
- [outwardItemsList](OutwardJob.md#outwarditemslist)
- [projectId](OutwardJob.md#projectid)
- [referenceId](OutwardJob.md#referenceid)
- [status](OutwardJob.md#status)
- [vaultFolderId](OutwardJob.md#vaultfolderid)
- [vendorId](OutwardJob.md#vendorid)
- [fields](OutwardJob.md#fields)
- [runtime](OutwardJob.md#runtime)
- [typeName](OutwardJob.md#typename)

### Methods

- [clone](OutwardJob.md#clone)
- [equals](OutwardJob.md#equals)
- [fromBinary](OutwardJob.md#frombinary)
- [fromJson](OutwardJob.md#fromjson)
- [fromJsonString](OutwardJob.md#fromjsonstring)
- [getType](OutwardJob.md#gettype)
- [toBinary](OutwardJob.md#tobinary)
- [toJSON](OutwardJob.md#tojson)
- [toJson](OutwardJob.md#tojson-1)
- [toJsonString](OutwardJob.md#tojsonstring)
- [equals](OutwardJob.md#equals-1)
- [fromBinary](OutwardJob.md#frombinary-1)
- [fromJson](OutwardJob.md#fromjson-1)
- [fromJsonString](OutwardJob.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJob**(`data?`): [`OutwardJob`](OutwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJob`](OutwardJob.md)\> |

#### Returns

[`OutwardJob`](OutwardJob.md)

#### Overrides

Message\&lt;OutwardJob\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:746

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/outward_jobs.scailo_pb.ts:660

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this outward job was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/outward_jobs.scailo_pb.ts:681

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:709

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:646

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:702

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/outward_jobs.scailo_pb.ts:744

___

### inwardItemsList

• **inwardItemsList**: [`OutwardJobInwardItem`](OutwardJobInwardItem.md)[] = `[]`

The list of associated outward job inward items

**`Generated`**

from field: repeated Scailo.OutwardJobInwardItem inward_items_list = 20;

#### Defined in

src/outward_jobs.scailo_pb.ts:730

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this outward job

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/outward_jobs.scailo_pb.ts:674

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this outward job

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:653

___

### outwardItemsList

• **outwardItemsList**: [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)[] = `[]`

The list of associated outward job outward items

**`Generated`**

from field: repeated Scailo.OutwardJobOutwardItem outward_items_list = 21;

#### Defined in

src/outward_jobs.scailo_pb.ts:737

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

src/outward_jobs.scailo_pb.ts:723

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:695

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/outward_jobs.scailo_pb.ts:667

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs.scailo_pb.ts:688

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:716

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:753

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:751

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJob"``

#### Defined in

src/outward_jobs.scailo_pb.ts:752

## Methods

### clone

▸ **clone**(): [`OutwardJob`](OutwardJob.md)

Create a deep copy.

#### Returns

[`OutwardJob`](OutwardJob.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJob`](OutwardJob.md) \| `PlainMessage`\<[`OutwardJob`](OutwardJob.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJob`](OutwardJob.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJob`](OutwardJob.md)\>

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
| `a` | `undefined` \| [`OutwardJob`](OutwardJob.md) \| `PlainMessage`\<[`OutwardJob`](OutwardJob.md)\> |
| `b` | `undefined` \| [`OutwardJob`](OutwardJob.md) \| `PlainMessage`\<[`OutwardJob`](OutwardJob.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:783

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJob`](OutwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJob`](OutwardJob.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:771

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJob`](OutwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJob`](OutwardJob.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:775

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJob`](OutwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJob`](OutwardJob.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:779
