[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceUserCreateRequest

# Class: ClientsServiceUserCreateRequest

Describes the parameters necessary to create a client user

**`Generated`**

from message Scailo.ClientsServiceUserCreateRequest

## Hierarchy

- `Message`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\>

  ↳ **`ClientsServiceUserCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientsServiceUserCreateRequest.md#constructor)

### Properties

- [associateId](ClientsServiceUserCreateRequest.md#associateid)
- [clientId](ClientsServiceUserCreateRequest.md#clientid)
- [userComment](ClientsServiceUserCreateRequest.md#usercomment)
- [userId](ClientsServiceUserCreateRequest.md#userid)
- [fields](ClientsServiceUserCreateRequest.md#fields)
- [runtime](ClientsServiceUserCreateRequest.md#runtime)
- [typeName](ClientsServiceUserCreateRequest.md#typename)

### Methods

- [clone](ClientsServiceUserCreateRequest.md#clone)
- [equals](ClientsServiceUserCreateRequest.md#equals)
- [fromBinary](ClientsServiceUserCreateRequest.md#frombinary)
- [fromJson](ClientsServiceUserCreateRequest.md#fromjson)
- [fromJsonString](ClientsServiceUserCreateRequest.md#fromjsonstring)
- [getType](ClientsServiceUserCreateRequest.md#gettype)
- [toBinary](ClientsServiceUserCreateRequest.md#tobinary)
- [toJSON](ClientsServiceUserCreateRequest.md#tojson)
- [toJson](ClientsServiceUserCreateRequest.md#tojson-1)
- [toJsonString](ClientsServiceUserCreateRequest.md#tojsonstring)
- [equals](ClientsServiceUserCreateRequest.md#equals-1)
- [fromBinary](ClientsServiceUserCreateRequest.md#frombinary-1)
- [fromJson](ClientsServiceUserCreateRequest.md#fromjson-1)
- [fromJsonString](ClientsServiceUserCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceUserCreateRequest**(`data?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Overrides

Message\&lt;ClientsServiceUserCreateRequest\&gt;.constructor

#### Defined in

src/clients.scailo_pb.ts:1126

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores an optional associate ID

**`Generated`**

from field: uint64 associate_id = 12;

#### Defined in

src/clients.scailo_pb.ts:1124

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

Stores the client ID

**`Generated`**

from field: uint64 client_id = 10;

#### Defined in

src/clients.scailo_pb.ts:1110

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/clients.scailo_pb.ts:1103

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/clients.scailo_pb.ts:1117

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clients.scailo_pb.ts:1133

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clients.scailo_pb.ts:1131

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceUserCreateRequest"``

#### Defined in

src/clients.scailo_pb.ts:1132

## Methods

### clone

▸ **clone**(): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/clients.scailo_pb.ts:1152

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Defined in

src/clients.scailo_pb.ts:1140

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Defined in

src/clients.scailo_pb.ts:1144

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUserCreateRequest`](ClientsServiceUserCreateRequest.md)

#### Defined in

src/clients.scailo_pb.ts:1148
