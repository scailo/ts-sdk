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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L737)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L650)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L676)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L634)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L706)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:735](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L735)

___

### list

• **list**: [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)[] = `[]`

The list of associated inward job free issue material items

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterialItem list = 20;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:727](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L727)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L666)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L642)

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 12;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L713)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L720)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L696)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L658)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:686](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L686)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L744)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:742](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L742)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterial"``

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L743)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:772](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L772)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L760)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:764](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L764)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs_free_issue_materials.scailo_pb.ts#L768)
