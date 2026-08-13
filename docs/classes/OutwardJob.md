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

[src/outward_jobs.scailo_pb.ts:866](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L866)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/outward_jobs.scailo_pb.ts:765](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L765)

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

[src/outward_jobs.scailo_pb.ts:791](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L791)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

[src/outward_jobs.scailo_pb.ts:828](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L828)

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

[src/outward_jobs.scailo_pb.ts:749](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L749)

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

[src/outward_jobs.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L821)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/outward_jobs.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L864)

___

### inwardItemsList

• **inwardItemsList**: [`OutwardJobInwardItem`](OutwardJobInwardItem.md)[] = `[]`

The list of associated outward job inward items

**`Generated`**

from field: repeated Scailo.OutwardJobInwardItem inward_items_list = 20;

#### Defined in

[src/outward_jobs.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L849)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/outward_jobs.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L781)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/outward_jobs.scailo_pb.ts:757](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L757)

___

### outwardItemsList

• **outwardItemsList**: [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)[] = `[]`

The list of associated outward job outward items

**`Generated`**

from field: repeated Scailo.OutwardJobOutwardItem outward_items_list = 21;

#### Defined in

[src/outward_jobs.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L856)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/outward_jobs.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L842)

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

[src/outward_jobs.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L811)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/outward_jobs.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L773)

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

[src/outward_jobs.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L801)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 13;

#### Defined in

[src/outward_jobs.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L835)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L873)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L871)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJob"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L872)

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

[src/outward_jobs.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L903)

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

[src/outward_jobs.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L891)

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

[src/outward_jobs.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L895)

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

[src/outward_jobs.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/outward_jobs.scailo_pb.ts#L899)
