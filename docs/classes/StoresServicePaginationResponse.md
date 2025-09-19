[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServicePaginationResponse

# Class: StoresServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.StoresServicePaginationResponse

## Hierarchy

- `Message`\<[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)\>

  ↳ **`StoresServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](StoresServicePaginationResponse.md#constructor)

### Properties

- [count](StoresServicePaginationResponse.md#count)
- [offset](StoresServicePaginationResponse.md#offset)
- [payload](StoresServicePaginationResponse.md#payload)
- [total](StoresServicePaginationResponse.md#total)
- [fields](StoresServicePaginationResponse.md#fields)
- [runtime](StoresServicePaginationResponse.md#runtime)
- [typeName](StoresServicePaginationResponse.md#typename)

### Methods

- [clone](StoresServicePaginationResponse.md#clone)
- [equals](StoresServicePaginationResponse.md#equals)
- [fromBinary](StoresServicePaginationResponse.md#frombinary)
- [fromJson](StoresServicePaginationResponse.md#fromjson)
- [fromJsonString](StoresServicePaginationResponse.md#fromjsonstring)
- [getType](StoresServicePaginationResponse.md#gettype)
- [toBinary](StoresServicePaginationResponse.md#tobinary)
- [toJSON](StoresServicePaginationResponse.md#tojson)
- [toJson](StoresServicePaginationResponse.md#tojson-1)
- [toJsonString](StoresServicePaginationResponse.md#tojsonstring)
- [equals](StoresServicePaginationResponse.md#equals-1)
- [fromBinary](StoresServicePaginationResponse.md#frombinary-1)
- [fromJson](StoresServicePaginationResponse.md#fromjson-1)
- [fromJsonString](StoresServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServicePaginationResponse**(`data?`): [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)\> |

#### Returns

[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Overrides

Message\&lt;StoresServicePaginationResponse\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L562)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/stores.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L539)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/stores.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L546)

___

### payload

• **payload**: [`Store`](Store.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Store payload = 4;

#### Defined in

[src/stores.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L560)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/stores.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L553)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L569)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:567](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L567)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServicePaginationResponse"``

#### Defined in

[src/stores.scailo_pb.ts:568](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L568)

## Methods

### clone

▸ **clone**(): [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md) \| `PlainMessage`\<[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md) \| `PlainMessage`\<[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md) \| `PlainMessage`\<[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L588)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Defined in

[src/stores.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L576)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Defined in

[src/stores.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L580)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServicePaginationResponse`](StoresServicePaginationResponse.md)

#### Defined in

[src/stores.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L584)
