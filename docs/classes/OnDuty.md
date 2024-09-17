[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDuty

# Class: OnDuty

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.OnDuty

## Hierarchy

- `Message`\<[`OnDuty`](OnDuty.md)\>

  ↳ **`OnDuty`**

## Table of contents

### Constructors

- [constructor](OnDuty.md#constructor)

### Properties

- [approvalMetadata](OnDuty.md#approvalmetadata)
- [completedOn](OnDuty.md#completedon)
- [description](OnDuty.md#description)
- [entityUuid](OnDuty.md#entityuuid)
- [entryTimestamp](OnDuty.md#entrytimestamp)
- [exitTimestamp](OnDuty.md#exittimestamp)
- [finalRefNumber](OnDuty.md#finalrefnumber)
- [formData](OnDuty.md#formdata)
- [logs](OnDuty.md#logs)
- [metadata](OnDuty.md#metadata)
- [referenceId](OnDuty.md#referenceid)
- [status](OnDuty.md#status)
- [userId](OnDuty.md#userid)
- [vaultFolderId](OnDuty.md#vaultfolderid)
- [fields](OnDuty.md#fields)
- [runtime](OnDuty.md#runtime)
- [typeName](OnDuty.md#typename)

### Methods

- [clone](OnDuty.md#clone)
- [equals](OnDuty.md#equals)
- [fromBinary](OnDuty.md#frombinary)
- [fromJson](OnDuty.md#fromjson)
- [fromJsonString](OnDuty.md#fromjsonstring)
- [getType](OnDuty.md#gettype)
- [toBinary](OnDuty.md#tobinary)
- [toJSON](OnDuty.md#tojson)
- [toJson](OnDuty.md#tojson-1)
- [toJsonString](OnDuty.md#tojsonstring)
- [equals](OnDuty.md#equals-1)
- [fromBinary](OnDuty.md#frombinary-1)
- [fromJson](OnDuty.md#fromjson-1)
- [fromJsonString](OnDuty.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDuty**(`data?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDuty`](OnDuty.md)\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Overrides

Message\&lt;OnDuty\&gt;.constructor

#### Defined in

src/on_duties.scailo_pb.ts:595

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/on_duties.scailo_pb.ts:516

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this onduty was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/on_duties.scailo_pb.ts:537

___

### description

• **description**: `string` = `""`

The description of the onduty

**`Generated`**

from field: string description = 15;

#### Defined in

src/on_duties.scailo_pb.ts:586

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/on_duties.scailo_pb.ts:502

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty begins

**`Generated`**

from field: uint64 entry_timestamp = 13;

#### Defined in

src/on_duties.scailo_pb.ts:572

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty ends

**`Generated`**

from field: uint64 exit_timestamp = 14;

#### Defined in

src/on_duties.scailo_pb.ts:579

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/on_duties.scailo_pb.ts:558

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/on_duties.scailo_pb.ts:593

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this onduty

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/on_duties.scailo_pb.ts:530

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this onduty

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/on_duties.scailo_pb.ts:509

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the onduty

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/on_duties.scailo_pb.ts:551

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this onduty

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/on_duties.scailo_pb.ts:523

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for onduty

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

src/on_duties.scailo_pb.ts:565

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/on_duties.scailo_pb.ts:544

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/on_duties.scailo_pb.ts:602

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/on_duties.scailo_pb.ts:600

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDuty"``

#### Defined in

src/on_duties.scailo_pb.ts:601

## Methods

### clone

▸ **clone**(): [`OnDuty`](OnDuty.md)

Create a deep copy.

#### Returns

[`OnDuty`](OnDuty.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDuty`](OnDuty.md) \| `PlainMessage`\<[`OnDuty`](OnDuty.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDuty`](OnDuty.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDuty`](OnDuty.md)\>

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
| `a` | `undefined` \| [`OnDuty`](OnDuty.md) \| `PlainMessage`\<[`OnDuty`](OnDuty.md)\> |
| `b` | `undefined` \| [`OnDuty`](OnDuty.md) \| `PlainMessage`\<[`OnDuty`](OnDuty.md)\> |

#### Returns

`boolean`

#### Defined in

src/on_duties.scailo_pb.ts:631

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Defined in

src/on_duties.scailo_pb.ts:619

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Defined in

src/on_duties.scailo_pb.ts:623

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDuty`](OnDuty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDuty`](OnDuty.md)

#### Defined in

src/on_duties.scailo_pb.ts:627
