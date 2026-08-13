[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendanceAmendment

# Class: AttendanceAmendment

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.AttendanceAmendment

## Hierarchy

- `Message`\<[`AttendanceAmendment`](AttendanceAmendment.md)\>

  ↳ **`AttendanceAmendment`**

## Table of contents

### Constructors

- [constructor](AttendanceAmendment.md#constructor)

### Properties

- [amendmentEntryTimestamp](AttendanceAmendment.md#amendmententrytimestamp)
- [amendmentExitTimestamp](AttendanceAmendment.md#amendmentexittimestamp)
- [approvalMetadata](AttendanceAmendment.md#approvalmetadata)
- [attendanceEntryTimestamp](AttendanceAmendment.md#attendanceentrytimestamp)
- [attendanceExitTimestamp](AttendanceAmendment.md#attendanceexittimestamp)
- [attendanceId](AttendanceAmendment.md#attendanceid)
- [completedOn](AttendanceAmendment.md#completedon)
- [description](AttendanceAmendment.md#description)
- [entityUuid](AttendanceAmendment.md#entityuuid)
- [finalRefNumber](AttendanceAmendment.md#finalrefnumber)
- [formData](AttendanceAmendment.md#formdata)
- [logs](AttendanceAmendment.md#logs)
- [metadata](AttendanceAmendment.md#metadata)
- [referenceId](AttendanceAmendment.md#referenceid)
- [status](AttendanceAmendment.md#status)
- [userId](AttendanceAmendment.md#userid)
- [vaultFolderId](AttendanceAmendment.md#vaultfolderid)
- [fields](AttendanceAmendment.md#fields)
- [runtime](AttendanceAmendment.md#runtime)
- [typeName](AttendanceAmendment.md#typename)

### Methods

- [clone](AttendanceAmendment.md#clone)
- [equals](AttendanceAmendment.md#equals)
- [fromBinary](AttendanceAmendment.md#frombinary)
- [fromJson](AttendanceAmendment.md#fromjson)
- [fromJsonString](AttendanceAmendment.md#fromjsonstring)
- [getType](AttendanceAmendment.md#gettype)
- [toBinary](AttendanceAmendment.md#tobinary)
- [toJSON](AttendanceAmendment.md#tojson)
- [toJson](AttendanceAmendment.md#tojson-1)
- [toJsonString](AttendanceAmendment.md#tojsonstring)
- [equals](AttendanceAmendment.md#equals-1)
- [fromBinary](AttendanceAmendment.md#frombinary-1)
- [fromJson](AttendanceAmendment.md#fromjson-1)
- [fromJsonString](AttendanceAmendment.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendanceAmendment**(`data?`): [`AttendanceAmendment`](AttendanceAmendment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendanceAmendment`](AttendanceAmendment.md)\> |

#### Returns

[`AttendanceAmendment`](AttendanceAmendment.md)

#### Overrides

Message\&lt;AttendanceAmendment\&gt;.constructor

#### Defined in

[src/attendances_amendments.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L591)

## Properties

### amendmentEntryTimestamp

• **amendmentEntryTimestamp**: `bigint` = `protoInt64.zero`

The amended entry timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp = 16;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:567](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L567)

___

### amendmentExitTimestamp

• **amendmentExitTimestamp**: `bigint` = `protoInt64.zero`

The amended exit timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp = 17;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L574)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L476)

___

### attendanceEntryTimestamp

• **attendanceEntryTimestamp**: `bigint` = `protoInt64.zero`

The entry timestamp as recorded in the associated attendance

**`Generated`**

from field: uint64 attendance_entry_timestamp = 14;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L553)

___

### attendanceExitTimestamp

• **attendanceExitTimestamp**: `bigint` = `protoInt64.zero`

The exit timestamp as recorded in the associated attendance

**`Generated`**

from field: uint64 attendance_exit_timestamp = 15;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L560)

___

### attendanceId

• **attendanceId**: `bigint` = `protoInt64.zero`

The ID of the associated attendance that needs to be amended

**`Generated`**

from field: uint64 attendance_id = 13;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L546)

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

[src/attendances_amendments.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L502)

___

### description

• **description**: `string` = `""`

The description of the attendance amendment

**`Generated`**

from field: string description = 18;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L581)

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

[src/attendances_amendments.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L460)

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

[src/attendances_amendments.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L532)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L589)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L492)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L468)

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

[src/attendances_amendments.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L522)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L484)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L539)

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

[src/attendances_amendments.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L512)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L598)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L596)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendanceAmendment"``

#### Defined in

[src/attendances_amendments.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L597)

## Methods

### clone

▸ **clone**(): [`AttendanceAmendment`](AttendanceAmendment.md)

Create a deep copy.

#### Returns

[`AttendanceAmendment`](AttendanceAmendment.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendanceAmendment`](AttendanceAmendment.md) \| `PlainMessage`\<[`AttendanceAmendment`](AttendanceAmendment.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendanceAmendment`](AttendanceAmendment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendanceAmendment`](AttendanceAmendment.md)\>

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
| `a` | `undefined` \| [`AttendanceAmendment`](AttendanceAmendment.md) \| `PlainMessage`\<[`AttendanceAmendment`](AttendanceAmendment.md)\> |
| `b` | `undefined` \| [`AttendanceAmendment`](AttendanceAmendment.md) \| `PlainMessage`\<[`AttendanceAmendment`](AttendanceAmendment.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L630)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendanceAmendment`](AttendanceAmendment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendanceAmendment`](AttendanceAmendment.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L618)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendanceAmendment`](AttendanceAmendment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendanceAmendment`](AttendanceAmendment.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:622](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L622)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendanceAmendment`](AttendanceAmendment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendanceAmendment`](AttendanceAmendment.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/attendances_amendments.scailo_pb.ts#L626)
