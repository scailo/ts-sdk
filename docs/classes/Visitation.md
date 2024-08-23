[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / Visitation

# Class: Visitation

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Visitation

## Hierarchy

- `Message`\<[`Visitation`](Visitation.md)\>

  ↳ **`Visitation`**

## Table of contents

### Constructors

- [constructor](Visitation.md#constructor)

### Properties

- [approvalMetadata](Visitation.md#approvalmetadata)
- [associateId](Visitation.md#associateid)
- [completedOn](Visitation.md#completedon)
- [description](Visitation.md#description)
- [entityUuid](Visitation.md#entityuuid)
- [entryTimestamp](Visitation.md#entrytimestamp)
- [exitTimestamp](Visitation.md#exittimestamp)
- [finalRefNumber](Visitation.md#finalrefnumber)
- [formData](Visitation.md#formdata)
- [logs](Visitation.md#logs)
- [metadata](Visitation.md#metadata)
- [referenceId](Visitation.md#referenceid)
- [status](Visitation.md#status)
- [userId](Visitation.md#userid)
- [vaultFolderId](Visitation.md#vaultfolderid)
- [fields](Visitation.md#fields)
- [runtime](Visitation.md#runtime)
- [typeName](Visitation.md#typename)

### Methods

- [clone](Visitation.md#clone)
- [equals](Visitation.md#equals)
- [fromBinary](Visitation.md#frombinary)
- [fromJson](Visitation.md#fromjson)
- [fromJsonString](Visitation.md#fromjsonstring)
- [getType](Visitation.md#gettype)
- [toBinary](Visitation.md#tobinary)
- [toJSON](Visitation.md#tojson)
- [toJson](Visitation.md#tojson-1)
- [toJsonString](Visitation.md#tojsonstring)
- [equals](Visitation.md#equals-1)
- [fromBinary](Visitation.md#frombinary-1)
- [fromJson](Visitation.md#fromjson-1)
- [fromJsonString](Visitation.md#fromjsonstring-1)

## Constructors

### constructor

• **new Visitation**(`data?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Visitation`](Visitation.md)\> |

#### Returns

[`Visitation`](Visitation.md)

#### Overrides

Message\&lt;Visitation\&gt;.constructor

#### Defined in

src/visitations.scailo_pb.ts:634

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/visitations.scailo_pb.ts:548

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: uint64 associate_id = 13;

#### Defined in

src/visitations.scailo_pb.ts:604

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this visitation was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/visitations.scailo_pb.ts:569

___

### description

• **description**: `string` = `""`

The description of the visitation

**`Generated`**

from field: string description = 16;

#### Defined in

src/visitations.scailo_pb.ts:625

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/visitations.scailo_pb.ts:534

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation begins

**`Generated`**

from field: uint64 entry_timestamp = 14;

#### Defined in

src/visitations.scailo_pb.ts:611

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation ends

**`Generated`**

from field: uint64 exit_timestamp = 15;

#### Defined in

src/visitations.scailo_pb.ts:618

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/visitations.scailo_pb.ts:590

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/visitations.scailo_pb.ts:632

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this visitation

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/visitations.scailo_pb.ts:562

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this visitation

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/visitations.scailo_pb.ts:541

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the visitation

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/visitations.scailo_pb.ts:583

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this visitation

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/visitations.scailo_pb.ts:555

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

src/visitations.scailo_pb.ts:597

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/visitations.scailo_pb.ts:576

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/visitations.scailo_pb.ts:641

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/visitations.scailo_pb.ts:639

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Visitation"``

#### Defined in

src/visitations.scailo_pb.ts:640

## Methods

### clone

▸ **clone**(): [`Visitation`](Visitation.md)

Create a deep copy.

#### Returns

[`Visitation`](Visitation.md)

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
| `other` | `undefined` \| ``null`` \| [`Visitation`](Visitation.md) \| `PlainMessage`\<[`Visitation`](Visitation.md)\> |

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

▸ **getType**(): `MessageType`\<[`Visitation`](Visitation.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Visitation`](Visitation.md)\>

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
| `a` | `undefined` \| [`Visitation`](Visitation.md) \| `PlainMessage`\<[`Visitation`](Visitation.md)\> |
| `b` | `undefined` \| [`Visitation`](Visitation.md) \| `PlainMessage`\<[`Visitation`](Visitation.md)\> |

#### Returns

`boolean`

#### Defined in

src/visitations.scailo_pb.ts:671

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Visitation`](Visitation.md)

#### Defined in

src/visitations.scailo_pb.ts:659

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Visitation`](Visitation.md)

#### Defined in

src/visitations.scailo_pb.ts:663

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Visitation`](Visitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Visitation`](Visitation.md)

#### Defined in

src/visitations.scailo_pb.ts:667
