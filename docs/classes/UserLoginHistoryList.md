[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UserLoginHistoryList

# Class: UserLoginHistoryList

Describes the message consisting of the list of user logins

**`Generated`**

from message Scailo.UserLoginHistoryList

## Hierarchy

- `Message`\<[`UserLoginHistoryList`](UserLoginHistoryList.md)\>

  ↳ **`UserLoginHistoryList`**

## Table of contents

### Constructors

- [constructor](UserLoginHistoryList.md#constructor)

### Properties

- [list](UserLoginHistoryList.md#list)
- [fields](UserLoginHistoryList.md#fields)
- [runtime](UserLoginHistoryList.md#runtime)
- [typeName](UserLoginHistoryList.md#typename)

### Methods

- [clone](UserLoginHistoryList.md#clone)
- [equals](UserLoginHistoryList.md#equals)
- [fromBinary](UserLoginHistoryList.md#frombinary)
- [fromJson](UserLoginHistoryList.md#fromjson)
- [fromJsonString](UserLoginHistoryList.md#fromjsonstring)
- [getType](UserLoginHistoryList.md#gettype)
- [toBinary](UserLoginHistoryList.md#tobinary)
- [toJSON](UserLoginHistoryList.md#tojson)
- [toJson](UserLoginHistoryList.md#tojson-1)
- [toJsonString](UserLoginHistoryList.md#tojsonstring)
- [equals](UserLoginHistoryList.md#equals-1)
- [fromBinary](UserLoginHistoryList.md#frombinary-1)
- [fromJson](UserLoginHistoryList.md#fromjson-1)
- [fromJsonString](UserLoginHistoryList.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserLoginHistoryList**(`data?`): [`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UserLoginHistoryList`](UserLoginHistoryList.md)\> |

#### Returns

[`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Overrides

Message\&lt;UserLoginHistoryList\&gt;.constructor

#### Defined in

src/login.scailo_pb.ts:340

## Properties

### list

• **list**: [`UserLoginHistory`](UserLoginHistory.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.UserLoginHistory list = 1;

#### Defined in

src/login.scailo_pb.ts:338

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/login.scailo_pb.ts:347

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/login.scailo_pb.ts:345

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UserLoginHistoryList"``

#### Defined in

src/login.scailo_pb.ts:346

## Methods

### clone

▸ **clone**(): [`UserLoginHistoryList`](UserLoginHistoryList.md)

Create a deep copy.

#### Returns

[`UserLoginHistoryList`](UserLoginHistoryList.md)

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
| `other` | `undefined` \| ``null`` \| [`UserLoginHistoryList`](UserLoginHistoryList.md) \| `PlainMessage`\<[`UserLoginHistoryList`](UserLoginHistoryList.md)\> |

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

▸ **getType**(): `MessageType`\<[`UserLoginHistoryList`](UserLoginHistoryList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UserLoginHistoryList`](UserLoginHistoryList.md)\>

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
| `a` | `undefined` \| [`UserLoginHistoryList`](UserLoginHistoryList.md) \| `PlainMessage`\<[`UserLoginHistoryList`](UserLoginHistoryList.md)\> |
| `b` | `undefined` \| [`UserLoginHistoryList`](UserLoginHistoryList.md) \| `PlainMessage`\<[`UserLoginHistoryList`](UserLoginHistoryList.md)\> |

#### Returns

`boolean`

#### Defined in

src/login.scailo_pb.ts:363

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Defined in

src/login.scailo_pb.ts:351

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Defined in

src/login.scailo_pb.ts:355

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginHistoryList`](UserLoginHistoryList.md)

#### Defined in

src/login.scailo_pb.ts:359
