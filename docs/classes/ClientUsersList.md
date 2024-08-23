[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientUsersList

# Class: ClientUsersList

Describes the message consisting of the list of client users

**`Generated`**

from message Scailo.ClientUsersList

## Hierarchy

- `Message`\<[`ClientUsersList`](ClientUsersList.md)\>

  ↳ **`ClientUsersList`**

## Table of contents

### Constructors

- [constructor](ClientUsersList.md#constructor)

### Properties

- [list](ClientUsersList.md#list)
- [fields](ClientUsersList.md#fields)
- [runtime](ClientUsersList.md#runtime)
- [typeName](ClientUsersList.md#typename)

### Methods

- [clone](ClientUsersList.md#clone)
- [equals](ClientUsersList.md#equals)
- [fromBinary](ClientUsersList.md#frombinary)
- [fromJson](ClientUsersList.md#fromjson)
- [fromJsonString](ClientUsersList.md#fromjsonstring)
- [getType](ClientUsersList.md#gettype)
- [toBinary](ClientUsersList.md#tobinary)
- [toJSON](ClientUsersList.md#tojson)
- [toJson](ClientUsersList.md#tojson-1)
- [toJsonString](ClientUsersList.md#tojsonstring)
- [equals](ClientUsersList.md#equals-1)
- [fromBinary](ClientUsersList.md#frombinary-1)
- [fromJson](ClientUsersList.md#fromjson-1)
- [fromJsonString](ClientUsersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientUsersList**(`data?`): [`ClientUsersList`](ClientUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientUsersList`](ClientUsersList.md)\> |

#### Returns

[`ClientUsersList`](ClientUsersList.md)

#### Overrides

Message\&lt;ClientUsersList\&gt;.constructor

#### Defined in

src/clients.scailo_pb.ts:1234

## Properties

### list

• **list**: [`ClientUser`](ClientUser.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ClientUser list = 1;

#### Defined in

src/clients.scailo_pb.ts:1232

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clients.scailo_pb.ts:1241

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clients.scailo_pb.ts:1239

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientUsersList"``

#### Defined in

src/clients.scailo_pb.ts:1240

## Methods

### clone

▸ **clone**(): [`ClientUsersList`](ClientUsersList.md)

Create a deep copy.

#### Returns

[`ClientUsersList`](ClientUsersList.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientUsersList`](ClientUsersList.md) \| `PlainMessage`\<[`ClientUsersList`](ClientUsersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientUsersList`](ClientUsersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientUsersList`](ClientUsersList.md)\>

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
| `a` | `undefined` \| [`ClientUsersList`](ClientUsersList.md) \| `PlainMessage`\<[`ClientUsersList`](ClientUsersList.md)\> |
| `b` | `undefined` \| [`ClientUsersList`](ClientUsersList.md) \| `PlainMessage`\<[`ClientUsersList`](ClientUsersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/clients.scailo_pb.ts:1257

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientUsersList`](ClientUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientUsersList`](ClientUsersList.md)

#### Defined in

src/clients.scailo_pb.ts:1245

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientUsersList`](ClientUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUsersList`](ClientUsersList.md)

#### Defined in

src/clients.scailo_pb.ts:1249

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientUsersList`](ClientUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUsersList`](ClientUsersList.md)

#### Defined in

src/clients.scailo_pb.ts:1253
