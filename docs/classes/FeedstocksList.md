[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FeedstocksList

# Class: FeedstocksList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.FeedstocksList

## Hierarchy

- `Message`\<[`FeedstocksList`](FeedstocksList.md)\>

  ↳ **`FeedstocksList`**

## Table of contents

### Constructors

- [constructor](FeedstocksList.md#constructor)

### Properties

- [list](FeedstocksList.md#list)
- [fields](FeedstocksList.md#fields)
- [runtime](FeedstocksList.md#runtime)
- [typeName](FeedstocksList.md#typename)

### Methods

- [clone](FeedstocksList.md#clone)
- [equals](FeedstocksList.md#equals)
- [fromBinary](FeedstocksList.md#frombinary)
- [fromJson](FeedstocksList.md#fromjson)
- [fromJsonString](FeedstocksList.md#fromjsonstring)
- [getType](FeedstocksList.md#gettype)
- [toBinary](FeedstocksList.md#tobinary)
- [toJSON](FeedstocksList.md#tojson)
- [toJson](FeedstocksList.md#tojson-1)
- [toJsonString](FeedstocksList.md#tojsonstring)
- [equals](FeedstocksList.md#equals-1)
- [fromBinary](FeedstocksList.md#frombinary-1)
- [fromJson](FeedstocksList.md#fromjson-1)
- [fromJsonString](FeedstocksList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FeedstocksList**(`data?`): [`FeedstocksList`](FeedstocksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FeedstocksList`](FeedstocksList.md)\> |

#### Returns

[`FeedstocksList`](FeedstocksList.md)

#### Overrides

Message\&lt;FeedstocksList\&gt;.constructor

#### Defined in

[src/feedstocks.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L739)

## Properties

### list

• **list**: [`Feedstock`](Feedstock.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Feedstock list = 1;

#### Defined in

[src/feedstocks.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L737)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/feedstocks.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L746)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/feedstocks.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L744)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FeedstocksList"``

#### Defined in

[src/feedstocks.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L745)

## Methods

### clone

▸ **clone**(): [`FeedstocksList`](FeedstocksList.md)

Create a deep copy.

#### Returns

[`FeedstocksList`](FeedstocksList.md)

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
| `other` | `undefined` \| ``null`` \| [`FeedstocksList`](FeedstocksList.md) \| `PlainMessage`\<[`FeedstocksList`](FeedstocksList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FeedstocksList`](FeedstocksList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FeedstocksList`](FeedstocksList.md)\>

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
| `a` | `undefined` \| [`FeedstocksList`](FeedstocksList.md) \| `PlainMessage`\<[`FeedstocksList`](FeedstocksList.md)\> |
| `b` | `undefined` \| [`FeedstocksList`](FeedstocksList.md) \| `PlainMessage`\<[`FeedstocksList`](FeedstocksList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/feedstocks.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L762)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FeedstocksList`](FeedstocksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FeedstocksList`](FeedstocksList.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:750](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L750)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FeedstocksList`](FeedstocksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksList`](FeedstocksList.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L754)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FeedstocksList`](FeedstocksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksList`](FeedstocksList.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L758)
