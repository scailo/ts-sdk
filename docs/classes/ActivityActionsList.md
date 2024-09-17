[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityActionsList

# Class: ActivityActionsList

Describes the message consisting of the list of activity actions

**`Generated`**

from message Scailo.ActivityActionsList

## Hierarchy

- `Message`\<[`ActivityActionsList`](ActivityActionsList.md)\>

  ↳ **`ActivityActionsList`**

## Table of contents

### Constructors

- [constructor](ActivityActionsList.md#constructor)

### Properties

- [list](ActivityActionsList.md#list)
- [fields](ActivityActionsList.md#fields)
- [runtime](ActivityActionsList.md#runtime)
- [typeName](ActivityActionsList.md#typename)

### Methods

- [clone](ActivityActionsList.md#clone)
- [equals](ActivityActionsList.md#equals)
- [fromBinary](ActivityActionsList.md#frombinary)
- [fromJson](ActivityActionsList.md#fromjson)
- [fromJsonString](ActivityActionsList.md#fromjsonstring)
- [getType](ActivityActionsList.md#gettype)
- [toBinary](ActivityActionsList.md#tobinary)
- [toJSON](ActivityActionsList.md#tojson)
- [toJson](ActivityActionsList.md#tojson-1)
- [toJsonString](ActivityActionsList.md#tojsonstring)
- [equals](ActivityActionsList.md#equals-1)
- [fromBinary](ActivityActionsList.md#frombinary-1)
- [fromJson](ActivityActionsList.md#fromjson-1)
- [fromJsonString](ActivityActionsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityActionsList**(`data?`): [`ActivityActionsList`](ActivityActionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityActionsList`](ActivityActionsList.md)\> |

#### Returns

[`ActivityActionsList`](ActivityActionsList.md)

#### Overrides

Message\&lt;ActivityActionsList\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:1987

## Properties

### list

• **list**: [`ActivityAction`](ActivityAction.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ActivityAction list = 1;

#### Defined in

src/activities.scailo_pb.ts:1985

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:1994

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:1992

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityActionsList"``

#### Defined in

src/activities.scailo_pb.ts:1993

## Methods

### clone

▸ **clone**(): [`ActivityActionsList`](ActivityActionsList.md)

Create a deep copy.

#### Returns

[`ActivityActionsList`](ActivityActionsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityActionsList`](ActivityActionsList.md) \| `PlainMessage`\<[`ActivityActionsList`](ActivityActionsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityActionsList`](ActivityActionsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityActionsList`](ActivityActionsList.md)\>

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
| `a` | `undefined` \| [`ActivityActionsList`](ActivityActionsList.md) \| `PlainMessage`\<[`ActivityActionsList`](ActivityActionsList.md)\> |
| `b` | `undefined` \| [`ActivityActionsList`](ActivityActionsList.md) \| `PlainMessage`\<[`ActivityActionsList`](ActivityActionsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2010

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityActionsList`](ActivityActionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityActionsList`](ActivityActionsList.md)

#### Defined in

src/activities.scailo_pb.ts:1998

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityActionsList`](ActivityActionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionsList`](ActivityActionsList.md)

#### Defined in

src/activities.scailo_pb.ts:2002

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityActionsList`](ActivityActionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionsList`](ActivityActionsList.md)

#### Defined in

src/activities.scailo_pb.ts:2006
