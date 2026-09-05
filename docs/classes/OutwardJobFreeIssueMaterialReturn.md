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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:693](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L693)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L599)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:625](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L625)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L583)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L655)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L691)

___

### list

• **list**: [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)[] = `[]`

The list of associated outward job free issue material return items

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialReturnItem list = 20;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L683)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L676)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:615](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L615)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L591)

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L662)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L669)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:645](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L645)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L607)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L635)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:700](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L700)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L698)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialReturn"``

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L699)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L729)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L717)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L721)

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

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L725)
