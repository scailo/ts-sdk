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

[src/inward_jobs.scailo_pb.ts:961](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L961)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/inward_jobs.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L853)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L923)

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

[src/inward_jobs.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L879)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L916)

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

[src/inward_jobs.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L837)

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

[src/inward_jobs.scailo_pb.ts:909](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L909)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/inward_jobs.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L959)

___

### inwardItemsList

• **inwardItemsList**: [`InwardJobInwardItem`](InwardJobInwardItem.md)[] = `[]`

The list of associated inward job inward items

**`Generated`**

from field: repeated Scailo.InwardJobInwardItem inward_items_list = 20;

#### Defined in

[src/inward_jobs.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L944)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/inward_jobs.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L930)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/inward_jobs.scailo_pb.ts:869](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L869)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:845](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L845)

___

### outwardItemsList

• **outwardItemsList**: [`InwardJobOutwardItem`](InwardJobOutwardItem.md)[] = `[]`

The list of associated inward job outward items

**`Generated`**

from field: repeated Scailo.InwardJobOutwardItem outward_items_list = 21;

#### Defined in

[src/inward_jobs.scailo_pb.ts:951](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L951)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 15;

#### Defined in

[src/inward_jobs.scailo_pb.ts:937](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L937)

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

[src/inward_jobs.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L899)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/inward_jobs.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L861)

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

[src/inward_jobs.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L889)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L968)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L966)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJob"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:967](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L967)

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

[src/inward_jobs.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L999)

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

[src/inward_jobs.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L987)

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

[src/inward_jobs.scailo_pb.ts:991](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L991)

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

[src/inward_jobs.scailo_pb.ts:995](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/inward_jobs.scailo_pb.ts#L995)
