[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientUser

# Class: ClientUser

Describes the parameters that constitute a client user

**`Generated`**

from message Scailo.ClientUser

## Hierarchy

- `Message`\<[`ClientUser`](ClientUser.md)\>

  ↳ **`ClientUser`**

## Table of contents

### Constructors

- [constructor](ClientUser.md#constructor)

### Properties

- [approvalMetadata](ClientUser.md#approvalmetadata)
- [associateId](ClientUser.md#associateid)
- [clientId](ClientUser.md#clientid)
- [entityUuid](ClientUser.md#entityuuid)
- [metadata](ClientUser.md#metadata)
- [needApproval](ClientUser.md#needapproval)
- [userComment](ClientUser.md#usercomment)
- [userId](ClientUser.md#userid)
- [fields](ClientUser.md#fields)
- [runtime](ClientUser.md#runtime)
- [typeName](ClientUser.md#typename)

### Methods

- [clone](ClientUser.md#clone)
- [equals](ClientUser.md#equals)
- [fromBinary](ClientUser.md#frombinary)
- [fromJson](ClientUser.md#fromjson)
- [fromJsonString](ClientUser.md#fromjsonstring)
- [getType](ClientUser.md#gettype)
- [toBinary](ClientUser.md#tobinary)
- [toJSON](ClientUser.md#tojson)
- [toJson](ClientUser.md#tojson-1)
- [toJsonString](ClientUser.md#tojsonstring)
- [equals](ClientUser.md#equals-1)
- [fromBinary](ClientUser.md#frombinary-1)
- [fromJson](ClientUser.md#fromjson-1)
- [fromJsonString](ClientUser.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientUser**(`data?`): [`ClientUser`](ClientUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientUser`](ClientUser.md)\> |

#### Returns

[`ClientUser`](ClientUser.md)

#### Overrides

Message\&lt;ClientUser\&gt;.constructor

#### Defined in

src/clients.scailo_pb.ts:1236

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/clients.scailo_pb.ts:1199

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores an optional associate ID

**`Generated`**

from field: uint64 associate_id = 12;

#### Defined in

src/clients.scailo_pb.ts:1234

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

Stores the client ID

**`Generated`**

from field: uint64 client_id = 10;

#### Defined in

src/clients.scailo_pb.ts:1220

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/clients.scailo_pb.ts:1185

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/clients.scailo_pb.ts:1192

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/clients.scailo_pb.ts:1206

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/clients.scailo_pb.ts:1213

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/clients.scailo_pb.ts:1227

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clients.scailo_pb.ts:1243

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clients.scailo_pb.ts:1241

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientUser"``

#### Defined in

src/clients.scailo_pb.ts:1242

## Methods

### clone

▸ **clone**(): [`ClientUser`](ClientUser.md)

Create a deep copy.

#### Returns

[`ClientUser`](ClientUser.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientUser`](ClientUser.md) \| `PlainMessage`\<[`ClientUser`](ClientUser.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientUser`](ClientUser.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientUser`](ClientUser.md)\>

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
| `a` | `undefined` \| [`ClientUser`](ClientUser.md) \| `PlainMessage`\<[`ClientUser`](ClientUser.md)\> |
| `b` | `undefined` \| [`ClientUser`](ClientUser.md) \| `PlainMessage`\<[`ClientUser`](ClientUser.md)\> |

#### Returns

`boolean`

#### Defined in

src/clients.scailo_pb.ts:1266

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientUser`](ClientUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientUser`](ClientUser.md)

#### Defined in

src/clients.scailo_pb.ts:1254

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientUser`](ClientUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUser`](ClientUser.md)

#### Defined in

src/clients.scailo_pb.ts:1258

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientUser`](ClientUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUser`](ClientUser.md)

#### Defined in

src/clients.scailo_pb.ts:1262
