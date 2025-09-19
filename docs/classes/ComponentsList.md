[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsList

# Class: ComponentsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ComponentsList

## Hierarchy

- `Message`\<[`ComponentsList`](ComponentsList.md)\>

  ↳ **`ComponentsList`**

## Table of contents

### Constructors

- [constructor](ComponentsList.md#constructor)

### Properties

- [list](ComponentsList.md#list)
- [fields](ComponentsList.md#fields)
- [runtime](ComponentsList.md#runtime)
- [typeName](ComponentsList.md#typename)

### Methods

- [clone](ComponentsList.md#clone)
- [equals](ComponentsList.md#equals)
- [fromBinary](ComponentsList.md#frombinary)
- [fromJson](ComponentsList.md#fromjson)
- [fromJsonString](ComponentsList.md#fromjsonstring)
- [getType](ComponentsList.md#gettype)
- [toBinary](ComponentsList.md#tobinary)
- [toJSON](ComponentsList.md#tojson)
- [toJson](ComponentsList.md#tojson-1)
- [toJsonString](ComponentsList.md#tojsonstring)
- [equals](ComponentsList.md#equals-1)
- [fromBinary](ComponentsList.md#frombinary-1)
- [fromJson](ComponentsList.md#fromjson-1)
- [fromJsonString](ComponentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsList**(`data?`): [`ComponentsList`](ComponentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsList`](ComponentsList.md)\> |

#### Returns

[`ComponentsList`](ComponentsList.md)

#### Overrides

Message\&lt;ComponentsList\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:755](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L755)

## Properties

### list

• **list**: [`Component`](Component.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Component list = 1;

#### Defined in

[src/components.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L753)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L762)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L760)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsList"``

#### Defined in

[src/components.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L761)

## Methods

### clone

▸ **clone**(): [`ComponentsList`](ComponentsList.md)

Create a deep copy.

#### Returns

[`ComponentsList`](ComponentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsList`](ComponentsList.md) \| `PlainMessage`\<[`ComponentsList`](ComponentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsList`](ComponentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsList`](ComponentsList.md)\>

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
| `a` | `undefined` \| [`ComponentsList`](ComponentsList.md) \| `PlainMessage`\<[`ComponentsList`](ComponentsList.md)\> |
| `b` | `undefined` \| [`ComponentsList`](ComponentsList.md) \| `PlainMessage`\<[`ComponentsList`](ComponentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:778](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L778)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsList`](ComponentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsList`](ComponentsList.md)

#### Defined in

[src/components.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L766)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsList`](ComponentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsList`](ComponentsList.md)

#### Defined in

[src/components.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L770)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsList`](ComponentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsList`](ComponentsList.md)

#### Defined in

[src/components.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L774)
