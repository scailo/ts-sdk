[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeaveRequest

# Class: LeaveRequest

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.LeaveRequest

## Hierarchy

- `Message`\<[`LeaveRequest`](LeaveRequest.md)\>

  ↳ **`LeaveRequest`**

## Table of contents

### Constructors

- [constructor](LeaveRequest.md#constructor)

### Properties

- [approvalMetadata](LeaveRequest.md#approvalmetadata)
- [completedOn](LeaveRequest.md#completedon)
- [description](LeaveRequest.md#description)
- [entityUuid](LeaveRequest.md#entityuuid)
- [finalRefNumber](LeaveRequest.md#finalrefnumber)
- [formData](LeaveRequest.md#formdata)
- [fromTimestamp](LeaveRequest.md#fromtimestamp)
- [leaveTypeId](LeaveRequest.md#leavetypeid)
- [logs](LeaveRequest.md#logs)
- [metadata](LeaveRequest.md#metadata)
- [referenceId](LeaveRequest.md#referenceid)
- [status](LeaveRequest.md#status)
- [toTimestamp](LeaveRequest.md#totimestamp)
- [userId](LeaveRequest.md#userid)
- [vaultFolderId](LeaveRequest.md#vaultfolderid)
- [fields](LeaveRequest.md#fields)
- [runtime](LeaveRequest.md#runtime)
- [typeName](LeaveRequest.md#typename)

### Methods

- [clone](LeaveRequest.md#clone)
- [equals](LeaveRequest.md#equals)
- [fromBinary](LeaveRequest.md#frombinary)
- [fromJson](LeaveRequest.md#fromjson)
- [fromJsonString](LeaveRequest.md#fromjsonstring)
- [getType](LeaveRequest.md#gettype)
- [toBinary](LeaveRequest.md#tobinary)
- [toJSON](LeaveRequest.md#tojson)
- [toJson](LeaveRequest.md#tojson-1)
- [toJsonString](LeaveRequest.md#tojsonstring)
- [equals](LeaveRequest.md#equals-1)
- [fromBinary](LeaveRequest.md#frombinary-1)
- [fromJson](LeaveRequest.md#fromjson-1)
- [fromJsonString](LeaveRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveRequest**(`data?`): [`LeaveRequest`](LeaveRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeaveRequest`](LeaveRequest.md)\> |

#### Returns

[`LeaveRequest`](LeaveRequest.md)

#### Overrides

Message\&lt;LeaveRequest\&gt;.constructor

#### Defined in

[src/leaves_requests.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L466)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/leaves_requests.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L380)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this leave request was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/leaves_requests.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L401)

___

### description

• **description**: `string` = `""`

The description of the leave request

**`Generated`**

from field: string description = 16;

#### Defined in

[src/leaves_requests.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L457)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_requests.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L366)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/leaves_requests.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L422)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/leaves_requests.scailo_pb.ts:464](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L464)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave begins

**`Generated`**

from field: uint64 from_timestamp = 14;

#### Defined in

[src/leaves_requests.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L443)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: uint64 leave_type_id = 13;

#### Defined in

[src/leaves_requests.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L436)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this leave request

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/leaves_requests.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L394)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this leave request

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_requests.scailo_pb.ts:373](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L373)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_requests.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L415)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this leave request

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/leaves_requests.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L387)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave ends

**`Generated`**

from field: uint64 to_timestamp = 15;

#### Defined in

[src/leaves_requests.scailo_pb.ts:450](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L450)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/leaves_requests.scailo_pb.ts:429](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L429)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/leaves_requests.scailo_pb.ts:408](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L408)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L473)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests.scailo_pb.ts:471](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L471)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeaveRequest"``

#### Defined in

[src/leaves_requests.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L472)

## Methods

### clone

▸ **clone**(): [`LeaveRequest`](LeaveRequest.md)

Create a deep copy.

#### Returns

[`LeaveRequest`](LeaveRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveRequest`](LeaveRequest.md) \| `PlainMessage`\<[`LeaveRequest`](LeaveRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeaveRequest`](LeaveRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeaveRequest`](LeaveRequest.md)\>

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
| `a` | `undefined` \| [`LeaveRequest`](LeaveRequest.md) \| `PlainMessage`\<[`LeaveRequest`](LeaveRequest.md)\> |
| `b` | `undefined` \| [`LeaveRequest`](LeaveRequest.md) \| `PlainMessage`\<[`LeaveRequest`](LeaveRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L503)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveRequest`](LeaveRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeaveRequest`](LeaveRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L491)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveRequest`](LeaveRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveRequest`](LeaveRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L495)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveRequest`](LeaveRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveRequest`](LeaveRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L499)
