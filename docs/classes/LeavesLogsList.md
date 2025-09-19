[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesLogsList

# Class: LeavesLogsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.LeavesLogsList

## Hierarchy

- `Message`\<[`LeavesLogsList`](LeavesLogsList.md)\>

  ↳ **`LeavesLogsList`**

## Table of contents

### Constructors

- [constructor](LeavesLogsList.md#constructor)

### Properties

- [list](LeavesLogsList.md#list)
- [fields](LeavesLogsList.md#fields)
- [runtime](LeavesLogsList.md#runtime)
- [typeName](LeavesLogsList.md#typename)

### Methods

- [clone](LeavesLogsList.md#clone)
- [equals](LeavesLogsList.md#equals)
- [fromBinary](LeavesLogsList.md#frombinary)
- [fromJson](LeavesLogsList.md#fromjson)
- [fromJsonString](LeavesLogsList.md#fromjsonstring)
- [getType](LeavesLogsList.md#gettype)
- [toBinary](LeavesLogsList.md#tobinary)
- [toJSON](LeavesLogsList.md#tojson)
- [toJson](LeavesLogsList.md#tojson-1)
- [toJsonString](LeavesLogsList.md#tojsonstring)
- [equals](LeavesLogsList.md#equals-1)
- [fromBinary](LeavesLogsList.md#frombinary-1)
- [fromJson](LeavesLogsList.md#fromjson-1)
- [fromJsonString](LeavesLogsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesLogsList**(`data?`): [`LeavesLogsList`](LeavesLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesLogsList`](LeavesLogsList.md)\> |

#### Returns

[`LeavesLogsList`](LeavesLogsList.md)

#### Overrides

Message\&lt;LeavesLogsList\&gt;.constructor

#### Defined in

[src/leaves_logs.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L337)

## Properties

### list

• **list**: [`LeaveLog`](LeaveLog.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.LeaveLog list = 1;

#### Defined in

[src/leaves_logs.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L335)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_logs.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L344)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_logs.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L342)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesLogsList"``

#### Defined in

[src/leaves_logs.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L343)

## Methods

### clone

▸ **clone**(): [`LeavesLogsList`](LeavesLogsList.md)

Create a deep copy.

#### Returns

[`LeavesLogsList`](LeavesLogsList.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesLogsList`](LeavesLogsList.md) \| `PlainMessage`\<[`LeavesLogsList`](LeavesLogsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesLogsList`](LeavesLogsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesLogsList`](LeavesLogsList.md)\>

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
| `a` | `undefined` \| [`LeavesLogsList`](LeavesLogsList.md) \| `PlainMessage`\<[`LeavesLogsList`](LeavesLogsList.md)\> |
| `b` | `undefined` \| [`LeavesLogsList`](LeavesLogsList.md) \| `PlainMessage`\<[`LeavesLogsList`](LeavesLogsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_logs.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L360)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesLogsList`](LeavesLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesLogsList`](LeavesLogsList.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L348)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesLogsList`](LeavesLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsList`](LeavesLogsList.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L352)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesLogsList`](LeavesLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsList`](LeavesLogsList.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L356)
