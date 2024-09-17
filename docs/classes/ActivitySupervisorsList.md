[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitySupervisorsList

# Class: ActivitySupervisorsList

Describes the message consisting of the list of activity supervisors

**`Generated`**

from message Scailo.ActivitySupervisorsList

## Hierarchy

- `Message`\<[`ActivitySupervisorsList`](ActivitySupervisorsList.md)\>

  ↳ **`ActivitySupervisorsList`**

## Table of contents

### Constructors

- [constructor](ActivitySupervisorsList.md#constructor)

### Properties

- [list](ActivitySupervisorsList.md#list)
- [fields](ActivitySupervisorsList.md#fields)
- [runtime](ActivitySupervisorsList.md#runtime)
- [typeName](ActivitySupervisorsList.md#typename)

### Methods

- [clone](ActivitySupervisorsList.md#clone)
- [equals](ActivitySupervisorsList.md#equals)
- [fromBinary](ActivitySupervisorsList.md#frombinary)
- [fromJson](ActivitySupervisorsList.md#fromjson)
- [fromJsonString](ActivitySupervisorsList.md#fromjsonstring)
- [getType](ActivitySupervisorsList.md#gettype)
- [toBinary](ActivitySupervisorsList.md#tobinary)
- [toJSON](ActivitySupervisorsList.md#tojson)
- [toJson](ActivitySupervisorsList.md#tojson-1)
- [toJsonString](ActivitySupervisorsList.md#tojsonstring)
- [equals](ActivitySupervisorsList.md#equals-1)
- [fromBinary](ActivitySupervisorsList.md#frombinary-1)
- [fromJson](ActivitySupervisorsList.md#fromjson-1)
- [fromJsonString](ActivitySupervisorsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitySupervisorsList**(`data?`): [`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitySupervisorsList`](ActivitySupervisorsList.md)\> |

#### Returns

[`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Overrides

Message\&lt;ActivitySupervisorsList\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2927

## Properties

### list

• **list**: [`ActivitySupervisor`](ActivitySupervisor.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ActivitySupervisor list = 1;

#### Defined in

src/activities.scailo_pb.ts:2925

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2934

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2932

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitySupervisorsList"``

#### Defined in

src/activities.scailo_pb.ts:2933

## Methods

### clone

▸ **clone**(): [`ActivitySupervisorsList`](ActivitySupervisorsList.md)

Create a deep copy.

#### Returns

[`ActivitySupervisorsList`](ActivitySupervisorsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitySupervisorsList`](ActivitySupervisorsList.md) \| `PlainMessage`\<[`ActivitySupervisorsList`](ActivitySupervisorsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitySupervisorsList`](ActivitySupervisorsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitySupervisorsList`](ActivitySupervisorsList.md)\>

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
| `a` | `undefined` \| [`ActivitySupervisorsList`](ActivitySupervisorsList.md) \| `PlainMessage`\<[`ActivitySupervisorsList`](ActivitySupervisorsList.md)\> |
| `b` | `undefined` \| [`ActivitySupervisorsList`](ActivitySupervisorsList.md) \| `PlainMessage`\<[`ActivitySupervisorsList`](ActivitySupervisorsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2950

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Defined in

src/activities.scailo_pb.ts:2938

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Defined in

src/activities.scailo_pb.ts:2942

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitySupervisorsList`](ActivitySupervisorsList.md)

#### Defined in

src/activities.scailo_pb.ts:2946
