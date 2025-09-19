[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlan

# Class: ProductionPlan

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ProductionPlan

## Hierarchy

- `Message`\<[`ProductionPlan`](ProductionPlan.md)\>

  ↳ **`ProductionPlan`**

## Table of contents

### Constructors

- [constructor](ProductionPlan.md#constructor)

### Properties

- [approvalMetadata](ProductionPlan.md#approvalmetadata)
- [completedOn](ProductionPlan.md#completedon)
- [endsAt](ProductionPlan.md#endsat)
- [entityUuid](ProductionPlan.md#entityuuid)
- [finalRefNumber](ProductionPlan.md#finalrefnumber)
- [formData](ProductionPlan.md#formdata)
- [list](ProductionPlan.md#list)
- [locationId](ProductionPlan.md#locationid)
- [logs](ProductionPlan.md#logs)
- [metadata](ProductionPlan.md#metadata)
- [projectId](ProductionPlan.md#projectid)
- [refFrom](ProductionPlan.md#reffrom)
- [refId](ProductionPlan.md#refid)
- [referenceId](ProductionPlan.md#referenceid)
- [startsAt](ProductionPlan.md#startsat)
- [status](ProductionPlan.md#status)
- [supervisor](ProductionPlan.md#supervisor)
- [vaultFolderId](ProductionPlan.md#vaultfolderid)
- [fields](ProductionPlan.md#fields)
- [runtime](ProductionPlan.md#runtime)
- [typeName](ProductionPlan.md#typename)

### Methods

- [clone](ProductionPlan.md#clone)
- [equals](ProductionPlan.md#equals)
- [fromBinary](ProductionPlan.md#frombinary)
- [fromJson](ProductionPlan.md#fromjson)
- [fromJsonString](ProductionPlan.md#fromjsonstring)
- [getType](ProductionPlan.md#gettype)
- [toBinary](ProductionPlan.md#tobinary)
- [toJSON](ProductionPlan.md#tojson)
- [toJson](ProductionPlan.md#tojson-1)
- [toJsonString](ProductionPlan.md#tojsonstring)
- [equals](ProductionPlan.md#equals-1)
- [fromBinary](ProductionPlan.md#frombinary-1)
- [fromJson](ProductionPlan.md#fromjson-1)
- [fromJsonString](ProductionPlan.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlan**(`data?`): [`ProductionPlan`](ProductionPlan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlan`](ProductionPlan.md)\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Overrides

Message\&lt;ProductionPlan\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L741)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/production_plans.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L634)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this production plan was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/production_plans.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L655)

___

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 17;

#### Defined in

[src/production_plans.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L725)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/production_plans.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L620)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/production_plans.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L683)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/production_plans.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L739)

___

### list

• **list**: [`ProductionPlanItem`](ProductionPlanItem.md)[] = `[]`

The list of associated production plan items

**`Generated`**

from field: repeated Scailo.ProductionPlanItem list = 20;

#### Defined in

[src/production_plans.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L732)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/production_plans.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L704)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this production plan

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/production_plans.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L648)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this production plan

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/production_plans.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L627)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

[src/production_plans.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L662)

___

### refFrom

• **refFrom**: [`PRODUCTION_PLAN_REF_FROM`](../enums/PRODUCTION_PLAN_REF_FROM.md) = `PRODUCTION_PLAN_REF_FROM.PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 12;

#### Defined in

[src/production_plans.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L690)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/production_plans.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L697)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_plans.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L676)

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 16;

#### Defined in

[src/production_plans.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L718)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this production plan

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/production_plans.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L641)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_plans.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L711)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/production_plans.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L669)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:748](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L748)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L746)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlan"``

#### Defined in

[src/production_plans.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L747)

## Methods

### clone

▸ **clone**(): [`ProductionPlan`](ProductionPlan.md)

Create a deep copy.

#### Returns

[`ProductionPlan`](ProductionPlan.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlan`](ProductionPlan.md) \| `PlainMessage`\<[`ProductionPlan`](ProductionPlan.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlan`](ProductionPlan.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlan`](ProductionPlan.md)\>

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
| `a` | `undefined` \| [`ProductionPlan`](ProductionPlan.md) \| `PlainMessage`\<[`ProductionPlan`](ProductionPlan.md)\> |
| `b` | `undefined` \| [`ProductionPlan`](ProductionPlan.md) \| `PlainMessage`\<[`ProductionPlan`](ProductionPlan.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L781)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlan`](ProductionPlan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Defined in

[src/production_plans.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L769)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlan`](ProductionPlan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Defined in

[src/production_plans.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L773)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlan`](ProductionPlan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Defined in

[src/production_plans.scailo_pb.ts:777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L777)
