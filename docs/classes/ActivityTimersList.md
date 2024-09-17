[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityTimersList

# Class: ActivityTimersList

Describes the message consisting of the list of activity timers

**`Generated`**

from message Scailo.ActivityTimersList

## Hierarchy

- `Message`\<[`ActivityTimersList`](ActivityTimersList.md)\>

  ↳ **`ActivityTimersList`**

## Table of contents

### Constructors

- [constructor](ActivityTimersList.md#constructor)

### Properties

- [list](ActivityTimersList.md#list)
- [fields](ActivityTimersList.md#fields)
- [runtime](ActivityTimersList.md#runtime)
- [typeName](ActivityTimersList.md#typename)

### Methods

- [clone](ActivityTimersList.md#clone)
- [equals](ActivityTimersList.md#equals)
- [fromBinary](ActivityTimersList.md#frombinary)
- [fromJson](ActivityTimersList.md#fromjson)
- [fromJsonString](ActivityTimersList.md#fromjsonstring)
- [getType](ActivityTimersList.md#gettype)
- [toBinary](ActivityTimersList.md#tobinary)
- [toJSON](ActivityTimersList.md#tojson)
- [toJson](ActivityTimersList.md#tojson-1)
- [toJsonString](ActivityTimersList.md#tojsonstring)
- [equals](ActivityTimersList.md#equals-1)
- [fromBinary](ActivityTimersList.md#frombinary-1)
- [fromJson](ActivityTimersList.md#fromjson-1)
- [fromJsonString](ActivityTimersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityTimersList**(`data?`): [`ActivityTimersList`](ActivityTimersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityTimersList`](ActivityTimersList.md)\> |

#### Returns

[`ActivityTimersList`](ActivityTimersList.md)

#### Overrides

Message\&lt;ActivityTimersList\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:3271

## Properties

### list

• **list**: [`ActivityTimer`](ActivityTimer.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ActivityTimer list = 1;

#### Defined in

src/activities.scailo_pb.ts:3269

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:3278

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:3276

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityTimersList"``

#### Defined in

src/activities.scailo_pb.ts:3277

## Methods

### clone

▸ **clone**(): [`ActivityTimersList`](ActivityTimersList.md)

Create a deep copy.

#### Returns

[`ActivityTimersList`](ActivityTimersList.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityTimersList`](ActivityTimersList.md) \| `PlainMessage`\<[`ActivityTimersList`](ActivityTimersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityTimersList`](ActivityTimersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityTimersList`](ActivityTimersList.md)\>

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
| `a` | `undefined` \| [`ActivityTimersList`](ActivityTimersList.md) \| `PlainMessage`\<[`ActivityTimersList`](ActivityTimersList.md)\> |
| `b` | `undefined` \| [`ActivityTimersList`](ActivityTimersList.md) \| `PlainMessage`\<[`ActivityTimersList`](ActivityTimersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:3294

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityTimersList`](ActivityTimersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityTimersList`](ActivityTimersList.md)

#### Defined in

src/activities.scailo_pb.ts:3282

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityTimersList`](ActivityTimersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTimersList`](ActivityTimersList.md)

#### Defined in

src/activities.scailo_pb.ts:3286

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityTimersList`](ActivityTimersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTimersList`](ActivityTimersList.md)

#### Defined in

src/activities.scailo_pb.ts:3290
