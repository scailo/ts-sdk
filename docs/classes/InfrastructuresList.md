[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InfrastructuresList

# Class: InfrastructuresList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.InfrastructuresList

## Hierarchy

- `Message`\<[`InfrastructuresList`](InfrastructuresList.md)\>

  ↳ **`InfrastructuresList`**

## Table of contents

### Constructors

- [constructor](InfrastructuresList.md#constructor)

### Properties

- [list](InfrastructuresList.md#list)
- [fields](InfrastructuresList.md#fields)
- [runtime](InfrastructuresList.md#runtime)
- [typeName](InfrastructuresList.md#typename)

### Methods

- [clone](InfrastructuresList.md#clone)
- [equals](InfrastructuresList.md#equals)
- [fromBinary](InfrastructuresList.md#frombinary)
- [fromJson](InfrastructuresList.md#fromjson)
- [fromJsonString](InfrastructuresList.md#fromjsonstring)
- [getType](InfrastructuresList.md#gettype)
- [toBinary](InfrastructuresList.md#tobinary)
- [toJSON](InfrastructuresList.md#tojson)
- [toJson](InfrastructuresList.md#tojson-1)
- [toJsonString](InfrastructuresList.md#tojsonstring)
- [equals](InfrastructuresList.md#equals-1)
- [fromBinary](InfrastructuresList.md#frombinary-1)
- [fromJson](InfrastructuresList.md#fromjson-1)
- [fromJsonString](InfrastructuresList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InfrastructuresList**(`data?`): [`InfrastructuresList`](InfrastructuresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InfrastructuresList`](InfrastructuresList.md)\> |

#### Returns

[`InfrastructuresList`](InfrastructuresList.md)

#### Overrides

Message\&lt;InfrastructuresList\&gt;.constructor

#### Defined in

[src/infrastructures.scailo_pb.ts:764](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L764)

## Properties

### list

• **list**: [`Infrastructure`](Infrastructure.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Infrastructure list = 1;

#### Defined in

[src/infrastructures.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L762)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/infrastructures.scailo_pb.ts:771](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L771)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/infrastructures.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L769)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InfrastructuresList"``

#### Defined in

[src/infrastructures.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L770)

## Methods

### clone

▸ **clone**(): [`InfrastructuresList`](InfrastructuresList.md)

Create a deep copy.

#### Returns

[`InfrastructuresList`](InfrastructuresList.md)

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
| `other` | `undefined` \| ``null`` \| [`InfrastructuresList`](InfrastructuresList.md) \| `PlainMessage`\<[`InfrastructuresList`](InfrastructuresList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InfrastructuresList`](InfrastructuresList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InfrastructuresList`](InfrastructuresList.md)\>

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
| `a` | `undefined` \| [`InfrastructuresList`](InfrastructuresList.md) \| `PlainMessage`\<[`InfrastructuresList`](InfrastructuresList.md)\> |
| `b` | `undefined` \| [`InfrastructuresList`](InfrastructuresList.md) \| `PlainMessage`\<[`InfrastructuresList`](InfrastructuresList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/infrastructures.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L787)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InfrastructuresList`](InfrastructuresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InfrastructuresList`](InfrastructuresList.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L775)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InfrastructuresList`](InfrastructuresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InfrastructuresList`](InfrastructuresList.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L779)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InfrastructuresList`](InfrastructuresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InfrastructuresList`](InfrastructuresList.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/infrastructures.scailo_pb.ts#L783)
