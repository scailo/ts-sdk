[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsList

# Class: LeavesRequestsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.LeavesRequestsList

## Hierarchy

- `Message`\<[`LeavesRequestsList`](LeavesRequestsList.md)\>

  ↳ **`LeavesRequestsList`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsList.md#constructor)

### Properties

- [list](LeavesRequestsList.md#list)
- [fields](LeavesRequestsList.md#fields)
- [runtime](LeavesRequestsList.md#runtime)
- [typeName](LeavesRequestsList.md#typename)

### Methods

- [clone](LeavesRequestsList.md#clone)
- [equals](LeavesRequestsList.md#equals)
- [fromBinary](LeavesRequestsList.md#frombinary)
- [fromJson](LeavesRequestsList.md#fromjson)
- [fromJsonString](LeavesRequestsList.md#fromjsonstring)
- [getType](LeavesRequestsList.md#gettype)
- [toBinary](LeavesRequestsList.md#tobinary)
- [toJSON](LeavesRequestsList.md#tojson)
- [toJson](LeavesRequestsList.md#tojson-1)
- [toJsonString](LeavesRequestsList.md#tojsonstring)
- [equals](LeavesRequestsList.md#equals-1)
- [fromBinary](LeavesRequestsList.md#frombinary-1)
- [fromJson](LeavesRequestsList.md#fromjson-1)
- [fromJsonString](LeavesRequestsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsList**(`data?`): [`LeavesRequestsList`](LeavesRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesRequestsList`](LeavesRequestsList.md)\> |

#### Returns

[`LeavesRequestsList`](LeavesRequestsList.md)

#### Overrides

Message\&lt;LeavesRequestsList\&gt;.constructor

#### Defined in

src/leaves_requests.scailo_pb.ts:522

## Properties

### list

• **list**: [`LeaveRequest`](LeaveRequest.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.LeaveRequest list = 1;

#### Defined in

src/leaves_requests.scailo_pb.ts:520

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_requests.scailo_pb.ts:529

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_requests.scailo_pb.ts:527

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsList"``

#### Defined in

src/leaves_requests.scailo_pb.ts:528

## Methods

### clone

▸ **clone**(): [`LeavesRequestsList`](LeavesRequestsList.md)

Create a deep copy.

#### Returns

[`LeavesRequestsList`](LeavesRequestsList.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsList`](LeavesRequestsList.md) \| `PlainMessage`\<[`LeavesRequestsList`](LeavesRequestsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesRequestsList`](LeavesRequestsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesRequestsList`](LeavesRequestsList.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsList`](LeavesRequestsList.md) \| `PlainMessage`\<[`LeavesRequestsList`](LeavesRequestsList.md)\> |
| `b` | `undefined` \| [`LeavesRequestsList`](LeavesRequestsList.md) \| `PlainMessage`\<[`LeavesRequestsList`](LeavesRequestsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_requests.scailo_pb.ts:545

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsList`](LeavesRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsList`](LeavesRequestsList.md)

#### Defined in

src/leaves_requests.scailo_pb.ts:533

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsList`](LeavesRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsList`](LeavesRequestsList.md)

#### Defined in

src/leaves_requests.scailo_pb.ts:537

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsList`](LeavesRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsList`](LeavesRequestsList.md)

#### Defined in

src/leaves_requests.scailo_pb.ts:541
