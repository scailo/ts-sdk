[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Goal

# Class: Goal

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Goal

## Hierarchy

- `Message`\<[`Goal`](Goal.md)\>

  ↳ **`Goal`**

## Table of contents

### Constructors

- [constructor](Goal.md#constructor)

### Properties

- [approvalMetadata](Goal.md#approvalmetadata)
- [completedOn](Goal.md#completedon)
- [description](Goal.md#description)
- [endDate](Goal.md#enddate)
- [entityUuid](Goal.md#entityuuid)
- [finalRefNumber](Goal.md#finalrefnumber)
- [formData](Goal.md#formdata)
- [list](Goal.md#list)
- [logs](Goal.md#logs)
- [metadata](Goal.md#metadata)
- [referenceId](Goal.md#referenceid)
- [startDate](Goal.md#startdate)
- [status](Goal.md#status)
- [userId](Goal.md#userid)
- [vaultFolderId](Goal.md#vaultfolderid)
- [fields](Goal.md#fields)
- [runtime](Goal.md#runtime)
- [typeName](Goal.md#typename)

### Methods

- [clone](Goal.md#clone)
- [equals](Goal.md#equals)
- [fromBinary](Goal.md#frombinary)
- [fromJson](Goal.md#fromjson)
- [fromJsonString](Goal.md#fromjsonstring)
- [getType](Goal.md#gettype)
- [toBinary](Goal.md#tobinary)
- [toJSON](Goal.md#tojson)
- [toJson](Goal.md#tojson-1)
- [toJsonString](Goal.md#tojsonstring)
- [equals](Goal.md#equals-1)
- [fromBinary](Goal.md#frombinary-1)
- [fromJson](Goal.md#fromjson-1)
- [fromJsonString](Goal.md#fromjsonstring-1)

## Constructors

### constructor

• **new Goal**(`data?`): [`Goal`](Goal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Goal`](Goal.md)\> |

#### Returns

[`Goal`](Goal.md)

#### Overrides

Message\&lt;Goal\&gt;.constructor

#### Defined in

src/goals.scailo_pb.ts:563

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/goals.scailo_pb.ts:477

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this goal was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/goals.scailo_pb.ts:498

___

### description

• **description**: `string` = `""`

The description of the goal

**`Generated`**

from field: string description = 20;

#### Defined in

src/goals.scailo_pb.ts:547

___

### endDate

• **endDate**: `string` = `""`

The date until which the goal remains into force

**`Generated`**

from field: string end_date = 14;

#### Defined in

src/goals.scailo_pb.ts:540

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/goals.scailo_pb.ts:463

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/goals.scailo_pb.ts:519

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

src/goals.scailo_pb.ts:561

___

### list

• **list**: [`GoalItem`](GoalItem.md)[] = `[]`

The list of associated goal items

**`Generated`**

from field: repeated Scailo.GoalItem list = 30;

#### Defined in

src/goals.scailo_pb.ts:554

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this goal

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/goals.scailo_pb.ts:491

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this goal

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/goals.scailo_pb.ts:470

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goal

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/goals.scailo_pb.ts:512

___

### startDate

• **startDate**: `string` = `""`

The date from which the goal comes into force

**`Generated`**

from field: string start_date = 13;

#### Defined in

src/goals.scailo_pb.ts:533

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this goal

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/goals.scailo_pb.ts:484

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

src/goals.scailo_pb.ts:526

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/goals.scailo_pb.ts:505

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goals.scailo_pb.ts:570

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goals.scailo_pb.ts:568

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Goal"``

#### Defined in

src/goals.scailo_pb.ts:569

## Methods

### clone

▸ **clone**(): [`Goal`](Goal.md)

Create a deep copy.

#### Returns

[`Goal`](Goal.md)

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
| `other` | `undefined` \| ``null`` \| [`Goal`](Goal.md) \| `PlainMessage`\<[`Goal`](Goal.md)\> |

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

▸ **getType**(): `MessageType`\<[`Goal`](Goal.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Goal`](Goal.md)\>

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
| `a` | `undefined` \| [`Goal`](Goal.md) \| `PlainMessage`\<[`Goal`](Goal.md)\> |
| `b` | `undefined` \| [`Goal`](Goal.md) \| `PlainMessage`\<[`Goal`](Goal.md)\> |

#### Returns

`boolean`

#### Defined in

src/goals.scailo_pb.ts:600

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Goal`](Goal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Defined in

src/goals.scailo_pb.ts:588

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Goal`](Goal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Defined in

src/goals.scailo_pb.ts:592

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Goal`](Goal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Defined in

src/goals.scailo_pb.ts:596
