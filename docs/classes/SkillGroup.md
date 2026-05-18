[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillGroup

# Class: SkillGroup

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SkillGroup

## Hierarchy

- `Message`\<[`SkillGroup`](SkillGroup.md)\>

  ↳ **`SkillGroup`**

## Table of contents

### Constructors

- [constructor](SkillGroup.md#constructor)

### Properties

- [approvalMetadata](SkillGroup.md#approvalmetadata)
- [code](SkillGroup.md#code)
- [completedOn](SkillGroup.md#completedon)
- [description](SkillGroup.md#description)
- [entityUuid](SkillGroup.md#entityuuid)
- [formData](SkillGroup.md#formdata)
- [list](SkillGroup.md#list)
- [logs](SkillGroup.md#logs)
- [metadata](SkillGroup.md#metadata)
- [name](SkillGroup.md#name)
- [roleId](SkillGroup.md#roleid)
- [status](SkillGroup.md#status)
- [vaultFolderId](SkillGroup.md#vaultfolderid)
- [fields](SkillGroup.md#fields)
- [runtime](SkillGroup.md#runtime)
- [typeName](SkillGroup.md#typename)

### Methods

- [clone](SkillGroup.md#clone)
- [equals](SkillGroup.md#equals)
- [fromBinary](SkillGroup.md#frombinary)
- [fromJson](SkillGroup.md#fromjson)
- [fromJsonString](SkillGroup.md#fromjsonstring)
- [getType](SkillGroup.md#gettype)
- [toBinary](SkillGroup.md#tobinary)
- [toJSON](SkillGroup.md#tojson)
- [toJson](SkillGroup.md#tojson-1)
- [toJsonString](SkillGroup.md#tojsonstring)
- [equals](SkillGroup.md#equals-1)
- [fromBinary](SkillGroup.md#frombinary-1)
- [fromJson](SkillGroup.md#fromjson-1)
- [fromJsonString](SkillGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillGroup**(`data?`): [`SkillGroup`](SkillGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillGroup`](SkillGroup.md)\> |

#### Returns

[`SkillGroup`](SkillGroup.md)

#### Overrides

Message\&lt;SkillGroup\&gt;.constructor

#### Defined in

[src/skills_groups.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L492)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/skills_groups.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L412)

___

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_groups.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L462)

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

[src/skills_groups.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L438)

___

### description

• **description**: `string` = `""`

The description of the skill group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/skills_groups.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L476)

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

[src/skills_groups.scailo_pb.ts:396](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L396)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/skills_groups.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L490)

___

### list

• **list**: [`SkillGroupItem`](SkillGroupItem.md)[] = `[]`

The list of associated skill group params

**`Generated`**

from field: repeated Scailo.SkillGroupItem list = 20;

#### Defined in

[src/skills_groups.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L483)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/skills_groups.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L428)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/skills_groups.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L404)

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_groups.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L455)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: uint64 role_id = 12;

#### Defined in

[src/skills_groups.scailo_pb.ts:469](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L469)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/skills_groups.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L420)

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

[src/skills_groups.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L448)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L499)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L497)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillGroup"``

#### Defined in

[src/skills_groups.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L498)

## Methods

### clone

▸ **clone**(): [`SkillGroup`](SkillGroup.md)

Create a deep copy.

#### Returns

[`SkillGroup`](SkillGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillGroup`](SkillGroup.md) \| `PlainMessage`\<[`SkillGroup`](SkillGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillGroup`](SkillGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillGroup`](SkillGroup.md)\>

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
| `a` | `undefined` \| [`SkillGroup`](SkillGroup.md) \| `PlainMessage`\<[`SkillGroup`](SkillGroup.md)\> |
| `b` | `undefined` \| [`SkillGroup`](SkillGroup.md) \| `PlainMessage`\<[`SkillGroup`](SkillGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L527)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillGroup`](SkillGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillGroup`](SkillGroup.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L515)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillGroup`](SkillGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillGroup`](SkillGroup.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L519)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillGroup`](SkillGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillGroup`](SkillGroup.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_groups.scailo_pb.ts#L523)
