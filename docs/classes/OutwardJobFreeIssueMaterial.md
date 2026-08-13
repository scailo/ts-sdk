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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L768)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L674)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:700](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L700)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L658)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L730)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L766)

___

### list

• **list**: [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)[] = `[]`

The list of associated outward job free issue material items

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialItem list = 20;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L758)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L751)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L690)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L666)

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 12;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L737)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L744)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L720)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L682)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L710)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L775)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L773)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterial"``

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L774)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L804)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:792](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L792)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:796](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L796)

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

[src/outward_jobs_free_issue_materials.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs_free_issue_materials.scailo_pb.ts#L800)
