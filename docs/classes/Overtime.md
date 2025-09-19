[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Overtime

# Class: Overtime

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Overtime

## Hierarchy

- `Message`\<[`Overtime`](Overtime.md)\>

  ↳ **`Overtime`**

## Table of contents

### Constructors

- [constructor](Overtime.md#constructor)

### Properties

- [approvalMetadata](Overtime.md#approvalmetadata)
- [completedOn](Overtime.md#completedon)
- [description](Overtime.md#description)
- [entityUuid](Overtime.md#entityuuid)
- [finalRefNumber](Overtime.md#finalrefnumber)
- [formData](Overtime.md#formdata)
- [fromTimestamp](Overtime.md#fromtimestamp)
- [logs](Overtime.md#logs)
- [metadata](Overtime.md#metadata)
- [referenceId](Overtime.md#referenceid)
- [status](Overtime.md#status)
- [toTimestamp](Overtime.md#totimestamp)
- [userId](Overtime.md#userid)
- [vaultFolderId](Overtime.md#vaultfolderid)
- [fields](Overtime.md#fields)
- [runtime](Overtime.md#runtime)
- [typeName](Overtime.md#typename)

### Methods

- [clone](Overtime.md#clone)
- [equals](Overtime.md#equals)
- [fromBinary](Overtime.md#frombinary)
- [fromJson](Overtime.md#fromjson)
- [fromJsonString](Overtime.md#fromjsonstring)
- [getType](Overtime.md#gettype)
- [toBinary](Overtime.md#tobinary)
- [toJSON](Overtime.md#tojson)
- [toJson](Overtime.md#tojson-1)
- [toJsonString](Overtime.md#tojsonstring)
- [equals](Overtime.md#equals-1)
- [fromBinary](Overtime.md#frombinary-1)
- [fromJson](Overtime.md#fromjson-1)
- [fromJsonString](Overtime.md#fromjsonstring-1)

## Constructors

### constructor

• **new Overtime**(`data?`): [`Overtime`](Overtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Overtime`](Overtime.md)\> |

#### Returns

[`Overtime`](Overtime.md)

#### Overrides

Message\&lt;Overtime\&gt;.constructor

#### Defined in

[src/overtimes.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L435)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/overtimes.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L356)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this overtime was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/overtimes.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L377)

___

### description

• **description**: `string` = `""`

The description of the overtime

**`Generated`**

from field: string description = 15;

#### Defined in

[src/overtimes.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L426)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/overtimes.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L342)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/overtimes.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L398)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/overtimes.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L433)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime begins

**`Generated`**

from field: uint64 from_timestamp = 13;

#### Defined in

[src/overtimes.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L412)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this overtime

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/overtimes.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L370)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this overtime

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/overtimes.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L349)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the overtime

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/overtimes.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L391)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this overtime

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/overtimes.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L363)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime ends

**`Generated`**

from field: uint64 to_timestamp = 14;

#### Defined in

[src/overtimes.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L419)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: uint64 user_id = 12;

#### Defined in

[src/overtimes.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L405)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/overtimes.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L384)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L442)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L440)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Overtime"``

#### Defined in

[src/overtimes.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L441)

## Methods

### clone

▸ **clone**(): [`Overtime`](Overtime.md)

Create a deep copy.

#### Returns

[`Overtime`](Overtime.md)

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
| `other` | `undefined` \| ``null`` \| [`Overtime`](Overtime.md) \| `PlainMessage`\<[`Overtime`](Overtime.md)\> |

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

▸ **getType**(): `MessageType`\<[`Overtime`](Overtime.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Overtime`](Overtime.md)\>

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
| `a` | `undefined` \| [`Overtime`](Overtime.md) \| `PlainMessage`\<[`Overtime`](Overtime.md)\> |
| `b` | `undefined` \| [`Overtime`](Overtime.md) \| `PlainMessage`\<[`Overtime`](Overtime.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes.scailo_pb.ts:471](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L471)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Overtime`](Overtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Overtime`](Overtime.md)

#### Defined in

[src/overtimes.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L459)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Overtime`](Overtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Overtime`](Overtime.md)

#### Defined in

[src/overtimes.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L463)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Overtime`](Overtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Overtime`](Overtime.md)

#### Defined in

[src/overtimes.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L467)
