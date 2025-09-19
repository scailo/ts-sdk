[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductsServicePaginationResponse

# Class: ProductsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ProductsServicePaginationResponse

## Hierarchy

- `Message`\<[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)\>

  ↳ **`ProductsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ProductsServicePaginationResponse.md#constructor)

### Properties

- [count](ProductsServicePaginationResponse.md#count)
- [offset](ProductsServicePaginationResponse.md#offset)
- [payload](ProductsServicePaginationResponse.md#payload)
- [total](ProductsServicePaginationResponse.md#total)
- [fields](ProductsServicePaginationResponse.md#fields)
- [runtime](ProductsServicePaginationResponse.md#runtime)
- [typeName](ProductsServicePaginationResponse.md#typename)

### Methods

- [clone](ProductsServicePaginationResponse.md#clone)
- [equals](ProductsServicePaginationResponse.md#equals)
- [fromBinary](ProductsServicePaginationResponse.md#frombinary)
- [fromJson](ProductsServicePaginationResponse.md#fromjson)
- [fromJsonString](ProductsServicePaginationResponse.md#fromjsonstring)
- [getType](ProductsServicePaginationResponse.md#gettype)
- [toBinary](ProductsServicePaginationResponse.md#tobinary)
- [toJSON](ProductsServicePaginationResponse.md#tojson)
- [toJson](ProductsServicePaginationResponse.md#tojson-1)
- [toJsonString](ProductsServicePaginationResponse.md#tojsonstring)
- [equals](ProductsServicePaginationResponse.md#equals-1)
- [fromBinary](ProductsServicePaginationResponse.md#frombinary-1)
- [fromJson](ProductsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ProductsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServicePaginationResponse**(`data?`): [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)\> |

#### Returns

[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Overrides

Message\&lt;ProductsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/products.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L876)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/products.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L853)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/products.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L860)

___

### payload

• **payload**: [`Product`](Product.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Product payload = 4;

#### Defined in

[src/products.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L874)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/products.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L867)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L883)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L881)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductsServicePaginationResponse"``

#### Defined in

[src/products.scailo_pb.ts:882](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L882)

## Methods

### clone

▸ **clone**(): [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md) \| `PlainMessage`\<[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md) \| `PlainMessage`\<[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md) \| `PlainMessage`\<[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L902)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Defined in

[src/products.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L890)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Defined in

[src/products.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L894)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServicePaginationResponse`](ProductsServicePaginationResponse.md)

#### Defined in

[src/products.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L898)
