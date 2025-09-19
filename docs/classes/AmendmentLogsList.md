[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AmendmentLogsList

# Class: AmendmentLogsList

Describes the list of amendment logs

**`Generated`**

from message Scailo.AmendmentLogsList

## Hierarchy

- `Message`\<[`AmendmentLogsList`](AmendmentLogsList.md)\>

  ↳ **`AmendmentLogsList`**

## Table of contents

### Constructors

- [constructor](AmendmentLogsList.md#constructor)

### Properties

- [list](AmendmentLogsList.md#list)
- [fields](AmendmentLogsList.md#fields)
- [runtime](AmendmentLogsList.md#runtime)
- [typeName](AmendmentLogsList.md#typename)

### Methods

- [clone](AmendmentLogsList.md#clone)
- [equals](AmendmentLogsList.md#equals)
- [fromBinary](AmendmentLogsList.md#frombinary)
- [fromJson](AmendmentLogsList.md#fromjson)
- [fromJsonString](AmendmentLogsList.md#fromjsonstring)
- [getType](AmendmentLogsList.md#gettype)
- [toBinary](AmendmentLogsList.md#tobinary)
- [toJSON](AmendmentLogsList.md#tojson)
- [toJson](AmendmentLogsList.md#tojson-1)
- [toJsonString](AmendmentLogsList.md#tojsonstring)
- [equals](AmendmentLogsList.md#equals-1)
- [fromBinary](AmendmentLogsList.md#frombinary-1)
- [fromJson](AmendmentLogsList.md#fromjson-1)
- [fromJsonString](AmendmentLogsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AmendmentLogsList**(`data?`): [`AmendmentLogsList`](AmendmentLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AmendmentLogsList`](AmendmentLogsList.md)\> |

#### Returns

[`AmendmentLogsList`](AmendmentLogsList.md)

#### Overrides

Message\&lt;AmendmentLogsList\&gt;.constructor

#### Defined in

[src/base.scailo_pb.ts:3868](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3868)

## Properties

### list

• **list**: [`AmendmentLog`](AmendmentLog.md)[] = `[]`

List of amendment logs

**`Generated`**

from field: repeated Scailo.AmendmentLog list = 1;

#### Defined in

[src/base.scailo_pb.ts:3866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3866)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base.scailo_pb.ts:3875](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3875)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base.scailo_pb.ts:3873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3873)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AmendmentLogsList"``

#### Defined in

[src/base.scailo_pb.ts:3874](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3874)

## Methods

### clone

▸ **clone**(): [`AmendmentLogsList`](AmendmentLogsList.md)

Create a deep copy.

#### Returns

[`AmendmentLogsList`](AmendmentLogsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AmendmentLogsList`](AmendmentLogsList.md) \| `PlainMessage`\<[`AmendmentLogsList`](AmendmentLogsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AmendmentLogsList`](AmendmentLogsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AmendmentLogsList`](AmendmentLogsList.md)\>

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
| `a` | `undefined` \| [`AmendmentLogsList`](AmendmentLogsList.md) \| `PlainMessage`\<[`AmendmentLogsList`](AmendmentLogsList.md)\> |
| `b` | `undefined` \| [`AmendmentLogsList`](AmendmentLogsList.md) \| `PlainMessage`\<[`AmendmentLogsList`](AmendmentLogsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base.scailo_pb.ts:3891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3891)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AmendmentLogsList`](AmendmentLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AmendmentLogsList`](AmendmentLogsList.md)

#### Defined in

[src/base.scailo_pb.ts:3879](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3879)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AmendmentLogsList`](AmendmentLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AmendmentLogsList`](AmendmentLogsList.md)

#### Defined in

[src/base.scailo_pb.ts:3883](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3883)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AmendmentLogsList`](AmendmentLogsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AmendmentLogsList`](AmendmentLogsList.md)

#### Defined in

[src/base.scailo_pb.ts:3887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/base.scailo_pb.ts#L3887)
