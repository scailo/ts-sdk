[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobContactsList

# Class: InwardJobContactsList

Describes the message consisting of the list of inward job contacts

**`Generated`**

from message Scailo.InwardJobContactsList

## Hierarchy

- `Message`\<[`InwardJobContactsList`](InwardJobContactsList.md)\>

  ↳ **`InwardJobContactsList`**

## Table of contents

### Constructors

- [constructor](InwardJobContactsList.md#constructor)

### Properties

- [list](InwardJobContactsList.md#list)
- [fields](InwardJobContactsList.md#fields)
- [runtime](InwardJobContactsList.md#runtime)
- [typeName](InwardJobContactsList.md#typename)

### Methods

- [clone](InwardJobContactsList.md#clone)
- [equals](InwardJobContactsList.md#equals)
- [fromBinary](InwardJobContactsList.md#frombinary)
- [fromJson](InwardJobContactsList.md#fromjson)
- [fromJsonString](InwardJobContactsList.md#fromjsonstring)
- [getType](InwardJobContactsList.md#gettype)
- [toBinary](InwardJobContactsList.md#tobinary)
- [toJSON](InwardJobContactsList.md#tojson)
- [toJson](InwardJobContactsList.md#tojson-1)
- [toJsonString](InwardJobContactsList.md#tojsonstring)
- [equals](InwardJobContactsList.md#equals-1)
- [fromBinary](InwardJobContactsList.md#frombinary-1)
- [fromJson](InwardJobContactsList.md#fromjson-1)
- [fromJsonString](InwardJobContactsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobContactsList**(`data?`): [`InwardJobContactsList`](InwardJobContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobContactsList`](InwardJobContactsList.md)\> |

#### Returns

[`InwardJobContactsList`](InwardJobContactsList.md)

#### Overrides

Message\&lt;InwardJobContactsList\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:3594](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3594)

## Properties

### list

• **list**: [`InwardJobContact`](InwardJobContact.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJobContact list = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3592](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3592)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3601)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3599)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobContactsList"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:3600](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3600)

## Methods

### clone

▸ **clone**(): [`InwardJobContactsList`](InwardJobContactsList.md)

Create a deep copy.

#### Returns

[`InwardJobContactsList`](InwardJobContactsList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobContactsList`](InwardJobContactsList.md) \| `PlainMessage`\<[`InwardJobContactsList`](InwardJobContactsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobContactsList`](InwardJobContactsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobContactsList`](InwardJobContactsList.md)\>

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
| `a` | `undefined` \| [`InwardJobContactsList`](InwardJobContactsList.md) \| `PlainMessage`\<[`InwardJobContactsList`](InwardJobContactsList.md)\> |
| `b` | `undefined` \| [`InwardJobContactsList`](InwardJobContactsList.md) \| `PlainMessage`\<[`InwardJobContactsList`](InwardJobContactsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3617](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3617)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobContactsList`](InwardJobContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobContactsList`](InwardJobContactsList.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3605)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobContactsList`](InwardJobContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobContactsList`](InwardJobContactsList.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3609](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3609)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobContactsList`](InwardJobContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobContactsList`](InwardJobContactsList.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3613](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L3613)
