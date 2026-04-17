[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillParam

# Class: SkillParam

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SkillParam

## Hierarchy

- `Message`\<[`SkillParam`](SkillParam.md)\>

  ↳ **`SkillParam`**

## Table of contents

### Constructors

- [constructor](SkillParam.md#constructor)

### Properties

- [approvalMetadata](SkillParam.md#approvalmetadata)
- [code](SkillParam.md#code)
- [completedOn](SkillParam.md#completedon)
- [description](SkillParam.md#description)
- [entityUuid](SkillParam.md#entityuuid)
- [formData](SkillParam.md#formdata)
- [logs](SkillParam.md#logs)
- [metadata](SkillParam.md#metadata)
- [name](SkillParam.md#name)
- [status](SkillParam.md#status)
- [vaultFolderId](SkillParam.md#vaultfolderid)
- [fields](SkillParam.md#fields)
- [runtime](SkillParam.md#runtime)
- [typeName](SkillParam.md#typename)

### Methods

- [clone](SkillParam.md#clone)
- [equals](SkillParam.md#equals)
- [fromBinary](SkillParam.md#frombinary)
- [fromJson](SkillParam.md#fromjson)
- [fromJsonString](SkillParam.md#fromjsonstring)
- [getType](SkillParam.md#gettype)
- [toBinary](SkillParam.md#tobinary)
- [toJSON](SkillParam.md#tojson)
- [toJson](SkillParam.md#tojson-1)
- [toJsonString](SkillParam.md#tojsonstring)
- [equals](SkillParam.md#equals-1)
- [fromBinary](SkillParam.md#frombinary-1)
- [fromJson](SkillParam.md#fromjson-1)
- [fromJsonString](SkillParam.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillParam**(`data?`): [`SkillParam`](SkillParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillParam`](SkillParam.md)\> |

#### Returns

[`SkillParam`](SkillParam.md)

#### Overrides

Message\&lt;SkillParam\&gt;.constructor

#### Defined in

[src/skills_params.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L411)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/skills_params.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L345)

___

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_params.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L395)

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

[src/skills_params.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L371)

___

### description

• **description**: `string` = `""`

The description of the skill param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/skills_params.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L402)

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

[src/skills_params.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L329)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/skills_params.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L409)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/skills_params.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L361)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/skills_params.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L337)

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_params.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L388)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/skills_params.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L353)

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

[src/skills_params.scailo_pb.ts:381](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L381)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L418)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L416)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillParam"``

#### Defined in

[src/skills_params.scailo_pb.ts:417](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L417)

## Methods

### clone

▸ **clone**(): [`SkillParam`](SkillParam.md)

Create a deep copy.

#### Returns

[`SkillParam`](SkillParam.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillParam`](SkillParam.md) \| `PlainMessage`\<[`SkillParam`](SkillParam.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillParam`](SkillParam.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillParam`](SkillParam.md)\>

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
| `a` | `undefined` \| [`SkillParam`](SkillParam.md) \| `PlainMessage`\<[`SkillParam`](SkillParam.md)\> |
| `b` | `undefined` \| [`SkillParam`](SkillParam.md) \| `PlainMessage`\<[`SkillParam`](SkillParam.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params.scailo_pb.ts:444](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L444)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillParam`](SkillParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillParam`](SkillParam.md)

#### Defined in

[src/skills_params.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L432)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillParam`](SkillParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillParam`](SkillParam.md)

#### Defined in

[src/skills_params.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L436)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillParam`](SkillParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillParam`](SkillParam.md)

#### Defined in

[src/skills_params.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/skills_params.scailo_pb.ts#L440)
