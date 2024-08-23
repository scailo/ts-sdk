[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesLogsCountEmployeeLeavesRequest

# Class: LeavesLogsCountEmployeeLeavesRequest

Describes the parameters that are required to fetch the number of leaves available for an employee

**`Generated`**

from message Scailo.LeavesLogsCountEmployeeLeavesRequest

## Hierarchy

- `Message`\<[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)\>

  ↳ **`LeavesLogsCountEmployeeLeavesRequest`**

## Table of contents

### Constructors

- [constructor](LeavesLogsCountEmployeeLeavesRequest.md#constructor)

### Properties

- [leaveTypeId](LeavesLogsCountEmployeeLeavesRequest.md#leavetypeid)
- [userId](LeavesLogsCountEmployeeLeavesRequest.md#userid)
- [fields](LeavesLogsCountEmployeeLeavesRequest.md#fields)
- [runtime](LeavesLogsCountEmployeeLeavesRequest.md#runtime)
- [typeName](LeavesLogsCountEmployeeLeavesRequest.md#typename)

### Methods

- [clone](LeavesLogsCountEmployeeLeavesRequest.md#clone)
- [equals](LeavesLogsCountEmployeeLeavesRequest.md#equals)
- [fromBinary](LeavesLogsCountEmployeeLeavesRequest.md#frombinary)
- [fromJson](LeavesLogsCountEmployeeLeavesRequest.md#fromjson)
- [fromJsonString](LeavesLogsCountEmployeeLeavesRequest.md#fromjsonstring)
- [getType](LeavesLogsCountEmployeeLeavesRequest.md#gettype)
- [toBinary](LeavesLogsCountEmployeeLeavesRequest.md#tobinary)
- [toJSON](LeavesLogsCountEmployeeLeavesRequest.md#tojson)
- [toJson](LeavesLogsCountEmployeeLeavesRequest.md#tojson-1)
- [toJsonString](LeavesLogsCountEmployeeLeavesRequest.md#tojsonstring)
- [equals](LeavesLogsCountEmployeeLeavesRequest.md#equals-1)
- [fromBinary](LeavesLogsCountEmployeeLeavesRequest.md#frombinary-1)
- [fromJson](LeavesLogsCountEmployeeLeavesRequest.md#fromjson-1)
- [fromJsonString](LeavesLogsCountEmployeeLeavesRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesLogsCountEmployeeLeavesRequest**(`data?`): [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)\> |

#### Returns

[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Overrides

Message\&lt;LeavesLogsCountEmployeeLeavesRequest\&gt;.constructor

#### Defined in

src/leaves_logs.scailo_pb.ts:294

## Properties

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The leave type ID

**`Generated`**

from field: uint64 leave_type_id = 14;

#### Defined in

src/leaves_logs.scailo_pb.ts:292

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this log needs to be made

**`Generated`**

from field: uint64 user_id = 10;

#### Defined in

src/leaves_logs.scailo_pb.ts:285

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_logs.scailo_pb.ts:301

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_logs.scailo_pb.ts:299

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesLogsCountEmployeeLeavesRequest"``

#### Defined in

src/leaves_logs.scailo_pb.ts:300

## Methods

### clone

▸ **clone**(): [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

Create a deep copy.

#### Returns

[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md) \| `PlainMessage`\<[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)\>

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
| `a` | `undefined` \| [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md) \| `PlainMessage`\<[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)\> |
| `b` | `undefined` \| [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md) \| `PlainMessage`\<[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_logs.scailo_pb.ts:318

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:306

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:310

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsCountEmployeeLeavesRequest`](LeavesLogsCountEmployeeLeavesRequest.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:314
