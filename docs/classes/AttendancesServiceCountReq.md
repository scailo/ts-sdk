[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesServiceCountReq

# Class: AttendancesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.AttendancesServiceCountReq

## Hierarchy

- `Message`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\>

  ↳ **`AttendancesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AttendancesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](AttendancesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](AttendancesServiceCountReq.md#approvedonend)
- [approvedOnStart](AttendancesServiceCountReq.md#approvedonstart)
- [approverRoleId](AttendancesServiceCountReq.md#approverroleid)
- [completedOnEnd](AttendancesServiceCountReq.md#completedonend)
- [completedOnStart](AttendancesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](AttendancesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AttendancesServiceCountReq.md#creationtimestampstart)
- [entityUuid](AttendancesServiceCountReq.md#entityuuid)
- [entryTimestampEnd](AttendancesServiceCountReq.md#entrytimestampend)
- [entryTimestampStart](AttendancesServiceCountReq.md#entrytimestampstart)
- [exitTimestampEnd](AttendancesServiceCountReq.md#exittimestampend)
- [exitTimestampStart](AttendancesServiceCountReq.md#exittimestampstart)
- [finalRefNumber](AttendancesServiceCountReq.md#finalrefnumber)
- [formData](AttendancesServiceCountReq.md#formdata)
- [isActive](AttendancesServiceCountReq.md#isactive)
- [modificationTimestampEnd](AttendancesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AttendancesServiceCountReq.md#modificationtimestampstart)
- [referenceId](AttendancesServiceCountReq.md#referenceid)
- [status](AttendancesServiceCountReq.md#status)
- [userId](AttendancesServiceCountReq.md#userid)
- [fields](AttendancesServiceCountReq.md#fields)
- [runtime](AttendancesServiceCountReq.md#runtime)
- [typeName](AttendancesServiceCountReq.md#typename)

### Methods

- [clone](AttendancesServiceCountReq.md#clone)
- [equals](AttendancesServiceCountReq.md#equals)
- [fromBinary](AttendancesServiceCountReq.md#frombinary)
- [fromJson](AttendancesServiceCountReq.md#fromjson)
- [fromJsonString](AttendancesServiceCountReq.md#fromjsonstring)
- [getType](AttendancesServiceCountReq.md#gettype)
- [toBinary](AttendancesServiceCountReq.md#tobinary)
- [toJSON](AttendancesServiceCountReq.md#tojson)
- [toJson](AttendancesServiceCountReq.md#tojson-1)
- [toJsonString](AttendancesServiceCountReq.md#tojsonstring)
- [equals](AttendancesServiceCountReq.md#equals-1)
- [fromBinary](AttendancesServiceCountReq.md#frombinary-1)
- [fromJson](AttendancesServiceCountReq.md#fromjson-1)
- [fromJsonString](AttendancesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesServiceCountReq**(`data?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Overrides

Message\&lt;AttendancesServiceCountReq\&gt;.constructor

#### Defined in

src/attendances.scailo_pb.ts:1214

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/attendances.scailo_pb.ts:1135

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/attendances.scailo_pb.ts:1128

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/attendances.scailo_pb.ts:1121

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/attendances.scailo_pb.ts:1142

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/attendances.scailo_pb.ts:1156

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/attendances.scailo_pb.ts:1149

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/attendances.scailo_pb.ts:1086

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/attendances.scailo_pb.ts:1079

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/attendances.scailo_pb.ts:1107

___

### entryTimestampEnd

• **entryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 entry_timestamp_end = 25;

#### Defined in

src/attendances.scailo_pb.ts:1191

___

### entryTimestampStart

• **entryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 entry_timestamp_start = 24;

#### Defined in

src/attendances.scailo_pb.ts:1184

___

### exitTimestampEnd

• **exitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 exit_timestamp_end = 27;

#### Defined in

src/attendances.scailo_pb.ts:1205

___

### exitTimestampStart

• **exitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 exit_timestamp_start = 26;

#### Defined in

src/attendances.scailo_pb.ts:1198

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/attendances.scailo_pb.ts:1170

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/attendances.scailo_pb.ts:1212

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/attendances.scailo_pb.ts:1072

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/attendances.scailo_pb.ts:1100

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/attendances.scailo_pb.ts:1093

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the attendance

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/attendances.scailo_pb.ts:1163

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this attendance

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/attendances.scailo_pb.ts:1114

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user that this attendance belongs to

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/attendances.scailo_pb.ts:1177

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/attendances.scailo_pb.ts:1221

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/attendances.scailo_pb.ts:1219

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesServiceCountReq"``

#### Defined in

src/attendances.scailo_pb.ts:1220

## Methods

### clone

▸ **clone**(): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

Create a deep copy.

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md) \| `PlainMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md) \| `PlainMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |
| `b` | `undefined` \| [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md) \| `PlainMessage`\<[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/attendances.scailo_pb.ts:1257

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Defined in

src/attendances.scailo_pb.ts:1245

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Defined in

src/attendances.scailo_pb.ts:1249

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceCountReq`](AttendancesServiceCountReq.md)

#### Defined in

src/attendances.scailo_pb.ts:1253
