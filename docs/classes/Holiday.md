[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Holiday

# Class: Holiday

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Holiday

## Hierarchy

- `Message`\<[`Holiday`](Holiday.md)\>

  ↳ **`Holiday`**

## Table of contents

### Constructors

- [constructor](Holiday.md#constructor)

### Properties

- [approvalMetadata](Holiday.md#approvalmetadata)
- [completedOn](Holiday.md#completedon)
- [description](Holiday.md#description)
- [endOn](Holiday.md#endon)
- [entityUuid](Holiday.md#entityuuid)
- [list](Holiday.md#list)
- [logs](Holiday.md#logs)
- [metadata](Holiday.md#metadata)
- [startOn](Holiday.md#starton)
- [status](Holiday.md#status)
- [title](Holiday.md#title)
- [vaultFolderId](Holiday.md#vaultfolderid)
- [fields](Holiday.md#fields)
- [runtime](Holiday.md#runtime)
- [typeName](Holiday.md#typename)

### Methods

- [clone](Holiday.md#clone)
- [equals](Holiday.md#equals)
- [fromBinary](Holiday.md#frombinary)
- [fromJson](Holiday.md#fromjson)
- [fromJsonString](Holiday.md#fromjsonstring)
- [getType](Holiday.md#gettype)
- [toBinary](Holiday.md#tobinary)
- [toJSON](Holiday.md#tojson)
- [toJson](Holiday.md#tojson-1)
- [toJsonString](Holiday.md#tojsonstring)
- [equals](Holiday.md#equals-1)
- [fromBinary](Holiday.md#frombinary-1)
- [fromJson](Holiday.md#fromjson-1)
- [fromJsonString](Holiday.md#fromjsonstring-1)

## Constructors

### constructor

• **new Holiday**(`data?`): [`Holiday`](Holiday.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Holiday`](Holiday.md)\> |

#### Returns

[`Holiday`](Holiday.md)

#### Overrides

Message\&lt;Holiday\&gt;.constructor

#### Defined in

[src/holidays.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L394)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/holidays.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L329)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this shift group was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/holidays.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L350)

___

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 11;

#### Defined in

[src/holidays.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L371)

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: uint64 end_on = 13;

#### Defined in

[src/holidays.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L385)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/holidays.scailo_pb.ts:315](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L315)

___

### list

• **list**: [`HolidayShiftGroup`](HolidayShiftGroup.md)[] = `[]`

The list of associated holiday shift groups

**`Generated`**

from field: repeated Scailo.HolidayShiftGroup list = 20;

#### Defined in

[src/holidays.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L392)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this shift group

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/holidays.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L343)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this shift group

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/holidays.scailo_pb.ts:322](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L322)

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: uint64 start_on = 12;

#### Defined in

[src/holidays.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L378)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/holidays.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L336)

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 10;

#### Defined in

[src/holidays.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L364)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/holidays.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L357)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L401)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L399)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Holiday"``

#### Defined in

[src/holidays.scailo_pb.ts:400](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L400)

## Methods

### clone

▸ **clone**(): [`Holiday`](Holiday.md)

Create a deep copy.

#### Returns

[`Holiday`](Holiday.md)

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
| `other` | `undefined` \| ``null`` \| [`Holiday`](Holiday.md) \| `PlainMessage`\<[`Holiday`](Holiday.md)\> |

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

▸ **getType**(): `MessageType`\<[`Holiday`](Holiday.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Holiday`](Holiday.md)\>

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
| `a` | `undefined` \| [`Holiday`](Holiday.md) \| `PlainMessage`\<[`Holiday`](Holiday.md)\> |
| `b` | `undefined` \| [`Holiday`](Holiday.md) \| `PlainMessage`\<[`Holiday`](Holiday.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L428)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Holiday`](Holiday.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Holiday`](Holiday.md)

#### Defined in

[src/holidays.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L416)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Holiday`](Holiday.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Holiday`](Holiday.md)

#### Defined in

[src/holidays.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L420)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Holiday`](Holiday.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Holiday`](Holiday.md)

#### Defined in

[src/holidays.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L424)
