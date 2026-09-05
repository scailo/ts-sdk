[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialReturn

# Class: InwardJobFreeIssueMaterialReturn

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialReturn

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)\>

  ↳ **`InwardJobFreeIssueMaterialReturn`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialReturn.md#constructor)

### Properties

- [approvalMetadata](InwardJobFreeIssueMaterialReturn.md#approvalmetadata)
- [completedOn](InwardJobFreeIssueMaterialReturn.md#completedon)
- [entityUuid](InwardJobFreeIssueMaterialReturn.md#entityuuid)
- [finalRefNumber](InwardJobFreeIssueMaterialReturn.md#finalrefnumber)
- [formData](InwardJobFreeIssueMaterialReturn.md#formdata)
- [list](InwardJobFreeIssueMaterialReturn.md#list)
- [locationId](InwardJobFreeIssueMaterialReturn.md#locationid)
- [logs](InwardJobFreeIssueMaterialReturn.md#logs)
- [metadata](InwardJobFreeIssueMaterialReturn.md#metadata)
- [refFrom](InwardJobFreeIssueMaterialReturn.md#reffrom)
- [refId](InwardJobFreeIssueMaterialReturn.md#refid)
- [referenceId](InwardJobFreeIssueMaterialReturn.md#referenceid)
- [status](InwardJobFreeIssueMaterialReturn.md#status)
- [vaultFolderId](InwardJobFreeIssueMaterialReturn.md#vaultfolderid)
- [fields](InwardJobFreeIssueMaterialReturn.md#fields)
- [runtime](InwardJobFreeIssueMaterialReturn.md#runtime)
- [typeName](InwardJobFreeIssueMaterialReturn.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialReturn.md#clone)
- [equals](InwardJobFreeIssueMaterialReturn.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialReturn.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialReturn.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialReturn.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialReturn.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialReturn.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialReturn.md#tojson)
- [toJson](InwardJobFreeIssueMaterialReturn.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialReturn.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialReturn.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialReturn.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialReturn.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialReturn.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialReturn**(`data?`): [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialReturn\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L701)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L607)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L633)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L591)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L663)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L699)

___

### list

• **list**: [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)[] = `[]`

The list of associated inward job free issue material return items

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterialReturnItem list = 20;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L691)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:684](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L684)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L623)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L599)

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L670)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L677)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:653](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L653)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:615](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L615)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:643](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L643)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L708)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L706)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialReturn"``

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:707](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L707)

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L737)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L725)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L729)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L733)
