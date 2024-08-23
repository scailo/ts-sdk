[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceCountReq

# Class: ProjectsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ProjectsServiceCountReq

## Hierarchy

- `Message`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\>

  ↳ **`ProjectsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ProjectsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ProjectsServiceCountReq.md#approvedonend)
- [approvedOnStart](ProjectsServiceCountReq.md#approvedonstart)
- [approverRoleId](ProjectsServiceCountReq.md#approverroleid)
- [clientId](ProjectsServiceCountReq.md#clientid)
- [completedOnEnd](ProjectsServiceCountReq.md#completedonend)
- [completedOnStart](ProjectsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ProjectsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ProjectsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ProjectsServiceCountReq.md#entityuuid)
- [finalRefNumber](ProjectsServiceCountReq.md#finalrefnumber)
- [inwardJobId](ProjectsServiceCountReq.md#inwardjobid)
- [isActive](ProjectsServiceCountReq.md#isactive)
- [meetingId](ProjectsServiceCountReq.md#meetingid)
- [modificationTimestampEnd](ProjectsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ProjectsServiceCountReq.md#modificationtimestampstart)
- [outwardJobId](ProjectsServiceCountReq.md#outwardjobid)
- [productionPlanId](ProjectsServiceCountReq.md#productionplanid)
- [purchaseOrderId](ProjectsServiceCountReq.md#purchaseorderid)
- [referenceId](ProjectsServiceCountReq.md#referenceid)
- [salesOrderId](ProjectsServiceCountReq.md#salesorderid)
- [status](ProjectsServiceCountReq.md#status)
- [fields](ProjectsServiceCountReq.md#fields)
- [runtime](ProjectsServiceCountReq.md#runtime)
- [typeName](ProjectsServiceCountReq.md#typename)

### Methods

- [clone](ProjectsServiceCountReq.md#clone)
- [equals](ProjectsServiceCountReq.md#equals)
- [fromBinary](ProjectsServiceCountReq.md#frombinary)
- [fromJson](ProjectsServiceCountReq.md#fromjson)
- [fromJsonString](ProjectsServiceCountReq.md#fromjsonstring)
- [getType](ProjectsServiceCountReq.md#gettype)
- [toBinary](ProjectsServiceCountReq.md#tobinary)
- [toJSON](ProjectsServiceCountReq.md#tojson)
- [toJson](ProjectsServiceCountReq.md#tojson-1)
- [toJsonString](ProjectsServiceCountReq.md#tojsonstring)
- [equals](ProjectsServiceCountReq.md#equals-1)
- [fromBinary](ProjectsServiceCountReq.md#frombinary-1)
- [fromJson](ProjectsServiceCountReq.md#fromjson-1)
- [fromJsonString](ProjectsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceCountReq**(`data?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Overrides

Message\&lt;ProjectsServiceCountReq\&gt;.constructor

#### Defined in

src/projects.scailo_pb.ts:1063

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/projects.scailo_pb.ts:977

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/projects.scailo_pb.ts:970

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/projects.scailo_pb.ts:963

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/projects.scailo_pb.ts:984

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client. Returns all record if it is set to -1. 0 is a valid filter too.

**`Generated`**

from field: int64 client_id = 22;

#### Defined in

src/projects.scailo_pb.ts:1019

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/projects.scailo_pb.ts:998

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/projects.scailo_pb.ts:991

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/projects.scailo_pb.ts:928

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/projects.scailo_pb.ts:921

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/projects.scailo_pb.ts:949

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/projects.scailo_pb.ts:1012

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

The ID of the associated inward job (ignored if 0)

**`Generated`**

from field: uint64 inward_job_id = 43;

#### Defined in

src/projects.scailo_pb.ts:1047

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/projects.scailo_pb.ts:914

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

The ID of the associated meeting (ignored if 0)

**`Generated`**

from field: uint64 meeting_id = 45;

#### Defined in

src/projects.scailo_pb.ts:1061

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/projects.scailo_pb.ts:942

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/projects.scailo_pb.ts:935

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

The ID of the associated outward job (ignored if 0)

**`Generated`**

from field: uint64 outward_job_id = 42;

#### Defined in

src/projects.scailo_pb.ts:1040

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

The ID of the associated production plan (ignored if 0)

**`Generated`**

from field: uint64 production_plan_id = 44;

#### Defined in

src/projects.scailo_pb.ts:1054

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

The ID of the associated purchase order (ignored if 0)

**`Generated`**

from field: uint64 purchase_order_id = 41;

#### Defined in

src/projects.scailo_pb.ts:1033

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the project

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/projects.scailo_pb.ts:1005

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

The ID of the associated sales order (ignored if 0)

**`Generated`**

from field: uint64 sales_order_id = 40;

#### Defined in

src/projects.scailo_pb.ts:1026

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this project

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/projects.scailo_pb.ts:956

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/projects.scailo_pb.ts:1070

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/projects.scailo_pb.ts:1068

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServiceCountReq"``

#### Defined in

src/projects.scailo_pb.ts:1069

## Methods

### clone

▸ **clone**(): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md) \| `PlainMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md) \| `PlainMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md) \| `PlainMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/projects.scailo_pb.ts:1107

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Defined in

src/projects.scailo_pb.ts:1095

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Defined in

src/projects.scailo_pb.ts:1099

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Defined in

src/projects.scailo_pb.ts:1103
