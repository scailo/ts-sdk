[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceCountReq

# Class: LeavesAdjustmentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LeavesAdjustmentsServiceCountReq

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)\>

  ↳ **`LeavesAdjustmentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LeavesAdjustmentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesAdjustmentsServiceCountReq.md#approvedonend)
- [approvedOnStart](LeavesAdjustmentsServiceCountReq.md#approvedonstart)
- [approverRoleId](LeavesAdjustmentsServiceCountReq.md#approverroleid)
- [completedOnEnd](LeavesAdjustmentsServiceCountReq.md#completedonend)
- [completedOnStart](LeavesAdjustmentsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](LeavesAdjustmentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LeavesAdjustmentsServiceCountReq.md#creationtimestampstart)
- [entityUuid](LeavesAdjustmentsServiceCountReq.md#entityuuid)
- [finalRefNumber](LeavesAdjustmentsServiceCountReq.md#finalrefnumber)
- [isActive](LeavesAdjustmentsServiceCountReq.md#isactive)
- [modificationTimestampEnd](LeavesAdjustmentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesAdjustmentsServiceCountReq.md#modificationtimestampstart)
- [referenceId](LeavesAdjustmentsServiceCountReq.md#referenceid)
- [status](LeavesAdjustmentsServiceCountReq.md#status)
- [userId](LeavesAdjustmentsServiceCountReq.md#userid)
- [fields](LeavesAdjustmentsServiceCountReq.md#fields)
- [runtime](LeavesAdjustmentsServiceCountReq.md#runtime)
- [typeName](LeavesAdjustmentsServiceCountReq.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceCountReq.md#clone)
- [equals](LeavesAdjustmentsServiceCountReq.md#equals)
- [fromBinary](LeavesAdjustmentsServiceCountReq.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceCountReq.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceCountReq.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceCountReq.md#gettype)
- [toBinary](LeavesAdjustmentsServiceCountReq.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceCountReq.md#tojson)
- [toJson](LeavesAdjustmentsServiceCountReq.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceCountReq.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceCountReq.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceCountReq.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceCountReq.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceCountReq**(`data?`): [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)\> |

#### Returns

[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServiceCountReq\&gt;.constructor

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1376

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1332

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1325

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1318

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1339

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1353

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1346

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1283

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1276

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1304

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1367

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1269

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1297

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1290

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave adjustment

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1360

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this record

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1311

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1374

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1383

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1381

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServiceCountReq"``

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1382

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1414

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1402

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1406

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceCountReq`](LeavesAdjustmentsServiceCountReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1410
