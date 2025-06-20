[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceCountReq

# Class: OvertimesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.OvertimesServiceCountReq

## Hierarchy

- `Message`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\>

  ↳ **`OvertimesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](OvertimesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](OvertimesServiceCountReq.md#approvedonend)
- [approvedOnStart](OvertimesServiceCountReq.md#approvedonstart)
- [approverRoleId](OvertimesServiceCountReq.md#approverroleid)
- [completedOnEnd](OvertimesServiceCountReq.md#completedonend)
- [completedOnStart](OvertimesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](OvertimesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](OvertimesServiceCountReq.md#creationtimestampstart)
- [entityUuid](OvertimesServiceCountReq.md#entityuuid)
- [finalRefNumber](OvertimesServiceCountReq.md#finalrefnumber)
- [formData](OvertimesServiceCountReq.md#formdata)
- [fromTimestampEnd](OvertimesServiceCountReq.md#fromtimestampend)
- [fromTimestampStart](OvertimesServiceCountReq.md#fromtimestampstart)
- [isActive](OvertimesServiceCountReq.md#isactive)
- [modificationTimestampEnd](OvertimesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](OvertimesServiceCountReq.md#modificationtimestampstart)
- [referenceId](OvertimesServiceCountReq.md#referenceid)
- [status](OvertimesServiceCountReq.md#status)
- [toTimestampEnd](OvertimesServiceCountReq.md#totimestampend)
- [toTimestampStart](OvertimesServiceCountReq.md#totimestampstart)
- [userId](OvertimesServiceCountReq.md#userid)
- [fields](OvertimesServiceCountReq.md#fields)
- [runtime](OvertimesServiceCountReq.md#runtime)
- [typeName](OvertimesServiceCountReq.md#typename)

### Methods

- [clone](OvertimesServiceCountReq.md#clone)
- [equals](OvertimesServiceCountReq.md#equals)
- [fromBinary](OvertimesServiceCountReq.md#frombinary)
- [fromJson](OvertimesServiceCountReq.md#fromjson)
- [fromJsonString](OvertimesServiceCountReq.md#fromjsonstring)
- [getType](OvertimesServiceCountReq.md#gettype)
- [toBinary](OvertimesServiceCountReq.md#tobinary)
- [toJSON](OvertimesServiceCountReq.md#tojson)
- [toJson](OvertimesServiceCountReq.md#tojson-1)
- [toJsonString](OvertimesServiceCountReq.md#tojsonstring)
- [equals](OvertimesServiceCountReq.md#equals-1)
- [fromBinary](OvertimesServiceCountReq.md#frombinary-1)
- [fromJson](OvertimesServiceCountReq.md#fromjson-1)
- [fromJsonString](OvertimesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceCountReq**(`data?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Overrides

Message\&lt;OvertimesServiceCountReq\&gt;.constructor

#### Defined in

src/overtimes.scailo_pb.ts:1054

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/overtimes.scailo_pb.ts:975

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/overtimes.scailo_pb.ts:968

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/overtimes.scailo_pb.ts:961

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/overtimes.scailo_pb.ts:982

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/overtimes.scailo_pb.ts:996

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/overtimes.scailo_pb.ts:989

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/overtimes.scailo_pb.ts:926

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/overtimes.scailo_pb.ts:919

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/overtimes.scailo_pb.ts:947

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/overtimes.scailo_pb.ts:1010

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/overtimes.scailo_pb.ts:1052

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

src/overtimes.scailo_pb.ts:1031

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

src/overtimes.scailo_pb.ts:1024

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/overtimes.scailo_pb.ts:912

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/overtimes.scailo_pb.ts:940

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/overtimes.scailo_pb.ts:933

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the overtime

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/overtimes.scailo_pb.ts:1003

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this overtime

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/overtimes.scailo_pb.ts:954

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

src/overtimes.scailo_pb.ts:1045

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

src/overtimes.scailo_pb.ts:1038

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/overtimes.scailo_pb.ts:1017

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/overtimes.scailo_pb.ts:1061

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/overtimes.scailo_pb.ts:1059

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OvertimesServiceCountReq"``

#### Defined in

src/overtimes.scailo_pb.ts:1060

## Methods

### clone

▸ **clone**(): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

Create a deep copy.

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md) \| `PlainMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md) \| `PlainMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |
| `b` | `undefined` \| [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md) \| `PlainMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/overtimes.scailo_pb.ts:1097

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Defined in

src/overtimes.scailo_pb.ts:1085

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Defined in

src/overtimes.scailo_pb.ts:1089

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Defined in

src/overtimes.scailo_pb.ts:1093
