[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingEmployeesList

# Class: MeetingEmployeesList

Describes the message consisting of the list of meeting employees

**`Generated`**

from message Scailo.MeetingEmployeesList

## Hierarchy

- `Message`\<[`MeetingEmployeesList`](MeetingEmployeesList.md)\>

  ↳ **`MeetingEmployeesList`**

## Table of contents

### Constructors

- [constructor](MeetingEmployeesList.md#constructor)

### Properties

- [list](MeetingEmployeesList.md#list)
- [fields](MeetingEmployeesList.md#fields)
- [runtime](MeetingEmployeesList.md#runtime)
- [typeName](MeetingEmployeesList.md#typename)

### Methods

- [clone](MeetingEmployeesList.md#clone)
- [equals](MeetingEmployeesList.md#equals)
- [fromBinary](MeetingEmployeesList.md#frombinary)
- [fromJson](MeetingEmployeesList.md#fromjson)
- [fromJsonString](MeetingEmployeesList.md#fromjsonstring)
- [getType](MeetingEmployeesList.md#gettype)
- [toBinary](MeetingEmployeesList.md#tobinary)
- [toJSON](MeetingEmployeesList.md#tojson)
- [toJson](MeetingEmployeesList.md#tojson-1)
- [toJsonString](MeetingEmployeesList.md#tojsonstring)
- [equals](MeetingEmployeesList.md#equals-1)
- [fromBinary](MeetingEmployeesList.md#frombinary-1)
- [fromJson](MeetingEmployeesList.md#fromjson-1)
- [fromJsonString](MeetingEmployeesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingEmployeesList**(`data?`): [`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingEmployeesList`](MeetingEmployeesList.md)\> |

#### Returns

[`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Overrides

Message\&lt;MeetingEmployeesList\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:2051

## Properties

### list

• **list**: [`MeetingEmployee`](MeetingEmployee.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.MeetingEmployee list = 1;

#### Defined in

src/meetings.scailo_pb.ts:2049

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:2058

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:2056

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingEmployeesList"``

#### Defined in

src/meetings.scailo_pb.ts:2057

## Methods

### clone

▸ **clone**(): [`MeetingEmployeesList`](MeetingEmployeesList.md)

Create a deep copy.

#### Returns

[`MeetingEmployeesList`](MeetingEmployeesList.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingEmployeesList`](MeetingEmployeesList.md) \| `PlainMessage`\<[`MeetingEmployeesList`](MeetingEmployeesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingEmployeesList`](MeetingEmployeesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingEmployeesList`](MeetingEmployeesList.md)\>

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
| `a` | `undefined` \| [`MeetingEmployeesList`](MeetingEmployeesList.md) \| `PlainMessage`\<[`MeetingEmployeesList`](MeetingEmployeesList.md)\> |
| `b` | `undefined` \| [`MeetingEmployeesList`](MeetingEmployeesList.md) \| `PlainMessage`\<[`MeetingEmployeesList`](MeetingEmployeesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:2074

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Defined in

src/meetings.scailo_pb.ts:2062

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Defined in

src/meetings.scailo_pb.ts:2066

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingEmployeesList`](MeetingEmployeesList.md)

#### Defined in

src/meetings.scailo_pb.ts:2070
