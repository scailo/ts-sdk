[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresList

# Class: StoresList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.StoresList

## Hierarchy

- `Message`\<[`StoresList`](StoresList.md)\>

  ↳ **`StoresList`**

## Table of contents

### Constructors

- [constructor](StoresList.md#constructor)

### Properties

- [list](StoresList.md#list)
- [fields](StoresList.md#fields)
- [runtime](StoresList.md#runtime)
- [typeName](StoresList.md#typename)

### Methods

- [clone](StoresList.md#clone)
- [equals](StoresList.md#equals)
- [fromBinary](StoresList.md#frombinary)
- [fromJson](StoresList.md#fromjson)
- [fromJsonString](StoresList.md#fromjsonstring)
- [getType](StoresList.md#gettype)
- [toBinary](StoresList.md#tobinary)
- [toJSON](StoresList.md#tojson)
- [toJson](StoresList.md#tojson-1)
- [toJsonString](StoresList.md#tojsonstring)
- [equals](StoresList.md#equals-1)
- [fromBinary](StoresList.md#frombinary-1)
- [fromJson](StoresList.md#fromjson-1)
- [fromJsonString](StoresList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresList**(`data?`): [`StoresList`](StoresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresList`](StoresList.md)\> |

#### Returns

[`StoresList`](StoresList.md)

#### Overrides

Message\&lt;StoresList\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:417](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L417)

## Properties

### list

• **list**: [`Store`](Store.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Store list = 1;

#### Defined in

[src/stores.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L415)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L424)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L422)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresList"``

#### Defined in

[src/stores.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L423)

## Methods

### clone

▸ **clone**(): [`StoresList`](StoresList.md)

Create a deep copy.

#### Returns

[`StoresList`](StoresList.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresList`](StoresList.md) \| `PlainMessage`\<[`StoresList`](StoresList.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresList`](StoresList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresList`](StoresList.md)\>

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
| `a` | `undefined` \| [`StoresList`](StoresList.md) \| `PlainMessage`\<[`StoresList`](StoresList.md)\> |
| `b` | `undefined` \| [`StoresList`](StoresList.md) \| `PlainMessage`\<[`StoresList`](StoresList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L440)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresList`](StoresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresList`](StoresList.md)

#### Defined in

[src/stores.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L428)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresList`](StoresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresList`](StoresList.md)

#### Defined in

[src/stores.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L432)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresList`](StoresList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresList`](StoresList.md)

#### Defined in

[src/stores.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L436)
