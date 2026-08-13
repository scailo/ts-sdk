[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Team

# Class: Team

Represents a full Team within the system.

**`Generated`**

from message Scailo.Team

## Hierarchy

- `Message`\<[`Team`](Team.md)\>

  ↳ **`Team`**

## Table of contents

### Constructors

- [constructor](Team.md#constructor)

### Properties

- [approvalMetadata](Team.md#approvalmetadata)
- [code](Team.md#code)
- [completedOn](Team.md#completedon)
- [description](Team.md#description)
- [entityUuid](Team.md#entityuuid)
- [leadUserId](Team.md#leaduserid)
- [list](Team.md#list)
- [logs](Team.md#logs)
- [metadata](Team.md#metadata)
- [name](Team.md#name)
- [status](Team.md#status)
- [vaultFolderId](Team.md#vaultfolderid)
- [fields](Team.md#fields)
- [runtime](Team.md#runtime)
- [typeName](Team.md#typename)

### Methods

- [clone](Team.md#clone)
- [equals](Team.md#equals)
- [fromBinary](Team.md#frombinary)
- [fromJson](Team.md#fromjson)
- [fromJsonString](Team.md#fromjsonstring)
- [getType](Team.md#gettype)
- [toBinary](Team.md#tobinary)
- [toJSON](Team.md#tojson)
- [toJson](Team.md#tojson-1)
- [toJsonString](Team.md#tojsonstring)
- [equals](Team.md#equals-1)
- [fromBinary](Team.md#frombinary-1)
- [fromJson](Team.md#fromjson-1)
- [fromJsonString](Team.md#fromjsonstring-1)

## Constructors

### constructor

• **new Team**(`data?`): [`Team`](Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Team`](Team.md)\> |

#### Returns

[`Team`](Team.md)

#### Overrides

Message\&lt;Team\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L659)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/teams.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L573)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique alphanumeric code used to internally classify and represent the team.

**`Example`**

```ts
"ENG-CORE-01"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/teams.scailo_pb.ts:629](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L629)

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

[src/teams.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L599)

___

### description

• **description**: `string` = `""`

**`Description`**

A detailed text description outlining the purpose, responsibilities, and scope of the team.

**`Example`**

```ts
"Responsible for maintaining backend microservices and core API infrastructure."
```

**`Generated`**

from field: string description = 13;

#### Defined in

[src/teams.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L649)

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

[src/teams.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L557)

___

### leadUserId

• **leadUserId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the user designated as the team lead or manager for this group.

**`Example`**

```ts
402
```

**`Generated`**

from field: uint64 lead_user_id = 12;

#### Defined in

[src/teams.scailo_pb.ts:639](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L639)

___

### list

• **list**: [`TeamMember`](TeamMember.md)[] = `[]`

**`Description`**

The aggregated list of active member associations mapped to this team.

**`Generated`**

from field: repeated Scailo.TeamMember list = 20;

#### Defined in

[src/teams.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L657)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/teams.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L589)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/teams.scailo_pb.ts:565](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L565)

___

### name

• **name**: `string` = `""`

**`Description`**

The primary, human-readable name of the team.

**`Example`**

```ts
"Core Backend Engineering"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/teams.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L619)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/teams.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L581)

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

[src/teams.scailo_pb.ts:609](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L609)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L666)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L664)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Team"``

#### Defined in

[src/teams.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L665)

## Methods

### clone

▸ **clone**(): [`Team`](Team.md)

Create a deep copy.

#### Returns

[`Team`](Team.md)

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
| `other` | `undefined` \| ``null`` \| [`Team`](Team.md) \| `PlainMessage`\<[`Team`](Team.md)\> |

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

▸ **getType**(): `MessageType`\<[`Team`](Team.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Team`](Team.md)\>

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
| `a` | `undefined` \| [`Team`](Team.md) \| `PlainMessage`\<[`Team`](Team.md)\> |
| `b` | `undefined` \| [`Team`](Team.md) \| `PlainMessage`\<[`Team`](Team.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:693](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L693)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Team`](Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Defined in

[src/teams.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L681)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Team`](Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Defined in

[src/teams.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L685)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Team`](Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Defined in

[src/teams.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L689)
