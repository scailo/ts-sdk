[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityGroup

# Class: ActivityGroup

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ActivityGroup

## Hierarchy

- `Message`\<[`ActivityGroup`](ActivityGroup.md)\>

  ↳ **`ActivityGroup`**

## Table of contents

### Constructors

- [constructor](ActivityGroup.md#constructor)

### Properties

- [approvalMetadata](ActivityGroup.md#approvalmetadata)
- [code](ActivityGroup.md#code)
- [description](ActivityGroup.md#description)
- [entityUuid](ActivityGroup.md#entityuuid)
- [logs](ActivityGroup.md#logs)
- [metadata](ActivityGroup.md#metadata)
- [name](ActivityGroup.md#name)
- [parentActivityGroupId](ActivityGroup.md#parentactivitygroupid)
- [projectId](ActivityGroup.md#projectid)
- [status](ActivityGroup.md#status)
- [fields](ActivityGroup.md#fields)
- [runtime](ActivityGroup.md#runtime)
- [typeName](ActivityGroup.md#typename)

### Methods

- [clone](ActivityGroup.md#clone)
- [equals](ActivityGroup.md#equals)
- [fromBinary](ActivityGroup.md#frombinary)
- [fromJson](ActivityGroup.md#fromjson)
- [fromJsonString](ActivityGroup.md#fromjsonstring)
- [getType](ActivityGroup.md#gettype)
- [toBinary](ActivityGroup.md#tobinary)
- [toJSON](ActivityGroup.md#tojson)
- [toJson](ActivityGroup.md#tojson-1)
- [toJsonString](ActivityGroup.md#tojsonstring)
- [equals](ActivityGroup.md#equals-1)
- [fromBinary](ActivityGroup.md#frombinary-1)
- [fromJson](ActivityGroup.md#fromjson-1)
- [fromJsonString](ActivityGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityGroup**(`data?`): [`ActivityGroup`](ActivityGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityGroup`](ActivityGroup.md)\> |

#### Returns

[`ActivityGroup`](ActivityGroup.md)

#### Overrides

Message\&lt;ActivityGroup\&gt;.constructor

#### Defined in

[src/activities_groups.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L334)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

ActivitiesGroups the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/activities_groups.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L283)

___

### code

• **code**: `string` = `""`

The unique code by which the activity group is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/activities_groups.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L318)

___

### description

• **description**: `string` = `""`

The description of the activity group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/activities_groups.scailo_pb.ts:332](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L332)

___

### entityUuid

• **entityUuid**: `string` = `""`

ActivitiesGroups a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/activities_groups.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L269)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

ActivitiesGroups the logs of every operation performed on this activity group

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/activities_groups.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L297)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

ActivitiesGroups the metadata of this activity group

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/activities_groups.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L276)

___

### name

• **name**: `string` = `""`

The name of the activity group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/activities_groups.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L311)

___

### parentActivityGroupId

• **parentActivityGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)

**`Generated`**

from field: uint64 parent_activity_group_id = 12;

#### Defined in

[src/activities_groups.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L325)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

[src/activities_groups.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L304)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/activities_groups.scailo_pb.ts:290](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L290)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_groups.scailo_pb.ts:341](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L341)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_groups.scailo_pb.ts:339](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L339)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityGroup"``

#### Defined in

[src/activities_groups.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L340)

## Methods

### clone

▸ **clone**(): [`ActivityGroup`](ActivityGroup.md)

Create a deep copy.

#### Returns

[`ActivityGroup`](ActivityGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityGroup`](ActivityGroup.md) \| `PlainMessage`\<[`ActivityGroup`](ActivityGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityGroup`](ActivityGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityGroup`](ActivityGroup.md)\>

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
| `a` | `undefined` \| [`ActivityGroup`](ActivityGroup.md) \| `PlainMessage`\<[`ActivityGroup`](ActivityGroup.md)\> |
| `b` | `undefined` \| [`ActivityGroup`](ActivityGroup.md) \| `PlainMessage`\<[`ActivityGroup`](ActivityGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_groups.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L366)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityGroup`](ActivityGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityGroup`](ActivityGroup.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L354)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityGroup`](ActivityGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityGroup`](ActivityGroup.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L358)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityGroup`](ActivityGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityGroup`](ActivityGroup.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_groups.scailo_pb.ts#L362)
