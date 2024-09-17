[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RoleAccess

# Class: RoleAccess

Describes the data structure of each role access on the platform

**`Generated`**

from message Scailo.RoleAccess

## Hierarchy

- `Message`\<[`RoleAccess`](RoleAccess.md)\>

  ↳ **`RoleAccess`**

## Table of contents

### Constructors

- [constructor](RoleAccess.md#constructor)

### Properties

- [approvalMetadata](RoleAccess.md#approvalmetadata)
- [entityUuid](RoleAccess.md#entityuuid)
- [isAccessible](RoleAccess.md#isaccessible)
- [menuUid](RoleAccess.md#menuuid)
- [metadata](RoleAccess.md#metadata)
- [needApproval](RoleAccess.md#needapproval)
- [roleId](RoleAccess.md#roleid)
- [fields](RoleAccess.md#fields)
- [runtime](RoleAccess.md#runtime)
- [typeName](RoleAccess.md#typename)

### Methods

- [clone](RoleAccess.md#clone)
- [equals](RoleAccess.md#equals)
- [fromBinary](RoleAccess.md#frombinary)
- [fromJson](RoleAccess.md#fromjson)
- [fromJsonString](RoleAccess.md#fromjsonstring)
- [getType](RoleAccess.md#gettype)
- [toBinary](RoleAccess.md#tobinary)
- [toJSON](RoleAccess.md#tojson)
- [toJson](RoleAccess.md#tojson-1)
- [toJsonString](RoleAccess.md#tojsonstring)
- [equals](RoleAccess.md#equals-1)
- [fromBinary](RoleAccess.md#frombinary-1)
- [fromJson](RoleAccess.md#fromjson-1)
- [fromJsonString](RoleAccess.md#fromjsonstring-1)

## Constructors

### constructor

• **new RoleAccess**(`data?`): [`RoleAccess`](RoleAccess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RoleAccess`](RoleAccess.md)\> |

#### Returns

[`RoleAccess`](RoleAccess.md)

#### Overrides

Message\&lt;RoleAccess\&gt;.constructor

#### Defined in

src/roles.scailo_pb.ts:581

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/roles.scailo_pb.ts:551

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/roles.scailo_pb.ts:537

___

### isAccessible

• **isAccessible**: `boolean` = `false`

Denotes if the menu is accessible

**`Generated`**

from field: bool is_accessible = 12;

#### Defined in

src/roles.scailo_pb.ts:579

___

### menuUid

• **menuUid**: `string` = `""`

The menu UID (or internal code)

**`Generated`**

from field: string menu_uid = 11;

#### Defined in

src/roles.scailo_pb.ts:572

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this team

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/roles.scailo_pb.ts:544

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/roles.scailo_pb.ts:558

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated Role ID

**`Generated`**

from field: uint64 role_id = 10;

#### Defined in

src/roles.scailo_pb.ts:565

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/roles.scailo_pb.ts:588

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/roles.scailo_pb.ts:586

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RoleAccess"``

#### Defined in

src/roles.scailo_pb.ts:587

## Methods

### clone

▸ **clone**(): [`RoleAccess`](RoleAccess.md)

Create a deep copy.

#### Returns

[`RoleAccess`](RoleAccess.md)

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
| `other` | `undefined` \| ``null`` \| [`RoleAccess`](RoleAccess.md) \| `PlainMessage`\<[`RoleAccess`](RoleAccess.md)\> |

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

▸ **getType**(): `MessageType`\<[`RoleAccess`](RoleAccess.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RoleAccess`](RoleAccess.md)\>

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
| `a` | `undefined` \| [`RoleAccess`](RoleAccess.md) \| `PlainMessage`\<[`RoleAccess`](RoleAccess.md)\> |
| `b` | `undefined` \| [`RoleAccess`](RoleAccess.md) \| `PlainMessage`\<[`RoleAccess`](RoleAccess.md)\> |

#### Returns

`boolean`

#### Defined in

src/roles.scailo_pb.ts:610

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RoleAccess`](RoleAccess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RoleAccess`](RoleAccess.md)

#### Defined in

src/roles.scailo_pb.ts:598

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RoleAccess`](RoleAccess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RoleAccess`](RoleAccess.md)

#### Defined in

src/roles.scailo_pb.ts:602

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RoleAccess`](RoleAccess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RoleAccess`](RoleAccess.md)

#### Defined in

src/roles.scailo_pb.ts:606
