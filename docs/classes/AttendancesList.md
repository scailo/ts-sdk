[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesList

# Class: AttendancesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.AttendancesList

## Hierarchy

- `Message`\<[`AttendancesList`](AttendancesList.md)\>

  ↳ **`AttendancesList`**

## Table of contents

### Constructors

- [constructor](AttendancesList.md#constructor)

### Properties

- [list](AttendancesList.md#list)
- [fields](AttendancesList.md#fields)
- [runtime](AttendancesList.md#runtime)
- [typeName](AttendancesList.md#typename)

### Methods

- [clone](AttendancesList.md#clone)
- [equals](AttendancesList.md#equals)
- [fromBinary](AttendancesList.md#frombinary)
- [fromJson](AttendancesList.md#fromjson)
- [fromJsonString](AttendancesList.md#fromjsonstring)
- [getType](AttendancesList.md#gettype)
- [toBinary](AttendancesList.md#tobinary)
- [toJSON](AttendancesList.md#tojson)
- [toJson](AttendancesList.md#tojson-1)
- [toJsonString](AttendancesList.md#tojsonstring)
- [equals](AttendancesList.md#equals-1)
- [fromBinary](AttendancesList.md#frombinary-1)
- [fromJson](AttendancesList.md#fromjson-1)
- [fromJsonString](AttendancesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesList**(`data?`): [`AttendancesList`](AttendancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesList`](AttendancesList.md)\> |

#### Returns

[`AttendancesList`](AttendancesList.md)

#### Overrides

Message\&lt;AttendancesList\&gt;.constructor

#### Defined in

[src/attendances.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L650)

## Properties

### list

• **list**: [`Attendance`](Attendance.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Attendance list = 1;

#### Defined in

[src/attendances.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L648)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L657)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L655)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesList"``

#### Defined in

[src/attendances.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L656)

## Methods

### clone

▸ **clone**(): [`AttendancesList`](AttendancesList.md)

Create a deep copy.

#### Returns

[`AttendancesList`](AttendancesList.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesList`](AttendancesList.md) \| `PlainMessage`\<[`AttendancesList`](AttendancesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesList`](AttendancesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesList`](AttendancesList.md)\>

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
| `a` | `undefined` \| [`AttendancesList`](AttendancesList.md) \| `PlainMessage`\<[`AttendancesList`](AttendancesList.md)\> |
| `b` | `undefined` \| [`AttendancesList`](AttendancesList.md) \| `PlainMessage`\<[`AttendancesList`](AttendancesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L673)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesList`](AttendancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesList`](AttendancesList.md)

#### Defined in

[src/attendances.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L661)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesList`](AttendancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesList`](AttendancesList.md)

#### Defined in

[src/attendances.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L665)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesList`](AttendancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesList`](AttendancesList.md)

#### Defined in

[src/attendances.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L669)
