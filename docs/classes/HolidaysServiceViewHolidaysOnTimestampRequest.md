[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceViewHolidaysOnTimestampRequest

# Class: HolidaysServiceViewHolidaysOnTimestampRequest

Describes the request payload to query if the given timestamp is a holiday for the given shift group ID

**`Generated`**

from message Scailo.HolidaysServiceViewHolidaysOnTimestampRequest

## Hierarchy

- `Message`\<[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)\>

  ↳ **`HolidaysServiceViewHolidaysOnTimestampRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceViewHolidaysOnTimestampRequest.md#constructor)

### Properties

- [shiftGroupId](HolidaysServiceViewHolidaysOnTimestampRequest.md#shiftgroupid)
- [timestamp](HolidaysServiceViewHolidaysOnTimestampRequest.md#timestamp)
- [fields](HolidaysServiceViewHolidaysOnTimestampRequest.md#fields)
- [runtime](HolidaysServiceViewHolidaysOnTimestampRequest.md#runtime)
- [typeName](HolidaysServiceViewHolidaysOnTimestampRequest.md#typename)

### Methods

- [clone](HolidaysServiceViewHolidaysOnTimestampRequest.md#clone)
- [equals](HolidaysServiceViewHolidaysOnTimestampRequest.md#equals)
- [fromBinary](HolidaysServiceViewHolidaysOnTimestampRequest.md#frombinary)
- [fromJson](HolidaysServiceViewHolidaysOnTimestampRequest.md#fromjson)
- [fromJsonString](HolidaysServiceViewHolidaysOnTimestampRequest.md#fromjsonstring)
- [getType](HolidaysServiceViewHolidaysOnTimestampRequest.md#gettype)
- [toBinary](HolidaysServiceViewHolidaysOnTimestampRequest.md#tobinary)
- [toJSON](HolidaysServiceViewHolidaysOnTimestampRequest.md#tojson)
- [toJson](HolidaysServiceViewHolidaysOnTimestampRequest.md#tojson-1)
- [toJsonString](HolidaysServiceViewHolidaysOnTimestampRequest.md#tojsonstring)
- [equals](HolidaysServiceViewHolidaysOnTimestampRequest.md#equals-1)
- [fromBinary](HolidaysServiceViewHolidaysOnTimestampRequest.md#frombinary-1)
- [fromJson](HolidaysServiceViewHolidaysOnTimestampRequest.md#fromjson-1)
- [fromJsonString](HolidaysServiceViewHolidaysOnTimestampRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceViewHolidaysOnTimestampRequest**(`data?`): [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)\> |

#### Returns

[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Overrides

Message\&lt;HolidaysServiceViewHolidaysOnTimestampRequest\&gt;.constructor

#### Defined in

src/holidays.scailo_pb.ts:1452

## Properties

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: uint64 shift_group_id = 11;

#### Defined in

src/holidays.scailo_pb.ts:1450

___

### timestamp

• **timestamp**: `bigint` = `protoInt64.zero`

Stores the timestamp

**`Generated`**

from field: uint64 timestamp = 10;

#### Defined in

src/holidays.scailo_pb.ts:1443

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/holidays.scailo_pb.ts:1459

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/holidays.scailo_pb.ts:1457

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysServiceViewHolidaysOnTimestampRequest"``

#### Defined in

src/holidays.scailo_pb.ts:1458

## Methods

### clone

▸ **clone**(): [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

Create a deep copy.

#### Returns

[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md) \| `PlainMessage`\<[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md) \| `PlainMessage`\<[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)\> |
| `b` | `undefined` \| [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md) \| `PlainMessage`\<[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/holidays.scailo_pb.ts:1476

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:1464

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:1468

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceViewHolidaysOnTimestampRequest`](HolidaysServiceViewHolidaysOnTimestampRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:1472
