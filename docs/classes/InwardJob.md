[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJob

# Class: InwardJob

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.InwardJob

## Hierarchy

- `Message`\<[`InwardJob`](InwardJob.md)\>

  ↳ **`InwardJob`**

## Table of contents

### Constructors

- [constructor](InwardJob.md#constructor)

### Properties

- [approvalMetadata](InwardJob.md#approvalmetadata)
- [buyerClientId](InwardJob.md#buyerclientid)
- [completedOn](InwardJob.md#completedon)
- [consigneeClientId](InwardJob.md#consigneeclientid)
- [entityUuid](InwardJob.md#entityuuid)
- [finalRefNumber](InwardJob.md#finalrefnumber)
- [formData](InwardJob.md#formdata)
- [inwardItemsList](InwardJob.md#inwarditemslist)
- [locationId](InwardJob.md#locationid)
- [logs](InwardJob.md#logs)
- [metadata](InwardJob.md#metadata)
- [outwardItemsList](InwardJob.md#outwarditemslist)
- [projectId](InwardJob.md#projectid)
- [referenceId](InwardJob.md#referenceid)
- [status](InwardJob.md#status)
- [vaultFolderId](InwardJob.md#vaultfolderid)
- [fields](InwardJob.md#fields)
- [runtime](InwardJob.md#runtime)
- [typeName](InwardJob.md#typename)

### Methods

- [clone](InwardJob.md#clone)
- [equals](InwardJob.md#equals)
- [fromBinary](InwardJob.md#frombinary)
- [fromJson](InwardJob.md#fromjson)
- [fromJsonString](InwardJob.md#fromjsonstring)
- [getType](InwardJob.md#gettype)
- [toBinary](InwardJob.md#tobinary)
- [toJSON](InwardJob.md#tojson)
- [toJson](InwardJob.md#tojson-1)
- [toJsonString](InwardJob.md#tojsonstring)
- [equals](InwardJob.md#equals-1)
- [fromBinary](InwardJob.md#frombinary-1)
- [fromJson](InwardJob.md#fromjson-1)
- [fromJsonString](InwardJob.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJob**(`data?`): [`InwardJob`](InwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJob`](InwardJob.md)\> |

#### Returns

[`InwardJob`](InwardJob.md)

#### Overrides

Message\&lt;InwardJob\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:910](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L910)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/inward_jobs.scailo_pb.ts:803](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L803)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L873)

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

[src/inward_jobs.scailo_pb.ts:829](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L829)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:866](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L866)

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

[src/inward_jobs.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L787)

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

[src/inward_jobs.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L859)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/inward_jobs.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L908)

___

### inwardItemsList

• **inwardItemsList**: [`InwardJobInwardItem`](InwardJobInwardItem.md)[] = `[]`

The list of associated inward job inward items

**`Generated`**

from field: repeated Scailo.InwardJobInwardItem inward_items_list = 20;

#### Defined in

[src/inward_jobs.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L894)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/inward_jobs.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L880)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/inward_jobs.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L819)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L795)

___

### outwardItemsList

• **outwardItemsList**: [`InwardJobOutwardItem`](InwardJobOutwardItem.md)[] = `[]`

The list of associated inward job outward items

**`Generated`**

from field: repeated Scailo.InwardJobOutwardItem outward_items_list = 21;

#### Defined in

[src/inward_jobs.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L901)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 15;

#### Defined in

[src/inward_jobs.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L887)

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

[src/inward_jobs.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L849)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/inward_jobs.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L811)

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

[src/inward_jobs.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L839)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:917](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L917)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L915)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJob"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L916)

## Methods

### clone

▸ **clone**(): [`InwardJob`](InwardJob.md)

Create a deep copy.

#### Returns

[`InwardJob`](InwardJob.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJob`](InwardJob.md) \| `PlainMessage`\<[`InwardJob`](InwardJob.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJob`](InwardJob.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJob`](InwardJob.md)\>

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
| `a` | `undefined` \| [`InwardJob`](InwardJob.md) \| `PlainMessage`\<[`InwardJob`](InwardJob.md)\> |
| `b` | `undefined` \| [`InwardJob`](InwardJob.md) \| `PlainMessage`\<[`InwardJob`](InwardJob.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L948)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJob`](InwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJob`](InwardJob.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L936)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJob`](InwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJob`](InwardJob.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L940)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJob`](InwardJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJob`](InwardJob.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L944)
