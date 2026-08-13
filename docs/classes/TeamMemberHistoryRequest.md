[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamMemberHistoryRequest

# Class: TeamMemberHistoryRequest

Request payload containing the parameter constraints required to retrieve the historical
audit trail and lifecycle changes of a specific team member association.

**`Generated`**

from message Scailo.TeamMemberHistoryRequest

## Hierarchy

- `Message`\<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\>

  ↳ **`TeamMemberHistoryRequest`**

## Table of contents

### Constructors

- [constructor](TeamMemberHistoryRequest.md#constructor)

### Properties

- [teamId](TeamMemberHistoryRequest.md#teamid)
- [userId](TeamMemberHistoryRequest.md#userid)
- [fields](TeamMemberHistoryRequest.md#fields)
- [runtime](TeamMemberHistoryRequest.md#runtime)
- [typeName](TeamMemberHistoryRequest.md#typename)

### Methods

- [clone](TeamMemberHistoryRequest.md#clone)
- [equals](TeamMemberHistoryRequest.md#equals)
- [fromBinary](TeamMemberHistoryRequest.md#frombinary)
- [fromJson](TeamMemberHistoryRequest.md#fromjson)
- [fromJsonString](TeamMemberHistoryRequest.md#fromjsonstring)
- [getType](TeamMemberHistoryRequest.md#gettype)
- [toBinary](TeamMemberHistoryRequest.md#tobinary)
- [toJSON](TeamMemberHistoryRequest.md#tojson)
- [toJson](TeamMemberHistoryRequest.md#tojson-1)
- [toJsonString](TeamMemberHistoryRequest.md#tojsonstring)
- [equals](TeamMemberHistoryRequest.md#equals-1)
- [fromBinary](TeamMemberHistoryRequest.md#frombinary-1)
- [fromJson](TeamMemberHistoryRequest.md#fromjson-1)
- [fromJsonString](TeamMemberHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamMemberHistoryRequest**(`data?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Overrides

Message\&lt;TeamMemberHistoryRequest\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1088)

## Properties

### teamId

• **teamId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target team associated with the historical record.

**`Example`**

```ts
105
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 team_id = 10;

#### Defined in

[src/teams.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1070)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the user associated with the historical record.

**`Example`**

```ts
420
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/teams.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1086)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:1095](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1095)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:1093](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1093)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamMemberHistoryRequest"``

#### Defined in

[src/teams.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1094)

## Methods

### clone

▸ **clone**(): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

Create a deep copy.

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md) \| `PlainMessage`\<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\>

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
| `a` | `undefined` \| [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md) \| `PlainMessage`\<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |
| `b` | `undefined` \| [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md) \| `PlainMessage`\<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1112)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1100)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1104)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L1108)
