[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeaveAdjustment

# Class: LeaveAdjustment

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.LeaveAdjustment

## Hierarchy

- `Message`\<[`LeaveAdjustment`](LeaveAdjustment.md)\>

  ↳ **`LeaveAdjustment`**

## Table of contents

### Constructors

- [constructor](LeaveAdjustment.md#constructor)

### Properties

- [approvalMetadata](LeaveAdjustment.md#approvalmetadata)
- [completedOn](LeaveAdjustment.md#completedon)
- [description](LeaveAdjustment.md#description)
- [entityUuid](LeaveAdjustment.md#entityuuid)
- [finalRefNumber](LeaveAdjustment.md#finalrefnumber)
- [list](LeaveAdjustment.md#list)
- [logs](LeaveAdjustment.md#logs)
- [metadata](LeaveAdjustment.md#metadata)
- [referenceId](LeaveAdjustment.md#referenceid)
- [status](LeaveAdjustment.md#status)
- [userId](LeaveAdjustment.md#userid)
- [vaultFolderId](LeaveAdjustment.md#vaultfolderid)
- [fields](LeaveAdjustment.md#fields)
- [runtime](LeaveAdjustment.md#runtime)
- [typeName](LeaveAdjustment.md#typename)

### Methods

- [clone](LeaveAdjustment.md#clone)
- [equals](LeaveAdjustment.md#equals)
- [fromBinary](LeaveAdjustment.md#frombinary)
- [fromJson](LeaveAdjustment.md#fromjson)
- [fromJsonString](LeaveAdjustment.md#fromjsonstring)
- [getType](LeaveAdjustment.md#gettype)
- [toBinary](LeaveAdjustment.md#tobinary)
- [toJSON](LeaveAdjustment.md#tojson)
- [toJson](LeaveAdjustment.md#tojson-1)
- [toJsonString](LeaveAdjustment.md#tojsonstring)
- [equals](LeaveAdjustment.md#equals-1)
- [fromBinary](LeaveAdjustment.md#frombinary-1)
- [fromJson](LeaveAdjustment.md#fromjson-1)
- [fromJsonString](LeaveAdjustment.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveAdjustment**(`data?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Overrides

Message\&lt;LeaveAdjustment\&gt;.constructor

#### Defined in

src/leaves_adjustments.scailo_pb.ts:480

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:415

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this record was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:436

___

### description

• **description**: `string` = `""`

The description of the leave adjustment

**`Generated`**

from field: string description = 13;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:471

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:401

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:457

___

### list

• **list**: [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)[] = `[]`

The list of associated leave adjustment records

**`Generated`**

from field: repeated Scailo.LeaveAdjustmentRecord list = 20;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:478

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this record

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:429

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this record

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:408

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave adjustment

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:450

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this record

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:422

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:464

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:443

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:487

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:485

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeaveAdjustment"``

#### Defined in

src/leaves_adjustments.scailo_pb.ts:486

## Methods

### clone

▸ **clone**(): [`LeaveAdjustment`](LeaveAdjustment.md)

Create a deep copy.

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeaveAdjustment`](LeaveAdjustment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeaveAdjustment`](LeaveAdjustment.md)\>

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
| `a` | `undefined` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |
| `b` | `undefined` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`\<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:514

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:502

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:506

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:510
