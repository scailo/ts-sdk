[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsMembersList

# Class: TeamsMembersList

Represents a collection payload encapsulating multiple Team Member associations.
Used primarily to return the active personnel roster of a specific team.

**`Generated`**

from message Scailo.TeamsMembersList

## Hierarchy

- `Message`\<[`TeamsMembersList`](TeamsMembersList.md)\>

  ↳ **`TeamsMembersList`**

## Table of contents

### Constructors

- [constructor](TeamsMembersList.md#constructor)

### Properties

- [list](TeamsMembersList.md#list)
- [fields](TeamsMembersList.md#fields)
- [runtime](TeamsMembersList.md#runtime)
- [typeName](TeamsMembersList.md#typename)

### Methods

- [clone](TeamsMembersList.md#clone)
- [equals](TeamsMembersList.md#equals)
- [fromBinary](TeamsMembersList.md#frombinary)
- [fromJson](TeamsMembersList.md#fromjson)
- [fromJsonString](TeamsMembersList.md#fromjsonstring)
- [getType](TeamsMembersList.md#gettype)
- [toBinary](TeamsMembersList.md#tobinary)
- [toJSON](TeamsMembersList.md#tojson)
- [toJson](TeamsMembersList.md#tojson-1)
- [toJsonString](TeamsMembersList.md#tojsonstring)
- [equals](TeamsMembersList.md#equals-1)
- [fromBinary](TeamsMembersList.md#frombinary-1)
- [fromJson](TeamsMembersList.md#fromjson-1)
- [fromJsonString](TeamsMembersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsMembersList**(`data?`): [`TeamsMembersList`](TeamsMembersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsMembersList`](TeamsMembersList.md)\> |

#### Returns

[`TeamsMembersList`](TeamsMembersList.md)

#### Overrides

Message\&lt;TeamsMembersList\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:1020](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1020)

## Properties

### list

• **list**: [`TeamMember`](TeamMember.md)[] = `[]`

**`Description`**

An array of Team Member records.

**`Generated`**

from field: repeated Scailo.TeamMember list = 1;

#### Defined in

[src/teams.scailo_pb.ts:1018](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1018)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:1027](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1027)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1025)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsMembersList"``

#### Defined in

[src/teams.scailo_pb.ts:1026](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1026)

## Methods

### clone

▸ **clone**(): [`TeamsMembersList`](TeamsMembersList.md)

Create a deep copy.

#### Returns

[`TeamsMembersList`](TeamsMembersList.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsMembersList`](TeamsMembersList.md) \| `PlainMessage`\<[`TeamsMembersList`](TeamsMembersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsMembersList`](TeamsMembersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsMembersList`](TeamsMembersList.md)\>

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
| `a` | `undefined` \| [`TeamsMembersList`](TeamsMembersList.md) \| `PlainMessage`\<[`TeamsMembersList`](TeamsMembersList.md)\> |
| `b` | `undefined` \| [`TeamsMembersList`](TeamsMembersList.md) \| `PlainMessage`\<[`TeamsMembersList`](TeamsMembersList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1043)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsMembersList`](TeamsMembersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsMembersList`](TeamsMembersList.md)

#### Defined in

[src/teams.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1031)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsMembersList`](TeamsMembersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsMembersList`](TeamsMembersList.md)

#### Defined in

[src/teams.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1035)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsMembersList`](TeamsMembersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsMembersList`](TeamsMembersList.md)

#### Defined in

[src/teams.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1039)
