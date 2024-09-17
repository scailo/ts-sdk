[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingActionablesList

# Class: MeetingActionablesList

Describes the message consisting of the list of meeting actionables

**`Generated`**

from message Scailo.MeetingActionablesList

## Hierarchy

- `Message`\<[`MeetingActionablesList`](MeetingActionablesList.md)\>

  ↳ **`MeetingActionablesList`**

## Table of contents

### Constructors

- [constructor](MeetingActionablesList.md#constructor)

### Properties

- [list](MeetingActionablesList.md#list)
- [fields](MeetingActionablesList.md#fields)
- [runtime](MeetingActionablesList.md#runtime)
- [typeName](MeetingActionablesList.md#typename)

### Methods

- [clone](MeetingActionablesList.md#clone)
- [equals](MeetingActionablesList.md#equals)
- [fromBinary](MeetingActionablesList.md#frombinary)
- [fromJson](MeetingActionablesList.md#fromjson)
- [fromJsonString](MeetingActionablesList.md#fromjsonstring)
- [getType](MeetingActionablesList.md#gettype)
- [toBinary](MeetingActionablesList.md#tobinary)
- [toJSON](MeetingActionablesList.md#tojson)
- [toJson](MeetingActionablesList.md#tojson-1)
- [toJsonString](MeetingActionablesList.md#tojsonstring)
- [equals](MeetingActionablesList.md#equals-1)
- [fromBinary](MeetingActionablesList.md#frombinary-1)
- [fromJson](MeetingActionablesList.md#fromjson-1)
- [fromJsonString](MeetingActionablesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingActionablesList**(`data?`): [`MeetingActionablesList`](MeetingActionablesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingActionablesList`](MeetingActionablesList.md)\> |

#### Returns

[`MeetingActionablesList`](MeetingActionablesList.md)

#### Overrides

Message\&lt;MeetingActionablesList\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1639

## Properties

### list

• **list**: [`MeetingActionable`](MeetingActionable.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.MeetingActionable list = 1;

#### Defined in

src/meetings.scailo_pb.ts:1637

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1646

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1644

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingActionablesList"``

#### Defined in

src/meetings.scailo_pb.ts:1645

## Methods

### clone

▸ **clone**(): [`MeetingActionablesList`](MeetingActionablesList.md)

Create a deep copy.

#### Returns

[`MeetingActionablesList`](MeetingActionablesList.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingActionablesList`](MeetingActionablesList.md) \| `PlainMessage`\<[`MeetingActionablesList`](MeetingActionablesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingActionablesList`](MeetingActionablesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingActionablesList`](MeetingActionablesList.md)\>

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
| `a` | `undefined` \| [`MeetingActionablesList`](MeetingActionablesList.md) \| `PlainMessage`\<[`MeetingActionablesList`](MeetingActionablesList.md)\> |
| `b` | `undefined` \| [`MeetingActionablesList`](MeetingActionablesList.md) \| `PlainMessage`\<[`MeetingActionablesList`](MeetingActionablesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1662

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingActionablesList`](MeetingActionablesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingActionablesList`](MeetingActionablesList.md)

#### Defined in

src/meetings.scailo_pb.ts:1650

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingActionablesList`](MeetingActionablesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionablesList`](MeetingActionablesList.md)

#### Defined in

src/meetings.scailo_pb.ts:1654

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingActionablesList`](MeetingActionablesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionablesList`](MeetingActionablesList.md)

#### Defined in

src/meetings.scailo_pb.ts:1658
